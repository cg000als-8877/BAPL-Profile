"use client";

import React, { useEffect, useRef } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { ShieldCheck, Award, Building, Sparkles } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const TrustSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const buyersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      // Magnetic Flash Entrance from Side
      gsap.fromTo(
        headerRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.55, ease: "expo.out" }
      );

      gsap.fromTo(
        certsRef.current?.children || [],
        { x: -90, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "expo.out" }
      );

      gsap.fromTo(
        buyersRef.current?.children || [],
        { x: -70, opacity: 0, scale: 0.92 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.03,
          ease: "expo.out",
          delay: 0.15,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const buyers = [
    { name: "DKNY", sub: "Donna Karan New York", color: "font-black tracking-widest text-slate-900 text-lg md:text-xl" },
    { name: "BODY GLOVE", sub: "California Activewear", color: "font-black tracking-wider text-slate-900 text-lg md:text-xl" },
    { name: "AIRWALK", sub: "Action Sports & Streetwear", color: "font-black tracking-wider text-red-600 text-lg md:text-xl" },
    { name: "UMBRO", sub: "Global Football & Sportswear", color: "font-black tracking-widest text-slate-900 text-lg md:text-xl" },
    { name: "KENNETH COLE", sub: "New York Fashion", color: "font-bold tracking-wider text-slate-800 text-base md:text-lg" },
    { name: "TRUE RELIGION", sub: "Premium Denim USA", color: "font-black tracking-widest text-slate-900 text-base md:text-lg" },
    { name: "BENCH.", sub: "Urban Lifestyle UK", color: "font-black tracking-tighter text-slate-900 text-lg md:text-xl" },
    { name: "SOUL STAR", sub: "Modern Menswear", color: "font-extrabold tracking-wide text-slate-800 text-base md:text-lg" },
    { name: "BUFFALO", sub: "David Bitton Denim", color: "font-black tracking-wider text-slate-900 text-base md:text-lg" },
    { name: "WEATHERPROOF", sub: "Vintage Since 1948", color: "font-serif italic font-bold text-slate-800 text-base md:text-lg" },
    { name: "JOE'S", sub: "Los Angeles Jeans", color: "font-black text-slate-900 text-lg md:text-xl" },
    { name: "BRAVE SOUL", sub: "British Trendwear", color: "font-bold tracking-wider text-slate-800 text-base md:text-lg" },
    { name: "BCBG", sub: "Max Azria Fashion", color: "font-light tracking-[0.25em] text-slate-900 text-base md:text-lg" },
    { name: "STOKOMANI", sub: "Des Marques, Des Prix", color: "font-bold tracking-tight text-teal-700 text-base md:text-lg" },
    { name: "TORKARD", sub: "Clothing Co.", color: "font-bold tracking-widest text-amber-800 text-base md:text-lg" },
    { name: "STEVE JEANS", sub: "Denim Specialists", color: "font-bold tracking-tight text-slate-800 text-base md:text-lg" },
  ];

  return (
    <AspectWrapper className="bg-slate-950 text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-6 sm:p-10 md:p-14 lg:p-20 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#080e1d] via-[#0f172a] to-[#050812]"
      >
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-2 md:w-2.5 h-10 md:h-14 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-xs md:text-sm lg:text-base font-extrabold uppercase tracking-widest text-[#88cb5c]">
                Reputation & Credentials
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                GLOBAL TRUST & COMPLIANCE
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-slate-900/90 rounded-full border border-slate-700 text-xs md:text-sm lg:text-base text-slate-200 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#88cb5c]" />
            <span>Ethical Audits & Social Compliance</span>
          </div>
        </div>

        {/* Top: Certifications Ribbon */}
        <div className="relative z-10 my-auto">
          <div className="text-xs md:text-sm lg:text-base font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-[#88cb5c]" />
            <span>International Compliance Certifications</span>
          </div>

          <div
            ref={certsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
          >
            {/* BSCI */}
            <div className="p-5 md:p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-md flex items-center gap-4 hover:border-[#69b23f] transition-all">
              <div className="p-3 md:p-3.5 rounded-xl bg-indigo-50 text-indigo-700">
                <ShieldCheck className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <div>
                <div className="text-base sm:text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
                  <span>amfori BSCI</span>
                  <span className="text-xs font-bold text-[#69b23f] px-2 py-0.5 rounded bg-[#69b23f]/15">
                    Certified
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Business Social Compliance Initiative
                </div>
              </div>
            </div>

            {/* OEKO-TEX */}
            <div className="p-5 md:p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-md flex items-center gap-4 hover:border-[#69b23f] transition-all">
              <div className="p-3 md:p-3.5 rounded-xl bg-emerald-50 text-emerald-700">
                <Award className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <div>
                <div className="text-base sm:text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
                  <span>OEKO-TEX® 100</span>
                  <span className="text-xs font-bold text-[#69b23f] px-2 py-0.5 rounded bg-[#69b23f]/15">
                    Skin Safe
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Tested for harmful substances & chemicals
                </div>
              </div>
            </div>

            {/* BGMEA & Fire Safety */}
            <div className="p-5 md:p-6 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-md flex items-center gap-4 hover:border-[#69b23f] transition-all">
              <div className="p-3 md:p-3.5 rounded-xl bg-amber-50 text-amber-700">
                <Building className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <div>
                <div className="text-base sm:text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
                  <span>BGMEA Reg: 2673</span>
                  <span className="text-xs font-bold text-[#69b23f] px-2 py-0.5 rounded bg-[#69b23f]/15">
                    Licensed
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Fire & Safety License C HATTA-6961/97-98
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Buyers Grid */}
        <div className="relative z-10 my-auto">
          <div className="text-xs md:text-sm lg:text-base font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#88cb5c]" />
              <span>International Buyers & Global Brands Handled</span>
            </div>
            <span className="text-xs md:text-sm text-slate-500">Tier-1 Retail Partners</span>
          </div>

          <div
            ref={buyersRef}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
          >
            {buyers.map((b, i) => (
              <div
                key={i}
                className="group relative p-3 sm:p-4 rounded-2xl bg-white text-center border border-slate-200 shadow-sm hover:shadow-xl hover:scale-105 transition-all flex flex-col items-center justify-center min-h-[70px] sm:min-h-[85px]"
              >
                <div className={`leading-tight mb-1 ${b.color}`}>
                  {b.name}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-medium truncate max-w-full">
                  {b.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs md:text-sm text-slate-400 pt-3 border-t border-slate-800">
          <span>Trusted Manufacturing Partner for World-Leading Fashion Houses</span>
          <span className="font-mono font-bold text-[#88cb5c]">Slide 05 / 06</span>
        </div>
      </div>
    </AspectWrapper>
  );
};
