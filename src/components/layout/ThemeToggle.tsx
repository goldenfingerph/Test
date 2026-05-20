"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className="h-10 w-[4.5rem] rounded-full border border-white/10 bg-white/5"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex h-10 w-[4.5rem] items-center rounded-full border p-1 transition-all duration-500",
        "border-slate-200 bg-slate-100 hover:bg-slate-200",
        "dark:border-white/15 dark:bg-white/5 dark:hover:border-neon-cyan/40 dark:hover:shadow-glow"
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className={cn(
          "absolute flex h-8 w-8 items-center justify-center rounded-full shadow-md transition-all duration-500",
          isDark
            ? "left-1 translate-x-0 bg-obsidian text-neon-cyan"
            : "left-1 translate-x-[2.125rem] bg-royal text-white"
        )}
      >
        <Sun
          className={cn(
            "absolute h-4 w-4 transition-all duration-500",
            isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
          )}
        />
        <Moon
          className={cn(
            "absolute h-4 w-4 transition-all duration-500",
            isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
          )}
        />
      </span>
      <Sun
        className={cn(
          "ml-2 h-4 w-4 transition-opacity duration-300",
          isDark ? "text-slate-500 opacity-40" : "text-amber-500 opacity-0"
        )}
      />
      <Moon
        className={cn(
          "ml-auto mr-2 h-4 w-4 transition-opacity duration-300",
          isDark ? "text-neon-cyan/60 opacity-0" : "text-slate-400 opacity-40"
        )}
      />
    </button>
  );
}
