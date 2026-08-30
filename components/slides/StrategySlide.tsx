"use client";

import React, { useEffect, useRef } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  Heart,
  Network,
  Handshake,
  Truck,
  Palette,
  BadgePercent,
  HeartHandshake,
  ShieldCheck,
  CircleDollarSign,
  Clock,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const StrategySlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileStackRef = useRef<HTMLDivElement>(null);
  const desktopGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        desktopGridRef.current?.children || [],
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

      gsap.fromTo(
        mobileStackRef.current?.children || [],
        { y: 20, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "expo.out",
          delay: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  // Original concise pillars for Desktop
  const desktopPillars = [
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

  // Detailed verbatim pillars for Mobile
  const mobilePillars = [
    {
      id: "01",
      title: "Customer Service Excellence",
      desc: "Continuously identifying opportunities to elevate customer experience and surpass global standards.",
      icon: Heart,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/15",
    },
    {
      id: "02",
      title: "Infrastructure Alignment",
      desc: "Aligning dedicated manufacturing lines and engineering resources to meet dynamic brand demands.",
      icon: Network,
      color: "text-blue-400",
      border: "border-blue-500/30",
      bg: "bg-blue-500/15",
    },
    {
      id: "03",
      title: "Proactive Partnership",
      desc: "Forecasting seasonal market shifts through tight collaboration with international fashion teams.",
      icon: Handshake,
      color: "text-indigo-400",
      border: "border-indigo-500/30",
      bg: "bg-indigo-500/15",
    },
    {
      id: "04",
      title: "Supply Chain Optimization",
      desc: "Optimizing yarn, fabric, and accessories procurement for shortest lead time and lower total cost.",
      icon: Truck,
      color: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-500/15",
    },
    {
      id: "05",
      title: "Product Development & Design",
      desc: "In-house design studio and R&D sample rooms custom-tailored to each brand's aesthetic DNA.",
      icon: Palette,
      color: "text-purple-400",
      border: "border-purple-500/30",
      bg: "bg-purple-500/15",
    },
    {
      id: "06",
      title: "Value-Added Savings",
      desc: "Specialized \"Fast Sale\" programs providing strategic buyers with substantial duty savings and agility.",
      icon: BadgePercent,
      color: "text-[#72e055]",
      border: "border-[#55c538]/30",
      bg: "bg-[#55c538]/15",
    },
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-3.5 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-3 sm:gap-4 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
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
            <span>6 Strategic Pillars</span>
          </div>
        </div>

        {/* 2. MOBILE VIEW ONLY: Standard Consistent Gap & Vertically Centered Content */}
        <div
          ref={mobileStackRef}
          className="flex-1 flex flex-col md:hidden gap-2.5 min-h-0"
        >
          {mobilePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`flex-1 p-3 rounded-xl cyber-card border ${pillar.border} bg-[#091426]/95 flex flex-col justify-center shadow-lg min-h-0`}
              >
                {/* Header Row: Index & Glowing Icon */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-300 font-mono">
                      {pillar.id}
                    </span>
                    <div className={`p-1 rounded-md ${pillar.bg} ${pillar.color} shrink-0`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Middle Content: Bigger Title & Clear Description */}
                <div>
                  <h3 className="text-sm font-black text-white leading-tight mb-0.5">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] text-slate-300 font-normal leading-tight line-clamp-2">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. DESKTOP VIEW ONLY: Original Concise Layout & Grid */}
        <div
          ref={desktopGridRef}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 min-h-0"
        >
          {desktopPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`p-5 md:p-6 rounded-2xl cyber-card border ${pillar.border} bg-[#091426]/90 flex flex-col justify-between shadow-xl min-h-0 group hover:scale-[1.02] transition-all`}
              >
                {/* Top: Number & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm font-black text-slate-400 font-mono">
                      {pillar.id}
                    </span>
                    <div
                      className={`p-2.5 rounded-xl ${pillar.bg} ${pillar.color} shrink-0 shadow-md`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55c538] opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Bottom: Title & Description */}
                <div>
                  <h3 className="text-base lg:text-lg font-black text-white leading-snug mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
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
