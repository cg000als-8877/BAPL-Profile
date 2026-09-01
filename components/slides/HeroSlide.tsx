"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  Award,
  Sparkles,
  Building2,
  Globe2,
  ShieldCheck,
  Factory,
  MapPin,
  Ship,
  Plane,
  Navigation,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const HeroSlide: React.FC<SlideProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const mobileContentRef = useRef<HTMLDivElement>(null);

  return (
    <AspectWrapper className="relative bg-[#050811] text-white overflow-hidden w-full aspect-[9/16] md:aspect-[1915/821]">
      {/* 1. Dynamic Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mobile View Hero Image: Aspect-Locked & Top-Anchored */}
        <div className="block md:hidden absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src="/mobile-view.webp"
            alt="Byzid Apparels Mobile Hero"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover brightness-100 contrast-105 select-none pointer-events-none"
            style={{
              objectPosition: "center top",
            }}
          />
        </div>

        {/* Desktop View Hero Image: Fixed to Original 1915x821 Native Aspect Ratio */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src="/baplprofile.webp"
            alt="Byzid Apparels Headquarters & Facility"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center brightness-[1.02] contrast-105"
          />
        </div>

        {/* Desktop Sophisticated Right-Side Scrim Gradient to ensure crystal-clear text readability without obscuring the facility & truck */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-[#050811]/30 to-[#050811]/90" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#050811]/50 via-transparent to-[#050811]/40" />

        {/* Mobile Bottom Rising Gradient */}
        <div className="block md:hidden absolute bottom-0 left-0 right-0 h-[48%] bg-gradient-to-t from-[#050811] via-[#050811]/90 to-transparent pointer-events-none" />
      </div>

      {/* 2. Main Slide Interface */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between overflow-hidden md:overflow-visible"
      >
        {/* Mobile View: Large Architectural Blend Watermark "SINCE 1995" */}
        <div className="block md:hidden shrink-0 pt-1 pl-0.5 select-none pointer-events-none">
          <div className="text-[11px] font-black uppercase tracking-[0.25em] text-white/40 mix-blend-overlay">
            SINCE
          </div>
          <div className="text-6xl sm:text-7xl font-black uppercase tracking-tight text-white/25 mix-blend-overlay leading-none -mt-0.5">
            1995
          </div>
        </div>

        {/* DESKTOP VIEW: Right-Aligned Hero Text Layout */}
        <div className="hidden md:flex w-full items-center justify-end my-auto">
          <div
            ref={rightContentRef}
            className="w-full md:max-w-[50%] lg:max-w-[46%] xl:max-w-[44%] flex flex-col gap-3.5 lg:gap-4.5 p-6 lg:p-8 rounded-3xl bg-[#050811]/75 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80"
          >
            {/* A. Integrated Header: Eyebrow + Heritage Pill */}
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 text-xs lg:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                <Sparkles className="w-4 h-4 text-[#55c538]" />
                <span>BYZID APPARELS (PVT.) LTD</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#55c538]/15 border border-[#55c538]/40 shadow-sm shrink-0">
                <Award className="w-3.5 h-3.5 text-[#55c538]" />
                <span className="text-[11px] font-black uppercase tracking-wider text-white">
                  SINCE 1995
                </span>
              </div>
            </div>

            {/* B. Master Hero Title */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight text-white leading-[1.12] drop-shadow-2xl">
              EXPORTING QUALITY.
              <br />
              <span className="text-[#55c538] text-glow">DELIVERING TRUST.</span>
            </h1>

            {/* C. Glowing Accent Line */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#55c538] via-[#72e055] to-transparent rounded-full glow-bar" />

            {/* D. Narrative Subtitle Description */}
            <p className="text-xs sm:text-sm lg:text-[15px] xl:text-base text-slate-200 leading-relaxed font-normal">
              From our 38,000 sq. ft. multi-story garment facility in Chattogram to global retail runways — delivering BSCI & OEKO-TEX certified knit & woven apparel with uncompromised quality and on-time shipments.
            </p>

            {/* E. 3 Feature / Stat Columns */}
            <div className="grid grid-cols-3 gap-2 lg:gap-3 pt-3.5 border-t border-slate-700/60">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/[0.04] border border-white/5">
                <div className="p-1.5 rounded-lg bg-[#55c538]/20 text-[#72e055] mb-1.5 shadow-sm">
                  <Factory className="w-4 h-4" />
                </div>
                <div className="text-[11px] lg:text-xs font-black uppercase text-white tracking-wider">
                  MODERN FACILITY
                </div>
                <div className="text-[10px] text-slate-300 font-medium mt-0.5">
                  38,000 SFT Plant
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/[0.04] border border-white/5">
                <div className="p-1.5 rounded-lg bg-[#55c538]/20 text-[#72e055] mb-1.5 shadow-sm">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-[11px] lg:text-xs font-black uppercase text-white tracking-wider">
                  QUALITY ASSURED
                </div>
                <div className="text-[10px] text-slate-300 font-medium mt-0.5">
                  BSCI & OEKO-TEX
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/[0.04] border border-white/5">
                <div className="p-1.5 rounded-lg bg-[#55c538]/20 text-[#72e055] mb-1.5 shadow-sm">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div className="text-[11px] lg:text-xs font-black uppercase text-white tracking-wider">
                  GLOBAL DELIVERY
                </div>
                <div className="text-[10px] text-slate-300 font-medium mt-0.5">
                  USA, EU & Global
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW: Bottom-Pinned Responsive Layout (No cards, No icons, Clean Text View) */}
        <div
          ref={mobileContentRef}
          className="flex md:hidden flex-col w-full mt-auto pb-6 items-center text-center space-y-2 px-2"
        >
          {/* 1. Title (Center Aligned) */}
          <h1 className="text-2xl font-black tracking-normal text-white leading-tight drop-shadow-xl text-center w-full">
            BYZID APPARELS PVT LTD
          </h1>

          {/* 2. Subtitle (Center Aligned, Regular Weight Font, Green Color) */}
          <p className="text-sm font-normal text-[#72e055] text-center drop-shadow-md w-full">
            Exporting Quality. Delivering Trust.
          </p>

          {/* 3. Logistics & Google Map Button */}
          <div className="space-y-2 text-center max-w-sm mx-auto pt-1">
            {/* Google Map : Get Direction Minimal Animated Stroke Line Button */}
            <div className="py-0.5">
              <a
                href="https://maps.app.goo.gl/rmAxTS1NAkbz3sLC7"
                target="_blank"
                rel="noopener noreferrer"
                className="anim-stroke-button inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-semibold text-[#72e055] hover:text-white bg-transparent transition-all active:scale-95"
              >
                <span>Google Map : Get Direction</span>
                <Navigation className="w-3 h-3 text-[#72e055]" />
              </a>
            </div>

            <p className="text-[11px] text-slate-400 font-medium pt-0.5">
              Port: <span className="text-slate-200 font-bold">12 km to Sea Port</span> &nbsp;•&nbsp; Airport: <span className="text-slate-200 font-bold">18 km to Shah Amanat Intl</span>
            </p>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
