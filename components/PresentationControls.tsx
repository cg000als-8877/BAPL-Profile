"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronUp,
  ChevronDown,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  HelpCircle,
} from "lucide-react";

interface PresentationControlsProps {
  totalSlides: number;
  currentSlide: number;
  onPrev: () => void;
  onNext: () => void;
  isAutoPlay: boolean;
  onToggleAutoPlay: () => void;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  totalSlides,
  currentSlide,
  onPrev,
  onNext,
  isAutoPlay,
  onToggleAutoPlay,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <>
      {/* Top Presentation Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800/80 z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#69b23f] to-[#88cb5c] transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Floating Bottom Control Deck - Hidden on mobile for clean full-bleed presentation */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-2 p-1.5 px-3 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-800/90 shadow-2xl text-slate-200">
        {/* Prev Slide */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors focus:outline-none"
          title="Previous Slide (Arrow Up / Left)"
          aria-label="Previous Slide"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        {/* Slide Counter */}
        <div className="px-2 text-xs font-bold flex items-center gap-1">
          <span className="text-[#88cb5c]">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">
            {String(totalSlides).padStart(2, "0")}
          </span>
        </div>

        {/* Next Slide */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-1.5 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors focus:outline-none"
          title="Next Slide (Arrow Down / Right / Space)"
          aria-label="Next Slide"
        >
          <ChevronDown className="w-4 h-4" />
        </button>

        <div className="w-[1px] h-4 bg-slate-700 mx-0.5" />

        {/* AutoPlay Toggle */}
        <button
          onClick={onToggleAutoPlay}
          className={`p-1.5 rounded-full transition-colors focus:outline-none ${
            isAutoPlay
              ? "bg-[#69b23f] text-white shadow-sm shadow-[#69b23f]/50"
              : "hover:bg-slate-800 text-slate-400 hover:text-white"
          }`}
          title={isAutoPlay ? "Pause Auto-play" : "Start Auto-play Slideshow (P)"}
          aria-label="Toggle Auto-play"
        >
          {isAutoPlay ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Play className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors focus:outline-none"
          title="Toggle Fullscreen (F)"
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? (
            <Minimize2 className="w-3.5 h-3.5" />
          ) : (
            <Maximize2 className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Help / Shortcuts tooltip */}
        <div className="relative">
          <button
            onClick={() => setShowShortcuts(!showShortcuts)}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors focus:outline-none"
            title="Keyboard Shortcuts"
            aria-label="Keyboard Shortcuts"
          >
            <HelpCircle className="w-3.5 h-3.5" />
          </button>

          {showShortcuts && (
            <div className="absolute bottom-10 right-0 w-60 p-3 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl text-xs text-slate-300">
              <div className="font-bold text-white mb-2 flex items-center justify-between">
                <span>Keyboard Navigation</span>
                <span className="text-[10px] text-[#88cb5c]">Ready</span>
              </div>
              <ul className="space-y-1 text-[11px]">
                <li className="flex justify-between">
                  <span className="text-slate-400">Next Slide:</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">
                    ↓ / Space / PgDn
                  </kbd>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Prev Slide:</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">
                    ↑ / PgUp
                  </kbd>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Fullscreen:</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">
                    F
                  </kbd>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Auto-play:</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">
                    P
                  </kbd>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
