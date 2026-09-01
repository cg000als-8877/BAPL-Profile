"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"night" | "day">("night");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("bapl-theme") as "night" | "day" | null;
    const initialTheme = saved || "night";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    if (initialTheme === "day") {
      document.documentElement.classList.add("light", "day-mode");
      document.documentElement.classList.remove("dark", "night-mode");
    } else {
      document.documentElement.classList.add("dark", "night-mode");
      document.documentElement.classList.remove("light", "day-mode");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "night" ? "day" : "night";
    setTheme(next);
    localStorage.setItem("bapl-theme", next);
    document.documentElement.setAttribute("data-theme", next);
    if (next === "day") {
      document.documentElement.classList.add("light", "day-mode");
      document.documentElement.classList.remove("dark", "night-mode");
    } else {
      document.documentElement.classList.add("dark", "night-mode");
      document.documentElement.classList.remove("light", "day-mode");
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 select-none">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "night" ? "Day" : "Night"} Mode`}
        className={`group flex items-center gap-2 px-4 py-2 rounded-full shadow-2xl backdrop-blur-xl border transition-all duration-300 active:scale-95 cursor-pointer ${
          theme === "day"
            ? "bg-white/95 text-slate-800 border-slate-300 shadow-slate-400/30 hover:border-emerald-500 hover:shadow-emerald-500/20"
            : "bg-[#091426]/90 text-white border-slate-700/80 shadow-black/50 hover:border-[#55c538] hover:shadow-[#55c538]/20"
        }`}
      >
        <div
          className={`p-1 rounded-full transition-transform duration-300 group-hover:rotate-45 ${
            theme === "day"
              ? "bg-amber-100 text-amber-600"
              : "bg-[#55c538]/20 text-[#72e055]"
          }`}
        >
          {theme === "day" ? (
            <Sun className="w-3.5 h-3.5" />
          ) : (
            <Moon className="w-3.5 h-3.5" />
          )}
        </div>
        <span className="text-xs font-black tracking-wider uppercase">
          {theme === "day" ? "Day Mode" : "Night Mode"}
        </span>
        <span
          className={`w-2 h-2 rounded-full ${
            theme === "day" ? "bg-amber-500" : "bg-[#55c538] animate-pulse"
          }`}
        />
      </button>
    </div>
  );
};
