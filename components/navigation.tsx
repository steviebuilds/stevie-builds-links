"use client";

import Link from "next/link";
import { Moon, Sun, Clock } from "lucide-react";
import { useTheme } from "@/lib/theme-provider";

export function Navigation() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const themes: Array<"light" | "dark" | "auto"> = ["light", "dark", "auto"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-5 h-5" />;
      case "dark":
        return <Moon className="w-5 h-5" />;
      case "auto":
        return <Clock className="w-5 h-5" />;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "auto":
        return "Auto";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/50 bg-black/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white hover:text-[#3ED1FE] transition-colors">
          Stevie Builds
        </Link>
        
        <button
          onClick={cycleTheme}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#3ED1FE]/10 hover:bg-[#3ED1FE]/20 text-[#3ED1FE] transition-colors"
          aria-label={`Current theme: ${getThemeLabel()}. Click to cycle themes.`}
          title={`Theme: ${getThemeLabel()}`}
        >
          {getThemeIcon()}
          <span className="text-sm font-medium hidden sm:inline">{getThemeLabel()}</span>
        </button>
      </div>
    </nav>
  );
}
