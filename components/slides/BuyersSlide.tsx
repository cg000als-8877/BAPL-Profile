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
  const paraRef = useRef<HTMLDivElement>(null);

  const [activeBuyerId, setActiveBuyerId] = useState<string | null>(null);

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
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.015,
          ease: "power2.out",
          delay: 0.04,
          clearProps: "transform",
        }
      );

      gsap.fromTo(
        paraRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.12, ease: "power2.out", clearProps: "transform" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const buyerLogos = [
    {
      id: "dkny",
      name: "DKNY",
      country: "United States",
      flag: "🇺🇸",
      region: "New York, USA",
      src: "/logos/buyers/dkny.png",
    },
    {
      id: "true-religion",
      name: "True Religion",
      country: "United States",
      flag: "🇺🇸",
      region: "California, USA",
      src: "/logos/buyers/true-religion.png",
    },
    {
      id: "kenneth-cole",
      name: "Kenneth Cole",
      country: "United States",
      flag: "🇺🇸",
      region: "New York, USA",
      src: "/logos/buyers/kenneth-cole.png",
    },
    {
      id: "umbro",
      name: "Umbro",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Cheshire, UK",
      src: "/logos/buyers/umbro.png",
    },
    {
      id: "bcbg",
      name: "BCBG",
      country: "United States",
      flag: "🇺🇸",
      region: "California, USA",
      src: "/logos/buyers/bcbg.png",
    },
    {
      id: "airwalk",
      name: "Airwalk",
      country: "United States",
      flag: "🇺🇸",
      region: "California, USA",
      src: "/logos/buyers/airwalk.png",
    },
    {
      id: "buffalo",
      name: "Buffalo",
      country: "United States",
      flag: "🇺🇸",
      region: "New York, USA",
      src: "/logos/buyers/buffalo.png",
    },
    {
      id: "bench",
      name: "Bench",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Manchester, UK",
      src: "/logos/buyers/bench.png",
    },
    {
      id: "body-glove",
      name: "Body Glove",
      country: "United States",
      flag: "🇺🇸",
      region: "California, USA",
      src: "/logos/buyers/body-glove.png",
    },
    {
      id: "brave-soul",
      name: "Brave Soul",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "London, UK",
      src: "/logos/buyers/brave-soul.png",
    },
    {
      id: "joes",
      name: "Joe's Jeans",
      country: "United States",
      flag: "🇺🇸",
      region: "California, USA",
      src: "/logos/buyers/joes.png",
    },
    {
      id: "soulstar",
      name: "Soulstar",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "London, UK",
      src: "/logos/buyers/soulstar.png",
    },
    {
      id: "stevejeans",
      name: "Steve Jeans",
      country: "France",
      flag: "🇫🇷",
      region: "Paris, France",
      src: "/logos/buyers/stevejeans.png",
    },
    {
      id: "stok-omani",
      name: "Stok Omani",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "London, UK",
      src: "/logos/buyers/stok-omani.png",
    },
    {
      id: "torkard",
      name: "Torkard",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Nottingham, UK",
      src: "/logos/buyers/torkard.png",
    },
    {
      id: "weatherproof",
      name: "Weatherproof Vintage",
      country: "United States",
      flag: "🇺🇸",
      region: "New York, USA",
      src: "/logos/buyers/weatherproof.png",
    },
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-3 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between gap-2 sm:gap-3 overflow-y-visible md:overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-6 sm:h-10 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                International Retail Portfolio
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-normal">
                BUYERS WE HANDLED
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Globe2 className="w-4 h-4 text-[#55c538]" />
            <span>16 Global Retail Brands</span>
          </div>
        </div>

        {/* 2. Responsive Bento Grid: 2-Col Mobile & 4-Col Desktop */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 min-h-0 content-center"
        >
          {buyerLogos.map((buyer) => {
            const isSelected = activeBuyerId === buyer.id;
            return (
              <div
                key={buyer.id}
                onClick={() =>
                  setActiveBuyerId(isSelected ? null : buyer.id)
                }
                className="group relative bg-white hover:bg-slate-50 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-lg border border-white/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center aspect-[2.3/1] sm:aspect-[2.5/1] md:aspect-[2.4/1] w-full overflow-hidden cursor-pointer"
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
                    unoptimized
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                    className="object-contain object-center"
                  />
                </div>

                {/* Interactive Overlay: Shows on Desktop Hover & Mobile Click/Tap */}
                <div
                  className={`absolute inset-0 bg-slate-950/95 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center p-1 sm:p-2 text-center border border-[#55c538]/50 rounded-xl sm:rounded-2xl shadow-2xl ${
                    isSelected
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                  }`}
                >group-hover:opacity-100 group-hover:pointer-events-auto"
                  }`}
                >
                  {/* Flag Emoji Badge */}
                  <span className="text-base sm:text-2xl md:text-3xl drop-shadow-md leading-none mb-0.5">
                    {buyer.flag}
                  </span>

                  {/* Brand Name */}
                  <h4 className="text-[11px] sm:text-sm font-black text-white leading-tight truncate max-w-full">
                    {buyer.name}
                  </h4>

                  {/* Origin Country & Region */}
                  <span className="text-[9.5px] sm:text-xs font-extrabold text-[#72e055] uppercase tracking-wider leading-tight mt-0.5 truncate max-w-full">
                    {buyer.country}
                  </span>
                  <span className="hidden sm:block text-[11px] sm:text-xs text-slate-300 font-medium truncate max-w-full">
                    {buyer.region}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Engaging & Convincing Sourcing Paragraph Under Buyer Cards */}
        <div
          ref={paraRef}
          className="shrink-0 p-2.5 sm:p-3 md:p-3.5 rounded-xl sm:rounded-2xl bg-[#081122]/90 border border-slate-700/60 backdrop-blur-md flex items-center gap-2.5 sm:gap-3.5 shadow-xl"
        >
          <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[#55c538]/20 text-[#72e055] shrink-0">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex-1 min-w-0">
            {/* Desktop Paragraph */}
            <p className="hidden md:block text-xs lg:text-sm text-slate-200 leading-relaxed font-medium">
              <span className="font-extrabold text-white">Three Decades of Global Export Mastery:</span> Trusted by premier fashion houses and leading retail brands across North America and Europe. From precision fabric sourcing to full container shipments, we deliver uncompromised quality, strict compliance (amfori BSCI & OEKO-TEX), and guaranteed on-time execution.
            </p>
            {/* Mobile Paragraph */}
            <p className="block md:hidden text-[11px] sm:text-xs text-slate-200 leading-snug font-medium">
              <span className="font-extrabold text-white">30+ Years Global Trust:</span> Trusted by iconic retail brands across USA & Europe for precision knit & woven manufacturing, strict compliance, and on-time shipments.
            </p>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
