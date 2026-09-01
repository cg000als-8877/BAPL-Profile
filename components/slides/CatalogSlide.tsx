"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import { Sparkles, ImageIcon, ChevronDown } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

interface FrameProps {
  id: number;
  label: string;
  aspectClass: string;
}

const PinterestFrameItem: React.FC<FrameProps> = ({
  id,
  label,
  aspectClass,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(`/Product Images/${id}.webp`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc.endsWith(".webp")) {
      setImgSrc(`/Product Images/${id}.png`);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #ffffff 0%, #f4f4f6 45%, #e2e2e8 100%)",
      }}
      className={`group relative w-full ${aspectClass} rounded-xl p-1 flex flex-col items-center justify-center overflow-hidden select-none border-none shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-200 cursor-pointer`}
    >
      {!hasError ? (
        <div className="relative w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src={imgSrc}
            alt={label}
            fill
            unoptimized
            onError={handleError}
            sizes="(max-width: 768px) 33vw, 12vw"
            className="object-contain object-center p-0.5 sm:p-1"
          />
        </div>
      ) : (
        <div className="w-full h-full rounded-lg border border-dashed border-slate-400 flex flex-col items-center justify-center text-center p-1">
          <div className="w-4 h-4 rounded-md bg-slate-300/80 flex items-center justify-center text-slate-500 mb-0.5">
            <ImageIcon className="w-3 h-3" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-black text-slate-500 uppercase">
            {label}
          </span>
        </div>
      )}
    </div>
  );
};

export const CatalogSlide: React.FC<SlideProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Desktop initially loads 27 items (3 rows of 9), mobile initially loads 12 items (4 rows of 3)
  const [visibleCount, setVisibleCount] = useState(27);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    if (window.innerWidth < 768) {
      setVisibleCount(12);
    }

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalFrames = Array.from({ length: 80 }, (_, i) => ({
    id: i + 1,
    label: `Look ${String(i + 1).padStart(2, "0")}`,
  }));

  const visibleFrames = totalFrames.slice(0, visibleCount);

  // Varied Pinterest aspect patterns across 9 columns
  const aspectPatterns = [
    ["aspect-[3/4.2]", "aspect-[3/4]", "aspect-[2/3]", "aspect-[4/5]"],
    ["aspect-[2/3]", "aspect-[4/5]", "aspect-[3/4.2]", "aspect-[3/4]"],
    ["aspect-[3/4]", "aspect-[2/3]", "aspect-[4/5]", "aspect-[3/4.2]"],
    ["aspect-[4/5]", "aspect-[3/4.2]", "aspect-[3/4]", "aspect-[2/3]"],
    ["aspect-[3/4.2]", "aspect-[2/3]", "aspect-[3/4]", "aspect-[4/5]"],
    ["aspect-[2/3]", "aspect-[3/4.2]", "aspect-[4/5]", "aspect-[3/4]"],
    ["aspect-[3/4]", "aspect-[4/5]", "aspect-[2/3]", "aspect-[3/4.2]"],
    ["aspect-[4/5]", "aspect-[3/4]", "aspect-[3/4.2]", "aspect-[2/3]"],
    ["aspect-[3/4.2]", "aspect-[4/5]", "aspect-[2/3]", "aspect-[3/4]"],
  ];

  const handleLoadMore = () => {
    const increment = isMobile ? 12 : 27;
    setVisibleCount((prev) => Math.min(prev + increment, 80));
  };

  return (
    <AspectWrapper className="bg-transparent text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between gap-4 overflow-visible"
      >

        {/* 1. Header */}
        <div
          ref={headerRef}
          className="shrink-0 flex items-center justify-center md:justify-between w-full"
        >
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-2.5 sm:gap-4 w-full md:w-auto">
            <div className="hidden md:block w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Garment Lookbook & Portfolio
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-normal">
                PRODUCT IMAGES
              </h2>
              <div className="block md:hidden w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#55c538] to-transparent rounded-full mt-2" />
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Sparkles className="w-4 h-4 text-[#55c538]" />
            <span>Showing {visibleFrames.length} of 80 Looks</span>
          </div>
        </div>

        {/* 2. DESKTOP VIEW: 9-Column Pinterest Stream Grid */}
        <div className="hidden md:grid md:grid-cols-9 gap-2.5 lg:gap-3 w-full my-auto items-start">
          {Array.from({ length: 9 }, (_, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-2.5 lg:gap-3 w-full">
              {visibleFrames
                .filter((_, idx) => idx % 9 === colIdx)
                .map((frame, itemIdx) => {
                  const patterns = aspectPatterns[colIdx];
                  const aspect = patterns[itemIdx % patterns.length];
                  return (
                    <PinterestFrameItem
                      key={frame.id}
                      id={frame.id}
                      label={frame.label}
                      aspectClass={aspect}
                    />
                  );
                })}
            </div>
          ))}
        </div>

        {/* 3. MOBILE VIEW: 3-Column Pinterest Stream Grid */}
        <div className="grid md:hidden grid-cols-3 gap-2 w-full my-auto items-start">
          {Array.from({ length: 3 }, (_, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-2 w-full">
              {visibleFrames
                .filter((_, idx) => idx % 3 === colIdx)
                .map((frame, itemIdx) => {
                  const patterns = aspectPatterns[colIdx];
                  const aspect = patterns[itemIdx % patterns.length];
                  return (
                    <PinterestFrameItem
                      key={frame.id}
                      id={frame.id}
                      label={frame.label}
                      aspectClass={aspect}
                    />
                  );
                })}
            </div>
          ))}
        </div>

        {/* 4. Load More Button (Desktop + Mobile) */}
        {visibleCount < 80 && (
          <div className="shrink-0 pt-3 pb-2 flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#55c538] hover:bg-[#72e055] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#55c538]/25 active:scale-95 transition-all"
            >
              <span>Load More</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </AspectWrapper>
  );
};
