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
  TrendingUp,
  Users,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const ProductionUnitSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const blueprintRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);

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
        { x: -40, opacity: 0, scale: 0.98 },
        { x: 0, opacity: 1, scale: 1, duration: 0.45, delay: 0.05, ease: "expo.out" }
      );

      gsap.fromTo(
        specsRef.current?.children || [],
        { x: -50, opacity: 0, scale: 0.97 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.04,
          ease: "expo.out",
          delay: 0.1,
        }
      );

      gsap.fromTo(
        addressRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, delay: 0.15, ease: "expo.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-2.5 sm:gap-4 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Manufacturing Plant
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                PRODUCTION UNIT
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Building2 className="w-4 h-4 text-[#55c538]" />
            <span>Factory Facility</span>
          </div>
        </div>

        {/* 2. CENTER-UPPER: Blueprint Image (Moved UP) */}
        <div
          ref={blueprintRef}
          className="shrink-0 w-full flex items-center justify-center my-0"
        >
          {/* Mobile Image: Exact 738/352 aspect ratio container */}
          <div className="block md:hidden relative w-full aspect-[738/352] max-h-[190px]">
            <Image
              src="/mobile-bp.png"
              alt="Byzid Apparels Architectural Blueprint Mobile View"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-contain object-center"
            />
          </div>

          {/* Desktop Image: Exact 1630/396 aspect ratio container */}
          <div className="hidden md:block relative w-full aspect-[1630/396] max-h-[260px]">
            <Image
              src="/desktop-bp.png"
              alt="Byzid Apparels Architectural Blueprint Desktop View"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* 3. CENTER-LOWER: 4 Capacity Metric Cards (Brought DOWN) */}
        <div
          ref={specsRef}
          className="shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-5"
        >
          {/* 1. Production Capacity */}
          <div className="p-3 sm:p-5 md:p-6 rounded-2xl cyber-card flex items-center sm:flex-col justify-between sm:justify-between border-blue-500/30 bg-[#091426]/95 shadow-xl hover:border-blue-400 transition-all">
            <div className="flex items-center gap-2 sm:w-full sm:justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-blue-400 uppercase tracking-wider">
                Production Capacity
              </span>
              <Layers className="w-5 h-5 text-blue-400 shrink-0 hidden sm:block" />
            </div>
            <div className="text-right sm:text-left sm:w-full sm:my-1.5">
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
                300,000
              </div>
              <div className="text-xs sm:text-sm font-bold text-blue-300 mt-0.5">
                Pieces Per Month
              </div>
            </div>
          </div>

          {/* 2. Factory Space */}
          <div className="p-3 sm:p-5 md:p-6 rounded-2xl cyber-card flex items-center sm:flex-col justify-between sm:justify-between border-emerald-500/30 bg-[#091426]/95 shadow-xl hover:border-[#55c538] transition-all">
            <div className="flex items-center gap-2 sm:w-full sm:justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-[#72e055] uppercase tracking-wider">
                Factory Space
              </span>
              <Maximize2 className="w-5 h-5 text-[#55c538] shrink-0 hidden sm:block" />
            </div>
            <div className="text-right sm:text-left sm:w-full sm:my-1.5">
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
                38,000 <span className="text-xs sm:text-lg text-slate-300 font-bold">SQ. FT</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#72e055] mt-0.5">
                38,000 Sq. Feet Total Space
              </div>
            </div>
          </div>

          {/* 3. Annual Turnover */}
          <div className="p-3 sm:p-5 md:p-6 rounded-2xl cyber-card flex items-center sm:flex-col justify-between sm:justify-between border-amber-500/30 bg-[#091426]/95 shadow-xl hover:border-amber-400 transition-all">
            <div className="flex items-center gap-2 sm:w-full sm:justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-amber-400 uppercase tracking-wider">
                Annual Turnover
              </span>
              <TrendingUp className="w-5 h-5 text-amber-400 shrink-0 hidden sm:block" />
            </div>
            <div className="text-right sm:text-left sm:w-full sm:my-1.5">
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
                $10.00M
              </div>
              <div className="text-xs sm:text-sm font-bold text-amber-300 mt-0.5">
                Million USD / Year
              </div>
            </div>
          </div>

          {/* 4. Total Manpower */}
          <div className="p-3 sm:p-5 md:p-6 rounded-2xl cyber-card flex items-center sm:flex-col justify-between sm:justify-between border-purple-500/30 bg-[#091426]/95 shadow-xl hover:border-purple-400 transition-all">
            <div className="flex items-center gap-2 sm:w-full sm:justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-purple-400 uppercase tracking-wider">
                Total Manpower
              </span>
              <Users className="w-5 h-5 text-purple-400 shrink-0 hidden sm:block" />
            </div>
            <div className="text-right sm:text-left sm:w-full sm:my-1.5">
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
                700
              </div>
              <div className="text-xs sm:text-sm font-bold text-purple-300 mt-0.5">
                Personnel (+ 35 Key Staff)
              </div>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM: Production Unit Address */}
        <div
          ref={addressRef}
          className="shrink-0 p-3 sm:p-4 rounded-2xl cyber-card border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-2.5 bg-slate-950/95 shadow-xl"
        >
          <div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold text-[#72e055] uppercase tracking-wider mb-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#55c538]" />
              <span>Production Unit Address</span>
            </div>
            <h3 className="text-sm sm:text-lg md:text-xl font-black text-white">
              Byzid Apparels (Pvt) Ltd
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-tight">
              ABM Tower, 671/1, Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
            </p>
          </div>

          <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800 md:pl-5">
            <a
              href="tel:008802334451856"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-[#55c538] text-slate-950 font-black text-xs sm:text-sm shadow-md shadow-[#55c538]/30 hover:bg-[#72e055] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-slate-950" />
              <span>TEL # 0088-02334451856</span>
            </a>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
