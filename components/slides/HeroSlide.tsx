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
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      )
        .fromTo(
          subtitleRef.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.45 },
          "-=0.35"
        )
        .fromTo(
          titleRef.current?.children || [],
          { x: -90, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.55, stagger: 0.06 },
          "-=0.35"
        )
        .fromTo(
          descRef.current,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.45 },
          "-=0.3"
        )
        .fromTo(
          cardsRef.current?.children || [],
          { x: -60, opacity: 0, scale: 0.96 },
          { x: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.06 },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="relative bg-[#070c18] text-white overflow-hidden">
      {/* Full-View Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/baplprofile.webp"
          alt="Byzid Apparels (Pvt) Ltd. Headquarters and Production Facility"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-75 contrast-105 transform scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-[#070c18]/50 to-[#070c18]/60" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-3 sm:gap-4 md:gap-6 overflow-hidden"
      >
        {/* Top Bar */}
        <div className="shrink-0 relative z-10 flex items-center justify-between">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-slate-950/80 border border-[#69b23f]/60 backdrop-blur-md shadow-xl"
          >
            <span className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#69b23f] animate-pulse" />
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold tracking-widest text-slate-100 uppercase">
              Corporate Profile
            </span>
          </div>

          <div className="flex items-center gap-1.5 md:gap-2.5 px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-slate-950/80 border border-slate-700/80 backdrop-blur-md text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-200 shadow-md">
            <Award className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#69b23f]" />
            <span className="font-bold text-white">Since 1995</span>
            <span className="hidden sm:inline text-slate-400">• 30+ Yrs Legacy</span>
          </div>
        </div>

        {/* Main Hero Content - Takes available space */}
        <div className="flex-1 flex flex-col justify-center my-auto py-2">
          <p
            ref={subtitleRef}
            className="text-xs sm:text-lg md:text-2xl lg:text-3xl font-semibold tracking-wider sm:tracking-widest text-[#88cb5c] uppercase mb-1.5 sm:mb-3 flex items-center gap-2 drop-shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
            <span>Delivering Quality Apparel Worldwide</span>
          </p>

          <h1
            ref={titleRef}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-white leading-none mb-2.5 sm:mb-4 drop-shadow-lg font-sans"
          >
            <div className="flex items-center gap-2 md:gap-5">
              <span className="w-2.5 md:w-5 h-8 sm:h-16 md:h-24 lg:h-32 bg-[#69b23f] rounded-sm inline-block shadow-xl shadow-[#69b23f]/50" />
              <span>BYZID APPARELS</span>
            </div>
            <div className="text-slate-300 font-light text-xl sm:text-3xl md:text-5xl lg:text-6xl ml-4 sm:ml-7 md:ml-10 mt-0.5 sm:mt-1 font-sans">
              (PVT) LTD.
            </div>
          </h1>

          <p
            ref={descRef}
            className="text-xs sm:text-base md:text-xl lg:text-2xl text-slate-200 max-w-4xl leading-relaxed ml-4 sm:ml-7 md:ml-10 font-normal drop-shadow-md"
          >
            Premier ready-made garments (RMG) manufacturing powerhouse delivering knit & woven excellence to iconic global fashion brands.
          </p>
        </div>

        {/* Bento Feature Cards - Takes bottom flex space cleanly */}
        <div
          ref={cardsRef}
          className="shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-6 ml-0 sm:ml-7 md:ml-10 max-w-6xl"
        >
          <div className="p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md flex items-center gap-3 hover:border-[#69b23f] transition-all shadow-lg">
            <div className="p-2 md:p-3.5 rounded-lg md:rounded-xl bg-[#69b23f]/25 text-[#88cb5c] shrink-0">
              <Building2 className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-medium">Headquarters & Unit</div>
              <div className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-white font-sans">Chattogram, Bangladesh</div>
            </div>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md flex items-center gap-3 hover:border-[#69b23f] transition-all shadow-lg">
            <div className="p-2 md:p-3.5 rounded-lg md:rounded-xl bg-[#69b23f]/25 text-[#88cb5c] shrink-0">
              <Globe2 className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-medium">Global Exports</div>
              <div className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-white font-sans">USA, EU & Global Markets</div>
            </div>
          </div>

          <div className="p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md flex items-center gap-3 hover:border-[#69b23f] transition-all shadow-lg">
            <div className="p-2 md:p-3.5 rounded-lg md:rounded-xl bg-[#69b23f]/25 text-[#88cb5c] shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-medium">Compliance & Ethics</div>
              <div className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-white font-sans">BSCI & OEKO-TEX Certified</div>
            </div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
