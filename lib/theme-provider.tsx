"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "auto";

interface ThemeContextType {
  theme: Theme;
  effectiveTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getTimeBasedTheme(): "light" | "dark" {
  const hour = new Date().getHours();
  // Light: 6am-6pm, Dark: 6pm-6am
  return hour >= 6 && hour < 18 ? "light" : "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("auto");
  const [effectiveTheme, setEffectiveTheme] = useState<"light" | "dark">("dark");

  // Initialize theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored && ["light", "dark", "auto"].includes(stored)) {
      setThemeState(stored);
    }
  }, []);

  // Update effective theme when theme or time changes
  useEffect(() => {
    const updateEffectiveTheme = () => {
      const newEffectiveTheme = theme === "auto" ? getTimeBasedTheme() : theme;
      setEffectiveTheme(newEffectiveTheme);
      
      // Update DOM
      const root = document.documentElement;
      if (newEffectiveTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    updateEffectiveTheme();

    // If auto mode, check every minute for time changes
    if (theme === "auto") {
      const interval = setInterval(updateEffectiveTheme, 60000);
      return () => clearInterval(interval);
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, effectiveTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
