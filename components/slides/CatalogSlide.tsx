"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { ImageIcon, Sparkles } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

interface FrameProps {
  id: number;
  label: string;
}

const CatalogFrameItem: React.FC<FrameProps> = ({ id, label }) => {
  const [hasError, setHasError] = useState(false);
  const imageSrc = `/Product Images/${id}.png`;

  return (
    <div className="group relative w-full aspect-[3/4] max-h-[16vh] sm:max-h-[18vh] bg-white/95 hover:bg-white rounded-xl sm:rounded-2xl p-1 sm:p-1.5 shadow-md border border-white/80 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:scale-[1.04] hover:shadow-[#55c538]/30 cursor-pointer">
      {!hasError ? (
        <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={label}
            fill
            unoptimized
            onError={() => setHasError(true)}
            sizes="(max-width: 640px) 33vw, 20vw"
            className="object-cover object-center"
          />
        </div>
      ) : (
        <div className="w-full h-full rounded-lg sm:rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-1 transition-colors group-hover:border-[#55c538]/60 bg-slate-50/60">
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md bg-slate-200/80 flex items-center justify-center text-slate-400 group-hover:text-[#55c538] group-hover:bg-[#55c538]/10 transition-all shadow-sm">
            <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <span className="text-[8px] sm:text-[9.5px] font-black text-slate-400 group-hover:text-slate-700 mt-0.5 sm:mt-1 uppercase tracking-wider font-mono">
            {label}
          </span>
        </div>
      )}
    </div>
  );
};

export const CatalogSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 15, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          stagger: 0.015,
          ease: "expo.out",
          delay: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  // Total 20 Frames loaded from /Product Images/{1..20}.png
  const catalogFrames = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    label: `Look ${String(i + 1).padStart(2, "0")}`,
  }));

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-3.5 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-2.5 sm:gap-4 overflow-y-visible md:overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header: PRODUCT IMAGES */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Garment Lookbook & Portfolio
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                PRODUCT IMAGES
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Sparkles className="w-4 h-4 text-[#55c538]" />
            <span>20 Showcase Styles</span>
          </div>
        </div>

        {/* 2. Grid: Exactly 3 Frames in One Row on Mobile (grid-cols-3) & 5 Frames per Row on Desktop (md:grid-cols-5) */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-2 sm:gap-2.5 md:gap-3 min-h-0 content-center my-auto py-1"
        >
          {catalogFrames.map((frame) => (
            <CatalogFrameItem
              key={frame.id}
              id={frame.id}
              label={frame.label}
            />
          ))}
        </div>
      </div>
    </AspectWrapper>
  );
};
