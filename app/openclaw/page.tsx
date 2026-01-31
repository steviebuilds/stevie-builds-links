import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Terminal, Smartphone, Shield, Zap } from "lucide-react";
import { ArticleLayout } from "@/components/article-layout";

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
    <ArticleLayout
      title="OpenClaw Setup Guide"
      description="Complete walkthrough for setting up AI automation on any platform"
      icon="/openclaw-icon.png"
    >
      {/* What is OpenClaw */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What is OpenClaw?</h2>
        <p className="text-gray-900 dark:text-gray-300 mb-4">
          OpenClaw is a powerful automation gateway that connects WhatsApp, Telegram, Discord, 
          and iMessage to AI agents. It's like having a personal AI assistant that can respond 
          to messages, automate tasks, and integrate with your existing tools.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <Card className="p-6 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <Smartphone className="w-8 h-8 text-[#3ED1FE] mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Multi-Platform</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              WhatsApp, Telegram, Discord, iMessage - all in one place
            </p>
          </Card>
          
          <Card className="p-6 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <Shield className="w-8 h-8 text-[#3ED1FE] mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Secure & Private</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Self-hosted, encrypted, with pairing-based access control
            </p>
          </Card>
          
          <Card className="p-6 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <Zap className="w-8 h-8 text-[#3ED1FE] mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">AI-Powered</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Powered by Claude, with support for multiple AI providers
            </p>
          </Card>
          
          <Card className="p-6 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <Terminal className="w-8 h-8 text-[#3ED1FE] mb-3" />
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Developer-Friendly</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
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
          <div className="space-y-4 text-gray-900 dark:text-gray-200">
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
        
        <div className="mb-6 p-5 bg-cyan-50 dark:bg-cyan-950/50 border-2 border-cyan-200 dark:border-cyan-800 rounded-lg">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-gray-900 dark:text-cyan-100">
            <span className="text-2xl">⚡</span>
            FIRST: Get a Claude Subscription (REQUIRED)
          </h3>
          <p className="text-gray-900 dark:text-cyan-100 mb-3">
            <strong>Before you do anything else, you need an active Claude subscription.</strong> This is what powers OpenClaw's AI brain. 
            Without this, nothing will work.
          </p>
          <ul className="space-y-2 text-gray-900 dark:text-cyan-100">
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
        <ul className="space-y-2 text-gray-900 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">•</span>
            <span><strong>Node.js 22 or higher</strong> - Don't worry, we'll show you how to install this in the next step</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#3ED1FE] mt-1">•</span>
            <span><strong>A terminal app</strong> - Mac/Linux: already have it. Windows: use WSL2 (we'll explain below)</span>
          </li>
        </ul>

        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-700 rounded-lg">
          <p className="text-sm text-gray-900 dark:text-gray-200">
            <strong>For advanced users:</strong> If you prefer to use an Anthropic API key instead of a subscription, 
            you can get one from <a href="https://console.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-[#3ED1FE] hover:underline">console.anthropic.com</a>. 
            However, this costs more for regular use and requires more technical setup. Most people should stick with the subscription.
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Step 1: Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Step 1: Open Your Terminal</h2>
        
        <div className="mb-6 space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-700 rounded-lg">
            <p className="text-sm text-gray-900 dark:text-gray-200 mb-2">
              <strong>🖥️ How to open your terminal:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-900 dark:text-gray-200">
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Mac:</strong> Press <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">Cmd + Space</kbd>, type "Terminal", press Enter</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Windows:</strong> Install WSL2 first (see below), then open "Ubuntu" from Start menu</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span><strong>Linux:</strong> Press <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">Ctrl + Alt + T</kbd></span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gray-100 dark:bg-gray-900/50 border-l-4 border-orange-300 dark:border-orange-800 border-r border-t border-b border-orange-300/50 dark:border-orange-800/50 rounded-lg">
            <p className="text-sm text-gray-900 dark:text-orange-100 mb-2">
              <strong>⚠️ Windows Users - Important!</strong>
            </p>
            <p className="text-sm text-gray-900 dark:text-orange-100 mb-3">
              OpenClaw doesn't work well on native Windows. You need to install WSL2 (Windows Subsystem for Linux) first:
            </p>
            <ol className="space-y-2 text-sm text-gray-900 dark:text-orange-100 ml-4">
              <li>1. Open PowerShell as Administrator</li>
              <li>2. Run: <code className="bg-gray-900 px-2 py-1 rounded">wsl --install</code></li>
              <li>3. Restart your computer</li>
              <li>4. Open "Ubuntu" from your Start menu</li>
              <li>5. Continue with the steps below inside Ubuntu</li>
            </ol>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Step 2: Install Node.js</h3>
        <p className="text-gray-900 dark:text-gray-300 mb-3">
          Copy and paste this command into your terminal, then press Enter:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-3">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - && sudo apt-get install -y nodejs`}</code>
          </pre>
        </Card>

        <p className="text-sm text-gray-700 dark:text-gray-400 mb-6">
          (Mac users with Homebrew can use: <code className="text-[#3ED1FE] bg-gray-900 px-2 py-1 rounded">brew install node@22</code>)
        </p>

        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Step 3: Install OpenClaw</h3>
        <p className="text-gray-900 dark:text-gray-300 mb-3">
          Now install OpenClaw globally on your system:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-6">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`npm install -g openclaw`}</code>
          </pre>
        </Card>

        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Step 4: Run the Setup Wizard</h3>
        <p className="text-gray-900 dark:text-gray-300 mb-3">
          This single command starts the interactive setup wizard AND launches the OpenClaw gateway:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`openclaw onboard`}</code>
          </pre>
        </Card>

        <div className="p-5 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 rounded-lg mb-6">
          <h4 className="font-bold mb-2 text-gray-900 dark:text-cyan-100">What happens during onboarding:</h4>
          <ul className="space-y-2 text-sm text-gray-900 dark:text-cyan-100">
            <li className="flex gap-2">
              <span className="text-[#3ED1FE]">1.</span>
              <span>You'll choose <strong>"Anthropic"</strong> as your AI provider</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#3ED1FE]">2.</span>
              <span>Select <strong>"Use existing subscription"</strong> (your Claude Pro account)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#3ED1FE]">3.</span>
              <span>The wizard will configure your workspace and settings</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#3ED1FE]">4.</span>
              <span>OpenClaw starts running in the background</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 p-6 bg-gradient-to-br from-[#3ED1FE]/10 to-transparent border border-[#3ED1FE]/30 rounded-lg">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            💡 From Here, Let OpenClaw Help You!
          </h3>
          <p className="text-gray-900 dark:text-gray-300 mb-4">
            Once the wizard finishes and you connect a messaging platform (next step), you can just chat with OpenClaw like a helpful assistant. 
            Want to set up Telegram? Install skills? Configure automations? <strong>Just ask it!</strong>
          </p>
          
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-700 dark:text-gray-400 mb-2">Example setup prompt to send after connecting:</p>
            <div className="bg-gray-900 p-3 rounded border border-gray-800">
              <p className="text-sm text-gray-300 font-mono leading-relaxed">
                "Hey! I just installed you. Can you help me:
                <br />- Set up my first automation
                <br />- Install some useful skills
                <br />- Show me what you can do
                <br /><br />Explain things step-by-step, I'm new to this!"
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Step 2: Onboarding */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Step 2: Run the Setup Wizard</h2>
        <p className="text-gray-900 dark:text-gray-300 mb-4">
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
          <ul className="space-y-2 text-gray-900 dark:text-gray-300">
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
        <p className="text-gray-900 dark:text-gray-300 mb-4">
          OpenClaw needs to connect to Claude to work its magic. Here's the easiest way:
        </p>
        
        <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
          ✨ Option A: Claude Subscription (RECOMMENDED)
        </h3>
        <div className="mb-6 p-4 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 rounded-lg">
          <p className="text-sm text-gray-900 dark:text-cyan-100 mb-3">
            <strong>Best for most people:</strong> This is cheaper and easier than API access. 
            Just like you'd pay for Netflix, you pay Claude for unlimited use.
          </p>
          <ul className="space-y-2 text-sm text-gray-900 dark:text-cyan-100">
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
        
        <p className="text-gray-900 dark:text-gray-300 mb-3">
          Once you have a Claude subscription, OpenClaw will use your credentials automatically. 
          The onboarding wizard will guide you through the login.
        </p>

        <h3 className="font-semibold mb-3 text-lg mt-8">Option B: API Key (Advanced Users)</h3>
        <p className="text-gray-900 dark:text-gray-300 mb-3">
          If you're comfortable with API billing and want more control, you can use an Anthropic API key:
        </p>
        <ol className="space-y-3 text-gray-900 dark:text-gray-300 mb-4">
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

        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900/50 border-l-4 border-orange-300 dark:border-orange-800 border-r border-t border-b border-orange-300/50 dark:border-orange-800/50 rounded-lg">
          <p className="text-sm text-gray-900 dark:text-orange-100">
            <strong>⚠️ Note:</strong> API usage is billed per message and can get expensive quickly if you're using OpenClaw frequently. Most people find a Claude subscription more economical.
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Step 4: Start the Gateway */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Step 4: Make Sure OpenClaw is Running</h2>
        <p className="text-gray-900 dark:text-gray-300 mb-4">
          If you used the setup wizard, OpenClaw is probably already running in the background. 
          Let's check:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`openclaw gateway status`}</code>
          </pre>
        </Card>

        <p className="text-gray-900 dark:text-gray-300 mb-4">
          If it's not running, you can start it:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`openclaw gateway --port 18789 --verbose`}</code>
          </pre>
        </Card>

        <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 rounded-lg">
          <p className="text-sm text-gray-900 dark:text-cyan-100">
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
        <p className="text-gray-900 dark:text-gray-300 mb-6">
          Choose whichever platform you prefer. We've listed them from easiest to most complex:
        </p>
        
        <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
          ⭐ Telegram (RECOMMENDED - Easiest!)
        </h3>
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-700 rounded-lg">
          <p className="text-sm text-gray-900 dark:text-gray-200 mb-3">
            <strong>Why Telegram is best for beginners:</strong>
          </p>
          <ul className="space-y-1 text-sm text-gray-900 dark:text-gray-200">
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
        
        <ol className="space-y-2 text-gray-900 dark:text-gray-300 mb-8">
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
        <p className="text-gray-900 dark:text-gray-300 mb-4">
          Discord requires creating a bot application, which is a bit more involved but great if you want to use OpenClaw in a server with friends or teammates.
        </p>
        <ol className="space-y-2 text-gray-900 dark:text-gray-300 mb-8">
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
        <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-900/50 border-l-4 border-orange-300 dark:border-orange-800 border-r border-t border-b border-orange-300/50 dark:border-orange-800/50 rounded-lg">
          <p className="text-sm text-gray-900 dark:text-orange-100 mb-2">
            <strong>⚠️ Heads up:</strong> WhatsApp has some quirks:
          </p>
          <ul className="space-y-1 text-sm text-gray-900 dark:text-orange-100">
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
        
        <p className="text-gray-900 dark:text-gray-300 mb-4">
          If you still want to use WhatsApp, here's how:
        </p>
        
        <Card className="p-4 bg-gray-950 border-gray-800 mb-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`openclaw channels login`}</code>
          </pre>
        </Card>

        <p className="text-gray-900 dark:text-gray-300 mb-6">
          This will display a QR code. Open WhatsApp on your phone → <strong>Settings</strong> → 
          <strong> Linked Devices</strong> → <strong>Link a Device</strong> and scan the code.
        </p>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Step 6: Security & Pairing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Step 6: Approve Pairing Requests</h2>
        <p className="text-gray-900 dark:text-gray-300 mb-4">
          By default, OpenClaw requires pairing approval for new DM conversations. 
          This prevents unauthorized access.
        </p>
        
        <p className="text-gray-900 dark:text-gray-300 mb-4">
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

        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-900/50 border-l-4 border-orange-300 dark:border-orange-800 border-r border-t border-b border-orange-300/50 dark:border-orange-800/50 rounded-lg">
          <p className="text-sm text-gray-900 dark:text-orange-100">
            <strong>⚠️ Security Tip:</strong> Never approve pairing codes from unknown numbers. 
            This is your first line of defense against unauthorized access.
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Step 7: First Automation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Step 7: Start Chatting!</h2>
        <p className="text-gray-900 dark:text-gray-300 mb-4">
          You're all set! Just message your OpenClaw assistant on the platform you connected 
          (Telegram, Discord, or WhatsApp). Talk to it like you would a helpful friend.
        </p>
        
        <div className="mb-6 p-4 bg-[#3ED1FE]/10 border border-[#3ED1FE]/30 rounded-lg">
          <p className="text-gray-900 dark:text-gray-300 mb-2">
            <strong>First time?</strong> Try the setup prompt from earlier, or just say hi and ask what it can do!
          </p>
        </div>

        <h3 className="font-semibold mb-3 text-lg">Things You Can Ask It To Do:</h3>
        <ul className="space-y-2 text-gray-900 dark:text-gray-300">
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

        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-700 rounded-lg">
          <p className="text-sm text-gray-900 dark:text-gray-200">
            <strong>💡 Pro tip:</strong> Your AI assistant can help configure itself! If you want to change settings, 
            add new features, or set up automations, just ask it. It has access to all the commands 
            and can walk you through everything.
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* What Are Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What Are Skills?</h2>
        
        <p className="text-gray-900 dark:text-gray-300 mb-4 text-lg">
          Think of skills as <strong>superpowers you can give to your AI assistant</strong>. Out of the box, OpenClaw can chat with you, 
          but skills let it DO things — like check your email, create calendar events, search the web, or control smart home devices.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card className="p-5 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-xl">🧩</span>
              Like Phone Apps
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Your phone can't check email until you install Gmail. Your AI can't check email until you install the Gmail skill. 
              Skills add new capabilities on demand.
            </p>
          </Card>

          <Card className="p-5 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-xl">🔌</span>
              Plug & Play
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Most skills install with a single command. Your AI assistant can even walk you through the setup process 
              and help you configure everything.
            </p>
          </Card>
        </div>

        <div className="p-5 bg-[#3ED1FE]/10 border border-[#3ED1FE]/30 rounded-lg">
          <h3 className="font-bold mb-3 text-gray-900 dark:text-white">Popular Skill Examples:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2 text-sm text-gray-900 dark:text-gray-300">
              <span className="text-lg">📧</span>
              <div>
                <strong>Gmail Skill:</strong> "Summarize my unread emails" or "Send an email to John"
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-900 dark:text-gray-300">
              <span className="text-lg">🌤️</span>
              <div>
                <strong>Weather Skill:</strong> "What's the weather like tomorrow?" or "Will it rain this week?"
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-900 dark:text-gray-300">
              <span className="text-lg">📅</span>
              <div>
                <strong>Calendar Skill:</strong> "What's on my schedule today?" or "Add a meeting for 2pm Friday"
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-900 dark:text-gray-300">
              <span className="text-lg">🐙</span>
              <div>
                <strong>GitHub Skill:</strong> "Show my open pull requests" or "Create an issue in my repo"
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-900 dark:text-gray-300">
              <span className="text-lg">🏠</span>
              <div>
                <strong>Smart Home Skills:</strong> "Turn off the living room lights" or "Set thermostat to 72°"
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-900 dark:text-gray-300">
              <span className="text-lg">🔍</span>
              <div>
                <strong>Web Search Skill:</strong> "Find the latest AI news" or "Search for pizza places near me"
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-700 rounded-lg">
          <p className="text-sm text-gray-900 dark:text-gray-200">
            <strong>💡 Installing is easy:</strong> Just tell your assistant "Install the weather skill" or 
            "Help me set up Gmail integration" and it will guide you through everything. You don't need to know any commands!
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Recommended Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Recommended Skills to Get Started</h2>
        <p className="text-gray-900 dark:text-gray-300 mb-6">
          Here are some popular skills that most people find useful. Your assistant can help you install and configure any of these!
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2 text-lg flex items-center gap-2">
              <span className="text-2xl">📧</span>
              gog (Google Workspace)
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Access Gmail, Calendar, Drive, and Sheets. Check emails, schedule events, search documents, 
              and manage spreadsheets — all from chat.
            </p>
          </Card>

          <Card className="p-5 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2 text-lg flex items-center gap-2">
              <span className="text-2xl">🌤️</span>
              weather
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Get weather forecasts for your location or anywhere in the world. Perfect for daily briefings 
              or planning your day.
            </p>
          </Card>

          <Card className="p-5 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2 text-lg flex items-center gap-2">
              <span className="text-2xl">🐙</span>
              github
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Manage repositories, check issues, review pull requests, and get notifications about your projects.
            </p>
          </Card>

          <Card className="p-5 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2 text-lg flex items-center gap-2">
              <span className="text-2xl">⏰</span>
              remind-me
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Set natural language reminders like "remind me in 2 hours" or "remind me tomorrow at 9am to call John."
            </p>
          </Card>
        </div>

        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-700 rounded-lg">
          <p className="text-sm text-gray-900 dark:text-gray-200">
            <strong>💡 Installing skills is easy:</strong> Just tell your assistant "Install the gog skill" 
            or "Help me set up Google Calendar integration" and it will guide you through the process.
          </p>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Advanced Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Advanced Configuration</h2>
        <p className="text-gray-900 dark:text-gray-300 mb-4">
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
            <p className="text-sm text-gray-700 dark:text-gray-400 mb-2">
              Check if another process is using port 18789:
            </p>
            <code className="text-xs text-[#3ED1FE] bg-gray-950 px-2 py-1 rounded block">
              lsof -i :18789
            </code>
          </Card>

          <Card className="p-4 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2">WhatsApp QR won't scan</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Make sure you're using WhatsApp's "Link a Device" feature, not the regular QR scanner. 
              Also ensure your phone has a stable internet connection.
            </p>
          </Card>

          <Card className="p-4 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2">Agent not responding</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400 mb-2">
              Verify authentication is configured:
            </p>
            <code className="text-xs text-[#3ED1FE] bg-gray-950 px-2 py-1 rounded block mb-2">
              openclaw health
            </code>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              If it shows "no auth configured", run the onboarding wizard again.
            </p>
          </Card>

          <Card className="p-4 border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="font-semibold mb-2">Permission errors</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              Check your pairing status and approve if needed. By default, new DMs require approval.
            </p>
          </Card>
        </div>
      </section>

      <Separator className="my-12 bg-gray-300 dark:bg-gray-800" />

      {/* Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Additional Resources</h2>
        <ul className="space-y-2 text-gray-900 dark:text-gray-300">
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
        <p className="text-gray-900 dark:text-gray-300 mb-6">
          If you get stuck or want help with custom integrations and advanced automation 
          workflows, I offer professional setup services.
        </p>
        <p className="text-gray-900 dark:text-gray-300 mb-6">
          Reach out on Instagram or Twitter:
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://instagram.com/stevie.builds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ED1FE] hover:bg-[#3ED1FE]/90 text-black font-semibold rounded-lg transition-colors"
          >
            <span>📷</span>
            <span>@stevie_builds</span>
          </a>
          <a
            href="https://twitter.com/stevie_builds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#3ED1FE] hover:bg-[#3ED1FE]/90 text-black font-semibold rounded-lg transition-colors"
          >
            <span>🐦</span>
            <span>@stevie_builds</span>
          </a>
        </div>
      </Card>
    </ArticleLayout>
  );
}
