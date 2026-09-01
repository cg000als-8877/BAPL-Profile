"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Palette, Check, X, Sparkles } from "lucide-react";

export type MonoPreset =
  | "charcoal-platinum"
  | "titanium-graphite"
  | "warm-onyx"
  | "stealth-slate";

interface ThemeOption {
  id: MonoPreset;
  name: string;
  badge: string;
  desc: string;
  colors: string[];
}

const MONO_OPTIONS: ThemeOption[] = [
  {
    id: "charcoal-platinum",
    name: "1. Charcoal & Satin Platinum (Recommended)",
    badge: "Charcoal & Soft Pearl",
    desc: "Deep charcoal slate (#0e1115), satin platinum CTAs (#e2e6eb), soft pearl headings (#f0f2f5). No pure black/white.",
    colors: ["#0e1115", "#15191f", "#e2e6eb", "#9aa2af"],
  },
  {
    id: "titanium-graphite",
    name: "2. Titanium & Cool Pewter",
    badge: "Industrial Titanium",
    desc: "Titanium graphite (#111419), cool steel glass cards (#181c23), frosted steel buttons (#dbe2ea), cool pewter text.",
    colors: ["#111419", "#181c23", "#dbe2ea", "#949ba8"],
  },
  {
    id: "warm-onyx",
    name: "3. Warm Onyx & Alabaster",
    badge: "Quiet Luxury Warm Monochrome",
    desc: "Warm obsidian-onyx (#101012), subtle cashmere borders, soft alabaster headings (#f2efe9) and chalk buttons.",
    colors: ["#101012", "#17171a", "#e8e4dc", "#a3a099"],
  },
  {
    id: "stealth-slate",
    name: "4. Matte Stealth & Frosted Pearl",
    badge: "Architectural Dark Slate",
    desc: "Matte dark slate (#13161c), frosted slate cards (#1a1e26), frosted off-white CTAs (#e0e4eb), slate smoke accents.",
    colors: ["#13161c", "#1a1e26", "#e0e4eb", "#98a0ad"],
  },
];

export const NightThemeSwitcher: React.FC = () => {
  const [currentPreset, setCurrentPreset] = useState<MonoPreset>("charcoal-platinum");
  const [isOpen, setIsOpen] = useState(false);
  const [isDayMode, setIsDayMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  const applyPreset = useCallback((preset: MonoPreset) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.setAttribute("data-mono-preset", preset);
    try {
      localStorage.setItem("bapl-mono-preset", preset);
    } catch {
      // ignore
    }
  }, []);

  const selectPreset = (preset: MonoPreset) => {
    setCurrentPreset(preset);
    applyPreset(preset);
  };

  useEffect(() => {
    setMounted(true);
    let savedPreset: MonoPreset = "charcoal-platinum";
    try {
      const saved = localStorage.getItem("bapl-mono-preset") as MonoPreset | null;
      if (
        saved === "charcoal-platinum" ||
        saved === "titanium-graphite" ||
        saved === "warm-onyx" ||
        saved === "stealth-slate"
      ) {
        savedPreset = saved;
      }
    } catch {
      // ignore
    }
    setCurrentPreset(savedPreset);
    applyPreset(savedPreset);

    // Watch for Day vs Night mode to hide in Day Mode
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

  if (!mounted || isDayMode) return null;

  return (
    <aside aria-label="Monochrome Night Palette Selector" className="fixed top-3 sm:top-5 left-3 sm:left-5 z-[9998] font-sans select-none">
      {/* 1. Floating Pill Toggle Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#15191f]/95 hover:bg-[#1a1f27] text-[#f0f2f5] text-xs sm:text-sm font-bold border border-white/20 shadow-2xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Click to test monochromatic night palettes"
        >
          <Palette className="w-4 h-4 text-[#e2e6eb] animate-pulse" />
          <span className="tracking-wide">Monochrome Options</span>
          <span className="w-2 h-2 rounded-full bg-[#e2e6eb]" />
        </button>
      )}

      {/* 2. Expanded Floating Theme Menu */}
      {isOpen && (
        <div className="w-[310px] sm:w-[370px] max-w-[calc(100vw-24px)] bg-[#12151b]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-3.5 sm:p-4 shadow-2xl shadow-black/90 flex flex-col gap-3 transition-all animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-lg bg-white/10 text-[#f0f2f5]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-[#f0f2f5] leading-tight">
                  Monochromatic Themes
                </h4>
                <p className="text-[10.5px] text-[#9aa2af] font-medium">
                  Zero Green • Soft Shades of Grey & Platinum
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#9aa2af] hover:text-[#f0f2f5] transition-colors"
              title="Close Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Theme Option Cards */}
          <div className="flex flex-col gap-2">
            {MONO_OPTIONS.map((opt) => {
              const isSelected = currentPreset === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => selectPreset(opt.id)}
                  className={`w-full text-left p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                    isSelected
                      ? "bg-white/10 border-[#e2e6eb] shadow-lg shadow-white/5 ring-1 ring-[#e2e6eb]"
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
                            className="w-3.5 h-3.5 rounded-full border border-black/50 shadow-sm"
                          />
                        ))}
                      </div>

                      <span
                        className={`text-xs sm:text-[13px] font-black leading-tight ${
                          isSelected ? "text-[#f0f2f5]" : "text-[#d1d5db]"
                        }`}
                      >
                        {opt.name}
                      </span>
                    </div>

                    {isSelected && (
                      <span className="p-0.5 rounded-full bg-[#e2e6eb] text-[#0e1115]">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </div>

                  <p className="text-[10px] sm:text-[11px] text-[#9aa2af] font-normal leading-snug pl-6">
                    {opt.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="pt-2 border-t border-white/10 text-center">
            <p className="text-[10px] text-[#9aa2af] leading-tight">
              Test each option on mobile & desktop. Tell me your preferred number to make it final!
            </p>
          </div>
        </div>
      )}
    </aside>
  );
};
