"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { Building2, Globe2, ShieldCheck, Sparkles, Award } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const HeroSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        badgeRef.current,
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      )
        .fromTo(
          subtitleRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.45 },
          "-=0.35"
        )
        .fromTo(
          titleRef.current?.children || [],
          { x: -80, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.55, stagger: 0.05 },
          "-=0.35"
        )
        .fromTo(
          descRef.current,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.45 },
          "-=0.3"
        )
        .fromTo(
          cardsRef.current?.children || [],
          { x: -50, opacity: 0, scale: 0.96 },
          { x: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.05 },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="relative bg-[#050811] text-white overflow-hidden">
      {/* High-Visibility Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mobile View Image */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <Image
            src="/mobile-view.webp"
            alt="Byzid Apparels Mobile View"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-95 contrast-105"
          />
        </div>
        {/* Desktop View Image */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src="/baplprofile.webp"
            alt="Byzid Apparels Headquarters and Factory Building"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-95 contrast-105"
          />
        </div>

        {/* Soft, Transparent Vignette - Image Remains Fully Visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/35 to-[#050811]/45" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Main Full-Bleed Content Container */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-4 sm:gap-6 overflow-hidden"
      >
        {/* Top Badges */}
        <div className="shrink-0 flex items-center justify-between">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-2.5 rounded-full cyber-pill shadow-xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#55c538] animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-slate-100 uppercase">
              Corporate Profile
            </span>
          </div>

          <div className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full cyber-pill text-xs sm:text-sm text-slate-100 shadow-md">
            <Award className="w-4 h-4 text-[#55c538]" />
            <span className="font-extrabold text-white">Since 1995</span>
            <span className="hidden sm:inline text-slate-300">• 30+ Yrs Legacy</span>
          </div>
        </div>

        {/* Center: Grand Hero Branding (Fills Space Boldly) */}
        <div className="my-auto py-2 sm:py-6">
          <p
            ref={subtitleRef}
            className="text-xs sm:text-lg md:text-2xl font-bold tracking-widest text-[#72e055] uppercase mb-2 sm:mb-4 flex items-center gap-2 drop-shadow-md"
          >
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <span>Delivering Quality Apparel Worldwide</span>
          </p>

          <h1
            ref={titleRef}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none mb-3 sm:mb-6 drop-shadow-xl"
          >
            <div className="flex items-center gap-3 sm:gap-5">
              <span className="w-2.5 sm:w-4 h-9 sm:h-16 md:h-20 lg:h-24 bg-[#55c538] rounded-sm inline-block glow-bar" />
              <span>BYZID APPARELS</span>
            </div>
            <div className="text-slate-300 font-light text-xl sm:text-3xl md:text-5xl lg:text-6xl ml-5 sm:ml-9 mt-1">
              (PVT) LTD.
            </div>
          </h1>

          <p
            ref={descRef}
            className="text-xs sm:text-base md:text-xl lg:text-2xl text-slate-100 max-w-4xl leading-relaxed ml-5 sm:ml-9 font-medium drop-shadow-lg"
          >
            Premier ready-made garments (RMG) manufacturing powerhouse delivering knit & woven excellence to iconic global fashion brands.
          </p>
        </div>

        {/* Bottom Feature Bento Cards (Bold, Large, Space-Filling) */}
        <div
          ref={cardsRef}
          className="shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 ml-0 sm:ml-9 max-w-6xl"
        >
          <div className="p-3.5 sm:p-5 md:p-6 rounded-2xl cyber-card flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#55c538]/25 text-[#72e055] shrink-0">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Headquarters & Unit</div>
              <div className="text-sm sm:text-lg md:text-xl font-bold text-white">Chattogram, Bangladesh</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 md:p-6 rounded-2xl cyber-card flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#55c538]/25 text-[#72e055] shrink-0">
              <Globe2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Global Exports</div>
              <div className="text-sm sm:text-lg md:text-xl font-bold text-white">USA, EU & Global Markets</div>
            </div>
          </div>

          <div className="p-3.5 sm:p-5 md:p-6 rounded-2xl cyber-card flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#55c538]/25 text-[#72e055] shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Compliance & Ethics</div>
              <div className="text-sm sm:text-lg md:text-xl font-bold text-white">BSCI & OEKO-TEX Certified</div>
            </div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
