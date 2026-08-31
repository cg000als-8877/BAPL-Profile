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
  Compass,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const CompanyDetailsSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { x: -50, opacity: 0, scale: 0.97 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: "expo.out",
          delay: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const googleMapsUrl = "https://maps.app.goo.gl/rmAxTS1NAkbz3sLC7";

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-4 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-3 sm:gap-5 overflow-y-visible md:overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-2 md:w-2.5 h-8 md:h-12 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Corporate Profile & Logistics
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-normal">
                COMPANY DETAILS
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Building2 className="w-4 h-4 text-[#55c538]" />
            <span>Since 1995</span>
          </div>
        </div>

        {/* 2. Four Structured Cards (2x2 Grid) */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 lg:gap-6 min-h-0"
        >
          {/* Card 1: Corporate Entity */}
          <div className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card flex flex-col justify-between h-full border-emerald-500/30 bg-[#091426]/90 shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-base font-extrabold text-[#72e055] uppercase tracking-wider">
                  BYZID APPARELS (PVT) LTD.
                </span>
                <Building2 className="w-5 h-5 text-[#55c538]" />
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm md:text-base text-slate-200 mt-2">
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Year of Incorporation:</span>
                  <span className="font-bold text-white">1995</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Type of Company:</span>
                  <span className="font-bold text-white">Private Limited Company</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Managing Director:</span>
                  <span className="font-extrabold text-[#72e055]">Abdur Rahaman</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">Business Operation:</span>
                  <span className="font-semibold text-right text-slate-200">
                    Woven & Knit Apparel Manufacturing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Factory Address */}
          <div className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card flex flex-col justify-between h-full border-blue-500/30 bg-[#091426]/90 shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-base font-extrabold text-blue-400 uppercase tracking-wider">
                  FACTORY ADDRESS
                </span>
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-base sm:text-xl lg:text-2xl font-black text-white mb-2">
                Byzid Apparels (Pvt.) Ltd.
              </h3>
              <p className="text-xs sm:text-base lg:text-lg text-slate-200 leading-relaxed">
                ABM Tower, 671/1, Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800 text-xs sm:text-sm text-slate-400">
              Chattogram Industrial Hub • Strategic Port Access
            </div>
          </div>

          {/* Card 3: Regulatory & Capacity */}
          <div className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card flex flex-col justify-between h-full border-amber-500/30 bg-[#091426]/90 shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-base font-extrabold text-amber-400 uppercase tracking-wider">
                  REGULATORY & CAPACITY
                </span>
                <FileCheck2 className="w-5 h-5 text-amber-400" />
              </div>
              <div className="space-y-2 text-xs sm:text-sm md:text-base text-slate-200 mt-1">
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="text-slate-400">BIN:</span>
                  <span className="font-bold text-white font-mono">001287924-0505</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="text-slate-400">IRC / ERC:</span>
                  <span className="font-bold text-white text-xs sm:text-sm font-mono truncate">
                    260315120087920 | 260315210089519
                  </span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="text-slate-400">BGMEA Reg No:</span>
                  <span className="font-bold text-white font-mono">2673</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Fire License:</span>
                  <span className="font-bold text-white font-mono">CHATTA-6961/97-98</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-400">Total Space:</span>
                  <span className="font-extrabold text-[#72e055]">38,000 SFT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Google Maps & Directions (Replaced Banking Details) */}
          <div className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card flex flex-col justify-between h-full border-purple-500/40 bg-gradient-to-br from-[#121028]/95 via-[#091024]/95 to-[#060a18]/95 shadow-2xl relative overflow-hidden group hover:border-purple-400 transition-all">
            <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs sm:text-base font-extrabold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-purple-400" />
                  <span>LOCATION & MAP DIRECTIONS</span>
                </span>
                <Navigation className="w-5 h-5 text-purple-400 animate-pulse" />
              </div>

              <div className="space-y-2 text-xs sm:text-sm md:text-base text-slate-200 mt-1">
                <div className="font-bold text-white text-sm sm:text-lg flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#55c538] shrink-0" />
                  <span>ABM Tower, Chattogram</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  671/1 Sholakbahar, Bahaddarhat, Chattogram — Quick access to major highway corridors & port terminals.
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 text-[11px] sm:text-xs">
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
                    <span className="text-slate-400 block">Sea Port:</span>
                    <span className="font-bold text-white font-mono">12 km Distance</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
                    <span className="text-slate-400 block">Intl Airport:</span>
                    <span className="font-bold text-white font-mono">18 km Distance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Direct Navigation Link */}
            <div className="mt-3 pt-3 border-t border-slate-800/80">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-[#55c538] hover:from-purple-500 hover:to-[#72e055] text-white font-black text-xs sm:text-sm shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 transition-all group-hover:scale-[1.02]"
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
