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
          duration: 0.5,
          stagger: 0.08,
          ease: "expo.out",
          delay: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  // 3 Blank 3:4 Catalog Frames (3 Per Row, Perfectly Sized & Contained)
  const catalogFrames = [
    { id: 1, src: "", label: "Look 01" },
    { id: 2, src: "", label: "Look 02" },
    { id: 3, src: "", label: "Look 03" },
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full min-h-[100dvh] p-4 sm:p-8 md:p-12 lg:p-14 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] h-96 md:h-[600px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 3:4 Aspect Ratio Blank White Catalog Frames Grid (3 Per Row, 100% In-Frame) */}
        <div
          ref={gridRef}
          className="relative z-10 w-full max-w-6xl flex-1 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 my-auto py-2"
        >
          {catalogFrames.map((frame) => (
            <div
              key={frame.id}
              className="group relative h-[28vh] sm:h-[68vh] md:h-[72vh] max-h-[640px] aspect-[3/4] w-auto bg-white/95 hover:bg-white rounded-2xl md:rounded-3xl p-2.5 sm:p-3 shadow-2xl border-2 border-white/90 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[#55c538]/30"
            >
              {frame.src ? (
                <Image
                  src={frame.src}
                  alt={frame.label}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 90vw, 30vw"
                  className="object-cover object-center rounded-xl md:rounded-2xl"
                />
              ) : (
                <div className="w-full h-full rounded-xl md:rounded-2xl border-2 border-dashed border-slate-300/80 flex flex-col items-center justify-center text-center p-4 transition-colors group-hover:border-[#55c538]/60 bg-slate-50/50">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-200/80 flex items-center justify-center text-slate-400 group-hover:text-[#55c538] group-hover:bg-[#55c538]/10 transition-all shadow-sm">
                    <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <span className="text-xs sm:text-sm font-black text-slate-400 group-hover:text-slate-700 mt-3 uppercase tracking-widest">
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
