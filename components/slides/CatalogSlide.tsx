"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { ImageIcon, Sparkles } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
  startId?: number;
  endId?: number;
  title?: string;
  subtitle?: string;
}

interface FrameProps {
  id: number;
  label: string;
}

const CatalogFrameItem: React.FC<FrameProps> = ({ id, label }) => {
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
        background: "radial-gradient(circle at 50% 50%, #ffffff 0%, #f2f2f2 40%, #cccccc 100%)",
      }}
      className="group relative w-full h-full aspect-[3/4] max-h-full mx-auto rounded-lg md:rounded-xl p-0.5 sm:p-1 shadow-md border border-white/80 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:scale-[1.05] hover:shadow-[#55c538]/30 cursor-pointer"
    >
      {!hasError ? (
        <div
          style={{
            background: "radial-gradient(circle at 50% 50%, #ffffff 0%, #f2f2f2 40%, #cccccc 100%)",
          }}
          className="relative w-full h-full rounded-md md:rounded-lg overflow-hidden flex items-center justify-center"
        >
          <Image
            src={imgSrc}
            alt={label}
            fill
            unoptimized
            onError={handleError}
            sizes="(max-width: 1024px) 15vw, 10vw"
            className="object-contain object-center p-0.5"
          />
        </div>
      ) : (
        <div
          style={{
            background: "radial-gradient(circle at 50% 50%, #ffffff 0%, #f2f2f2 40%, #cccccc 100%)",
          }}
          className="w-full h-full rounded-md md:rounded-lg border border-dashed border-slate-400 flex flex-col items-center justify-center text-center p-0.5 transition-colors group-hover:border-[#55c538]/60"
        >
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-md bg-slate-300/80 flex items-center justify-center text-slate-500 group-hover:text-[#55c538] group-hover:bg-[#55c538]/10 transition-all shadow-sm">
            <ImageIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </div>
          <span className="text-[9.5px] sm:text-[10.5px] font-black text-slate-500 group-hover:text-slate-800 mt-0.5 uppercase tracking-wider">
            {label}
          </span>
        </div>
      )}
    </div>
  );
};

export const CatalogSlide: React.FC<SlideProps> = ({
  isActive,
  startId = 1,
  endId = 40,
  title = "PRODUCT IMAGES",
  subtitle = "Garment Lookbook & Portfolio",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", clearProps: "transform" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.006,
          ease: "power2.out",
          delay: 0.05,
          clearProps: "transform",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const frameCount = endId - startId + 1;
  const catalogFrames = Array.from({ length: frameCount }, (_, i) => ({
    id: startId + i,
    label: `Look ${String(startId + i).padStart(2, "0")}`,
  }));

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-3 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between gap-2 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header: PRODUCT IMAGES */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-5 sm:h-8 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#72e055]">
                {subtitle}
              </div>
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-normal leading-tight">
                {title}
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#55c538]" />
            <span>
              Looks {String(startId).padStart(2, "0")}–{String(endId).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* 2. Grid: 10 Columns x 4 Rows perfectly fitted within the slide without overflow */}
        <div
          ref={gridRef}
          className="flex-1 min-h-0 w-full grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 md:grid-rows-4 gap-1 sm:gap-1.5 md:gap-2 my-auto items-center justify-items-center"
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
