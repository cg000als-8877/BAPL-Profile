"use client";

import React from "react";

interface NavigationDotsProps {
  totalSlides: number;
  currentSlide: number;
  onSelectSlide: (index: number) => void;
  slideLabels?: string[];
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({
  totalSlides,
  currentSlide,
  onSelectSlide,
  slideLabels = ["Hero", "Capacity", "Strategy", "Products", "Trust", "Contact"],
}) => {
  return (
    <div className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2.5 p-2 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-800/80 shadow-2xl">
      {Array.from({ length: totalSlides }).map((_, index) => {
        const isActive = currentSlide === index;
        const label = slideLabels[index] || `Slide ${index + 1}`;

        return (
          <button
            key={index}
            onClick={() => onSelectSlide(index)}
            className="group relative flex items-center justify-center p-1.5 focus:outline-none"
            aria-label={`Jump to slide ${index + 1}: ${label}`}
          >
            {/* Tooltip on hover */}
            <span className="pointer-events-none absolute right-8 px-2.5 py-1 rounded-md bg-slate-900 text-white text-[11px] font-medium tracking-wide whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all border border-slate-700 shadow-lg">
              {String(index + 1).padStart(2, "0")}. {label}
            </span>

            {/* Dot indicator */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 bg-[#69b23f] ring-4 ring-[#69b23f]/30 scale-110"
                  : "w-2 h-2 bg-slate-500 hover:bg-slate-300 group-hover:scale-125"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};
