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

  const [activeBuyerId, setActiveBuyerId] = useState<number | null>(null);

  useEffect(() => {
    if (!isActive || (typeof window !== "undefined" && window.innerWidth < 768)) return;

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
          duration: 0.45,
          stagger: 0.03,
          ease: "power2.out",
          delay: 0.05,
          clearProps: "transform",
        }
      );

      gsap.fromTo(
        paraRef.current,
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          delay: 0.15,
          ease: "power2.out",
          clearProps: "transform",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const buyerLogos = [
    {
      id: 1,
      name: "DKNY",
      country: "United States",
      flag: "🇺🇸",
      region: "North America",
      src: "/logos/buyers/dkny.png",
    },
    {
      id: 2,
      name: "TRUE RELIGION",
      country: "United States",
      flag: "🇺🇸",
      region: "North America",
      src: "/logos/buyers/true-religion.png",
    },
    {
      id: 3,
      name: "KENNETH COLE",
      country: "United States",
      flag: "🇺🇸",
      region: "North America",
      src: "/logos/buyers/kenneth-cole.png",
    },
    {
      id: 4,
      name: "BCBG",
      country: "United States / France",
      flag: "🇺🇸",
      region: "Global Luxury",
      src: "/logos/buyers/bcbg.png",
    },
    {
      id: 5,
      name: "UMBRO",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Europe & Global",
      src: "/logos/buyers/umbro.png",
    },
    {
      id: 6,
      name: "BENCH",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Europe",
      src: "/logos/buyers/bench.png",
    },
    {
      id: 7,
      name: "AIRWALK",
      country: "United States",
      flag: "🇺🇸",
      region: "North America",
      src: "/logos/buyers/airwalk.png",
    },
    {
      id: 8,
      name: "BUFFALO",
      country: "Canada / USA",
      flag: "🇨🇦",
      region: "North America",
      src: "/logos/buyers/buffalo.png",
    },
    {
      id: 9,
      name: "BODY GLOVE",
      country: "United States",
      flag: "🇺🇸",
      region: "North America",
      src: "/logos/buyers/body-glove.png",
    },
    {
      id: 10,
      name: "BRAVE SOUL",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Europe",
      src: "/logos/buyers/brave-soul.png",
    },
    {
      id: 11,
      name: "JOE'S JEANS",
      country: "United States",
      flag: "🇺🇸",
      region: "North America",
      src: "/logos/buyers/joes.png",
    },
    {
      id: 12,
      name: "WEATHERPROOF",
      country: "United States",
      flag: "🇺🇸",
      region: "North America",
      src: "/logos/buyers/weatherproof.png",
    },
    {
      id: 13,
      name: "SOULSTAR",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Europe",
      src: "/logos/buyers/soulstar.png",
    },
    {
      id: 14,
      name: "STOK OMANI",
      country: "France",
      flag: "🇫🇷",
      region: "Europe",
      src: "/logos/buyers/stok-omani.png",
    },
    {
      id: 15,
      name: "TORKARD",
      country: "United Kingdom",
      flag: "🇬🇧",
      region: "Europe",
      src: "/logos/buyers/torkard.png",
    },
    {
      id: 16,
      name: "STEVE JEANS",
      country: "United States / EU",
      flag: "🇺🇸",
      region: "Global Retail",
      src: "/logos/buyers/stevejeans.png",
    },
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between gap-3 sm:gap-4 overflow-y-visible md:overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-center md:justify-between w-full">
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-2.5 sm:gap-4 w-full md:w-auto">
            <div className="hidden md:block w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                International Retail Portfolio
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-normal">
                BUYERS WE HANDLED
              </h2>
              {/* Thin line under title and subtitle on mobile */}
              <div className="block md:hidden w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#55c538] to-transparent rounded-full mt-2" />
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Globe2 className="w-4 h-4 text-[#55c538]" />
            <span>16 Global Retail Brands</span>
          </div>
        </div>

        {/* 2. Responsive Badge Grid: Tight 3-Col Badge Grid on Mobile & 4-Col Desktop */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 min-h-0 content-center"
        >
          {buyerLogos.map((buyer) => {
            const isSelected = activeBuyerId === buyer.id;
            return (
              <div
                key={buyer.id}
                onClick={() =>
                  setActiveBuyerId(isSelected ? null : buyer.id)
                }
                className="group relative bg-white hover:bg-slate-50 rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 shadow-md border border-white/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex items-center justify-center aspect-[2.1/1] sm:aspect-[2.5/1] md:aspect-[2.4/1] w-full overflow-hidden cursor-pointer"
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
                    sizes="(max-width: 640px) 30vw, (max-width: 1024px) 30vw, 20vw"
                    className="object-contain object-center p-0.5 sm:p-1"
                  />
                </div>

                {/* Interactive Overlay: Shows on Desktop Hover & Mobile Click/Tap */}
                <div
                  className={`absolute inset-0 bg-slate-950/95 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center p-1 text-center border border-[#55c538]/50 rounded-xl sm:rounded-2xl shadow-2xl ${
                    isSelected
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                  }`}
                >
                  {/* Flag Emoji Badge */}
                  <span className="text-xs sm:text-2xl md:text-3xl drop-shadow-md leading-none mb-0.5">
                    {buyer.flag}
                  </span>

                  {/* Brand Name */}
                  <h4 className="text-[9.5px] sm:text-sm font-black text-white leading-tight truncate max-w-full">
                    {buyer.name}
                  </h4>

                  {/* Origin Country */}
                  <span className="text-[8px] sm:text-xs font-extrabold text-[#72e055] uppercase tracking-wider leading-tight truncate max-w-full">
                    {buyer.country}
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
