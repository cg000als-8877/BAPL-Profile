"use client";

import React, { useEffect, useRef } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  HeartHandshake,
  ShieldCheck,
  CircleDollarSign,
  Clock,
  Award,
  TrendingUp,
  Sparkles,
  CheckCircle2,
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

  // Authentic Strategy Pillars based on PDF Page 4 with enhanced, enlarged descriptions
  const strategyPillars = [
    {
      id: "01",
      title: "Customer Satisfaction",
      tag: "Buyer Partnership",
      desc: "Uncompromising focus on buyer partnerships, client trust, and surpassing international fashion retail expectations.",
      icon: HeartHandshake,
      color: "text-emerald-400",
      border: "border-emerald-500/35",
      bg: "bg-emerald-500/15",
    },
    {
      id: "02",
      title: "Quality Product",
      tag: "Zero-Defect QA",
      desc: "Zero-defect manufacturing protocols, rigorous multi-stage QA inspections, and premier fabric craftsmanship.",
      icon: ShieldCheck,
      color: "text-blue-400",
      border: "border-blue-500/35",
      bg: "bg-blue-500/15",
    },
    {
      id: "03",
      title: "Competitive Price",
      tag: "Value Engineering",
      desc: "Optimized direct-from-source value engineering delivering maximum margin advantage for global brands.",
      icon: CircleDollarSign,
      color: "text-amber-400",
      border: "border-amber-500/35",
      bg: "bg-amber-500/15",
    },
    {
      id: "04",
      title: "Timely Delivery",
      tag: "On-Time Shipping",
      desc: "Precision production scheduling and agile supply chains guaranteeing on-time global port shipments.",
      icon: Clock,
      color: "text-purple-400",
      border: "border-purple-500/35",
      bg: "bg-purple-500/15",
    },
    {
      id: "05",
      title: "Compliance Standard",
      tag: "Ethical Audit",
      desc: "Strict adherence to BSCI, OEKO-TEX, and global ethical labor, environmental, and fire safety standards.",
      icon: Award,
      color: "text-cyan-400",
      border: "border-cyan-500/35",
      bg: "bg-cyan-500/15",
    },
    {
      id: "06",
      title: "Continuous Improvement",
      tag: "Plant Innovation",
      desc: "Constant modernization of machinery, automated processes, worker skill development, and production agility.",
      icon: TrendingUp,
      color: "text-[#72e055]",
      border: "border-[#55c538]/35",
      bg: "bg-[#55c538]/15",
    },
  ];

  return (
    <AspectWrapper className="bg-transparent text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-4 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-3 sm:gap-5 overflow-visible"
      >

        {/* 1. Header with Strong Brand Hierarchy */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-center md:justify-between w-full">
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-2.5 sm:gap-4 w-full md:w-auto">
            <div className="hidden md:block w-2 md:w-2.5 h-8 md:h-12 bg-[#55c538] rounded-full glow-bar" />
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Core Operational Methodology
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-normal">
                OUR STRATEGY
              </h2>
              {/* Thin line under title and subtitle on mobile */}
              <div className="block md:hidden w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#55c538] to-transparent rounded-full mt-2" />
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Sparkles className="w-4 h-4 text-[#55c538]" />
            <span>6 Strategic Pillars</span>
          </div>
        </div>

        {/* 2. MOBILE VIEW: Auto-Expanding Cards Stack (Full text wrapping, auto height) */}
        <div
          ref={mobileStackRef}
          className="w-full flex flex-col md:hidden gap-3"
        >
          {strategyPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`w-full p-4 rounded-xl cyber-card border ${pillar.border} bg-[#091426]/95 flex flex-col justify-between shadow-lg h-auto`}
              >
                {/* Header Row: Index & Glowing Icon */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-300">
                      {pillar.id}
                    </span>
                    <div className={`p-1.5 rounded-md ${pillar.bg} ${pillar.color} shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10 shrink-0">
                    {pillar.tag}
                  </span>
                </div>

                {/* Content with Full Text Wrapping */}
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-black text-white leading-snug break-words">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed break-words">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. DESKTOP VIEW: Redesigned Grand 3x2 Bento Grid with Large Bold Typography */}
        <div
          ref={desktopGridRef}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 flex-1 min-h-0"
        >
          {strategyPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`p-5 md:p-6 lg:p-7 rounded-2xl cyber-card border ${pillar.border} bg-gradient-to-br from-[#09162a]/95 to-[#060c18]/95 flex flex-col justify-between shadow-2xl min-h-0 group hover:scale-[1.02] hover:border-[#55c538] transition-all duration-300 relative overflow-hidden`}
              >
                {/* Subtle card ambient radial highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-full blur-2xl pointer-events-none" />

                {/* Top Section: Index, Icon Badge & Tag Pill */}
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <span className="text-lg lg:text-xl font-black text-slate-400">
                        {pillar.id}
                      </span>
                      <div
                        className={`p-3 rounded-xl ${pillar.bg} ${pillar.color} shrink-0 shadow-lg border border-white/10`}
                      >
                        <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full cyber-pill text-xs font-bold text-slate-300 border border-white/10 shadow-sm">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Enlarged Title from PDF */}
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-black text-white tracking-tight leading-snug mb-2">
                    {pillar.title}
                  </h3>

                  {/* Enlarged Description */}
                  <p className="text-xs sm:text-sm lg:text-base text-slate-200 font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Verification Accent */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-[#72e055]">
                  <CheckCircle2 className="w-4 h-4 text-[#55c538] shrink-0" />
                  <span>Strategic Commitment</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AspectWrapper>
  );
};
