"use client";

import React, { useEffect, useRef } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { ArrowDown, Building2, Globe2, ShieldCheck, Sparkles, Award } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const HeroSlide: React.FC<SlideProps> = ({ isActive, onNext }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { y: -30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 }
      )
        .fromTo(
          titleRef.current?.children || [],
          { y: 40, opacity: 0, skewY: 2 },
          { y: 0, opacity: 1, skewY: 0, duration: 0.9, stagger: 0.1 },
          "-=0.5"
        )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          cardsRef.current?.children || [],
          { y: 30, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.12 },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-gradient-to-br from-[#0a0f1d] via-[#0f172a] to-[#080d1a] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-6 md:p-12 flex flex-col justify-between overflow-hidden"
      >
        {/* Background Visual Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(105,178,63,0.2),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-0 top-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Top Bar: Company Badge & Year */}
        <div className="relative z-10 flex items-center justify-between">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-[#69b23f]/40 backdrop-blur-md shadow-lg shadow-black/40"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#69b23f] animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-200 uppercase">
              Company Profile
            </span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300">
            <Award className="w-3.5 h-3.5 text-[#69b23f]" />
            <span className="font-semibold text-white">Since 1995</span>
            <span className="text-slate-400">• 30+ Yrs Legacy</span>
          </div>
        </div>

        {/* Main Hero Typography & Brand Name */}
        <div className="relative z-10 my-auto py-2">
          <p
            ref={subtitleRef}
            className="text-sm md:text-xl font-medium tracking-widest text-[#88cb5c] uppercase mb-2 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Delivering Quality Apparel Worldwide
          </p>

          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none mb-4"
          >
            <div className="flex items-center gap-3">
              <span className="w-3 md:w-4 h-12 md:h-20 bg-[#69b23f] rounded-sm inline-block shadow-lg shadow-[#69b23f]/50" />
              <span>BYZID APPARELS</span>
            </div>
            <div className="text-slate-400 font-light text-2xl sm:text-3xl md:text-5xl ml-6 md:ml-8 mt-1">
              (PVT) LTD.
            </div>
          </h1>

          <p className="text-xs md:text-base text-slate-300 max-w-2xl leading-relaxed ml-6 md:ml-8 font-light">
            Premier ready-made garments (RMG) manufacturing powerhouse delivering knit & woven excellence to iconic global fashion brands.
          </p>

          {/* Quick Highlight Feature Pills */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8 ml-0 md:ml-8"
          >
            <div className="p-3 md:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-3 hover:border-[#69b23f]/50 transition-colors">
              <div className="p-2 rounded-lg bg-[#69b23f]/15 text-[#88cb5c]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Headquarters & Unit</div>
                <div className="text-xs md:text-sm font-semibold text-white">Chattogram, Bangladesh</div>
              </div>
            </div>

            <div className="p-3 md:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-3 hover:border-[#69b23f]/50 transition-colors">
              <div className="p-2 rounded-lg bg-[#69b23f]/15 text-[#88cb5c]">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Global Reach</div>
                <div className="text-xs md:text-sm font-semibold text-white">USA, EU & Global Markets</div>
              </div>
            </div>

            <div className="p-3 md:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-3 hover:border-[#69b23f]/50 transition-colors">
              <div className="p-2 rounded-lg bg-[#69b23f]/15 text-[#88cb5c]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Compliance & Ethics</div>
                <div className="text-xs md:text-sm font-semibold text-white">BSCI & OEKO-TEX Certified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA / Scroll cue */}
        <div
          ref={ctaRef}
          className="relative z-10 flex items-center justify-between pt-2 border-t border-slate-800/60 text-xs md:text-sm text-slate-400"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#69b23f] font-mono font-bold">01</span>
            <span className="text-slate-500">/</span>
            <span>06 Slide Overview</span>
          </div>

          <button
            onClick={onNext}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#69b23f] hover:bg-[#5aa034] text-white font-medium shadow-lg shadow-[#69b23f]/30 transition-all hover:scale-105 active:scale-95"
          >
            <span>Explore Deck</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </AspectWrapper>
  );
};
