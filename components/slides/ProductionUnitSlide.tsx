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

  return (
    <AspectWrapper className="bg-transparent text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-4 sm:p-6 md:p-10 lg:p-12 xl:p-14 flex flex-col justify-between gap-3.5 sm:gap-4 overflow-visible"
      >

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-center md:justify-between w-full">
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-2.5 sm:gap-4 w-full md:w-auto">
            <div className="hidden md:block w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Manufacturing Plant
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-normal">
                PRODUCTION UNIT
              </h2>
              {/* Thin line under title and subtitle on mobile */}
              <div className="block md:hidden w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#55c538] to-transparent rounded-full mt-2" />
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Building2 className="w-4 h-4 text-[#55c538]" />
            <span>Factory Facility</span>
          </div>
        </div>

        {/* 2. CENTER-UPPER: Blueprint Image */}
        <div
          ref={blueprintRef}
          className="shrink-0 w-full flex items-center justify-center my-0"
        >
          {/* Mobile Image */}
          <div className="block md:hidden relative w-full aspect-[738/352] max-h-[220px]">
            <Image
              src="/mobile-bp.png"
              alt="Byzid Apparels Architectural Blueprint Mobile View"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-contain object-center scale-100"
            />
          </div>

          {/* Desktop Image: Balanced medium size with exact 732/396 aspect ratio */}
          <div className="hidden md:block relative w-full max-w-2xl lg:max-w-3xl xl:max-w-[820px] aspect-[732/396] max-h-[260px] lg:max-h-[300px] xl:max-h-[330px] my-1">
            <Image
              src="/desktop-bp.png"
              alt="Byzid Apparels Production Unit Facility Blueprint"
              fill
              priority
              unoptimized
              sizes="(max-width: 1280px) 75vw, 850px"
              className="object-contain object-center scale-100"
            />
          </div>
        </div>

        {/* 3. CENTER-LOWER: 4 Capacity Metric Cards (2x2 on Mobile, 4x1 on Desktop) */}
        <div
          ref={specsRef}
          className="shrink-0 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5 items-stretch"
        >
          {/* 1. Production Capacity */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between border-blue-500/30 bg-[#091426]/95 shadow-xl hover:border-blue-400 transition-all min-h-[120px] sm:min-h-[145px] md:min-h-[155px]">
            <div className="flex items-center justify-between gap-1 mb-2">
              <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-blue-400 uppercase tracking-wider">
                Capacity
              </span>
              <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
            </div>
            <div>
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-black text-white tracking-tight leading-none">
                300,000
              </div>
              <div className="text-[10.5px] sm:text-xs md:text-sm font-bold text-blue-300 mt-2 truncate">
                Pcs / Month
              </div>
            </div>
          </div>

          {/* 2. Factory Space */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between border-emerald-500/30 bg-[#091426]/95 shadow-xl hover:border-[#55c538] transition-all min-h-[120px] sm:min-h-[145px] md:min-h-[155px]">
            <div className="flex items-center justify-between gap-1 mb-2">
              <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-[#72e055] uppercase tracking-wider">
                Floor Space
              </span>
              <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#55c538] shrink-0" />
            </div>
            <div>
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-black text-white tracking-tight leading-none">
                38,000
              </div>
              <div className="text-[10.5px] sm:text-xs md:text-sm font-bold text-[#72e055] mt-2 truncate">
                Sq. Ft Production Area
              </div>
            </div>
          </div>

          {/* 3. Annual Turnover */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between border-amber-500/30 bg-[#091426]/95 shadow-xl hover:border-amber-400 transition-all min-h-[120px] sm:min-h-[145px] md:min-h-[155px]">
            <div className="flex items-center justify-between gap-1 mb-2">
              <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-amber-400 uppercase tracking-wider">
                Turnover
              </span>
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
            </div>
            <div>
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-black text-white tracking-tight leading-none">
                $10.00M
              </div>
              <div className="text-[10.5px] sm:text-xs md:text-sm font-bold text-amber-300 mt-2 truncate">
                Million USD / Year
              </div>
            </div>
          </div>

          {/* 4. Total Manpower */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between border-purple-500/30 bg-[#091426]/95 shadow-xl hover:border-purple-400 transition-all min-h-[120px] sm:min-h-[145px] md:min-h-[155px]">
            <div className="flex items-center justify-between gap-1 mb-2">
              <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-purple-400 uppercase tracking-wider">
                Manpower
              </span>
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0" />
            </div>
            <div>
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-black text-white tracking-tight leading-none">
                700+
              </div>
              <div className="text-[10.5px] sm:text-xs md:text-sm font-bold text-purple-300 mt-2 truncate">
                Workforce (+ 35 Key Staff)
              </div>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM: Production Unit Address */}
        {/* Mobile View: Clean Centered Address (No Card, No Icon, No Phone) */}
        <div className="block md:hidden text-center pt-2 pb-1 space-y-0.5 w-full">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#72e055]">
            PRODUCTION UNIT ADDRESS
          </div>
          <h3 className="text-sm font-black text-white leading-tight">
            Byzid Apparels (Pvt) Ltd
          </h3>
          <p className="text-xs text-slate-300 font-medium leading-snug max-w-xs mx-auto">
            ABM Tower, 671/1, Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
          </p>
        </div>

        {/* Desktop View: Full Card with Tel Button */}
        <div
          ref={addressRef}
          className="hidden md:flex shrink-0 p-6 md:p-7 rounded-2xl cyber-card border border-slate-700/80 items-center justify-between gap-3 bg-slate-950/95 shadow-2xl"
        >
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#72e055] uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4 text-[#55c538]" />
              <span>PRODUCTION UNIT ADDRESS</span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white leading-snug">
              Byzid Apparels (Pvt) Ltd
            </h3>
            <p className="text-base md:text-lg text-slate-200 font-medium leading-relaxed mt-0.5">
              ABM Tower, 671/1, Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
            </p>
          </div>

          <div className="shrink-0 border-l border-slate-800 pl-6">
            <a
              href="tel:008802334451856"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-[#55c538] text-slate-950 font-black text-sm md:text-base shadow-lg hover:bg-[#72e055] hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-slate-950" />
              <span>TEL # 0088-02334451856</span>
            </a>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
