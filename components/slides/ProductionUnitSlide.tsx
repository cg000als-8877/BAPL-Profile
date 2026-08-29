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
  Sparkles,
  Compass,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const ProductionUnitSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" }
      );

      gsap.fromTo(
        addressRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, delay: 0.05, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { x: -60, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.04,
          ease: "expo.out",
          delay: 0.1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="relative bg-[#061126] text-white overflow-hidden">
      {/* Blueprint Architectural Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/blueprint.jpg"
          alt="Production Unit Architectural Blueprint & Engineering Layout"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90 contrast-110 opacity-60 mix-blend-screen"
        />
        {/* Soft Blueprint Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-[#071329]/70 to-[#050b18]/80" />
        <div className="absolute inset-0 bg-[#091838]/40 mix-blend-multiply" />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-3 sm:gap-5 overflow-hidden"
      >
        {/* Top Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-2 md:w-2.5 h-8 md:h-12 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#55c538]" />
                <span>Architectural Engineering & Facility</span>
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

        {/* Address Card Under Title */}
        <div
          ref={addressRef}
          className="shrink-0 p-4 sm:p-5 md:p-6 rounded-2xl cyber-card bg-slate-950/80 border border-sky-500/30 flex flex-col md:flex-row md:items-center justify-between gap-3"
        >
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#72e055] uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4 text-[#55c538]" />
              <span>Headquarters & Production Facility Location</span>
            </div>
            <h3 className="text-base sm:text-xl md:text-2xl font-black text-white mb-1">
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

        {/* 4 Facility Specification Cards */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 min-h-0"
        >
          {/* Tile 1: Multi-Story Building */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between h-full border-sky-500/20">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-sky-400 uppercase tracking-wider">
                Elevation & Structure
              </span>
              <div className="p-2 rounded-xl bg-sky-500/20 text-sky-300">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="my-auto py-1">
              <div className="text-xl sm:text-3xl md:text-4xl font-black text-white">
                21.50 M
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                6-Story Manufacturing Complex
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400">
              32.00m North × 12.80m East Floor Plan
            </div>
          </div>

          {/* Tile 2: Total Floor Space */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between h-full border-emerald-500/20">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-[#72e055] uppercase tracking-wider">
                Floor Area
              </span>
              <div className="p-2 rounded-xl bg-[#55c538]/20 text-[#72e055]">
                <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="my-auto py-1">
              <div className="text-xl sm:text-3xl md:text-4xl font-black text-white">
                38,000 <span className="text-xs sm:text-sm text-slate-400 font-bold">SQ. FT</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#72e055] mt-1">
                320,000 SFT Total Campus
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400">
              Dedicated Cutting, Sewing & Finishing
            </div>
          </div>

          {/* Tile 3: Monthly Throughput */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between h-full border-blue-500/20">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-blue-400 uppercase tracking-wider">
                Monthly Capacity
              </span>
              <div className="p-2 rounded-xl bg-blue-500/20 text-blue-300">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="my-auto py-1">
              <div className="text-xl sm:text-3xl md:text-4xl font-black text-white">
                300,000
              </div>
              <div className="text-xs sm:text-sm font-bold text-blue-400 mt-1">
                Pieces / Month Throughput
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400">
              High-Speed Production Lines
            </div>
          </div>

          {/* Tile 4: Compliance & Safety License */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between h-full border-amber-500/20">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-amber-400 uppercase tracking-wider">
                Safety & Compliance
              </span>
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="my-auto py-1">
              <div className="text-xl sm:text-3xl md:text-4xl font-black text-white">
                700+
              </div>
              <div className="text-xs sm:text-sm font-bold text-amber-400 mt-1">
                Artisans + 35 Key Staff
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400">
              Fire License: CHATTA-6961 • BGMEA: 2673
            </div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
