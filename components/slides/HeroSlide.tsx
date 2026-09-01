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
    <AspectWrapper className="relative text-white overflow-hidden w-full aspect-[9/16] md:aspect-[1915/821] hero-slide-wrapper">
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
        <div className="hidden md:block absolute inset-0 hero-desktop-scrim pointer-events-none" />

        {/* Mobile Bottom Rising Gradient */}
        <div className="block md:hidden absolute bottom-0 left-0 right-0 h-[50%] hero-mobile-gradient pointer-events-none" />
      </div>

      {/* 2. Main Slide Interface */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-full max-w-7xl md:max-w-[1700px] mx-auto p-3 sm:p-6 md:p-3 lg:p-6 xl:p-8 2xl:p-10 flex flex-col justify-between overflow-hidden md:overflow-visible"
      >
        {/* DESKTOP VIEW: Right-Aligned Hero Text Layout (Anchored to Far Right) */}
        <div className="hidden md:flex w-full items-center justify-end my-auto">
          <div
            ref={rightContentRef}
            className="w-full md:max-w-[48%] lg:max-w-[44%] xl:max-w-[40%] 2xl:max-w-[38%] flex flex-col md:gap-1.5 lg:gap-2.5 xl:gap-3.5 2xl:gap-4 md:p-3.5 lg:p-5 xl:p-7 2xl:p-8 rounded-2xl lg:rounded-3xl bg-[#111419]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/90 ml-auto"
          >
            {/* A. Integrated Header: Eyebrow + Heritage Pill */}
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 md:text-[10px] lg:text-xs xl:text-sm font-extrabold uppercase tracking-widest text-[#d8dde6]">
                <Sparkles className="md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-[#dbe2ea]" />
                <span>BYZID APPARELS (PVT.) LTD</span>
              </div>
              <div className="inline-flex items-center gap-1.5 md:px-2 md:py-0.5 lg:px-3 lg:py-1 rounded-full bg-white/10 border border-white/20 shadow-sm shrink-0">
                <Award className="md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 text-[#dbe2ea]" />
                <span className="md:text-[9.5px] lg:text-[11px] font-black uppercase tracking-wider text-white">
                  SINCE 1995
                </span>
              </div>
            </div>

            {/* B. Master Hero Title */}
            <h1 className="md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black tracking-tight text-white md:leading-[1.15] lg:leading-[1.12] drop-shadow-2xl">
              EXPORTING QUALITY.
              <br />
              <span className="text-[#dbe2ea] text-glow">DELIVERING TRUST.</span>
            </h1>

            {/* C. Glowing Accent Line */}
            <div className="md:w-12 md:h-0.5 lg:w-16 lg:h-1 xl:w-20 bg-gradient-to-r from-[#dbe2ea] via-white/50 to-transparent rounded-full glow-bar" />

            {/* D. Narrative Subtitle Description */}
            <p className="md:text-[10.5px] lg:text-xs xl:text-[14px] 2xl:text-base text-slate-200 md:leading-snug lg:leading-relaxed font-normal">
              From our 38,000 sq. ft. multi-story garment facility in Chattogram to global retail runways — delivering BSCI & OEKO-TEX certified knit & woven apparel with uncompromised quality and on-time shipments.
            </p>

            {/* E. 3 Feature / Stat Columns */}
            <div className="grid grid-cols-3 md:gap-1.5 lg:gap-2.5 xl:gap-3 md:pt-2 lg:pt-3 border-t border-slate-700/60">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center md:p-1.5 lg:p-2 rounded-lg lg:rounded-xl bg-white/[0.04] border border-white/5">
                <div className="md:p-1 lg:p-1.5 rounded-md lg:rounded-lg bg-white/10 text-[#dbe2ea] md:mb-1 lg:mb-1.5 shadow-sm">
                  <Factory className="md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
                </div>
                <div className="md:text-[8.5px] lg:text-[10px] xl:text-xs font-black uppercase text-white tracking-wider">
                  MODERN FACILITY
                </div>
                <div className="md:text-[7.5px] lg:text-[9px] xl:text-[10px] text-slate-300 font-medium md:mt-0 lg:mt-0.5">
                  38,000 SFT Plant
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center md:p-1.5 lg:p-2 rounded-lg lg:rounded-xl bg-white/[0.04] border border-white/5">
                <div className="md:p-1 lg:p-1.5 rounded-md lg:rounded-lg bg-white/10 text-[#dbe2ea] md:mb-1 lg:mb-1.5 shadow-sm">
                  <ShieldCheck className="md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
                </div>
                <div className="md:text-[8.5px] lg:text-[10px] xl:text-xs font-black uppercase text-white tracking-wider">
                  QUALITY ASSURED
                </div>
                <div className="md:text-[7.5px] lg:text-[9px] xl:text-[10px] text-slate-300 font-medium md:mt-0 lg:mt-0.5">
                  BSCI & OEKO-TEX
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center md:p-1.5 lg:p-2 rounded-lg lg:rounded-xl bg-white/[0.04] border border-white/5">
                <div className="md:p-1 lg:p-1.5 rounded-md lg:rounded-lg bg-white/10 text-[#dbe2ea] md:mb-1 lg:mb-1.5 shadow-sm">
                  <Globe2 className="md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
                </div>
                <div className="md:text-[8.5px] lg:text-[10px] xl:text-xs font-black uppercase text-white tracking-wider">
                  GLOBAL DELIVERY
                </div>
                <div className="md:text-[7.5px] lg:text-[9px] xl:text-[10px] text-slate-300 font-medium md:mt-0 lg:mt-0.5">
                  USA, EU & Global
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW: Bottom-Pinned Responsive Layout (No cards, No icons, Clean Text View) */}
        <div
          ref={mobileContentRef}
          className="flex md:hidden flex-col w-full mt-auto pb-6 items-center text-center space-y-2 px-2 z-10"
        >
          {/* 1. Title (Center Aligned) */}
          <h1 className="hero-mobile-title text-2xl font-black tracking-normal text-white leading-tight drop-shadow-xl text-center w-full">
            BYZID APPARELS PVT LTD
          </h1>

          {/* 2. Subtitle (Center Aligned, Regular Weight Font) */}
          <p className="hero-mobile-subtitle text-sm font-normal text-slate-300 text-center drop-shadow-md w-full">
            Exporting Quality. Delivering Trust.
          </p>

          {/* 3. Logistics Distance (Two Separate Lines) */}
          <div className="space-y-1 text-center max-w-sm mx-auto pt-1">
            <p className="text-[12px] hero-mobile-logistics-label font-medium text-slate-400">
              Port: <span className="hero-mobile-logistics-val text-white font-bold">12 km to Sea Port</span>
            </p>
            <p className="text-[12px] hero-mobile-logistics-label font-medium text-slate-400">
              Airport: <span className="hero-mobile-logistics-val text-white font-bold">18 km to Shah Amanat Intl</span>
            </p>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
