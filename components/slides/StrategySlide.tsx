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
      gsap.fromTo(
        headerRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 35, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.09,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const strategies = [
    {
      num: "01",
      title: "Customer Service Excellence",
      desc: "Continuously looking for opportunities to improve customer service and exceed global apparel delivery benchmarks.",
      icon: HeartHandshake,
      color: "from-emerald-500/10 to-transparent",
      accent: "text-emerald-600",
      bgAccent: "bg-emerald-50 text-emerald-600 border-emerald-200/60",
    },
    {
      num: "02",
      title: "Infrastructure Alignment",
      desc: "Align directly with customer’s business needs, scaling dedicated production lines and specialized resources around them.",
      icon: Network,
      color: "from-blue-500/10 to-transparent",
      accent: "text-blue-600",
      bgAccent: "bg-blue-50 text-blue-600 border-blue-200/60",
    },
    {
      num: "03",
      title: "Proactive Partnership",
      desc: "Work closely with our global brand partners to foresee dynamic market trends and evolving seasonal business cycles.",
      icon: Handshake,
      color: "from-indigo-500/10 to-transparent",
      accent: "text-indigo-600",
      bgAccent: "bg-indigo-50 text-indigo-600 border-indigo-200/60",
    },
    {
      num: "04",
      title: "Supply Chain Optimization",
      desc: "Optimize supply chain and production to achieve lower costs at consistent premium quality. We share benefits with strategic partners.",
      icon: Truck,
      color: "from-amber-500/10 to-transparent",
      accent: "text-amber-600",
      bgAccent: "bg-amber-50 text-amber-600 border-amber-200/60",
    },
    {
      num: "05",
      title: "Product Development & Design",
      desc: "Support our customers by setting up in-house design and R&D capabilities rooted deeply in each brand's unique design DNA.",
      icon: Palette,
      color: "from-purple-500/10 to-transparent",
      accent: "text-purple-600",
      bgAccent: "bg-purple-50 text-purple-600 border-purple-200/60",
    },
    {
      num: "06",
      title: "Value-Added Savings",
      desc: "Offer specialized “Fast Sale” programs to our global customers to maximize commercial agility and duty savings.",
      icon: BadgePercent,
      color: "from-[#69b23f]/15 to-transparent",
      accent: "text-[#69b23f]",
      bgAccent: "bg-[#69b23f]/10 text-[#4e8c2c] border-[#69b23f]/30",
    },
  ];

  return (
    <AspectWrapper className="bg-slate-900 text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-6 md:p-10 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0c1324] via-[#0f172a] to-[#090d18]"
      >
        {/* Ambient Glows */}
        <div className="absolute -top-12 right-1/4 w-96 h-96 bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Bar */}
        <div ref={headerRef} className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#88cb5c]">
                Competitive Advantage
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                OUR STRATEGIC PILLARS
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700 text-xs text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-[#88cb5c]" />
            <span>Customer-Centric Value Creation</span>
          </div>
        </div>

        {/* 6 Strategic Pillars Grid (2 cols x 3 rows on desktop / scrollable on mobile) */}
        <div
          ref={gridRef}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3.5 my-auto max-h-[70vh] overflow-y-auto sm:overflow-visible py-1"
        >
          {strategies.map((s) => {
            const IconComponent = s.icon;
            return (
              <div
                key={s.num}
                className="group relative p-3.5 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-md hover:bg-slate-800 hover:border-[#69b23f]/60 hover:shadow-lg hover:shadow-[#69b23f]/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top edge gradient highlight */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-sm sm:text-base font-extrabold text-[#88cb5c]">
                      {s.num}
                    </span>
                    <div className={`p-1.5 rounded-lg border ${s.bgAccent}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-[#88cb5c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-[#88cb5c] transition-colors leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
          <span>Byzid Apparels — Value Acceleration & Strategic Partnership</span>
          <span className="font-mono font-semibold text-[#88cb5c]">Slide 03 / 06</span>
        </div>
      </div>
    </AspectWrapper>
  );
};
