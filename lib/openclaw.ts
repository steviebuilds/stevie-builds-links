/**
 * OpenClaw Gateway Connection Service
 * Connects to the OpenClaw gateway at ws://127.0.0.1:18789
 * and provides access to agent status, sessions, and live updates
 */

export interface Session {
  id: string;
  label?: string;
  model?: string;
  status: 'active' | 'idle' | 'thinking' | 'error';
  createdAt: number;
  lastActivity?: number;
  channel?: string;
  user?: string;
}

export interface Agent {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'busy';
  avatar?: string;
  sessions: Session[];
  lastSeen?: number;
}

export interface ActivityEvent {
  id: string;
  timestamp: number;
  type: 'message' | 'tool_call' | 'thinking' | 'session_start' | 'session_end';
  sessionId: string;
  content?: string;
  metadata?: Record<string, any>;
}

export interface OpenClawConfig {
  gatewayUrl: string;
  token: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: Error) => void;
  onActivity?: (event: ActivityEvent) => void;
}

export class OpenClawClient {
  private ws: WebSocket | null = null;
  private config: OpenClawConfig;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 2000;
  private rpcId = 0;
  private pendingRpc = new Map<number, {
    resolve: (result: any) => void;
    reject: (error: Error) => void;
  }>();

  constructor(config: OpenClawConfig) {
    this.config = config;
  }

  /**
   * Connect to the OpenClaw gateway WebSocket
   */
  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        // Construct WebSocket URL with auth token
        const url = new URL(this.config.gatewayUrl);
        url.protocol = url.protocol.replace('http', 'ws');
        url.pathname = '/api/stream';
        url.searchParams.set('token', this.config.token);

        this.ws = new WebSocket(url.toString());

