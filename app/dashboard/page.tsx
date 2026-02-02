'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { createOpenClawClient, type Agent, type ActivityEvent, type Session } from '@/lib/openclaw';

export default function DashboardPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [activities, setActivities] = useState<ActivityEvent[]>([]);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    // Create OpenClaw client
    const client = createOpenClawClient({
      onConnect: () => {
        console.log('Connected to OpenClaw gateway');
        setConnected(true);
        setError(null);
        loadAgents();
      },
      onDisconnect: () => {
        console.log('Disconnected from OpenClaw gateway');
        setConnected(false);
      },
      onError: (err) => {
        console.error('OpenClaw error:', err);
        setError(err.message);
        setConnected(false);
      },
      onActivity: (event) => {
        console.log('Activity event:', event);
        setActivities(prev => [event, ...prev].slice(0, 50)); // Keep last 50 events
        setLastUpdate(new Date());
        // Refresh agents on activity
        loadAgents();
      }
    });

    // Load agent data
    const loadAgents = async () => {
      try {
        const agentData = await client.getAgents();
        setAgents(agentData);
        setLastUpdate(new Date());
      } catch (err) {
        console.error('Failed to load agents:', err);
      }
    };

    // Connect to gateway
    client.connect().catch(err => {
      console.error('Failed to connect:', err);
      setError('Failed to connect to OpenClaw gateway. Is it running?');
    });

    // Refresh agents every 10 seconds
    const interval = setInterval(() => {
      if (connected) {
        loadAgents();
      }
    }, 10000);

    return () => {
      clearInterval(interval);
      client.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hive Dashboard
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                OpenClaw Mission Control
              </p>
            </div>
            
            {/* Connection Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {connected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Error Alert */}
        {error && (
          <Card className="p-4 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 mb-6">
            <p className="text-red-900 dark:text-red-200">
              <strong>Error:</strong> {error}
            </p>
            <p className="text-sm text-red-700 dark:text-red-300 mt-2">
              Make sure the OpenClaw gateway is running: <code className="bg-red-100 dark:bg-red-900 px-2 py-1 rounded">openclaw gateway status</code>
            </p>
          </Card>
        )}

        {/* Agents Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Agents
            </h2>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Last update: {lastUpdate.toLocaleTimeString()}
            </span>
          </div>

          {agents.length === 0 ? (
            <Card className="p-8 text-center border-gray-300 dark:border-gray-800">
              <p className="text-gray-600 dark:text-gray-400">
                {connected ? 'No active agents' : 'Connecting to OpenClaw gateway...'}
              </p>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agents.map(agent => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          )}
        </section>

        <Separator className="my-8 bg-gray-300 dark:bg-gray-800" />

        {/* Activity Feed */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Live Activity
          </h2>

          {activities.length === 0 ? (
            <Card className="p-8 text-center border-gray-300 dark:border-gray-800">
              <p className="text-gray-600 dark:text-gray-400">
                No recent activity
              </p>
            </Card>
          ) : (
            <div className="space-y-2">
              {activities.map(activity => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-500',
    busy: 'bg-yellow-500'
  };

  const statusLabels = {
    online: 'Online',
    offline: 'Offline',
    busy: 'Busy'
  };

  return (
    <Card className="p-5 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:border-[#3ED1FE]/50 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{agent.avatar}</span>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {agent.name}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {agent.id}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${statusColors[agent.status]}`} />
          <span className="text-xs text-gray-700 dark:text-gray-300">
            {statusLabels[agent.status]}
          </span>
        </div>
      </div>

      <Separator className="my-3 bg-gray-300 dark:bg-gray-700" />

      {/* Sessions */}
      <div>
        <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
          Active Sessions ({agent.sessions.length})
        </p>
        
        {agent.sessions.length === 0 ? (
          <p className="text-xs text-gray-500 dark:text-gray-500">
            No active sessions
          </p>
        ) : (
          <div className="space-y-2">
            {agent.sessions.slice(0, 3).map(session => (
              <SessionItem key={session.id} session={session} />
            ))}
            {agent.sessions.length > 3 && (
              <p className="text-xs text-gray-500 dark:text-gray-500">
                +{agent.sessions.length - 3} more
              </p>
            )}
          </div>
        )}
      </div>

      {agent.lastSeen && (
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
          Last seen: {new Date(agent.lastSeen).toLocaleTimeString()}
        </p>
      )}
    </Card>
  );
}

function SessionItem({ session }: { session: Session }) {
  const statusIcons = {
    active: '🟢',
    idle: '⚪',
    thinking: '💭',
    error: '🔴'
  };

  return (
    <div className="flex items-center gap-2 text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
      <span>{statusIcons[session.status]}</span>
      <div className="flex-1 min-w-0">
        <p className="font-mono text-gray-900 dark:text-white truncate">
          {session.label || session.id}
        </p>
        {session.channel && (
          <p className="text-gray-600 dark:text-gray-400">
            {session.channel}
          </p>
        )}
      </div>
    </div>
  );
}

function ActivityItem({ activity }: { activity: ActivityEvent }) {
  const typeIcons = {
    message: '💬',
    tool_call: '🔧',
    thinking: '💭',
    session_start: '▶️',
    session_end: '⏹️'
  };

  const typeColors = {
    message: 'text-blue-600 dark:text-blue-400',
    tool_call: 'text-purple-600 dark:text-purple-400',
    thinking: 'text-yellow-600 dark:text-yellow-400',
    session_start: 'text-green-600 dark:text-green-400',
    session_end: 'text-red-600 dark:text-red-400'
  };

  return (
    <Card className="p-3 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30">
      <div className="flex items-start gap-3">
        <span className="text-xl">{typeIcons[activity.type] || '📍'}</span>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-sm font-semibold ${typeColors[activity.type] || 'text-gray-700 dark:text-gray-300'}`}>
              {activity.type.replace('_', ' ').toUpperCase()}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-500">
              {new Date(activity.timestamp).toLocaleTimeString()}
            </span>
          </div>
          
          <p className="text-xs font-mono text-gray-600 dark:text-gray-400 mb-1">
            Session: {activity.sessionId}
          </p>
          
          {activity.content && (
            <p className="text-sm text-gray-900 dark:text-white line-clamp-2">
              {activity.content}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
