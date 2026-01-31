import Image from "next/image";
import { LinkCard } from "@/components/link-card";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#3ED1FE]/30">
            <Image
              src="/profile.webp"
              alt="Stevie Builds"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-[#3ED1FE] to-gray-900 dark:from-white dark:via-[#3ED1FE] dark:to-white bg-clip-text text-transparent">
            @stevie_builds
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Software Engineer & Automation Specialist
          </p>
          <p className="text-gray-500 dark:text-gray-500 max-w-xl mx-auto mb-8">
            Building intelligent automation systems and custom software solutions. 
            Specializing in AI integrations, business process automation, and full-stack development.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <a
              href="https://twitter.com/stevie_builds"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#3ED1FE]/10 hover:bg-[#3ED1FE]/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 text-[#3ED1FE]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/stevie_builds"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#3ED1FE]/10 hover:bg-[#3ED1FE]/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Image
                src="/icons/instagram-sm.png"
                alt="Instagram"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://tiktok.com/@stevie_builds"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#3ED1FE]/10 hover:bg-[#3ED1FE]/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <Image
                src="/icons/tiktok-sm.png"
                alt="TikTok"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
            <a
              href="https://github.com/steviebuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#3ED1FE]/10 hover:bg-[#3ED1FE]/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-[#3ED1FE]" />
            </a>
          </div>
        </div>

        {/* Main Content Tiles */}
        <div className="grid gap-4 mb-16">
          <LinkCard
            href="https://wahlu.com"
            title="Wahlu"
            description="Affordable social media scheduler - Create once, post forever. Schedule Instagram, TikTok, YouTube, LinkedIn & Facebook for $7/month."
            icon={
              <div className="bg-white p-2 rounded-lg">
                <Image
                  src="/wahlu-logo.png"
                  alt="Wahlu"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            }
            external
          />

          <LinkCard
            href="/openclaw"
            title="OpenClaw Tutorial"
            description="Learn how to set up AI-powered automation for your business"
            icon={
              <Image
                src="/openclaw-icon.png"
                alt="OpenClaw"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            }
          />
        </div>

        {/* CTA Section */}
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
      </div>
    </div>
  );
}
