"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  Building2,
  MapPin,
  Phone,
  Maximize2,
  Layers,
  ShieldCheck,
  Compass,
  Sparkles,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const ProductionUnitSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const blueprintRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        blueprintRef.current,
        { x: -50, opacity: 0, scale: 0.97 },
        { x: 0, opacity: 1, scale: 1, duration: 0.45, delay: 0.05, ease: "expo.out" }
      );

      gsap.fromTo(
        addressRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, delay: 0.1, ease: "expo.out" }
      );

      gsap.fromTo(
        specsRef.current?.children || [],
        { x: -30, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.04,
          ease: "expo.out",
          delay: 0.15,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-3 sm:gap-4 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-2 md:w-2.5 h-8 md:h-12 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#55c538]" />
                <span>Facility Architecture & Engineering Layout</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                PRODUCTION UNIT
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Building2 className="w-4 h-4 text-[#55c538]" />
            <span>Multi-Story RMG Campus</span>
          </div>
        </div>

        {/* 2. Blueprint Architectural Image on Top */}
        <div
          ref={blueprintRef}
          className="shrink-0 relative w-full h-44 sm:h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden cyber-card border border-sky-500/40 shadow-2xl bg-[#081226]"
        >
          <Image
            src="/blueprint.jpg"
            alt="Byzid Apparels Architectural Blueprint & Structural Elevation"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center"
          />
          {/* Subtle Blueprint Glass Overlay Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-lg cyber-pill border-sky-500/30 text-[10px] sm:text-xs font-black text-sky-300 shadow-md flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>ENGINEERING BLUEPRINT: 6-STORY COMPLEX</span>
          </div>
        </div>

        {/* 3. Address Card Under the Blueprint */}
        <div
          ref={addressRef}
          className="shrink-0 p-3.5 sm:p-5 rounded-2xl cyber-card border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-950/80"
        >
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#72e055] uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4 text-[#55c538]" />
              <span>Headquarters & Production Facility Location</span>
            </div>
            <h3 className="text-base sm:text-xl md:text-2xl font-black text-white mb-0.5">
              Byzid Apparels (Pvt) Ltd.
            </h3>
            <p className="text-xs sm:text-base text-slate-200 font-medium">
              ABM Tower, 671/1, Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
            </p>
          </div>

          <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800 md:pl-6">
            <a
              href="tel:008802334451856"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#55c538] text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-[#55c538]/30 hover:bg-[#72e055] transition-all"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>TEL # 0088-02334451856</span>
            </a>
          </div>
        </div>

        {/* 4. Factory Facility Key Specifications Grid */}
        <div
          ref={specsRef}
          className="shrink-0 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4"
        >
          <div className="p-3 sm:p-4 rounded-xl cyber-card flex flex-col justify-between border-sky-500/20">
            <span className="text-[10px] sm:text-xs font-bold text-sky-400 uppercase">Building Elevation</span>
            <div className="text-base sm:text-2xl font-black text-white mt-0.5">
              21.50 M Height
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400">6 Production Floors</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl cyber-card flex flex-col justify-between border-emerald-500/20">
            <span className="text-[10px] sm:text-xs font-bold text-[#72e055] uppercase">Floor Space</span>
            <div className="text-base sm:text-2xl font-black text-white mt-0.5">
              38,000 SQ. FT
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400">320,000 SFT Total Campus</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl cyber-card flex flex-col justify-between border-blue-500/20">
            <span className="text-[10px] sm:text-xs font-bold text-blue-400 uppercase">Production Output</span>
            <div className="text-base sm:text-2xl font-black text-white mt-0.5">
              300,000 Pcs/Mo
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400">Monthly Capacity</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl cyber-card flex flex-col justify-between border-amber-500/20">
            <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase">Workforce & Safety</span>
            <div className="text-base sm:text-2xl font-black text-white mt-0.5">
              700+ Personnel
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400">Fire License: CHATTA-6961</div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
