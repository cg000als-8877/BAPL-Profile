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
  ArrowUpRight,
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
      // Magnetic Flash Entrance from Side
      gsap.fromTo(
        headerRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.55, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { x: -90, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
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
      desc: "Continuously identifying opportunities to elevate customer experience and surpass global garment manufacturing benchmarks.",
      icon: HeartHandshake,
      color: "from-emerald-500/20 to-transparent",
      bgAccent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      num: "02",
      title: "Infrastructure Alignment",
      desc: "Directly aligning production capabilities with each client's business growth, dedicating specialized lines and technical resources.",
      icon: Network,
      color: "from-blue-500/20 to-transparent",
      bgAccent: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    },
    {
      num: "03",
      title: "Proactive Partnership",
      desc: "Collaborating closely with world-leading fashion brands to anticipate fast-shifting consumer trends and dynamic seasonal cycles.",
      icon: Handshake,
      color: "from-indigo-500/20 to-transparent",
      bgAccent: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    },
    {
      num: "04",
      title: "Supply Chain Optimization",
      desc: "Streamlining end-to-end yarn, fabric, and accessory procurement to reduce lead time and cost while guaranteeing premium quality.",
      icon: Truck,
      color: "from-amber-500/20 to-transparent",
      bgAccent: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      num: "05",
      title: "Product Development & Design",
      desc: "In-house design studio and R&D sample rooms custom-tailored to embody each brand's distinct aesthetic identity and DNA.",
      icon: Palette,
      color: "from-purple-500/20 to-transparent",
      bgAccent: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
    {
      num: "06",
      title: "Value-Added Savings",
      desc: "Exclusive “Fast Sale” programs providing strategic buyers with substantial duty savings, commercial agility, and cost reduction.",
      icon: BadgePercent,
      color: "from-[#69b23f]/20 to-transparent",
      bgAccent: "bg-[#69b23f]/15 text-[#88cb5c] border-[#69b23f]/40",
    },
  ];

  return (
    <AspectWrapper className="bg-slate-950 text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-6 sm:p-10 md:p-14 lg:p-20 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#080e1d] via-[#0f172a] to-[#050812]"
      >
        {/* Glows */}
        <div className="absolute -top-12 right-1/4 w-[500px] h-[500px] bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Bar */}
        <div ref={headerRef} className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-2 md:w-2.5 h-10 md:h-14 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-xs md:text-sm lg:text-base font-extrabold uppercase tracking-widest text-[#88cb5c]">
                Competitive Edge
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                OUR STRATEGIC PILLARS
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-slate-900/90 rounded-full border border-slate-700 text-xs md:text-sm lg:text-base text-slate-200 shadow-md">
            <Sparkles className="w-4 h-4 text-[#88cb5c]" />
            <span>Customer-Centric Value Creation</span>
          </div>
        </div>

        {/* 6 Strategic Pillars Grid */}
        <div
          ref={gridRef}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 my-auto"
        >
          {strategies.map((s) => {
            const IconComponent = s.icon;
            return (
              <div
                key={s.num}
                className="group relative p-5 md:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md hover:bg-slate-900 hover:border-[#69b23f] hover:shadow-2xl hover:shadow-[#69b23f]/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div className="flex items-start justify-between gap-3 mb-3 md:mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl font-black text-[#88cb5c]">
                      {s.num}
                    </span>
                    <div className={`p-2 md:p-2.5 rounded-xl border ${s.bgAccent}`}>
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-[#88cb5c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#88cb5c] transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs md:text-sm text-slate-400 pt-3 border-t border-slate-800">
          <span>Byzid Apparels — Value Acceleration & Strategic Partnership</span>
          <span className="font-mono font-bold text-[#88cb5c]">Slide 03 / 06</span>
        </div>
      </div>
    </AspectWrapper>
  );
};
