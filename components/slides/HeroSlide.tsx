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
  const contentRef = useRef<HTMLDivElement>(null);
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
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      )
        .fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.2"
        )
        .fromTo(
          subtitleRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45 },
          "-=0.3"
        )
        .fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4 },
          "-=0.3"
        )
        .fromTo(
          cardsRef.current?.children || [],
          { y: 30, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.05 },
          "-=0.25"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="relative bg-[#050811] text-white overflow-hidden">
      {/* High-Visibility Hero Background Image (Unified baplprofile.webp for Desktop & Mobile) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/baplprofile.webp"
          alt="Byzid Apparels Headquarters & Production Building"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center brightness-100 contrast-105"
        />

        {/* Bottom subtle gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/60 to-transparent" />
      </div>

      {/* Main Content Layout - Bottom-Pinned for full scenic visibility */}
      <div
        ref={containerRef}
        className="relative z-10 w-full h-full p-4 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between overflow-hidden"
      >
        {/* Top: Aesthetic & Modern 'Since 1995' Pill Badge */}
        <div className="shrink-0 flex items-center justify-end">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full cyber-pill border border-[#55c538]/40 shadow-xl bg-[#050811]/70 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#55c538] animate-pulse glow-bar" />
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#55c538]" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-white uppercase">
              Since 1995
            </span>
            <span className="hidden sm:inline text-xs text-slate-300 font-semibold">
              • 30+ Yrs Legacy
            </span>
          </div>
        </div>

        {/* Bottom Group: Title, Subtitle, Paragraph & Cards Stack */}
        <div ref={contentRef} className="shrink-0 flex flex-col gap-2 sm:gap-3 max-w-6xl">
          {/* 1. Title (Bigger for Mobile, Full Length Single Line) */}
          <h1
            ref={titleRef}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-none drop-shadow-xl whitespace-nowrap overflow-hidden text-ellipsis flex items-center gap-2 sm:gap-4"
          >
            <span className="w-2 sm:w-3 h-7 sm:h-10 md:h-12 lg:h-14 bg-[#55c538] rounded-sm inline-block glow-bar shrink-0" />
            <span>BYZID APPARELS PVT LTD</span>
          </h1>

          {/* 2. Subtitle (Bigger for Mobile, Title Case) */}
          <p
            ref={subtitleRef}
            className="text-sm sm:text-base md:text-xl lg:text-2xl font-extrabold text-[#72e055] flex items-center gap-2 drop-shadow-md ml-4 sm:ml-7"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>Delivering Quality Apparel Worldwide</span>
          </p>

          {/* 3. Paragraph (Hidden on Mobile, Visible on Tablet/Desktop) */}
          <p
            ref={descRef}
            className="hidden sm:block text-sm md:text-base lg:text-lg text-slate-200 leading-relaxed max-w-4xl font-normal drop-shadow-md ml-4 sm:ml-7"
          >
            Premier ready-made garments (RMG) manufacturing powerhouse delivering knit & woven excellence to iconic global fashion brands.
          </p>

          {/* 4. Three Cards Stack: 2 Above, 1 Below on Mobile; 3-Col on Desktop */}
          <div
            ref={cardsRef}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 ml-0 sm:ml-7 mt-1 sm:mt-2"
          >
            {/* Card 1 (Top Left on Mobile) */}
            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl cyber-card flex items-center gap-2.5 sm:gap-3 text-left bg-[#070e1e]/90">
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#55c538]/20 text-[#72e055] shrink-0">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">
                  Headquarters & Unit
                </div>
                <div className="text-xs sm:text-sm md:text-base font-bold text-white truncate">
                  Chattogram, Bangladesh
                </div>
              </div>
            </div>

            {/* Card 2 (Top Right on Mobile) */}
            <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl cyber-card flex items-center gap-2.5 sm:gap-3 text-left bg-[#070e1e]/90">
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#55c538]/20 text-[#72e055] shrink-0">
                <Globe2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">
                  Global Exports
                </div>
                <div className="text-xs sm:text-sm md:text-base font-bold text-white truncate">
                  USA, EU & Global
                </div>
              </div>
            </div>

            {/* Card 3 (Bottom Full Width '1 Below' on Mobile, 3rd Col on Desktop) */}
            <div className="col-span-2 sm:col-span-1 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl cyber-card flex items-center gap-2.5 sm:gap-3 text-left bg-[#070e1e]/90">
              <div className="p-2 sm:p-2.5 rounded-lg bg-[#55c538]/20 text-[#72e055] shrink-0">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">
                  Compliance & Ethics
                </div>
                <div className="text-xs sm:text-sm md:text-base font-bold text-white truncate">
                  BSCI & OEKO-TEX Standard 100
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
