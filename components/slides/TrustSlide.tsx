"use client";

import React, { useEffect, useRef } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { ShieldCheck, Award, CheckCircle2, Sparkles, Building } from "lucide-react";

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
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );

      gsap.fromTo(
        certsRef.current?.children || [],
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: "back.out(1.2)" }
      );

      gsap.fromTo(
        buyersRef.current?.children || [],
        { opacity: 0, scale: 0.9, y: 15 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const buyers = [
    { name: "DKNY", sub: "Donna Karan New York", color: "font-black tracking-widest text-slate-900" },
    { name: "BODY GLOVE", sub: "California Activewear", color: "font-black tracking-wider text-slate-900" },
    { name: "AIRWALK", sub: "Action Sports & Streetwear", color: "font-black tracking-wider text-red-600" },
    { name: "UMBRO", sub: "Global Football & Sportswear", color: "font-black tracking-widest text-slate-900" },
    { name: "KENNETH COLE", sub: "New York Fashion", color: "font-bold tracking-wider text-slate-800" },
    { name: "TRUE RELIGION", sub: "Premium Denim USA", color: "font-black tracking-widest text-slate-900" },
    { name: "BENCH.", sub: "Urban Lifestyle UK", color: "font-black tracking-tighter text-slate-900" },
    { name: "SOUL STAR", sub: "Modern Menswear", color: "font-extrabold tracking-wide text-slate-800" },
    { name: "BUFFALO", sub: "David Bitton Denim", color: "font-black tracking-wider text-slate-900" },
    { name: "WEATHERPROOF", sub: "Vintage Since 1948", color: "font-serif italic font-bold text-slate-800" },
    { name: "JOE'S", sub: "Los Angeles Jeans", color: "font-black text-slate-900" },
    { name: "BRAVE SOUL", sub: "British Trendwear", color: "font-bold tracking-wider text-slate-800" },
    { name: "BCBG", sub: "Max Azria Fashion", color: "font-light tracking-[0.3em] text-slate-900" },
    { name: "STOKOMANI", sub: "Des Marques, Des Prix", color: "font-bold tracking-tight text-teal-700" },
    { name: "TORKARD", sub: "Clothing Co.", color: "font-bold tracking-widest text-amber-800" },
    { name: "STEVE JEANS", sub: "Denim Specialists", color: "font-bold tracking-tight text-slate-800" },
  ];

  return (
    <AspectWrapper className="bg-slate-900 text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-6 md:p-10 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0c1324] via-[#0f172a] to-[#090d18]"
      >
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#88cb5c]">
                Reputation & Credentials
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                GLOBAL TRUST & COMPLIANCE
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700 text-xs text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#88cb5c]" />
            <span>Ethical Audits & Social Compliance</span>
          </div>
        </div>

        {/* Top: Certifications Ribbon */}
        <div className="relative z-10 my-1 sm:my-2">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-[#88cb5c]" />
            <span>International Compliance Certifications</span>
          </div>

          <div
            ref={certsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3"
          >
            {/* BSCI / amfori BSCI */}
            <div className="p-3 rounded-xl bg-white text-slate-900 border border-slate-200 shadow-sm flex items-center gap-3 hover:border-[#69b23f] transition-all">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1">
                  <span>amfori BSCI</span>
                  <span className="text-[10px] font-bold text-[#69b23f] px-1.5 py-0.2 rounded bg-[#69b23f]/15">
                    Certified
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  Business Social Compliance Initiative
                </div>
              </div>
            </div>

            {/* OEKO-TEX Standard 100 */}
            <div className="p-3 rounded-xl bg-white text-slate-900 border border-slate-200 shadow-sm flex items-center gap-3 hover:border-[#69b23f] transition-all">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1">
                  <span>OEKO-TEX® 100</span>
                  <span className="text-[10px] font-bold text-[#69b23f] px-1.5 py-0.2 rounded bg-[#69b23f]/15">
                    Confidence
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  Tested for harmful substances & skin-safe
                </div>
              </div>
            </div>

            {/* BGMEA & Fire Safety */}
            <div className="p-3 rounded-xl bg-white text-slate-900 border border-slate-200 shadow-sm flex items-center gap-3 hover:border-[#69b23f] transition-all">
              <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1">
                  <span>BGMEA Reg: 2673</span>
                  <span className="text-[10px] font-bold text-[#69b23f] px-1.5 py-0.2 rounded bg-[#69b23f]/15">
                    Approved
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  Fire & Safety License C HATTA-6961/97-98
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Buyers We Handled Grid */}
        <div className="relative z-10 my-auto">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#88cb5c]" />
              <span>International Buyers & Global Brands Handled</span>
            </div>
            <span className="text-[10px] text-slate-500">Tier-1 Retail Partners</span>
          </div>

          <div
            ref={buyersRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 max-h-[38vh] overflow-y-auto sm:overflow-visible pr-1"
          >
            {buyers.map((b, i) => (
              <div
                key={i}
                className="group relative p-2.5 sm:p-3 rounded-xl bg-white text-center border border-slate-200/90 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all flex flex-col items-center justify-center min-h-[56px] sm:min-h-[64px]"
              >
                <div className={`text-xs sm:text-sm md:text-base leading-none mb-1 ${b.color}`}>
                  {b.name}
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium truncate max-w-full">
                  {b.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
          <span>Trusted Manufacturing Partner for World-Leading Fashion Houses</span>
          <span className="font-mono font-semibold text-[#88cb5c]">Slide 05 / 06</span>
        </div>
      </div>
    </AspectWrapper>
  );
};
