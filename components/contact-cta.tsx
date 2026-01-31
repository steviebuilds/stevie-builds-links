import Image from "next/image";

export function ContactCTA() {
  return (
    <div className="text-center py-10 px-6 rounded-2xl border border-gray-300 dark:border-gray-800 bg-gradient-to-br from-gray-100/50 dark:from-gray-900/50 to-transparent">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Need professional automation?
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Reach out to stevie_builds
      </p>
      
      <div className="flex flex-col items-center gap-3">
        <a
          href="https://instagram.com/stevie_builds"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#3ED1FE]/10 hover:bg-[#3ED1FE]/20 border border-[#3ED1FE]/30 hover:border-[#3ED1FE]/50 transition-all duration-300 hover:scale-105 group"
        >
          <Image
            src="/icons/instagram.webp"
            alt="Instagram"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-[#3ED1FE] font-semibold group-hover:underline">
            @stevie_builds
          </span>
        </a>
        
        <a
          href="https://twitter.com/stevie_builds"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#3ED1FE]/10 hover:bg-[#3ED1FE]/20 border border-[#3ED1FE]/30 hover:border-[#3ED1FE]/50 transition-all duration-300 hover:scale-105 group"
        >
          <svg className="w-6 h-6 text-[#3ED1FE]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="text-[#3ED1FE] font-semibold group-hover:underline">
            @stevie_builds
          </span>
        </a>
      </div>
    </div>
  );
}
