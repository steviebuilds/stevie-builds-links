"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "auto";

interface ThemeContextType {
  theme: Theme;
  effectiveTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Get the user's system theme preference
 * Uses window.matchMedia to detect prefers-color-scheme
 */
function getSystemTheme(): "light" | "dark" {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  // Default to dark if we can't detect (SSR or old browsers)
  return "dark";
}

/**
 * ThemeProvider manages theme state and applies it to the DOM
 * 
 * Modes:
 * - "light": Always light theme
 * - "dark": Always dark theme
 * - "auto": Follows system preference (default)
 * 
 * In auto mode, the theme automatically updates when the user changes
 * their system preference (e.g., switching from light to dark mode in OS settings)
 */
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

  // Update effective theme when theme changes or system preference changes
  useEffect(() => {
    const updateEffectiveTheme = () => {
      const newEffectiveTheme = theme === "auto" ? getSystemTheme() : theme;
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

    // If auto mode, listen for system preference changes
    if (theme === "auto" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => updateEffectiveTheme();
      
      // Modern browsers
      mediaQuery.addEventListener("change", handleChange);
      
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
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
