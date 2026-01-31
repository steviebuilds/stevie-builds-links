import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://steviebuilds.dev"),
  title: "Stevie Builds | Software Engineer & Automation Specialist",
  description: "Business automations, custom software solutions, and AI integrations by a full-stack software engineer.",
  keywords: ["automation", "software engineer", "OpenClaw", "business systems", "AI integration"],
  authors: [{ name: "Stevie Builds" }],
  openGraph: {
    title: "Stevie Builds | Software Engineer & Automation Specialist",
    description: "Business automations, custom software solutions, and AI integrations",
    type: "website",
    images: [
      {
        url: "/openclaw-og.png",
        width: 1200,
        height: 630,
        alt: "Stevie Builds - Software Engineer & Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stevie Builds | Software Engineer & Automation Specialist",
    description: "Business automations, custom software solutions, and AI integrations",
    images: ["/openclaw-og.png"],
    creator: "@stevie_builds",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
