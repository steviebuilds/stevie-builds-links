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
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#3ED1FE] transition-colors mb-8"
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
            <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">OpenClaw Setup Guide</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Complete walkthrough for setting up AI automation on any platform
            </p>
          </div>
        </div>
      </div>

      {/* What is OpenClaw */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What is OpenClaw?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          OpenClaw is a powerful automation gateway that connects WhatsApp, Telegram, Discord, 
          and iMessage to AI agents. It's like having a personal AI assistant that can respond 
          to messages, automate tasks, and integrate with your existing tools.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <Card className="p-6 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <Smartphone className="w-8 h-8 text-[#3ED1FE] mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Multi-Platform</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              WhatsApp, Telegram, Discord, iMessage - all in one place
            </p>
          </Card>
          
          <Card className="p-6 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <Shield className="w-8 h-8 text-[#3ED1FE] mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Secure & Private</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Self-hosted, encrypted, with pairing-based access control
            </p>
          </Card>
          
          <Card className="p-6 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <Zap className="w-8 h-8 text-[#3ED1FE] mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">AI-Powered</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Powered by Claude, with support for multiple AI providers
            </p>
          </Card>
          
          <Card className="p-6 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <Terminal className="w-8 h-8 text-[#3ED1FE] mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Developer-Friendly</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              CLI-first with extensive configuration options
            </p>
          </Card>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* The Best Part */}
      <section className="mb-12">
        <Card className="p-8 border-[#3ED1FE]/50 bg-gradient-to-br from-[#3ED1FE]/20 via-[#3ED1FE]/10 to-transparent">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            The Best Part
          </h2>
          <div className="space-y-4 text-gray-200">
            <p className="text-lg leading-relaxed">
              Once OpenClaw is running and you're chatting with it on Telegram (or your chosen platform), 
              you can simply <strong className="text-[#3ED1FE]">ASK it to do things</strong> and it will help you set them up.
            </p>
            
            <div className="space-y-2 ml-4">
              <p className="flex items-start gap-2">
                <span className="text-[#3ED1FE] mt-1">•</span>
                <span>Want it to check your Gmail? <strong>Just ask.</strong></span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#3ED1FE] mt-1">•</span>
                <span>Want it to create calendar events? <strong>Just ask.</strong></span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#3ED1FE] mt-1">•</span>
                <span>Want it to send you weather updates? <strong>Just ask.</strong></span>
              </p>
            </div>

            <p className="text-lg leading-relaxed pt-2">
              It will walk you through installing the necessary skills and configuring everything. 
              You don't need to memorize commands or read documentation — just talk to it like 
              you would a helpful assistant.
            </p>
          </div>
        </Card>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Prerequisites */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What You'll Need</h2>
        
        <div className="mb-6 p-5 bg-green-950/20 border-2 border-green-900/50 rounded-lg">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-green-100">
            <span className="text-2xl">⚡</span>
            FIRST: Get a Claude Subscription (REQUIRED)
          </h3>
          <p className="text-green-200 mb-3">
            <strong>Before you do anything else, you need an active Claude subscription.</strong> This is what powers OpenClaw's AI brain. 
            Without this, nothing will work.
          </p>
          <ul className="space-y-2 text-green-200">
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">1.</span>
              <span>Go to <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline font-semibold">claude.ai</a> and sign up for a Pro subscription</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">2.</span>
              <span><strong>Get the $100+ plan</strong> (not the $20 plan — it runs out too fast for automation)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">3.</span>
              <span>During OpenClaw setup, you'll choose <strong>"Anthropic"</strong> as your provider and <strong>"Use existing subscription"</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">4.</span>
              <span>No API key needed! OpenClaw will use your Claude Pro login automatically</span>
            </li>
          </ul>
        </div>

        <h3 className="font-semibold mb-3 text-lg text-gray-900 dark:text-white">Everything Else You Need:</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">•</span>
            <span><strong>Node.js 22 or higher</strong> - Don't worry, we'll show you how to install this in the next step</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">•</span>
            <span><strong>A terminal app</strong> - Mac/Linux: already have it. Windows: use WSL2 (we'll explain below)</span>
          </li>
        </ul>

        <div className="mt-4 p-4 bg-gray-800/30 border border-gray-700 rounded-lg">
          <p className="text-sm text-gray-400">
            <strong>For advanced users:</strong> If you prefer to use an Anthropic API key instead of a subscription, 
            you can get one from <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">console.anthropic.com</a>. 
            However, this costs more for regular use and requires more technical setup. Most people should stick with the subscription.
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Step 1: Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Step 1: Installation</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
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

        <div className="mt-6 p-6 bg-gradient-to-br from-[#3ED1FE]/10 to-transparent border border-[#3ED1FE]/30 rounded-lg">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            💡 Once OpenClaw is Running, Let IT Help You!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            After installation, you don't need to memorize commands or configuration options. 
            Just talk to your OpenClaw assistant! It can walk you through connecting channels, 
            configuring settings, and setting up automations — like talking to a tech-savvy friend.
          </p>
          
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-2">Try this setup prompt:</p>
            <div className="bg-gray-900 p-3 rounded border border-gray-800">
              <p className="text-sm text-gray-300 font-mono leading-relaxed">
                "I just installed you! Can you help me get set up? I want to:
                <br />- Connect you to [Telegram/Discord/WhatsApp]
                <br />- Set up some basic automations
                <br />- Understand what you can do for me
                <br /><br />Walk me through each step and explain things in simple terms."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Step 2: Onboarding */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Step 2: Run the Setup Wizard</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The friendly setup wizard will walk you through everything and can install OpenClaw 
          to run in the background (so it's always ready when you need it).
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`openclaw onboard --install-daemon`}</code>
          </pre>
        </Card>

        <div className="mt-6">
          <h3 className="font-semibold mb-3 text-lg">The wizard helps you set up:</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">✓</span>
              <span><strong>Your AI connection:</strong> Link your Claude account or API key</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">✓</span>
              <span><strong>Basic settings:</strong> Technical stuff you don't need to worry about</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">✓</span>
              <span><strong>Messaging apps:</strong> Connect Telegram, Discord, WhatsApp, etc.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">✓</span>
              <span><strong>Security:</strong> Control who can talk to your AI assistant</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#3ED1FE] mt-1">✓</span>
              <span><strong>Your workspace:</strong> Where your AI stores its memory and skills</span>
            </li>
          </ul>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Step 3: Authentication */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Step 3: Connect Your AI Brain</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          OpenClaw needs to connect to Claude to work its magic. Here's the easiest way:
        </p>
        
        <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
          ✨ Option A: Claude Subscription (RECOMMENDED)
        </h3>
        <div className="mb-6 p-4 bg-green-950/20 border border-green-900/50 rounded-lg">
          <p className="text-sm text-green-200 mb-3">
            <strong>Best for most people:</strong> This is cheaper and easier than API access. 
            Just like you'd pay for Netflix, you pay Claude for unlimited use.
          </p>
          <ul className="space-y-2 text-sm text-green-200">
            <li className="flex gap-2">
              <span>•</span>
              <span><strong>Get a $100+ plan</strong> at <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">claude.ai</a> (the $20 plan runs out too fast for automation)</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span><strong>Way more cost-effective</strong> than paying per message</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span><strong>No technical setup</strong> — just login and go</span>
            </li>
          </ul>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          Once you have a Claude subscription, OpenClaw will use your credentials automatically. 
          The onboarding wizard will guide you through the login.
        </p>

        <h3 className="font-semibold mb-3 text-lg mt-8">Option B: API Key (Advanced Users)</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          If you're comfortable with API billing and want more control, you can use an Anthropic API key:
        </p>
        <ol className="space-y-3 text-gray-300 mb-4">
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">1.</span>
            <span>Go to <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">console.anthropic.com</a> and create an API key</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">2.</span>
            <span>The wizard will prompt you to enter it, or set it manually:</span>
          </li>
        </ol>
        
        <Card className="p-4 bg-gray-950 border-gray-800">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`# Store your API key securely
export ANTHROPIC_API_KEY="sk-ant-..."

# Or configure it via the wizard during onboarding`}</code>
          </pre>
        </Card>

        <div className="mt-4 p-4 bg-yellow-950/20 border border-yellow-900/50 rounded-lg">
          <p className="text-sm text-yellow-200">
            <strong>⚠️ Note:</strong> API usage is billed per message and can get expensive quickly if you're using OpenClaw frequently. Most people find a Claude subscription more economical.
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Step 4: Start the Gateway */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Step 4: Make Sure OpenClaw is Running</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If you used the setup wizard, OpenClaw is probably already running in the background. 
          Let's check:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`openclaw gateway status`}</code>
          </pre>
        </Card>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If it's not running, you can start it:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`openclaw gateway --port 18789 --verbose`}</code>
          </pre>
        </Card>

        <div className="mt-4 p-4 bg-green-950/20 border border-green-900/50 rounded-lg">
          <p className="text-sm text-green-200">
            <strong>✓ Web Dashboard:</strong> Once it's running, you can view the control panel at{" "}
            <a href="http://127.0.0.1:18789" className="text-[#3ED1FE] hover:underline font-mono">
              http://127.0.0.1:18789
            </a>
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Step 5: Connect a Channel */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Step 5: Connect a Messaging Channel</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Choose whichever platform you prefer. We've listed them from easiest to most complex:
        </p>
        
        <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
          ⭐ Telegram (RECOMMENDED - Easiest!)
        </h3>
        <div className="mb-6 p-4 bg-green-950/20 border border-green-900/50 rounded-lg">
          <p className="text-sm text-green-200 mb-3">
            <strong>Why Telegram is best for beginners:</strong>
          </p>
          <ul className="space-y-1 text-sm text-green-200">
            <li className="flex gap-2">
              <span>✓</span>
              <span>Simplest setup — just create a bot through BotFather</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>OpenClaw appears as a separate contact, not your own messages</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>You get proper notifications when your assistant replies</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Perfect for personal use</span>
            </li>
          </ul>
        </div>
        
        <ol className="space-y-2 text-gray-300 mb-8">
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">1.</span>
            <span>Message <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">@BotFather</a> on Telegram</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">2.</span>
            <span>Send <code className="text-[#3ED1FE] bg-gray-900 px-2 py-1 rounded">/newbot</code> and follow the prompts to name your bot</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">3.</span>
            <span>Copy the API token BotFather gives you</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">4.</span>
            <span>Add it to your OpenClaw config (the wizard will help with this)</span>
          </li>
        </ol>

        <h3 className="font-semibold mb-3 text-lg">Discord (Good for Teams)</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Discord requires creating a bot application, which is a bit more involved but great if you want to use OpenClaw in a server with friends or teammates.
        </p>
        <ol className="space-y-2 text-gray-300 mb-8">
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">1.</span>
            <span>Go to <a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">Discord Developer Portal</a></span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">2.</span>
            <span>Click "New Application" and give it a name</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">3.</span>
            <span>Go to the "Bot" tab and click "Add Bot"</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">4.</span>
            <span>Copy the bot token and save it securely</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#3ED1FE] font-bold">5.</span>
            <span>Use the OAuth2 URL generator to create an invite link for your server</span>
          </li>
        </ol>

        <h3 className="font-semibold mb-3 text-lg">WhatsApp (Advanced)</h3>
        <div className="mb-4 p-4 bg-yellow-950/20 border border-yellow-900/50 rounded-lg">
          <p className="text-sm text-yellow-200 mb-2">
            <strong>⚠️ Heads up:</strong> WhatsApp has some quirks:
          </p>
          <ul className="space-y-1 text-sm text-yellow-200">
            <li className="flex gap-2">
              <span>•</span>
              <span>Messages come from YOUR own number, not a separate bot</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>You won't get notifications unless you check the chat (it's you texting yourself)</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Works better if you give OpenClaw its own phone number</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Setup is more complicated than Telegram or Discord</span>
            </li>
          </ul>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          If you still want to use WhatsApp, here's how:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`openclaw channels login`}</code>
          </pre>
        </Card>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This will display a QR code. Open WhatsApp on your phone → <strong>Settings</strong> → 
          <strong> Linked Devices</strong> → <strong>Link a Device</strong> and scan the code.
        </p>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Step 6: Security & Pairing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Step 6: Approve Pairing Requests</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          By default, OpenClaw requires pairing approval for new DM conversations. 
          This prevents unauthorized access.
        </p>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">
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

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Step 7: First Automation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Step 7: Start Chatting!</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          You're all set! Just message your OpenClaw assistant on the platform you connected 
          (Telegram, Discord, or WhatsApp). Talk to it like you would a helpful friend.
        </p>
        
        <div className="mb-6 p-4 bg-[#3ED1FE]/10 border border-[#3ED1FE]/30 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>First time?</strong> Try the setup prompt from earlier, or just say hi and ask what it can do!
          </p>
        </div>

        <h3 className="font-semibold mb-3 text-lg">Things You Can Ask It To Do:</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">📧</span>
            <span><strong>Email summaries:</strong> "Summarize my unread emails"</span>
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
            <span><strong>Task automation:</strong> "Help me set up a daily morning briefing"</span>
          </li>
        </ul>

        <div className="mt-6 p-4 bg-green-950/20 border border-green-900/50 rounded-lg">
          <p className="text-sm text-green-200">
            <strong>💡 Pro tip:</strong> Your AI assistant can help configure itself! If you want to change settings, 
            add new features, or set up automations, just ask it. It has access to all the commands 
            and can walk you through everything.
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Recommended Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Recommended Skills to Install</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          OpenClaw becomes more powerful with skills. Here are some useful ones to get started. 
          You can ask your assistant to help install any of these!
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2 text-lg flex items-center gap-2">
              <span className="text-2xl">📧</span>
              gog (Google Workspace)
            </h3>
            <p className="text-sm text-gray-400">
              Access Gmail, Calendar, Drive, and Sheets. Check emails, schedule events, search documents, 
              and manage spreadsheets — all from chat.
            </p>
          </Card>

          <Card className="p-5 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2 text-lg flex items-center gap-2">
              <span className="text-2xl">🌤️</span>
              weather
            </h3>
            <p className="text-sm text-gray-400">
              Get weather forecasts for your location or anywhere in the world. Perfect for daily briefings 
              or planning your day.
            </p>
          </Card>

          <Card className="p-5 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2 text-lg flex items-center gap-2">
              <span className="text-2xl">🐙</span>
              github
            </h3>
            <p className="text-sm text-gray-400">
              Manage repositories, check issues, review pull requests, and get notifications about your projects.
            </p>
          </Card>

          <Card className="p-5 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2 text-lg flex items-center gap-2">
              <span className="text-2xl">⏰</span>
              remind-me
            </h3>
            <p className="text-sm text-gray-400">
              Set natural language reminders like "remind me in 2 hours" or "remind me tomorrow at 9am to call John."
            </p>
          </Card>
        </div>

        <div className="mt-6 p-4 bg-blue-950/20 border border-blue-900/50 rounded-lg">
          <p className="text-sm text-blue-200">
            <strong>💡 Installing skills is easy:</strong> Just tell your assistant "Install the gog skill" 
            or "Help me set up Google Calendar integration" and it will guide you through the process.
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Advanced Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Advanced Configuration</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
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

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Troubleshooting */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Troubleshooting</h2>
        
        <div className="space-y-4">
          <Card className="p-4 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2">Gateway won't start</h3>
            <p className="text-sm text-gray-400 mb-2">
              Check if another process is using port 18789:
            </p>
            <code className="text-xs text-[#3ED1FE] bg-gray-950 px-2 py-1 rounded block">
              lsof -i :18789
            </code>
          </Card>

          <Card className="p-4 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2">WhatsApp QR won't scan</h3>
            <p className="text-sm text-gray-400">
              Make sure you're using WhatsApp's "Link a Device" feature, not the regular QR scanner. 
              Also ensure your phone has a stable internet connection.
            </p>
          </Card>

          <Card className="p-4 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
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

          <Card className="p-4 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2">Permission errors</h3>
            <p className="text-sm text-gray-400">
              Check your pairing status and approve if needed. By default, new DMs require approval.
            </p>
          </Card>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Additional Resources</h2>
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
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Need Help Getting Set Up?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          If you get stuck or want help with custom integrations and advanced automation 
          workflows, I offer professional setup services.
        </p>
        <a
          href="https://instagram.com/stevie_builds"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#3ED1FE] hover:bg-[#3ED1FE]/90 text-black font-semibold rounded-lg transition-colors"
        >
          DM @stevie_builds on Instagram
        </a>
      </Card>
    </div>
  );
}
