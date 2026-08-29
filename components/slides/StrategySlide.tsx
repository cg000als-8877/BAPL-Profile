"use client";

import React, { useEffect, useRef } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  HeartHandshake,
  Network,
  Handshake,
  Truck,
  Palette,
  BadgePercent,
  Sparkles,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const StrategySlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { x: -70, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.04,
          ease: "expo.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const strategies = [
    {
      num: "01",
      title: "Customer Service Excellence",
      desc: "Continuously identifying opportunities to elevate customer experience and surpass global standards.",
      icon: HeartHandshake,
      color: "from-emerald-500/20 to-transparent",
      bgAccent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      num: "02",
      title: "Infrastructure Alignment",
      desc: "Aligning dedicated manufacturing lines and engineering resources to meet dynamic brand demands.",
      icon: Network,
      color: "from-blue-500/20 to-transparent",
      bgAccent: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    },
    {
      num: "03",
      title: "Proactive Partnership",
      desc: "Forecasting seasonal market shifts through tight collaboration with international fashion teams.",
      icon: Handshake,
      color: "from-indigo-500/20 to-transparent",
      bgAccent: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    },
    {
      num: "04",
      title: "Supply Chain Optimization",
      desc: "Optimizing yarn, fabric, and accessories procurement for shortest lead time and lower total cost.",
      icon: Truck,
      color: "from-amber-500/20 to-transparent",
      bgAccent: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      num: "05",
      title: "Product Development & Design",
      desc: "In-house design studio and R&D sample rooms custom-tailored to each brand's aesthetic DNA.",
      icon: Palette,
      color: "from-purple-500/20 to-transparent",
      bgAccent: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
    {
      num: "06",
      title: "Value-Added Savings",
      desc: "Specialized “Fast Sale” programs providing strategic buyers with substantial duty savings and agility.",
      icon: BadgePercent,
      color: "from-[#69b23f]/20 to-transparent",
      bgAccent: "bg-[#69b23f]/15 text-[#88cb5c] border-[#69b23f]/40",
    },
  ];

  return (
    <AspectWrapper className="bg-slate-950 text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-3 sm:gap-4 md:gap-6 overflow-hidden bg-gradient-to-br from-[#080e1d] via-[#0f172a] to-[#050812]"
      >
        <div className="absolute -top-12 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Bar */}
        <div ref={headerRef} className="shrink-0 relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5 md:gap-4">
            <div className="w-1.5 md:w-2.5 h-7 md:h-12 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold uppercase tracking-widest text-[#88cb5c]">
                Competitive Edge
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-sans">
                OUR STRATEGIC PILLARS
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900/90 rounded-full border border-slate-700 text-xs md:text-sm text-slate-200 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#88cb5c]" />
            <span>Value Creation</span>
          </div>
        </div>

        {/* Fluid 6 Cards Grid - Expands dynamically to fill available height on all screen sizes */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6 min-h-0"
        >
          {strategies.map((s) => {
            const IconComponent = s.icon;
            return (
              <div
                key={s.num}
                className="group relative p-3 sm:p-5 md:p-7 rounded-xl md:rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md hover:bg-slate-900 hover:border-[#69b23f] transition-all flex flex-col justify-between h-full"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1">
                  <span className="text-xs sm:text-base md:text-xl font-black text-[#88cb5c] font-sans">
                    {s.num}
                  </span>
                  <div className={`p-1 sm:p-2 rounded-lg border ${s.bgAccent}`}>
                    <IconComponent className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <div className="my-auto">
                  <h3 className="text-xs sm:text-base md:text-xl font-bold text-white mb-1 group-hover:text-[#88cb5c] transition-colors leading-tight font-sans">
                    {s.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-300 leading-tight sm:leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AspectWrapper>
  );
};
