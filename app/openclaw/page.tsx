import Link from "next/link";

export default function OpenClawPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="text-gray-400 hover:text-[#3ED1FE] transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#3ED1FE]/10 border border-[#3ED1FE]/30 rounded-full">
            <span className="text-[#3ED1FE] text-sm font-medium">Automation & AI</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            What OpenClaw Can Do{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3ED1FE] to-blue-400">
              For Your Business
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            Imagine having a digital assistant that never sleeps, handles your emails, 
            processes receipts, monitors your cameras, and automates your workflows—all 
            without you lifting a finger. That's OpenClaw.
          </p>
        </div>
      </section>

      {/* What You Saw Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">
            What You Saw in the Video
          </h2>
          
          <div className="space-y-8">
            {/* Email Triage */}
            <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#3ED1FE]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3ED1FE]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#3ED1FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Email Triage & Auto-Response</h3>
                  <p className="text-gray-400 leading-relaxed">
                    OpenClaw reads your inbox, categorizes emails by urgency, drafts replies, 
                    and even sends responses to common questions—all while you sleep. Wake up 
                    to an organized inbox and handled correspondence.
                  </p>
                </div>
              </div>
            </div>

            {/* Receipt OCR */}
            <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#3ED1FE]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3ED1FE]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#3ED1FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Receipt OCR & Expense Tracking</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Snap a photo of any receipt, and OpenClaw extracts the data—vendor, 
                    amount, date, items—and logs it to your accounting system. No more 
                    manual data entry or lost receipts.
                  </p>
                </div>
              </div>
            </div>

            {/* Camera Control */}
            <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#3ED1FE]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3ED1FE]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#3ED1FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Remote Camera Control & Monitoring</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Ask OpenClaw to check your front door, take a snapshot of the office, 
                    or record a clip—all from a simple text command. Your security system, 
                    now voice and text-activated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#3ED1FE]/10 to-blue-600/10 border border-[#3ED1FE]/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to Build This Yourself?
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Check out this comprehensive 20-minute video tutorial by @ashen_one that 
              walks you through the complete OpenClaw setup process, from installation 
              to advanced use cases.
            </p>
            <a
              href="https://x.com/ashen_one/status/2017317310059421860"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#3ED1FE] hover:bg-[#35BCDF] text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#3ED1FE]/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Watch the DIY Tutorial
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Or Let Me Build It For You
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm a software engineer specializing in business automations and custom 
            software systems. From OpenClaw integrations to fully custom solutions, 
            I'll build the automation infrastructure your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://twitter.com/stevie.builds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              DM @stevie.builds
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 mt-20">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Stevie Builds. Building the future, one automation at a time.</p>
        </div>
      </footer>
    </div>
  );
}
