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
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45 }
      )
        .fromTo(
          subtitleRef.current,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4 },
          "-=0.3"
        )
        .fromTo(
          titleRef.current?.children || [],
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.04 },
          "-=0.3"
        )
        .fromTo(
          descRef.current,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4 },
          "-=0.25"
        )
        .fromTo(
          cardsRef.current?.children || [],
          { x: -40, opacity: 0, scale: 0.97 },
          { x: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.04 },
          "-=0.25"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="relative bg-[#050811] text-white overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <Image
            src="/mobile-view.webp"
            alt="Byzid Apparels Mobile View"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-70 contrast-105"
          />
        </div>
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <Image
            src="/baplprofile.webp"
            alt="Byzid Apparels Headquarters"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-70 contrast-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/65 to-[#050811]/70" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Main Content Container */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-full max-w-6xl mx-auto p-4 sm:p-8 md:p-12 flex flex-col justify-between overflow-hidden"
      >
        {/* Top Badges */}
        <div className="shrink-0 flex items-center justify-between">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full cyber-pill shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#55c538] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-100 uppercase">
              Corporate Profile
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full cyber-pill text-[10px] sm:text-xs text-slate-200 shadow-md">
            <Award className="w-3.5 h-3.5 text-[#55c538]" />
            <span className="font-bold text-white">Since 1995</span>
            <span className="hidden sm:inline text-slate-400">• 30+ Yrs Excellence</span>
          </div>
        </div>

        {/* Center: Hero Branding (Refined, logical scale) */}
        <div className="my-auto py-2 sm:py-4">
          <p
            ref={subtitleRef}
            className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-[#72e055] uppercase mb-1.5 sm:mb-2.5 flex items-center gap-2 drop-shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
            <span>Delivering Quality Apparel Worldwide</span>
          </p>

          <h1
            ref={titleRef}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-2 sm:mb-4 drop-shadow-md"
          >
            <div className="flex items-center gap-2 sm:gap-3.5">
              <span className="w-1.5 sm:w-2.5 h-7 sm:h-11 md:h-14 bg-[#55c538] rounded-sm inline-block glow-bar" />
              <span>BYZID APPARELS</span>
            </div>
            <div className="text-slate-400 font-light text-lg sm:text-2xl md:text-3xl ml-3.5 sm:ml-6 mt-0.5">
              (PVT) LTD.
            </div>
          </h1>

          <p
            ref={descRef}
            className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed ml-3.5 sm:ml-6 font-normal drop-shadow-sm"
          >
            Premier ready-made garments (RMG) manufacturing powerhouse delivering knit & woven excellence to iconic global fashion brands.
          </p>
        </div>

        {/* Bottom Feature Bento Cards (Sleek, refined proportions) */}
        <div
          ref={cardsRef}
          className="shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3.5 ml-0 sm:ml-6"
        >
          <div className="p-2.5 sm:p-3.5 rounded-xl cyber-card flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#55c538]/20 text-[#72e055] shrink-0">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Headquarters & Unit</div>
              <div className="text-xs sm:text-sm md:text-base font-bold text-white">Chattogram, Bangladesh</div>
            </div>
          </div>

          <div className="p-2.5 sm:p-3.5 rounded-xl cyber-card flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#55c538]/20 text-[#72e055] shrink-0">
              <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Global Exports</div>
              <div className="text-xs sm:text-sm md:text-base font-bold text-white">USA, EU & Global Markets</div>
            </div>
          </div>

          <div className="p-2.5 sm:p-3.5 rounded-xl cyber-card flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#55c538]/20 text-[#72e055] shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Compliance & Ethics</div>
              <div className="text-xs sm:text-sm md:text-base font-bold text-white">BSCI & OEKO-TEX Certified</div>
            </div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
