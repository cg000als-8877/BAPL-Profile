"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { Globe2, Sparkles } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const BuyersSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [activeBuyerId, setActiveBuyerId] = useState<number | null>(null);

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
    {
      id: 10,
      name: "BCBG",
      country: "United States",
      flag: "🇺🇸",
      region: "California, USA",
      src: "/logos/buyers/10.png",
    },
    {
      id: 1,
      name: "Body Glove",
      country: "United States",
      flag: "🇺🇸",
      region: "California, USA",
      src: "/logos/buyers/1.png",
    },
    {
      id: 17,
      name: "True Religion",
      country: "United States",
      flag: "🇺🇸",
      region: "California, USA",
      src: "/logos/buyers/17.png",
    },
    {
      id: 16,
      name: "Stokomani",
      country: "France",
      flag: "🇫🇷",
      region: "Paris, France",
      src: "/logos/buyers/16.png",
    },
    {
      id: 15,
      name: "Torkard Clothing",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Nottingham, UK",
      src: "/logos/buyers/15.png",
    },
    {
      id: 7,
      name: "Airwalk",
      country: "United States",
      flag: "🇺🇸",
      region: "California, USA",
      src: "/logos/buyers/7.png",
    },
    {
      id: 5,
      name: "Bench",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Manchester, UK",
      src: "/logos/buyers/5.png",
    },
    {
      id: 8,
      name: "Joe's Jeans",
      country: "United States",
      flag: "🇺🇸",
      region: "Los Angeles, USA",
      src: "/logos/buyers/8.png",
    },
    {
      id: 6,
      name: "Original Weatherproof",
      country: "United States",
      flag: "🇺🇸",
      region: "New York, USA",
      src: "/logos/buyers/6.png",
    },
    {
      id: 2,
      name: "Soul Star",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "London, UK",
      src: "/logos/buyers/2.png",
    },
    {
      id: 13,
      name: "Brave Soul",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "London, UK",
      src: "/logos/buyers/13.png",
    },
    {
      id: 3,
      name: "Buffalo David Bitton",
      country: "Canada",
      flag: "🇨🇦",
      region: "Montreal, Canada",
      src: "/logos/buyers/3.png",
    },
    {
      id: 4,
      name: "DKNY",
      country: "United States",
      flag: "🇺🇸",
      region: "New York, USA",
      src: "/logos/buyers/4.png",
    },
    {
      id: 12,
      name: "Umbro",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Cheshire, UK",
      src: "/logos/buyers/12.png",
    },
    {
      id: 9,
      name: "Steve Jeans",
      country: "France",
      flag: "🇫🇷",
      region: "Paris, France",
      src: "/logos/buyers/9.png",
    },
    {
      id: 14,
      name: "Kenneth Cole",
      country: "United States",
      flag: "🇺🇸",
      region: "New York, USA",
      src: "/logos/buyers/14.png",
    },
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

        {/* 2. Responsive Bento Grid: 2-Col Mobile (Generous Large Logo Size) & 4-Col Desktop */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3.5 min-h-0 overflow-y-auto sm:overflow-visible pr-0.5"
        >
          {buyerLogos.map((buyer) => {
            const isSelected = activeBuyerId === buyer.id;
            return (
              <div
                key={buyer.id}
                onClick={() =>
                  setActiveBuyerId(isSelected ? null : buyer.id)
                }
                className="group relative bg-white/95 hover:bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl border border-white/80 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl flex items-center justify-center min-h-[64px] sm:min-h-[85px] md:min-h-0 h-full overflow-hidden cursor-pointer"
              >
                {/* Default State: Clean High-Res Transparent PNG Brand Logo */}
                <div
                  className={`relative w-full h-full flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "opacity-10 scale-90"
                      : "opacity-100 group-hover:opacity-10 group-hover:scale-90"
                  }`}
                >
                  <Image
                    src={buyer.src}
                    alt={buyer.name}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                    className="object-contain object-center p-1 sm:p-2"
                  />
                </div>

                {/* Interactive Overlay: Shows on Desktop Hover & Mobile Click/Tap */}
                <div
                  className={`absolute inset-0 bg-slate-950/95 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center p-1.5 sm:p-3 text-center border border-[#55c538]/50 rounded-xl sm:rounded-2xl shadow-2xl ${
                    isSelected
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                  }`}
                >
                  {/* Flag Emoji Badge */}
                  <span className="text-2xl sm:text-3xl md:text-4xl drop-shadow-md mb-0.5 sm:mb-1 animate-bounce">
                    {buyer.flag}
                  </span>

                  {/* Brand Name */}
                  <h4 className="text-xs sm:text-sm font-black text-white leading-tight truncate max-w-full">
                    {buyer.name}
                  </h4>

                  {/* Origin Country & Region */}
                  <span className="text-[10px] sm:text-xs font-extrabold text-[#72e055] uppercase tracking-wider mt-0.5">
                    {buyer.country}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium truncate max-w-full">
                    {buyer.region}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AspectWrapper>
  );
};
