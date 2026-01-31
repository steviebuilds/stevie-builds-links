import Image from "next/image";
import { LinkCard } from "@/components/link-card";
import { Twitter, Instagram, Video } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#3ED1FE]/30">
            <Image
              src="/profile.png"
              alt="Stevie Builds"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[#3ED1FE] to-white bg-clip-text text-transparent">
            Stevie Builds
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Software Engineer & Automation Specialist
          </p>
          <p className="text-gray-500 max-w-xl mx-auto">
            Building intelligent automation systems and custom software solutions. 
            Specializing in AI integrations, business process automation, and full-stack development.
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-16">
          <LinkCard
            href="/openclaw"
            title="OpenClaw Automation"
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

          <LinkCard
            href="https://twitter.com/stevie_builds"
            title="@stevie_builds"
            description="Follow for tech insights and automation tips"
            icon={<Twitter className="w-6 h-6 text-[#3ED1FE]" />}
            external
          />

          <LinkCard
            href="https://instagram.com/stevie.builds"
            title="@stevie.builds"
            description="Behind-the-scenes content and tutorials"
            icon={<Instagram className="w-6 h-6 text-[#3ED1FE]" />}
            external
          />

          <LinkCard
            href="https://tiktok.com/@stevie.builds"
            title="@stevie.builds"
            description="Quick automation demos and tech content"
            icon={<Video className="w-6 h-6 text-[#3ED1FE]" />}
            external
          />
        </div>

        {/* CTA Section */}
        <div className="text-center py-8 px-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-transparent">
          <h2 className="text-2xl font-bold mb-3 text-white">
            Need Professional Automation?
          </h2>
          <p className="text-gray-400 mb-4">
            DM{" "}
            <a
              href="https://instagram.com/stevie.builds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3ED1FE] hover:underline font-medium"
            >
              @stevie.builds
            </a>
            {" "}on Instagram for custom solutions
          </p>
        </div>
      </div>
    </div>
  );
}
