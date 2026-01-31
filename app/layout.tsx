import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stevie Builds | Software Engineer & Automation Specialist",
  description: "Business automations, custom software solutions, and AI integrations by a full-stack software engineer.",
  keywords: ["automation", "software engineer", "OpenClaw", "business systems", "AI integration"],
  authors: [{ name: "Stevie Builds" }],
  openGraph: {
    title: "Stevie Builds | Software Engineer & Automation Specialist",
    description: "Business automations, custom software solutions, and AI integrations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
