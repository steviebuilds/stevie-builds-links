import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0a0a]">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Stevie Builds
          </h1>
          <p className="text-gray-400 text-lg">
            Software Engineer & Automation Specialist
          </p>
        </div>

        {/* Link Tree */}
        <div className="space-y-4">
          <Link 
            href="/openclaw"
            className="block w-full py-4 px-6 bg-gradient-to-r from-[#3ED1FE]/10 to-[#3ED1FE]/5 hover:from-[#3ED1FE]/20 hover:to-[#3ED1FE]/10 border border-[#3ED1FE]/30 hover:border-[#3ED1FE]/60 rounded-xl text-center font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#3ED1FE]/10"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg">OpenClaw Automation</span>
              <svg className="w-5 h-5 text-[#3ED1FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              See what automated systems can do for your business
            </p>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center pt-8">
          <p className="text-gray-500 text-sm">
            DM{" "}
            <a 
              href="https://twitter.com/stevie.builds" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#3ED1FE] hover:underline"
            >
              @stevie.builds
            </a>
            {" "}for professional automation services
          </p>
        </div>
      </div>
    </div>
  );
}
