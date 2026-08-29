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
      gsap.fromTo(
        headerRef.current,
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" }
      );

      gsap.fromTo(
        certsRef.current?.children || [],
        { x: -60, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.05, ease: "expo.out" }
      );

      gsap.fromTo(
        buyersRef.current?.children || [],
        { x: -50, opacity: 0, scale: 0.92 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.02,
          ease: "expo.out",
          delay: 0.1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const buyers = [
    { name: "DKNY", sub: "New York", color: "font-black tracking-widest text-white text-xs sm:text-lg" },
    { name: "BODY GLOVE", sub: "California", color: "font-black tracking-wider text-white text-xs sm:text-lg" },
    { name: "AIRWALK", sub: "Streetwear", color: "font-black tracking-wider text-red-400 text-xs sm:text-lg" },
    { name: "UMBRO", sub: "Sportswear", color: "font-black tracking-widest text-white text-xs sm:text-lg" },
    { name: "KENNETH COLE", sub: "Fashion", color: "font-bold tracking-wider text-slate-200 text-[11px] sm:text-base" },
    { name: "TRUE RELIGION", sub: "Denim USA", color: "font-black tracking-widest text-white text-[11px] sm:text-base" },
    { name: "BENCH.", sub: "Urban UK", color: "font-black tracking-tighter text-white text-xs sm:text-lg" },
    { name: "SOUL STAR", sub: "Menswear", color: "font-extrabold tracking-wide text-slate-200 text-[11px] sm:text-base" },
    { name: "BUFFALO", sub: "David Bitton", color: "font-black tracking-wider text-white text-[11px] sm:text-base" },
    { name: "WEATHERPROOF", sub: "Since 1948", color: "font-serif italic font-bold text-slate-200 text-[11px] sm:text-base" },
    { name: "JOE'S", sub: "LA Jeans", color: "font-black text-white text-xs sm:text-lg" },
    { name: "BRAVE SOUL", sub: "Trendwear", color: "font-bold tracking-wider text-slate-200 text-[11px] sm:text-base" },
    { name: "BCBG", sub: "Max Azria", color: "font-light tracking-[0.2em] text-white text-[11px] sm:text-base" },
    { name: "STOKOMANI", sub: "Des Prix", color: "font-bold tracking-tight text-teal-400 text-[11px] sm:text-base" },
    { name: "TORKARD", sub: "Clothing", color: "font-bold tracking-widest text-amber-400 text-[11px] sm:text-base" },
    { name: "STEVE JEANS", sub: "Denim", color: "font-bold tracking-tight text-slate-200 text-[11px] sm:text-base" },
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-3 sm:gap-4 md:gap-6 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 left-1/3 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 md:gap-4">
            <div className="w-1.5 md:w-2 h-7 md:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Reputation & Credentials
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                GLOBAL TRUST & COMPLIANCE
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 cyber-pill rounded-full text-xs md:text-sm text-slate-200 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#55c538]" />
            <span>Ethical Audits</span>
          </div>
        </div>

        {/* Certifications Ribbon */}
        <div className="flex-1 flex flex-col justify-between max-h-[38%] min-h-0">
          <div className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-[#55c538]" />
            <span>Compliance Certifications</span>
          </div>

          <div
            ref={certsRef}
            className="flex-1 grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6 min-h-0"
          >
            {/* BSCI */}
            <div className="p-3 sm:p-5 md:p-6 rounded-xl md:rounded-2xl cyber-card flex items-center gap-2.5 sm:gap-4 h-full">
              <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <div>
                <div className="text-xs sm:text-lg md:text-xl font-black text-white leading-tight">
                  amfori BSCI
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 hidden sm:block">
                  Social Compliance
                </div>
              </div>
            </div>

            {/* OEKO-TEX */}
            <div className="p-3 sm:p-5 md:p-6 rounded-xl md:rounded-2xl cyber-card flex items-center gap-2.5 sm:gap-4 h-full">
              <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-[#55c538]/20 text-[#72e055] shrink-0">
                <Award className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <div>
                <div className="text-xs sm:text-lg md:text-xl font-black text-white leading-tight">
                  OEKO-TEX® 100
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 hidden sm:block">
                  Skin Safe Tested
                </div>
              </div>
            </div>

            {/* BGMEA & Fire Safety */}
            <div className="p-3 sm:p-5 md:p-6 rounded-xl md:rounded-2xl cyber-card flex items-center gap-2.5 sm:gap-4 h-full">
              <div className="p-2 sm:p-3 rounded-lg md:rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                <Building className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <div>
                <div className="text-xs sm:text-lg md:text-xl font-black text-white leading-tight">
                  BGMEA: 2673
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 hidden sm:block">
                  Fire Licensed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buyers Grid */}
        <div className="flex-1 flex flex-col justify-between min-h-0">
          <div className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#55c538]" />
              <span>International Buyers Handled</span>
            </div>
            <span className="text-[10px] sm:text-xs text-slate-400">Tier-1 Global Fashion</span>
          </div>

          <div
            ref={buyersRef}
            className="flex-1 grid grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 min-h-0"
          >
            {buyers.map((b, i) => (
              <div
                key={i}
                className="group relative p-2 sm:p-3 md:p-4 rounded-xl md:rounded-2xl cyber-card text-center flex flex-col items-center justify-center h-full"
              >
                <div className={`leading-tight ${b.color}`}>
                  {b.name}
                </div>
                <div className="text-[9px] sm:text-xs text-slate-400 font-medium truncate max-w-full hidden sm:block">
                  {b.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
