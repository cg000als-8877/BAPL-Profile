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
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { x: -60, opacity: 0, scale: 0.96 },
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
      bgAccent: "bg-emerald-500/20 text-[#72e055] border-emerald-500/30",
    },
    {
      num: "02",
      title: "Infrastructure Alignment",
      desc: "Aligning dedicated manufacturing lines and engineering resources to meet dynamic brand demands.",
      icon: Network,
      bgAccent: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
    {
      num: "03",
      title: "Proactive Partnership",
      desc: "Forecasting seasonal market shifts through tight collaboration with international fashion teams.",
      icon: Handshake,
      bgAccent: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    },
    {
      num: "04",
      title: "Supply Chain Optimization",
      desc: "Optimizing yarn, fabric, and accessories procurement for shortest lead time and lower total cost.",
      icon: Truck,
      bgAccent: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    },
    {
      num: "05",
      title: "Product Development & Design",
      desc: "In-house design studio and R&D sample rooms custom-tailored to each brand's aesthetic DNA.",
      icon: Palette,
      bgAccent: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    },
    {
      num: "06",
      title: "Value-Added Savings",
      desc: "Specialized “Fast Sale” programs providing strategic buyers with substantial duty savings and agility.",
      icon: BadgePercent,
      bgAccent: "bg-[#55c538]/20 text-[#72e055] border-[#55c538]/40",
    },
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-4 sm:gap-6 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute -top-12 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Bar */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-2 md:w-2.5 h-8 md:h-12 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Competitive Edge
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                OUR STRATEGIC PILLARS
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Sparkles className="w-4 h-4 text-[#55c538]" />
            <span>Value Creation</span>
          </div>
        </div>

        {/* Fluid 6 Cards Grid (Large, Space-Filling, Rich) */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 min-h-0"
        >
          {strategies.map((s) => {
            const IconComponent = s.icon;
            return (
              <div
                key={s.num}
                className="group relative p-4 sm:p-6 md:p-7 rounded-2xl cyber-card flex flex-col justify-between h-full"
              >
                <div className="flex items-center gap-2.5 sm:gap-3.5 mb-2">
                  <span className="text-base sm:text-xl md:text-2xl font-black text-[#72e055]">
                    {s.num}
                  </span>
                  <div className={`p-2 sm:p-2.5 rounded-xl border ${s.bgAccent}`}>
                    <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <div className="my-auto">
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-white mb-1.5 group-hover:text-[#72e055] transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-normal">
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
