import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Terminal, Smartphone, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "OpenClaw Setup Guide | Stevie Builds",
  description: "Complete step-by-step tutorial for setting up OpenClaw AI automation. Learn how to install, configure, and connect WhatsApp, Telegram, Discord, and more.",
  keywords: ["OpenClaw", "AI automation", "WhatsApp bot", "Telegram bot", "Discord bot", "automation tutorial"],
  openGraph: {
    title: "OpenClaw Setup Guide | Stevie Builds",
    description: "Complete step-by-step tutorial for setting up OpenClaw AI automation",
    type: "article",
    images: [
      {
        url: "/openclaw-og.png",
        width: 1200,
        height: 630,
        alt: "OpenClaw Setup Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Setup Guide | Stevie Builds",
    description: "Complete step-by-step tutorial for setting up OpenClaw AI automation",
    images: ["/openclaw-og.png"],
    creator: "@stevie_builds",
  },
};

export default function OpenClawTutorial() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Back Button */}
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-[#3ED1FE] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="/openclaw-icon.png"
            alt="OpenClaw"
            width={64}
            height={64}
            className="w-16 h-16 rounded-lg"
          />
          <div>
            <h1 className="text-4xl font-bold mb-2">OpenClaw Setup Guide</h1>
            <p className="text-gray-400">
              Complete walkthrough for setting up AI automation on any platform
            </p>
          </div>
        </div>
      </div>

      {/* What is OpenClaw */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What is OpenClaw?</h2>
        <p className="text-gray-300 mb-4">
          OpenClaw is a powerful automation gateway that connects WhatsApp, Telegram, Discord, 
          and iMessage to AI agents. It's like having a personal AI assistant that can respond 
          to messages, automate tasks, and integrate with your existing tools.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <Card className="p-6 border-gray-800 bg-gray-900/50">
            <Smartphone className="w-8 h-8 text-[#3ED1FE] mb-3" />
            <h3 className="font-semibold mb-2">Multi-Platform</h3>
            <p className="text-sm text-gray-400">
              WhatsApp, Telegram, Discord, iMessage - all in one place
            </p>
          </Card>
          
          <Card className="p-6 border-gray-800 bg-gray-900/50">
            <Shield className="w-8 h-8 text-[#3ED1FE] mb-3" />
            <h3 className="font-semibold mb-2">Secure & Private</h3>
            <p className="text-sm text-gray-400">
              Self-hosted, encrypted, with pairing-based access control
            </p>
          </Card>
          
          <Card className="p-6 border-gray-800 bg-gray-900/50">
            <Zap className="w-8 h-8 text-[#3ED1FE] mb-3" />
            <h3 className="font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-gray-400">
              Powered by Claude, with support for multiple AI providers
            </p>
          </Card>
          
          <Card className="p-6 border-gray-800 bg-gray-900/50">
            <Terminal className="w-8 h-8 text-[#3ED1FE] mb-3" />
            <h3 className="font-semibold mb-2">Developer-Friendly</h3>
            <p className="text-sm text-gray-400">
              CLI-first with extensive configuration options
            </p>
          </Card>
        </div>
      </section>

      <Separator className="my-12 bg-gray-800" />

      {/* Prerequisites */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">•</span>
            <span><strong>Node.js 22 or higher</strong> - Download from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">nodejs.org</a></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">•</span>
            <span><strong>Terminal/Command Line</strong> - Basic familiarity recommended</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">•</span>
            <span><strong>Anthropic API Key</strong> - Get one at <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">console.anthropic.com</a></span>
          </li>
        </ul>
      </section>

      <Separator className="my-12 bg-gray-800" />

      {/* Step 1: Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Step 1: Installation</h2>
        <p className="text-gray-300 mb-4">
          The fastest way to get started is using the official install script:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`curl -fsSL https://openclaw.bot/install.sh | bash`}</code>
          </pre>
        </Card>

        <p className="text-gray-400 text-sm mt-4">
          <strong>Alternative methods:</strong>
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mt-2">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`# Using npm
npm install -g openclaw@latest

# Using pnpm
pnpm add -g openclaw@latest`}</code>
          </pre>
        </Card>

        <div className="mt-4 p-4 bg-blue-950/20 border border-blue-900/50 rounded-lg">
          <p className="text-sm text-blue-200">
            <strong>💡 Windows Users:</strong> Use WSL2 (Windows Subsystem for Linux). 
            Native Windows support is limited. Install Ubuntu from the Microsoft Store, 
            then run these commands inside WSL.
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-800" />

      {/* Step 2: Onboarding */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Step 2: Run the Onboarding Wizard</h2>
        <p className="text-gray-300 mb-4">
          The wizard will guide you through configuration and optionally install OpenClaw 
          as a background service (recommended for always-on operation).
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`openclaw onboard --install-daemon`}</code>
          </pre>
        </Card>

        <div className="mt-6">
          <h3 className="font-semibold mb-3 text-lg">What the wizard configures:</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">✓</span>
              <span><strong>Authentication:</strong> API key or OAuth setup for AI providers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">✓</span>
              <span><strong>Gateway settings:</strong> Port, token, and network configuration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">✓</span>
              <span><strong>Messaging channels:</strong> WhatsApp, Telegram, Discord, etc.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">✓</span>
              <span><strong>Security:</strong> Pairing defaults for DM access control</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">✓</span>
              <span><strong>Workspace:</strong> Bootstrap files and optional skills</span>
            </li>
          </ul>
        </div>
      </section>

      <Separator className="my-12 bg-gray-800" />

      {/* Step 3: Authentication */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Step 3: Configure AI Authentication</h2>
        <p className="text-gray-300 mb-4">
          OpenClaw needs access to an AI provider. The recommended setup is using an 
          Anthropic API key for Claude.
        </p>
        
        <h3 className="font-semibold mb-3">Option A: API Key (Recommended)</h3>
        <ol className="space-y-3 text-gray-300 mb-6">
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">1.</span>
            <span>Go to <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">console.anthropic.com</a> and create an API key</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">2.</span>
            <span>The wizard will prompt you to enter it, or set it manually:</span>
          </li>
        </ol>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-6">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`# Store your API key securely
export ANTHROPIC_API_KEY="sk-ant-..."

# Or configure it via the wizard during onboarding`}</code>
          </pre>
        </Card>

        <h3 className="font-semibold mb-3">Option B: Claude Code OAuth</h3>
        <p className="text-gray-300 mb-3">
          If you have Claude Code installed with an active subscription, you can reuse 
          those credentials:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`claude setup-token`}</code>
          </pre>
        </Card>
      </section>

      <Separator className="my-12 bg-gray-800" />

      {/* Step 4: Start the Gateway */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Step 4: Start the Gateway</h2>
        <p className="text-gray-300 mb-4">
          If you installed the daemon during onboarding, the gateway should already be running. 
          Check its status:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`openclaw gateway status`}</code>
          </pre>
        </Card>

        <p className="text-gray-300 mb-4">
          To start it manually (foreground mode):
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`openclaw gateway --port 18789 --verbose`}</code>
          </pre>
        </Card>

        <div className="mt-4 p-4 bg-green-950/20 border border-green-900/50 rounded-lg">
          <p className="text-sm text-green-200">
            <strong>✓ Dashboard Access:</strong> Once running, access the web UI at{" "}
            <a href="http://127.0.0.1:18789" className="text-[#3ED1FE] hover:underline font-mono">
              http://127.0.0.1:18789
            </a>
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-800" />

      {/* Step 5: Connect a Channel */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Step 5: Connect a Messaging Channel</h2>
        
        <h3 className="font-semibold mb-3 text-lg">WhatsApp (Easiest to start)</h3>
        <p className="text-gray-300 mb-4">
          Connect WhatsApp by scanning a QR code:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`openclaw channels login`}</code>
          </pre>
        </Card>

        <p className="text-gray-300 mb-6">
          This will display a QR code. Open WhatsApp on your phone → <strong>Settings</strong> → 
          <strong> Linked Devices</strong> → <strong>Link a Device</strong> and scan the code.
        </p>

        <h3 className="font-semibold mb-3 text-lg">Telegram</h3>
        <ol className="space-y-2 text-gray-300 mb-6">
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">1.</span>
            <span>Message <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">@BotFather</a> on Telegram</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">2.</span>
            <span>Send <code className="text-[#3ED1FE] bg-gray-900 px-2 py-1 rounded">/newbot</code> and follow the prompts</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">3.</span>
            <span>Copy the API token and add it to your OpenClaw config</span>
          </li>
        </ol>

        <h3 className="font-semibold mb-3 text-lg">Discord</h3>
        <ol className="space-y-2 text-gray-300">
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">1.</span>
            <span>Go to <a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">Discord Developer Portal</a></span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">2.</span>
            <span>Create a new application and add a bot</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">3.</span>
            <span>Copy the bot token and configure it in OpenClaw</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">4.</span>
            <span>Use the OAuth2 URL generator to invite the bot to your server</span>
          </li>
        </ol>
      </section>

      <Separator className="my-12 bg-gray-800" />

      {/* Step 6: Security & Pairing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Step 6: Approve Pairing Requests</h2>
        <p className="text-gray-300 mb-4">
          By default, OpenClaw requires pairing approval for new DM conversations. 
          This prevents unauthorized access.
        </p>
        
        <p className="text-gray-300 mb-4">
          When you send your first message, OpenClaw will respond with a pairing code. 
          Approve it from the command line:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`# List pending pairing requests
openclaw pairing list whatsapp

# Approve a specific code
openclaw pairing approve whatsapp <code>`}</code>
          </pre>
        </Card>

        <div className="mt-4 p-4 bg-yellow-950/20 border border-yellow-900/50 rounded-lg">
          <p className="text-sm text-yellow-200">
            <strong>⚠️ Security Tip:</strong> Never approve pairing codes from unknown numbers. 
            This is your first line of defense against unauthorized access.
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-800" />

      {/* Step 7: First Automation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Step 7: Try Your First Automation</h2>
        <p className="text-gray-300 mb-4">
          Once everything is set up, send a message to test it out:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-6">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`# Send a test message from CLI
openclaw message send --target +1234567890 --message "Hello!"

# Or just message your WhatsApp number that's paired`}</code>
          </pre>
        </Card>

        <h3 className="font-semibold mb-3 text-lg">Example Automation Ideas:</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">📧</span>
            <span><strong>Email summaries:</strong> Ask "Summarize my unread emails"</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">📅</span>
            <span><strong>Calendar management:</strong> "What's on my calendar tomorrow?"</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">🔍</span>
            <span><strong>Web research:</strong> "Search for the latest AI news"</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">📝</span>
            <span><strong>Note taking:</strong> "Remember that I need to call John tomorrow"</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">🎯</span>
            <span><strong>Task automation:</strong> Set up cron jobs, webhooks, and more</span>
          </li>
        </ul>
      </section>

      <Separator className="my-12 bg-gray-800" />

      {/* Advanced Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Advanced Configuration</h2>
        <p className="text-gray-300 mb-4">
          Your configuration lives at <code className="text-[#3ED1FE] bg-gray-900 px-2 py-1 rounded">~/.openclaw/openclaw.json</code>
        </p>
        
        <h3 className="font-semibold mb-3">Common Configurations:</h3>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`{
  "channels": {
    "whatsapp": {
      // Whitelist specific phone numbers
      "allowFrom": ["+1234567890"],
      // Require mentions in groups
      "groups": { "*": { "requireMention": true } }
    }
  },
  "messages": {
    "groupChat": {
      // Custom mention patterns
      "mentionPatterns": ["@openclaw", "@assistant"]
    }
  }
}`}</code>
          </pre>
        </Card>

        <h3 className="font-semibold mb-3 mt-6">Useful Commands:</h3>
        
        <Card className="p-4 bg-gray-950 border-gray-800">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`# Check system health
openclaw health

# View detailed status
openclaw status --all

# Security audit
openclaw security audit --deep

# Update OpenClaw
npm update -g openclaw@latest`}</code>
          </pre>
        </Card>
      </section>

      <Separator className="my-12 bg-gray-800" />

      {/* Troubleshooting */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
        
        <div className="space-y-4">
          <Card className="p-4 border-gray-800 bg-gray-900/50">
            <h3 className="font-semibold mb-2">Gateway won't start</h3>
            <p className="text-sm text-gray-400 mb-2">
              Check if another process is using port 18789:
            </p>
            <code className="text-xs text-[#3ED1FE] bg-gray-950 px-2 py-1 rounded block">
              lsof -i :18789
            </code>
          </Card>

          <Card className="p-4 border-gray-800 bg-gray-900/50">
            <h3 className="font-semibold mb-2">WhatsApp QR won't scan</h3>
            <p className="text-sm text-gray-400">
              Make sure you're using WhatsApp's "Link a Device" feature, not the regular QR scanner. 
              Also ensure your phone has a stable internet connection.
            </p>
          </Card>

          <Card className="p-4 border-gray-800 bg-gray-900/50">
            <h3 className="font-semibold mb-2">Agent not responding</h3>
            <p className="text-sm text-gray-400 mb-2">
              Verify authentication is configured:
            </p>
            <code className="text-xs text-[#3ED1FE] bg-gray-950 px-2 py-1 rounded block mb-2">
              openclaw health
            </code>
            <p className="text-sm text-gray-400">
              If it shows "no auth configured", run the onboarding wizard again.
            </p>
          </Card>

          <Card className="p-4 border-gray-800 bg-gray-900/50">
            <h3 className="font-semibold mb-2">Permission errors</h3>
            <p className="text-sm text-gray-400">
              Check your pairing status and approve if needed. By default, new DMs require approval.
            </p>
          </Card>
        </div>
      </section>

      <Separator className="my-12 bg-gray-800" />

      {/* Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">📚</span>
            <span>
              Official Documentation: <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">docs.openclaw.ai</a>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">🐙</span>
            <span>
              GitHub Repository: <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">github.com/openclaw/openclaw</a>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">💬</span>
            <span>
              Community & Support: Join the Discord or check GitHub Issues
            </span>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <Card className="p-8 border-[#3ED1FE]/30 bg-gradient-to-br from-[#3ED1FE]/10 to-transparent text-center">
        <h2 className="text-2xl font-bold mb-4">Need Professional Setup Assistance?</h2>
        <p className="text-gray-300 mb-6">
          Setting up OpenClaw can be complex. If you need help with installation, 
          custom integrations, or advanced automation workflows, I offer professional 
          setup services.
        </p>
        <a
          href="https://instagram.com/stevie.builds"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#3ED1FE] hover:bg-[#3ED1FE]/90 text-black font-semibold rounded-lg transition-colors"
        >
          DM @stevie.builds on Instagram
        </a>
      </Card>
    </div>
  );
}
