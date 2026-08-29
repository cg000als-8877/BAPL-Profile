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
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        certsRef.current?.children || [],
        { x: -50, opacity: 0, scale: 0.97 },
        { x: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.04, ease: "expo.out" }
      );

      gsap.fromTo(
        buyersRef.current?.children || [],
        { x: -40, opacity: 0, scale: 0.94 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.35,
          stagger: 0.02,
          ease: "expo.out",
          delay: 0.08,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const buyers = [
    { name: "DKNY", sub: "New York", color: "font-black tracking-widest text-white text-xs sm:text-base" },
    { name: "BODY GLOVE", sub: "California", color: "font-black tracking-wider text-white text-xs sm:text-base" },
    { name: "AIRWALK", sub: "Streetwear", color: "font-black tracking-wider text-red-400 text-xs sm:text-base" },
    { name: "UMBRO", sub: "Sportswear", color: "font-black tracking-widest text-white text-xs sm:text-base" },
    { name: "KENNETH COLE", sub: "Fashion", color: "font-bold tracking-wider text-slate-200 text-[10px] sm:text-sm" },
    { name: "TRUE RELIGION", sub: "Denim USA", color: "font-black tracking-widest text-white text-[10px] sm:text-sm" },
    { name: "BENCH.", sub: "Urban UK", color: "font-black tracking-tighter text-white text-xs sm:text-base" },
    { name: "SOUL STAR", sub: "Menswear", color: "font-extrabold tracking-wide text-slate-200 text-[10px] sm:text-sm" },
    { name: "BUFFALO", sub: "David Bitton", color: "font-black tracking-wider text-white text-[10px] sm:text-sm" },
    { name: "WEATHERPROOF", sub: "Since 1948", color: "font-serif italic font-bold text-slate-200 text-[10px] sm:text-sm" },
    { name: "JOE'S", sub: "LA Jeans", color: "font-black text-white text-xs sm:text-base" },
    { name: "BRAVE SOUL", sub: "Trendwear", color: "font-bold tracking-wider text-slate-200 text-[10px] sm:text-sm" },
    { name: "BCBG", sub: "Max Azria", color: "font-light tracking-[0.15em] text-white text-[10px] sm:text-sm" },
    { name: "STOKOMANI", sub: "Des Prix", color: "font-bold tracking-tight text-teal-400 text-[10px] sm:text-sm" },
    { name: "TORKARD", sub: "Clothing", color: "font-bold tracking-widest text-amber-400 text-[10px] sm:text-sm" },
    { name: "STEVE JEANS", sub: "Denim", color: "font-bold tracking-tight text-slate-200 text-[10px] sm:text-sm" },
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full max-w-6xl mx-auto p-4 sm:p-8 md:p-12 flex flex-col justify-between overflow-hidden"
      >
        <div className="absolute top-0 left-1/3 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="w-1.5 sm:w-2 h-6 sm:h-9 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#72e055]">
                Reputation & Credentials
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                GLOBAL TRUST & COMPLIANCE
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 cyber-pill rounded-full text-xs font-semibold text-slate-200 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#55c538]" />
            <span>Ethical Audits</span>
          </div>
        </div>

        {/* Certifications Ribbon (Sleek, refined) */}
        <div className="my-auto">
          <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#55c538]" />
            <span>Compliance Certifications</span>
          </div>

          <div
            ref={certsRef}
            className="grid grid-cols-3 gap-2 sm:gap-3.5"
          >
            {/* BSCI */}
            <div className="p-2.5 sm:p-3.5 rounded-xl cyber-card flex items-center gap-2.5 sm:gap-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-indigo-500/20 text-indigo-400 shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
                  amfori BSCI
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 hidden sm:block">
                  Social Compliance
                </div>
              </div>
            </div>

            {/* OEKO-TEX */}
            <div className="p-2.5 sm:p-3.5 rounded-xl cyber-card flex items-center gap-2.5 sm:gap-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-[#55c538]/20 text-[#72e055] shrink-0">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
                  OEKO-TEX® 100
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 hidden sm:block">
                  Skin Safe Tested
                </div>
              </div>
            </div>

            {/* BGMEA & Fire Safety */}
            <div className="p-2.5 sm:p-3.5 rounded-xl cyber-card flex items-center gap-2.5 sm:gap-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-amber-500/20 text-amber-400 shrink-0">
                <Building className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight">
                  BGMEA: 2673
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 hidden sm:block">
                  Fire Licensed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buyers Grid (Compact, neat badges) */}
        <div className="my-auto">
          <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#55c538]" />
              <span>International Buyers Handled</span>
            </div>
            <span className="text-[10px] text-slate-400">Tier-1 Global Fashion</span>
          </div>

          <div
            ref={buyersRef}
            className="grid grid-cols-4 lg:grid-cols-8 gap-1.5 sm:gap-2.5"
          >
            {buyers.map((b, i) => (
              <div
                key={i}
                className="group relative p-2 sm:p-2.5 rounded-lg cyber-card text-center flex flex-col items-center justify-center min-h-[38px] sm:min-h-[50px]"
              >
                <div className={`leading-tight ${b.color}`}>
                  {b.name}
                </div>
                <div className="text-[8px] sm:text-[10px] text-slate-400 font-medium truncate max-w-full hidden sm:block">
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
