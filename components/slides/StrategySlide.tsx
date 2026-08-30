"use client";

import React, { useEffect, useRef } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  HeartHandshake,
  ShieldCheck,
  CircleDollarSign,
  Clock,
  Sparkles,
  TrendingUp,
  Award,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
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
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { x: -40, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.04,
          ease: "expo.out",
          delay: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const pillars = [
    {
      id: "01",
      title: "Customer Satisfaction",
      desc: "Exceeding Buyer Expectations",
      icon: HeartHandshake,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
    },
    {
      id: "02",
      title: "Quality Product",
      desc: "Zero-Defect RMG Standard",
      icon: ShieldCheck,
      color: "text-blue-400",
      border: "border-blue-500/30",
      bg: "bg-blue-500/10",
    },
    {
      id: "03",
      title: "Competitive Price",
      desc: "Optimized Value Engineering",
      icon: CircleDollarSign,
      color: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-500/10",
    },
    {
      id: "04",
      title: "Timely Delivery",
      desc: "99.8% On-Time Shipment Rate",
      icon: Clock,
      color: "text-purple-400",
      border: "border-purple-500/30",
      bg: "bg-purple-500/10",
    },
    {
      id: "05",
      title: "Compliance Standard",
      desc: "BSCI & Ethical Manufacturing",
      icon: Award,
      color: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/10",
    },
    {
      id: "06",
      title: "Continuous Improvement",
      desc: "Tech & Operational Innovation",
      icon: TrendingUp,
      color: "text-[#72e055]",
      border: "border-[#55c538]/30",
      bg: "bg-[#55c538]/10",
    },
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-3.5 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-2.5 sm:gap-4 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Core Methodology
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                OUR STRATEGY
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Sparkles className="w-4 h-4 text-[#55c538]" />
            <span>6 Execution Pillars</span>
          </div>
        </div>

        {/* 2. Fluid Auto-Adapting Stack / Grid (Fills Whole Frame on Mobile & Desktop) */}
        <div
          ref={gridRef}
          className="flex-1 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 min-h-0"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`flex-1 p-2.5 sm:p-5 rounded-xl sm:rounded-2xl cyber-card border ${pillar.border} bg-[#091426]/90 flex items-center md:flex-col justify-between md:justify-between shadow-xl min-h-0 group hover:scale-[1.02] transition-all`}
              >
                {/* Top/Left: Number & Icon */}
                <div className="flex items-center gap-2.5 md:w-full md:justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] sm:text-sm font-black text-slate-400 font-mono">
                      {pillar.id}
                    </span>
                    <div
                      className={`p-2 sm:p-2.5 rounded-lg ${pillar.bg} ${pillar.color} shrink-0`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                  <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[#55c538] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Bottom/Right: Title & Description */}
                <div className="text-right md:text-left md:w-full min-w-0 flex-1 md:flex-initial pl-2 md:pl-0 md:mt-2">
                  <h3 className="text-xs sm:text-base lg:text-lg font-black text-white leading-tight truncate md:whitespace-normal">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 truncate md:whitespace-normal">
                    {pillar.desc}
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
