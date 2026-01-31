import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white hover:text-[#3ED1FE] transition-colors">
          Stevie Builds
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            href="/openclaw" 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            OpenClaw Tutorial
          </Link>
        </div>
      </div>
    </nav>
  );
}
