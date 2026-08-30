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
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.04,
          ease: "expo.out",
          delay: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  // 6 blank 3:4 catalog frames (3 per row)
  const catalogFrames = [
    { id: 1, src: "", label: "Look 01" },
    { id: 2, src: "", label: "Look 02" },
    { id: 3, src: "", label: "Look 03" },
    { id: 4, src: "", label: "Look 04" },
    { id: 5, src: "", label: "Look 05" },
    { id: 6, src: "", label: "Look 06" },
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-4 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center items-center overflow-y-visible md:overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] h-96 md:h-[600px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Pure 3:4 Aspect Ratio Blank White Catalog Frames Grid (3 Per Row) */}
        <div
          ref={gridRef}
          className="relative z-10 w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 my-auto content-center justify-items-center"
        >
          {catalogFrames.map((frame) => (
            <div
              key={frame.id}
              className="group relative w-full aspect-[3/4] bg-white/95 hover:bg-white rounded-2xl md:rounded-3xl p-2 shadow-2xl border-2 border-white/90 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[#55c538]/20"
            >
              {frame.src ? (
                <Image
                  src={frame.src}
                  alt={frame.label}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover object-center rounded-xl md:rounded-2xl"
                />
              ) : (
                <div className="w-full h-full rounded-xl md:rounded-2xl border-2 border-dashed border-slate-300/80 flex flex-col items-center justify-center text-center p-3 transition-colors group-hover:border-[#55c538]/60 bg-slate-50/50">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-200/80 flex items-center justify-center text-slate-400 group-hover:text-[#55c538] group-hover:bg-[#55c538]/10 transition-all shadow-sm">
                    <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-400 group-hover:text-slate-600 mt-2 uppercase tracking-wider">
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
