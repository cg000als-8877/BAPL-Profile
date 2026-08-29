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
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Magnetic Side Flash Animation
      tl.fromTo(
        badgeRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.55 }
      )
        .fromTo(
          subtitleRef.current,
          { x: -80, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          "-=0.35"
        )
        .fromTo(
          titleRef.current?.children || [],
          { x: -120, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          "-=0.35"
        )
        .fromTo(
          descRef.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          cardsRef.current?.children || [],
          { x: -80, opacity: 0, scale: 0.96 },
          { x: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.08 },
          "-=0.3"
        )
        .fromTo(
          footerRef.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.45 },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-gradient-to-br from-[#070c18] via-[#0f172a] to-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-6 sm:p-10 md:p-14 lg:p-20 flex flex-col justify-between overflow-hidden"
      >
        {/* Background Visual Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_40%_-20%,rgba(105,178,63,0.25),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#69b23f]/12 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Bar: Company Badge & Established Year */}
        <div className="relative z-10 flex items-center justify-between">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900/90 border border-[#69b23f]/50 backdrop-blur-md shadow-xl"
          >
            <span className="w-3 h-3 rounded-full bg-[#69b23f] animate-pulse" />
            <span className="text-xs md:text-sm lg:text-base font-bold tracking-widest text-slate-100 uppercase">
              Corporate Profile
            </span>
          </div>

          <div className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-xs md:text-sm lg:text-base text-slate-200 shadow-md">
            <Award className="w-4 h-4 text-[#69b23f]" />
            <span className="font-bold text-white">Since 1995</span>
            <span className="text-slate-400">• 30+ Years Global Legacy</span>
          </div>
        </div>

        {/* Main Hero Typography & Brand Name */}
        <div className="relative z-10 my-auto py-4">
          <p
            ref={subtitleRef}
            className="text-sm md:text-2xl lg:text-3xl font-semibold tracking-widest text-[#88cb5c] uppercase mb-3 flex items-center gap-2.5"
          >
            <Sparkles className="w-5 h-5" />
            Delivering Quality Apparel Worldwide
          </p>

          <h1
            ref={titleRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-white leading-none mb-6"
          >
            <div className="flex items-center gap-3 md:gap-5">
              <span className="w-3.5 md:w-5 h-14 sm:h-20 md:h-24 lg:h-32 bg-[#69b23f] rounded-sm inline-block shadow-xl shadow-[#69b23f]/50" />
              <span>BYZID APPARELS</span>
            </div>
            <div className="text-slate-400 font-light text-2xl sm:text-4xl md:text-5xl lg:text-6xl ml-7 md:ml-10 mt-1">
              (PVT) LTD.
            </div>
          </h1>

          <p
            ref={descRef}
            className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-300 max-w-4xl leading-relaxed ml-7 md:ml-10 font-normal"
          >
            Premier ready-made garments (RMG) manufacturing powerhouse delivering woven & knit excellence to iconic global fashion brands.
          </p>

          {/* Quick Highlight Feature Bento Cards */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 ml-0 md:ml-10 max-w-6xl"
          >
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center gap-4 hover:border-[#69b23f] transition-all hover:scale-[1.02] shadow-lg">
              <div className="p-3 md:p-3.5 rounded-xl bg-[#69b23f]/20 text-[#88cb5c]">
                <Building2 className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <div className="text-xs md:text-sm text-slate-400 font-medium">Headquarters & Unit</div>
                <div className="text-sm md:text-lg lg:text-xl font-bold text-white">Chattogram, Bangladesh</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center gap-4 hover:border-[#69b23f] transition-all hover:scale-[1.02] shadow-lg">
              <div className="p-3 md:p-3.5 rounded-xl bg-[#69b23f]/20 text-[#88cb5c]">
                <Globe2 className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <div className="text-xs md:text-sm text-slate-400 font-medium">Global Exports</div>
                <div className="text-sm md:text-lg lg:text-xl font-bold text-white">USA, EU & Global Markets</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 md:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center gap-4 hover:border-[#69b23f] transition-all hover:scale-[1.02] shadow-lg">
              <div className="p-3 md:p-3.5 rounded-xl bg-[#69b23f]/20 text-[#88cb5c]">
                <ShieldCheck className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div>
                <div className="text-xs md:text-sm text-slate-400 font-medium">Compliance & Ethics</div>
                <div className="text-sm md:text-lg lg:text-xl font-bold text-white">BSCI & OEKO-TEX Certified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          ref={footerRef}
          className="relative z-10 flex items-center justify-between pt-4 border-t border-slate-800 text-xs md:text-sm lg:text-base text-slate-400"
        >
          <div className="flex items-center gap-3">
            <span className="text-[#69b23f] font-mono font-extrabold text-sm md:text-lg">01</span>
            <span className="text-slate-600 font-bold">/</span>
            <span className="font-medium text-slate-300">06 Presentation Deck</span>
          </div>

          <button
            onClick={onNext}
            className="group flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#69b23f] hover:bg-[#5aa034] text-white font-semibold shadow-lg shadow-[#69b23f]/30 transition-all hover:scale-105 active:scale-95"
          >
            <span>Scroll or Click Next</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </AspectWrapper>
  );
};