        this.ws.onopen = () => {
          console.log('OpenClaw WebSocket connected');
          this.reconnectAttempts = 0;
          this.config.onConnect?.();
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            this.handleMessage(data);
          } catch (error) {
            console.error('Failed to parse WebSocket message:', error);
          }
        };

        this.ws.onerror = (event) => {
          console.error('WebSocket error:', event);
          const error = new Error('WebSocket connection error');
          this.config.onError?.(error);
          reject(error);
        };

        this.ws.onclose = () => {
          console.log('WebSocket disconnected');
          this.config.onDisconnect?.();
          this.attemptReconnect();
        };
      } catch (error) {
        reject(error instanceof Error ? error : new Error(String(error)));
      }
    });
  }

  /**
   * Disconnect from the gateway
   */
  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  /**
   * Handle incoming WebSocket messages
   */
  private handleMessage(data: any): void {
    // Handle RPC responses
    if (data.id !== undefined && this.pendingRpc.has(data.id)) {
      const pending = this.pendingRpc.get(data.id)!;
      this.pendingRpc.delete(data.id);
      
      if (data.error) {
        pending.reject(new Error(data.error.message || 'RPC error'));
      } else {
        pending.resolve(data.result);
      }
      return;
    }

    // Handle activity events
    if (data.type === 'activity' || data.event) {
      const event: ActivityEvent = {
        id: data.id || `${Date.now()}-${Math.random()}`,
        timestamp: data.timestamp || Date.now(),
        type: data.type || data.event,
        sessionId: data.sessionId || data.session_id || 'unknown',
        content: data.content || data.message,
        metadata: data.metadata || data.meta
      };
      this.config.onActivity?.(event);
    }
  }

  /**
   * Attempt to reconnect after disconnect
   */
  private attemptReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Max reconnect attempts reached');
      return;
    }

    this.reconnectAttempts++;
    const delay = this.reconnectDelay * this.reconnectAttempts;
    
    console.log(`Reconnecting in ${delay}ms (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
    
    setTimeout(() => {
      this.connect().catch(error => {
        console.error('Reconnect failed:', error);
      });
    }, delay);
  }

  /**
   * Make an RPC call to the gateway
   */
  private rpc<T = any>(method: string, params: any = {}): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        reject(new Error('WebSocket not connected'));
        return;
      }

      const id = ++this.rpcId;
      this.pendingRpc.set(id, { resolve, reject });

      const message = {
        jsonrpc: '2.0',
        method,
        params,
        id
      };

      this.ws.send(JSON.stringify(message));

      // Timeout after 30 seconds
      setTimeout(() => {
        if (this.pendingRpc.has(id)) {
          this.pendingRpc.delete(id);
          reject(new Error('RPC timeout'));
        }
      }, 30000);
    });
  }

  /**
   * Fetch REST API endpoint (for non-WebSocket data)
   */
  private async fetchRest<T = any>(endpoint: string): Promise<T> {
    const url = new URL(endpoint, this.config.gatewayUrl);
    const response = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${this.config.token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get list of active sessions
   */
  async getSessions(): Promise<Session[]> {
    try {
      // Try RPC first
      const result = await this.rpc('sessions_list');
      return this.parseSessions(result);
    } catch (error) {
      console.warn('RPC failed, falling back to REST:', error);
      // Fallback to REST endpoint if RPC fails
      try {
        const result = await this.fetchRest('/api/sessions');
        return this.parseSessions(result);
      } catch (restError) {
        console.error('Failed to fetch sessions:', restError);
        return [];
      }
    }
  }

  /**
   * Parse sessions from gateway response
   */
  private parseSessions(data: any): Session[] {
    if (!data) return [];
    
    // Handle different response formats
    const sessions = data.sessions || data.result?.sessions || data;
    
    if (!Array.isArray(sessions)) return [];

    return sessions.map((s: any) => ({
      id: s.id || s.sessionId || String(s),
      label: s.label || s.name,
      model: s.model,
      status: this.parseStatus(s.status || s.state),
      createdAt: s.createdAt || s.created_at || Date.now(),
      lastActivity: s.lastActivity || s.last_activity,
      channel: s.channel,
      user: s.user || s.userId
    }));
  }

  /**
   * Parse status string to standard format
   */
  private parseStatus(status?: string): Session['status'] {
    if (!status) return 'idle';
    
    const s = status.toLowerCase();
    if (s.includes('active') || s.includes('running')) return 'active';
    if (s.includes('thinking') || s.includes('processing')) return 'thinking';
    if (s.includes('error') || s.includes('failed')) return 'error';
    return 'idle';
  }

  /**
   * Get agent information
   */
  async getAgents(): Promise<Agent[]> {
    try {
      const sessions = await this.getSessions();
      
      // Group sessions by agent (assuming main agent + subagents)
      const agentMap = new Map<string, Agent>();
      
      sessions.forEach(session => {
        const agentId = session.label?.includes('subagent') ? session.id : 'main';
        const agentName = agentId === 'main' ? 'Pingu' : session.label || `Agent ${agentId}`;
        
        if (!agentMap.has(agentId)) {
          agentMap.set(agentId, {
            id: agentId,
            name: agentName,
            status: 'online',
            avatar: agentId === 'main' ? '🐧' : '🤖',
            sessions: [],
            lastSeen: Date.now()
          });
        }
        
        const agent = agentMap.get(agentId)!;
        agent.sessions.push(session);
        
        // Update agent status based on sessions
        if (session.status === 'active' || session.status === 'thinking') {
          agent.status = 'busy';
        }
      });
      
      return Array.from(agentMap.values());
    } catch (error) {
      console.error('Failed to get agents:', error);
      return [];
    }
  }

  /**
   * Get gateway health status
   */
  async getHealth(): Promise<{ status: string; uptime?: number; version?: string }> {
    try {
      return await this.fetchRest('/api/health');
    } catch (error) {
      console.error('Failed to get health:', error);
      return { status: 'unknown' };
    }
  }
}

/**
 * Create and configure OpenClaw client
 */
export function createOpenClawClient(config?: Partial<OpenClawConfig>): OpenClawClient {
  const defaultConfig: OpenClawConfig = {
    gatewayUrl: process.env.NEXT_PUBLIC_OPENCLAW_GATEWAY_URL || 'http://127.0.0.1:18789',
    token: process.env.NEXT_PUBLIC_OPENCLAW_TOKEN || '',
    ...config
  };

  return new OpenClawClient(defaultConfig);
}
