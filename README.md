# Hive Dashboard - OpenClaw Mission Control

A real-time dashboard for monitoring and managing OpenClaw agents, sessions, and activities.

## 🎯 Features

- **Live Agent Status** - See all active agents and their current state
- **Session Monitoring** - Track active sessions across all agents
- **Real-Time Activity Feed** - Stream live updates as they happen
- **WebSocket Connection** - Direct connection to OpenClaw gateway
- **Auto-Reconnect** - Automatic reconnection if connection drops

## 🚀 Quick Start

### Prerequisites

1. **OpenClaw gateway must be running**
   ```bash
   openclaw gateway status
   # If not running:
   openclaw gateway start
   ```

2. **Node.js 18+** installed

### Setup

1. **Clone and install dependencies**
   ```bash
   cd ~/clawd/stevie-builds-links
   npm install
   ```

2. **Configure environment**
   
   The `.env.local` file is already configured with:
   - Gateway URL: `http://127.0.0.1:18789`
   - Auth token from your OpenClaw config
   
   If you need to change these, edit `.env.local`:
   ```bash
   NEXT_PUBLIC_OPENCLAW_GATEWAY_URL=http://127.0.0.1:18789
   NEXT_PUBLIC_OPENCLAW_TOKEN=your-token-here
   ```

   To find your token:
   ```bash
   cat ~/.openclaw/openclaw.json | grep -A 3 '"auth"'
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open the dashboard**
   
   Visit [http://localhost:3000/dashboard](http://localhost:3000/dashboard)

## 📊 Dashboard Features

### Agent Cards
Each agent shows:
- Current status (Online/Busy/Offline)
- Active sessions
- Session details (channel, label, status)
- Last seen timestamp

### Activity Feed
Live stream of:
- Messages sent/received
- Tool calls executed
- Agent thinking events
- Session start/end events

### Connection Status
- Real-time connection indicator in header
- Auto-reconnect on disconnect
- Error alerts with troubleshooting tips

## 🔧 Troubleshooting

### Dashboard shows "Disconnected"

1. **Check gateway is running:**
   ```bash
   openclaw gateway status
   ```

2. **Verify gateway port:**
   ```bash
   netstat -an | grep 18789
   # or
   lsof -i :18789
   ```

3. **Check token is correct:**
   ```bash
   cat ~/.openclaw/openclaw.json | grep -A 3 '"auth"'
   ```

### No agents showing

- Agents only appear when they have active sessions
- Try starting a conversation with your OpenClaw agent
- Check that sessions are running:
  ```bash
  openclaw sessions list
  ```

### WebSocket connection fails

- Make sure you're accessing via `http://localhost:3000` (not `https://`)
- Check browser console for detailed error messages
- Verify no firewall is blocking WebSocket connections

## 🛠 Development

### Project Structure

```
├── app/
│   ├── dashboard/         # Dashboard page
│   │   └── page.tsx
│   └── layout.tsx
├── lib/
│   └── openclaw.ts       # OpenClaw client & WebSocket service
├── components/
│   └── ui/               # Reusable UI components
└── .env.local            # Environment configuration
```

### Key Files

- **`lib/openclaw.ts`** - OpenClaw gateway client with WebSocket support
- **`app/dashboard/page.tsx`** - Main dashboard UI
- **`.env.local`** - Configuration (gateway URL & token)

### Adding New Features

The `OpenClawClient` class in `lib/openclaw.ts` provides:

```typescript
// Connect to gateway
await client.connect();

// Get agents
const agents = await client.getAgents();

// Get sessions
const sessions = await client.getSessions();

// Listen for activity
client.onActivity = (event) => {
  console.log('New activity:', event);
};
```

## 🐳 Docker Deployment

Build and run with Docker:

```bash
docker build -t hive-dashboard .
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_OPENCLAW_GATEWAY_URL=http://host.docker.internal:18789 \
  -e NEXT_PUBLIC_OPENCLAW_TOKEN=your-token-here \
  hive-dashboard
```

Note: Use `host.docker.internal` instead of `127.0.0.1` when running in Docker.

## 📦 Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **WebSocket API** - Real-time communication
- **OpenClaw Gateway** - Backend service

## 🔗 Links

- [OpenClaw Documentation](https://docs.openclaw.ai)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)

## 📄 License

© 2026 Stevie Builds. All rights reserved.
