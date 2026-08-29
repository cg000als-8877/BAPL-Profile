"use client";

import React, { useEffect, useRef, useState } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  Layers,
  Maximize2,
  TrendingUp,
  Users,
  Cpu,
  Scissors,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const CapacitySlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const machineryRef = useRef<HTMLDivElement>(null);

  const [counterPieces, setCounterPieces] = useState(0);
  const [counterSpace, setCounterSpace] = useState(0);
  const [counterTurnover, setCounterTurnover] = useState(0);
  const [counterManpower, setCounterManpower] = useState(0);
  const [counterMachines, setCounterMachines] = useState(0);

  const [activeMachineryTab, setActiveMachineryTab] = useState<"all" | "sewing" | "specialty" | "finishing">("all");

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );

      // Grid Cards Stagger
      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.08, ease: "back.out(1.2)" }
      );

      // Machinery Section Slide Up
      gsap.fromTo(
        machineryRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
      );

      // Counter Animations
      const countObj = { pieces: 0, space: 0, turnover: 0, manpower: 0, machines: 0 };

      gsap.to(countObj, {
        pieces: 300000,
        space: 38000,
        turnover: 10.0,
        manpower: 700,
        machines: 250,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          setCounterPieces(Math.round(countObj.pieces));
          setCounterSpace(Math.round(countObj.space));
          setCounterTurnover(Number(countObj.turnover.toFixed(2)));
          setCounterManpower(Math.round(countObj.manpower));
          setCounterMachines(Math.round(countObj.machines));
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const machineryCategories = {
    sewing: [
      "Plain Machine",
      "Overlock",
      "Interlock",
      "Interlock Machine",
      "Flat Lock",
      "Bartag Machine",
    ],
    specialty: [
      "Two Needle",
      "2 Needle Chain stitch",
      "Feed Of The Arm",
      "Cylinder Bed",
      "Pmd Kansai",
      "Smooking Machine",
      "Peaquoting & Zigzag",
    ],
    finishing: [
      "Button Hole",
      "Button Attach",
      "Snap Button Machine",
      "Fusing Machine",
      "Heat Seal Machine",
      "Pull Test Machine",
      "Needle Detector",
    ],
  };

  return (
    <AspectWrapper className="bg-slate-50 text-slate-900">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-6 md:p-10 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100/90"
      >
        {/* Subtle decorative background patterns */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

        {/* Header Ribbon */}
        <div ref={headerRef} className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#69b23f]">
                Operational Benchmark
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                FACTORY CAPACITY & SCALE
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm text-xs text-slate-600">
            <Sparkles className="w-3.5 h-3.5 text-[#69b23f]" />
            <span>Industrial Strength</span>
          </div>
        </div>

        {/* 4-5 Stats Bento Grid */}
        <div
          ref={gridRef}
          className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4 my-2 sm:my-3"
        >
          {/* Card 1: Production Capacity */}
          <div className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:border-[#69b23f]/50">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Monthly Capacity
              </span>
              <div className="p-1.5 rounded-lg bg-[#69b23f]/10 text-[#69b23f]">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <div className="text-lg sm:text-2xl md:text-3xl font-black text-slate-900 font-mono tracking-tight">
              {counterPieces.toLocaleString()}
            </div>
            <div className="text-[11px] sm:text-xs font-medium text-[#69b23f] mt-0.5">
              Pieces Per Month
            </div>
          </div>

          {/* Card 2: Factory Space */}
          <div className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:border-[#69b23f]/50">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Factory Space
              </span>
              <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-lg sm:text-2xl md:text-3xl font-black text-slate-900 font-mono tracking-tight">
              {counterSpace.toLocaleString()}{" "}
              <span className="text-xs sm:text-sm font-semibold text-slate-500">SQ. FT</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              320,000 SFT Total Campus
            </div>
          </div>

          {/* Card 3: Annual Turnover */}
          <div className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:border-[#69b23f]/50">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Annual Turnover
              </span>
              <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-lg sm:text-2xl md:text-3xl font-black text-slate-900 font-mono tracking-tight">
              ${counterTurnover.toFixed(2)}M
            </div>
            <div className="text-[11px] sm:text-xs text-emerald-600 font-medium mt-0.5">
              USD / Annual Revenue
            </div>
          </div>

          {/* Card 4: Workforce */}
          <div className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all hover:border-[#69b23f]/50">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Total Manpower
              </span>
              <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-lg sm:text-2xl md:text-3xl font-black text-slate-900 font-mono tracking-tight">
              {counterManpower}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              + 35 Key Management Staff
            </div>
          </div>
        </div>

        {/* Machinery Summary Fleet Bar & Breakdown */}
        <div
          ref={machineryRef}
          className="relative z-10 p-3.5 sm:p-4 rounded-xl bg-white/90 border border-slate-200 shadow-sm flex flex-col justify-between"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-[#69b23f] text-white flex items-center gap-2 shadow-md shadow-[#69b23f]/25">
                <Cpu className="w-4 h-4" />
                <span className="text-sm sm:text-base font-bold font-mono">
                  {counterMachines} SETS
                </span>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                  Knit & Woven Modern Machinery Fleet
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-500">
                  State-of-the-art Japanese & European sewing and finishing lines
                </p>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 text-xs">
              <button
                onClick={() => setActiveMachineryTab("all")}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  activeMachineryTab === "all"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Machinery
              </button>
              <button
                onClick={() => setActiveMachineryTab("sewing")}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  activeMachineryTab === "sewing"
                    ? "bg-[#69b23f] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Sewing
              </button>
              <button
                onClick={() => setActiveMachineryTab("specialty")}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  activeMachineryTab === "specialty"
                    ? "bg-[#69b23f] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Specialty
              </button>
              <button
                onClick={() => setActiveMachineryTab("finishing")}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  activeMachineryTab === "finishing"
                    ? "bg-[#69b23f] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Finishing & QA
              </button>
            </div>
          </div>

          {/* Machinery Tag Cloud / Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5 sm:gap-2 max-h-24 sm:max-h-28 overflow-y-auto pr-1">
            {(activeMachineryTab === "all" || activeMachineryTab === "sewing") &&
              machineryCategories.sewing.map((m, i) => (
                <div
                  key={`sew-${i}`}
                  className="flex items-center gap-1.5 p-1.5 px-2 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] text-slate-700 hover:bg-white transition-colors"
                >
                  <Scissors className="w-3 h-3 text-[#69b23f] shrink-0" />
                  <span className="truncate font-medium">{m}</span>
                </div>
              ))}

            {(activeMachineryTab === "all" || activeMachineryTab === "specialty") &&
              machineryCategories.specialty.map((m, i) => (
                <div
                  key={`spec-${i}`}
                  className="flex items-center gap-1.5 p-1.5 px-2 rounded-lg bg-emerald-50/50 border border-emerald-200/60 text-[11px] text-slate-700 hover:bg-white transition-colors"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="truncate font-medium">{m}</span>
                </div>
              ))}

            {(activeMachineryTab === "all" || activeMachineryTab === "finishing") &&
              machineryCategories.finishing.map((m, i) => (
                <div
                  key={`fin-${i}`}
                  className="flex items-center gap-1.5 p-1.5 px-2 rounded-lg bg-blue-50/50 border border-blue-200/60 text-[11px] text-slate-700 hover:bg-white transition-colors"
                >
                  <Cpu className="w-3 h-3 text-blue-600 shrink-0" />
                  <span className="truncate font-medium">{m}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Footer Slide Metadata */}
        <div className="relative z-10 flex items-center justify-between text-xs text-slate-500 pt-1">
          <span>Byzid Apparels (Pvt) Ltd. — Operational Fleet & Production Statistics</span>
          <span className="font-mono font-semibold text-[#69b23f]">Slide 02 / 06</span>
        </div>
      </div>
    </AspectWrapper>
  );
};
