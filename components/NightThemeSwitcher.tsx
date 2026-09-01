"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Palette, Check, X, Sparkles } from "lucide-react";

export type NightPreset =
  | "quiet-luxury"
  | "monochrome"
  | "emerald-executive"
  | "titanium-slate";

interface ThemeOption {
  id: NightPreset;
  name: string;
  badge: string;
  desc: string;
  colors: string[];
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "quiet-luxury",
    name: "1. Quiet Luxury (Recommended)",
    badge: "Charcoal & Forest",
    desc: "Refined dark graphite, subtle warm borders, single botanical green accent. Zero rainbow noise.",
    colors: ["#080D0B", "#101713", "#5BCB4A", "#F2F4F2"],
  },
  {
    id: "monochrome",
    name: "2. Monochrome Prestige",
    badge: "Obsidian & Platinum",
    desc: "Matte black obsidian cards with razor-sharp silver borders and crisp white action CTAs.",
    colors: ["#040608", "#0C0E12", "#FFFFFF", "#94A3B8"],
  },
  {
    id: "emerald-executive",
    name: "3. Emerald Executive",
    badge: "Midnight Forest & Mint",
    desc: "Deep forest midnight undertone with glowing emerald accents and mint-white typography.",
    colors: ["#030C07", "#07170F", "#10B981", "#F0FDF4"],
  },
  {
    id: "titanium-slate",
    name: "4. Titanium Slate",
    badge: "Industrial Steel & Cyan",
    desc: "High-tech industrial titanium and cool slate panels with crisp alpine-green buttons.",
    colors: ["#080B10", "#0E141E", "#38BDF8", "#F8FAFC"],
  },
];

export const NightThemeSwitcher: React.FC = () => {
  const [currentPreset, setCurrentPreset] = useState<NightPreset>("quiet-luxury");
  const [isOpen, setIsOpen] = useState(false);
  const [isDayMode, setIsDayMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  const applyPreset = useCallback((preset: NightPreset) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-night-preset", preset);
    try {
      localStorage.setItem("bapl-night-preset", preset);
    } catch {
      // ignore
    }
  }, []);

  const selectPreset = (preset: NightPreset) => {
    setCurrentPreset(preset);
    applyPreset(preset);
  };

  useEffect(() => {
    setMounted(true);
    let savedPreset: NightPreset = "quiet-luxury";
    try {
      const saved = localStorage.getItem("bapl-night-preset") as NightPreset | null;
      if (
        saved === "quiet-luxury" ||
        saved === "monochrome" ||
        saved === "emerald-executive" ||
        saved === "titanium-slate"
      ) {
        savedPreset = saved;
      }
    } catch {
      // ignore
    }
    setCurrentPreset(savedPreset);
    applyPreset(savedPreset);

    // Watch for Day vs Night mode to hide or adjust switcher
    const checkTheme = () => {
      const isDay = document.documentElement.getAttribute("data-theme") === "day";
      setIsDayMode(isDay);
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    return () => observer.disconnect();
  }, [applyPreset]);

  if (!mounted) return null;

  // If in Day Mode, hide so Day Mode is never disturbed
  if (isDayMode) {
    return null;
  }

  return (
    <aside aria-label="Night Mode Theme Selector" className="fixed top-3 sm:top-5 left-3 sm:left-5 z-[9998] font-sans select-none">
      {/* 1. Floating Pill Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white text-xs sm:text-sm font-black border border-white/20 shadow-2xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Click to try different Night Mode themes"
        >
          <Palette className="w-4 h-4 text-[#5BCB4A] animate-pulse" />
          <span className="tracking-wide">Theme Options</span>
          <span className="w-2 h-2 rounded-full bg-[#5BCB4A]" />
        </button>
      )}

      {/* 2. Expanded Floating Theme Menu */}
      {isOpen && (
        <div className="w-[300px] sm:w-[360px] max-w-[calc(100vw-24px)] bg-[#0c1218]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-3.5 sm:p-4 shadow-2xl shadow-black/90 flex flex-col gap-3 transition-all animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-lg bg-[#5BCB4A]/20 text-[#5BCB4A]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-white leading-tight">
                  Choose Night Theme
                </h4>
                <p className="text-[10.5px] text-slate-400 font-medium">
                  Live Preview • Pick Your Favorite
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              title="Close Theme Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Theme Option Cards */}
          <div className="flex flex-col gap-2">
            {THEME_OPTIONS.map((opt) => {
              const isSelected = currentPreset === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => selectPreset(opt.id)}
                  className={`w-full text-left p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                    isSelected
                      ? "bg-white/10 border-[#5BCB4A] shadow-lg shadow-[#5BCB4A]/10 ring-1 ring-[#5BCB4A]"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.07] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* Color Palette Swatch Dots */}
                      <div className="flex items-center -space-x-1 shrink-0">
                        {opt.colors.map((c, i) => (
                          <span
                            key={i}
                            style={{ backgroundColor: c }}
                            className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-sm"
                          />
                        ))}
                      </div>

                      <span
                        className={`text-xs sm:text-[13px] font-black leading-tight ${
                          isSelected ? "text-white" : "text-slate-200"
                        }`}
                      >
                        {opt.name}
                      </span>
                    </div>

                    {isSelected && (
                      <span className="p-0.5 rounded-full bg-[#5BCB4A] text-slate-950">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </div>

                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-normal leading-snug pl-6">
                    {opt.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="pt-2 border-t border-white/10 text-center">
            <p className="text-[10px] text-slate-400 leading-tight">
              Test each theme on your phone & desktop. Tell me which number you prefer and I'll make it permanent!
            </p>
          </div>
        </div>
      )}
    </aside>
  );
};
