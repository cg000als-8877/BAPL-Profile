"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { ImageIcon } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const CatalogSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 20, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.015,
          ease: "expo.out",
          delay: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  // Total 20 Blank 3:4 Catalog Frames
  const catalogFrames = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: "",
    label: `Look ${String(i + 1).padStart(2, "0")}`,
  }));

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-3.5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center overflow-y-visible md:overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] h-96 md:h-[600px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 20 Blank 3:4 Aspect Ratio Catalog Frames Grid */}
        <div
          ref={gridRef}
          className="relative z-10 w-full max-w-7xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 md:gap-3.5 lg:gap-4 my-auto py-1.5"
        >
          {catalogFrames.map((frame) => (
            <div
              key={frame.id}
              className="group relative w-full aspect-[3/4] bg-white/95 hover:bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-lg border border-white/80 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[#55c538]/30 cursor-pointer"
            >
              {frame.src ? (
                <Image
                  src={frame.src}
                  alt={frame.label}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover object-center rounded-lg sm:rounded-xl"
                />
              ) : (
                <div className="w-full h-full rounded-lg sm:rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-1.5 sm:p-2 transition-colors group-hover:border-[#55c538]/60 bg-slate-50/60">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-slate-200/80 flex items-center justify-center text-slate-400 group-hover:text-[#55c538] group-hover:bg-[#55c538]/10 transition-all shadow-sm">
                    <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] md:text-xs font-black text-slate-400 group-hover:text-slate-700 mt-1 uppercase tracking-wider font-mono">
                    {frame.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AspectWrapper>
  );
};
