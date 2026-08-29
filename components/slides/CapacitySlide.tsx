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
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { x: -60, opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.05, ease: "expo.out" }
      );

      gsap.fromTo(
        machineryRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "expo.out" }
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
        className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-4 sm:gap-6 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-2 md:w-2.5 h-8 md:h-12 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Operational Benchmark
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                FACTORY CAPACITY & SCALE
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Sparkles className="w-4 h-4 text-[#55c538]" />
            <span>Industrial Strength</span>
          </div>
        </div>

        {/* 4 Stats Grid (Expands to Fill Screen Boldly) */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 min-h-0"
        >
          {/* Card 1: Production Capacity */}
          <div className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card flex flex-col justify-between h-full group">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-wider">
                Monthly Output
              </span>
              <div className="p-2 sm:p-2.5 rounded-xl bg-[#55c538]/20 text-[#72e055]">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="my-auto py-1">
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                {counterPieces.toLocaleString()}
              </div>
              <div className="text-xs sm:text-base md:text-lg font-extrabold text-[#72e055] mt-1">
                Pieces / Month
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-medium">High Volume Output Ready</div>
          </div>

          {/* Card 2: Factory Space */}
          <div className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card flex flex-col justify-between h-full group">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-wider">
                Factory Space
              </span>
              <div className="p-2 sm:p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="my-auto py-1">
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                {counterSpace.toLocaleString()}{" "}
                <span className="text-sm sm:text-xl font-bold text-slate-400">SQ. FT</span>
              </div>
              <div className="text-xs sm:text-base md:text-lg text-slate-300 font-bold mt-1">
                320,000 SFT Total Campus
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Modern Multi-Story Complex</div>
          </div>

          {/* Card 3: Annual Turnover */}
          <div className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card flex flex-col justify-between h-full group">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-wider">
                Annual Turnover
              </span>
              <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="my-auto py-1">
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                ${counterTurnover.toFixed(2)}M
              </div>
              <div className="text-xs sm:text-base md:text-lg text-emerald-400 font-extrabold mt-1">
                USD / Annual Revenue
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Consistent Fiscal Growth</div>
          </div>

          {/* Card 4: Total Manpower */}
          <div className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card flex flex-col justify-between h-full group">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-wider">
                Total Workforce
              </span>
              <div className="p-2 sm:p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="my-auto py-1">
              <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                {counterManpower}
              </div>
              <div className="text-xs sm:text-base md:text-lg text-slate-300 font-bold mt-1">
                + 35 Key Management Staff
              </div>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Skilled RMG Artisans</div>
          </div>
        </div>

        {/* Machinery Fleet Section (Fills Bottom Space Fluidly) */}
        <div
          ref={machineryRef}
          className="shrink-0 p-4 sm:p-6 md:p-7 rounded-2xl cyber-card"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#55c538] text-slate-950 flex items-center gap-2 glow-emerald font-black">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-lg md:text-xl font-black">
                  {counterMachines} SETS
                </span>
              </div>
              <div>
                <h4 className="text-sm sm:text-lg md:text-xl font-bold text-white">
                  Knit & Woven Modern Machinery Fleet
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 hidden sm:block">
                  Japanese & European high-precision stitching lines
                </p>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <button
                onClick={() => setActiveMachineryTab("all")}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                  activeMachineryTab === "all"
                    ? "bg-[#55c538] text-slate-950 shadow-md font-bold"
                    : "cyber-pill text-slate-300 hover:text-white"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveMachineryTab("sewing")}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                  activeMachineryTab === "sewing"
                    ? "bg-[#55c538] text-slate-950 shadow-md font-bold"
                    : "cyber-pill text-slate-300 hover:text-white"
                }`}
              >
                Sewing
              </button>
              <button
                onClick={() => setActiveMachineryTab("specialty")}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                  activeMachineryTab === "specialty"
                    ? "bg-[#55c538] text-slate-950 shadow-md font-bold"
                    : "cyber-pill text-slate-300 hover:text-white"
                }`}
              >
                Specialty
              </button>
              <button
                onClick={() => setActiveMachineryTab("finishing")}
                className={`px-3.5 py-1.5 rounded-lg font-bold transition-all ${
                  activeMachineryTab === "finishing"
                    ? "bg-[#55c538] text-slate-950 shadow-md font-bold"
                    : "cyber-pill text-slate-300 hover:text-white"
                }`}
              >
                Finishing
              </button>
            </div>
          </div>

          {/* Machinery Tags Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 max-h-28 sm:max-h-36 overflow-hidden">
            {(activeMachineryTab === "all" || activeMachineryTab === "sewing") &&
              machineryCategories.sewing.map((m, i) => (
                <div
                  key={`sew-${i}`}
                  className="flex items-center gap-2 p-2 px-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-200 font-semibold"
                >
                  <Scissors className="w-3.5 h-3.5 text-[#55c538] shrink-0" />
                  <span className="truncate">{m}</span>
                </div>
              ))}

            {(activeMachineryTab === "all" || activeMachineryTab === "specialty") &&
              machineryCategories.specialty.map((m, i) => (
                <div
                  key={`spec-${i}`}
                  className="flex items-center gap-2 p-2 px-3 rounded-lg bg-emerald-950/50 border border-emerald-800/50 text-xs sm:text-sm text-slate-200 font-semibold"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{m}</span>
                </div>
              ))}

            {(activeMachineryTab === "all" || activeMachineryTab === "finishing") &&
              machineryCategories.finishing.map((m, i) => (
                <div
                  key={`fin-${i}`}
                  className="flex items-center gap-2 p-2 px-3 rounded-lg bg-blue-950/50 border border-blue-800/50 text-xs sm:text-sm text-slate-200 font-semibold"
                >
                  <Cpu className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">{m}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
