"use client";

import React, { useEffect, useRef } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  Building2,
  FileCheck2,
  MapPin,
  Navigation,
  ExternalLink,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const CompanyDetailsSlide: React.FC<SlideProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const googleMapsUrl = "https://maps.app.goo.gl/rmAxTS1NAkbz3sLC7";

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-4 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-3 sm:gap-5 overflow-y-visible md:overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-center md:justify-between w-full">
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-2.5 sm:gap-4 w-full md:w-auto">
            <div className="hidden md:block w-2 md:w-2.5 h-8 md:h-12 bg-[#55c538] rounded-full glow-bar" />
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Corporate Profile & Logistics
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-normal">
                COMPANY DETAILS
              </h2>
              {/* Thin line under title and subtitle on mobile */}
              <div className="block md:hidden w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#55c538] to-transparent rounded-full mt-2" />
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Building2 className="w-4 h-4 text-[#55c538]" />
            <span>Since 1995</span>
          </div>
        </div>

        {/* 2. Structured Bento Grid (2 Cards Top, 1 Merged Address & Map Navigation Card Bottom) */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 min-h-0 content-center"
        >
          {/* Card 1: Corporate Entity */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between h-full border-emerald-500/30 bg-[#091426]/90 shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-xs sm:text-sm md:text-base font-extrabold text-[#72e055] uppercase tracking-wider">
                  BYZID APPARELS (PVT) LTD.
                </span>
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#55c538]" />
              </div>
              <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-200 mt-1">
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Year of Incorporation:</span>
                  <span className="font-bold text-white">1995</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Type of Company:</span>
                  <span className="font-bold text-white">Private Limited Company</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Managing Director:</span>
                  <span className="font-extrabold text-[#72e055]">Abdur Rahaman</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-slate-400">Business Operation:</span>
                  <span className="font-semibold text-right text-slate-200">
                    Woven & Knit Manufacturing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Regulatory & Capacity */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between h-full border-amber-500/30 bg-[#091426]/90 shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-xs sm:text-sm md:text-base font-extrabold text-amber-400 uppercase tracking-wider">
                  REGULATORY & CAPACITY
                </span>
                <FileCheck2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              </div>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-200 mt-1">
                <div className="flex justify-between pb-1 border-b border-slate-800">
                  <span className="text-slate-400">BIN:</span>
                  <span className="font-bold text-white">001287924-0505</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-slate-800">
                  <span className="text-slate-400">IRC / ERC:</span>
                  <span className="font-bold text-white text-[11px] sm:text-xs truncate">
                    260315120087920 | 260315210089519
                  </span>
                </div>
                <div className="flex justify-between pb-1 border-b border-slate-800">
                  <span className="text-slate-400">BGMEA Reg No:</span>
                  <span className="font-bold text-white">2673</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-slate-800">
                  <span className="text-slate-400">Fire License:</span>
                  <span className="font-bold text-white">CHATTA-6961/97-98</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-slate-400">Total Space:</span>
                  <span className="font-extrabold text-[#72e055]">38,000 SFT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: MERGED FACTORY ADDRESS & GOOGLE MAPS DIRECTIONS (Desktop only, merged into Contact on mobile) */}
          <div className="hidden md:flex md:col-span-2 p-4 sm:p-6 rounded-2xl cyber-card border border-blue-500/40 bg-gradient-to-br from-[#09152a]/95 via-[#060e1d]/95 to-[#040812]/95 shadow-2xl relative overflow-hidden group hover:border-blue-400 transition-all flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-1.5 sm:space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg bg-blue-500/20 text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-blue-400 uppercase tracking-wider">
                  FACTORY ADDRESS & MAP DIRECTIONS
                </span>
              </div>

              <h3 className="text-sm sm:text-lg md:text-xl font-black text-white leading-snug">
                Byzid Apparels (Pvt.) Ltd.
              </h3>

              <p className="text-xs sm:text-sm md:text-base text-slate-200 font-medium leading-relaxed max-w-3xl">
                ABM Tower, 671/1, Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-[10.5px] sm:text-xs text-slate-300">
                <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                  Port Logistics: 12 km to Sea Port
                </span>
                <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                  Airport: 18 km to Shah Amanat Intl
                </span>
              </div>
            </div>

            {/* Direct Google Maps Direction Button */}
            <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800 md:pl-5">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto py-2.5 sm:py-3.5 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-[#55c538] hover:from-blue-500 hover:to-[#72e055] text-white font-black text-xs sm:text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
