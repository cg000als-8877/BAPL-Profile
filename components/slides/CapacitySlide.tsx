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
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { x: -50, opacity: 0, scale: 0.97 },
        { x: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.04, ease: "expo.out" }
      );

      gsap.fromTo(
        machineryRef.current,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, delay: 0.1, ease: "expo.out" }
      );

      const countObj = { pieces: 0, space: 0, turnover: 0, manpower: 0, machines: 0 };
      gsap.to(countObj, {
        pieces: 300000,
        space: 38000,
        turnover: 10.0,
        manpower: 700,
        machines: 250,
        duration: 1.2,
        ease: "power3.out",
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
      "Flat Lock",
      "Bartag Machine",
    ],
    specialty: [
      "Two Needle",
      "2 Needle Chain stitch",
      "Feed Of The Arm",
      "Cylinder Bed",
      "Pmd Kansai",
    ],
    finishing: [
      "Button Hole",
      "Button Attach",
      "Snap Button",
      "Fusing Machine",
      "Needle Detector",
    ],
  };

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full max-w-6xl mx-auto p-4 sm:p-8 md:p-12 flex flex-col justify-between overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="w-1.5 sm:w-2 h-6 sm:h-9 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#72e055]">
                Operational Benchmark
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                FACTORY CAPACITY & SCALE
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 cyber-pill rounded-full text-xs font-semibold text-slate-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#55c538]" />
            <span>Industrial Strength</span>
          </div>
        </div>

        {/* 4 Stats Grid (Logical scale & natural height) */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 my-auto"
        >
          {/* Card 1: Production Capacity */}
          <div className="p-3 sm:p-4 rounded-xl cyber-card flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Monthly Output
              </span>
              <div className="p-1.5 rounded-lg bg-[#55c538]/20 text-[#72e055]">
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
            <div className="my-1">
              <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {counterPieces.toLocaleString()}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-[#72e055] mt-0.5">
                Pieces / Month
              </div>
            </div>
            <div className="text-[9px] sm:text-[10px] text-slate-400">High Volume Ready</div>
          </div>

          {/* Card 2: Factory Space */}
          <div className="p-3 sm:p-4 rounded-xl cyber-card flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Factory Space
              </span>
              <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
            <div className="my-1">
              <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {counterSpace.toLocaleString()}{" "}
                <span className="text-xs sm:text-sm font-semibold text-slate-400">SQ. FT</span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">
                320,000 SFT Campus
              </div>
            </div>
            <div className="text-[9px] sm:text-[10px] text-slate-400">Multi-Story Unit</div>
          </div>

          {/* Card 3: Annual Turnover */}
          <div className="p-3 sm:p-4 rounded-xl cyber-card flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Annual Turnover
              </span>
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
            <div className="my-1">
              <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                ${counterTurnover.toFixed(2)}M
              </div>
              <div className="text-[11px] sm:text-xs text-emerald-400 font-bold mt-0.5">
                USD / Revenue
              </div>
            </div>
            <div className="text-[9px] sm:text-[10px] text-slate-400">Consistent Growth</div>
          </div>

          {/* Card 4: Total Manpower */}
          <div className="p-3 sm:p-4 rounded-xl cyber-card flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Total Workforce
              </span>
              <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
            <div className="my-1">
              <div className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {counterManpower}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">
                + 35 Key Staff
              </div>
            </div>
            <div className="text-[9px] sm:text-[10px] text-slate-400">Skilled RMG Artisans</div>
          </div>
        </div>

        {/* Machinery Fleet Section (Refined, clean) */}
        <div
          ref={machineryRef}
          className="shrink-0 p-3 sm:p-4 rounded-xl cyber-card"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-1.5 border-b border-slate-800">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#55c538] text-slate-950 flex items-center gap-1 glow-emerald font-bold">
                <Cpu className="w-3.5 h-3.5" />
                <span className="text-xs sm:text-sm font-black">
                  {counterMachines} SETS
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white">
                Knit & Woven Machinery Fleet
              </h4>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 text-[10px] sm:text-xs">
              <button
                onClick={() => setActiveMachineryTab("all")}
                className={`px-2 py-0.5 rounded font-semibold transition-all ${
                  activeMachineryTab === "all"
                    ? "bg-[#55c538] text-slate-950 font-bold"
                    : "cyber-pill text-slate-300 hover:text-white"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveMachineryTab("sewing")}
                className={`px-2 py-0.5 rounded font-semibold transition-all ${
                  activeMachineryTab === "sewing"
                    ? "bg-[#55c538] text-slate-950 font-bold"
                    : "cyber-pill text-slate-300 hover:text-white"
                }`}
              >
                Sewing
              </button>
              <button
                onClick={() => setActiveMachineryTab("specialty")}
                className={`px-2 py-0.5 rounded font-semibold transition-all ${
                  activeMachineryTab === "specialty"
                    ? "bg-[#55c538] text-slate-950 font-bold"
                    : "cyber-pill text-slate-300 hover:text-white"
                }`}
              >
                Specialty
              </button>
              <button
                onClick={() => setActiveMachineryTab("finishing")}
                className={`px-2 py-0.5 rounded font-semibold transition-all ${
                  activeMachineryTab === "finishing"
                    ? "bg-[#55c538] text-slate-950 font-bold"
                    : "cyber-pill text-slate-300 hover:text-white"
                }`}
              >
                Finishing
              </button>
            </div>
          </div>

          {/* Machinery Tags Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1.5">
            {(activeMachineryTab === "all" || activeMachineryTab === "sewing") &&
              machineryCategories.sewing.map((m, i) => (
                <div
                  key={`sew-${i}`}
                  className="flex items-center gap-1 p-1 px-2 rounded-md bg-slate-900/60 border border-slate-800 text-[10px] sm:text-xs text-slate-200 font-medium"
                >
                  <Scissors className="w-3 h-3 text-[#55c538] shrink-0" />
                  <span className="truncate">{m}</span>
                </div>
              ))}

            {(activeMachineryTab === "all" || activeMachineryTab === "specialty") &&
              machineryCategories.specialty.map((m, i) => (
                <div
                  key={`spec-${i}`}
                  className="flex items-center gap-1 p-1 px-2 rounded-md bg-emerald-950/40 border border-emerald-800/40 text-[10px] sm:text-xs text-slate-200 font-medium"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">{m}</span>
                </div>
              ))}

            {(activeMachineryTab === "all" || activeMachineryTab === "finishing") &&
              machineryCategories.finishing.map((m, i) => (
                <div
                  key={`fin-${i}`}
                  className="flex items-center gap-1 p-1 px-2 rounded-md bg-blue-950/40 border border-blue-800/40 text-[10px] sm:text-xs text-slate-200 font-medium"
                >
                  <Cpu className="w-3 h-3 text-blue-400 shrink-0" />
                  <span className="truncate">{m}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
