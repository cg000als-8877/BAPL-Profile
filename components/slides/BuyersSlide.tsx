"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { Globe2 } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const BuyersSlide: React.FC<SlideProps> = ({ isActive }) => {
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
        { y: 20, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.02,
          ease: "expo.out",
          delay: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const buyerLogos = [
    { id: 4, src: "/logos/buyers/4.png", alt: "DKNY" },
    { id: 1, src: "/logos/buyers/1.png", alt: "Body Glove" },
    { id: 17, src: "/logos/buyers/17.png", alt: "True Religion" },
    { id: 12, src: "/logos/buyers/12.png", alt: "Umbro" },
    { id: 5, src: "/logos/buyers/5.png", alt: "Bench" },
    { id: 3, src: "/logos/buyers/3.png", alt: "Buffalo David Bitton" },
    { id: 7, src: "/logos/buyers/7.png", alt: "Airwalk" },
    { id: 8, src: "/logos/buyers/8.png", alt: "Joe's Jeans" },
    { id: 14, src: "/logos/buyers/14.png", alt: "Kenneth Cole" },
    { id: 6, src: "/logos/buyers/6.png", alt: "Original Weatherproof" },
    { id: 10, src: "/logos/buyers/10.png", alt: "BCBG" },
    { id: 13, src: "/logos/buyers/13.png", alt: "Brave Soul" },
    { id: 2, src: "/logos/buyers/2.png", alt: "Soul Star" },
    { id: 9, src: "/logos/buyers/9.png", alt: "Steve Jeans" },
    { id: 15, src: "/logos/buyers/15.png", alt: "Torkard Clothing" },
    { id: 16, src: "/logos/buyers/16.png", alt: "Stokomani" },
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-3.5 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-2.5 sm:gap-4 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                International Retail Portfolio
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                BUYERS WE HANDLED
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Globe2 className="w-4 h-4 text-[#55c538]" />
            <span>16 Global Retail Brands</span>
          </div>
        </div>

        {/* 2. Compact, Snug Bento Grid (No Huge Gaps, Fits 100% On Mobile & Desktop) */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-4 gap-1.5 sm:gap-3.5 min-h-0"
        >
          {buyerLogos.map((buyer) => (
            <div
              key={buyer.id}
              className="group relative bg-white/95 hover:bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-4 shadow-lg border border-white/80 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl flex items-center justify-center h-full overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={buyer.src}
                  alt={buyer.alt}
                  fill
                  sizes="(max-width: 768px) 25vw, 25vw"
                  className="object-contain object-center transition-transform duration-300 group-hover:scale-105 p-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AspectWrapper>
  );
};
