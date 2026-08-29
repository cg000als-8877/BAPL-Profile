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
      // Magnetic Flash Entrance from Side
      gsap.fromTo(
        headerRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.55, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { x: -90, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.07, ease: "expo.out" }
      );

      gsap.fromTo(
        machineryRef.current,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.55, delay: 0.15, ease: "expo.out" }
      );

      // Fast Animated Counters
      const countObj = { pieces: 0, space: 0, turnover: 0, manpower: 0, machines: 0 };
      gsap.to(countObj, {
        pieces: 300000,
        space: 38000,
        turnover: 10.0,
        manpower: 700,
        machines: 250,
        duration: 1.4,
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
        className="relative w-full h-full p-6 sm:p-10 md:p-14 lg:p-20 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100"
      >
        {/* Subtle decorative glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-2 md:w-2.5 h-10 md:h-14 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-xs md:text-sm lg:text-base font-extrabold uppercase tracking-widest text-[#69b23f]">
                Operational Benchmark
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                FACTORY CAPACITY & SCALE
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full border border-slate-200 shadow-md text-xs md:text-sm lg:text-base font-semibold text-slate-700">
            <Sparkles className="w-4 h-4 text-[#69b23f]" />
            <span>Industrial Strength Infrastructure</span>
          </div>
        </div>

        {/* 4 Large Stats Bento Grid */}
        <div
          ref={gridRef}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-auto"
        >
          {/* Card 1: Production Capacity */}
          <div className="p-5 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all hover:border-[#69b23f]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">
                Monthly Capacity
              </span>
              <div className="p-2 md:p-2.5 rounded-xl bg-[#69b23f]/15 text-[#69b23f]">
                <Layers className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-mono tracking-tight">
              {counterPieces.toLocaleString()}
            </div>
            <div className="text-xs sm:text-sm md:text-base font-bold text-[#69b23f] mt-1">
              Pieces Per Month
            </div>
          </div>

          {/* Card 2: Factory Space */}
          <div className="p-5 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all hover:border-[#69b23f]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">
                Factory Space
              </span>
              <div className="p-2 md:p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <Maximize2 className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-mono tracking-tight">
              {counterSpace.toLocaleString()}{" "}
              <span className="text-base sm:text-lg md:text-xl font-bold text-slate-500">SQ. FT</span>
            </div>
            <div className="text-xs sm:text-sm md:text-base text-slate-500 font-medium mt-1">
              320,000 SFT Total Campus
            </div>
          </div>

          {/* Card 3: Annual Turnover */}
          <div className="p-5 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all hover:border-[#69b23f]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">
                Annual Turnover
              </span>
              <div className="p-2 md:p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-mono tracking-tight">
              ${counterTurnover.toFixed(2)}M
            </div>
            <div className="text-xs sm:text-sm md:text-base text-emerald-600 font-bold mt-1">
              USD / Annual Revenue
            </div>
          </div>

          {/* Card 4: Total Manpower */}
          <div className="p-5 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all hover:border-[#69b23f]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider">
                Total Manpower
              </span>
              <div className="p-2 md:p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <Users className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-mono tracking-tight">
              {counterManpower}
            </div>
            <div className="text-xs sm:text-sm md:text-base text-slate-500 font-medium mt-1">
              + 35 Key Management Staff
            </div>
          </div>
        </div>

        {/* Machinery Fleet Section */}
        <div
          ref={machineryRef}
          className="relative z-10 p-5 md:p-7 rounded-2xl bg-white border border-slate-200 shadow-md"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-xl bg-[#69b23f] text-white flex items-center gap-2.5 shadow-md shadow-[#69b23f]/30">
                <Cpu className="w-5 h-5" />
                <span className="text-base sm:text-lg md:text-xl font-black font-mono">
                  {counterMachines} SETS
                </span>
              </div>
              <div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-slate-800">
                  Knit & Woven Modern Machinery Fleet
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  State-of-the-art Japanese & European sewing and finishing machinery
                </p>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 text-xs md:text-sm">
              <button
                onClick={() => setActiveMachineryTab("all")}
                className={`px-4 py-1.5 rounded-lg font-semibold transition-all ${
                  activeMachineryTab === "all"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Fleet
              </button>
              <button
                onClick={() => setActiveMachineryTab("sewing")}
                className={`px-4 py-1.5 rounded-lg font-semibold transition-all ${
                  activeMachineryTab === "sewing"
                    ? "bg-[#69b23f] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Sewing
              </button>
              <button
                onClick={() => setActiveMachineryTab("specialty")}
                className={`px-4 py-1.5 rounded-lg font-semibold transition-all ${
                  activeMachineryTab === "specialty"
                    ? "bg-[#69b23f] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Specialty
              </button>
              <button
                onClick={() => setActiveMachineryTab("finishing")}
                className={`px-4 py-1.5 rounded-lg font-semibold transition-all ${
                  activeMachineryTab === "finishing"
                    ? "bg-[#69b23f] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Finishing & QA
              </button>
            </div>
          </div>

          {/* Machinery Tag Cloud Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 max-h-32 md:max-h-40 overflow-y-auto pr-1">
            {(activeMachineryTab === "all" || activeMachineryTab === "sewing") &&
              machineryCategories.sewing.map((m, i) => (
                <div
                  key={`sew-${i}`}
                  className="flex items-center gap-2 p-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs md:text-sm text-slate-800 font-medium hover:bg-white transition-colors"
                >
                  <Scissors className="w-3.5 h-3.5 text-[#69b23f] shrink-0" />
                  <span className="truncate">{m}</span>
                </div>
              ))}

            {(activeMachineryTab === "all" || activeMachineryTab === "specialty") &&
              machineryCategories.specialty.map((m, i) => (
                <div
                  key={`spec-${i}`}
                  className="flex items-center gap-2 p-2 px-3 rounded-xl bg-emerald-50/50 border border-emerald-200 text-xs md:text-sm text-slate-800 font-medium hover:bg-white transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{m}</span>
                </div>
              ))}

            {(activeMachineryTab === "all" || activeMachineryTab === "finishing") &&
              machineryCategories.finishing.map((m, i) => (
                <div
                  key={`fin-${i}`}
                  className="flex items-center gap-2 p-2 px-3 rounded-xl bg-blue-50/50 border border-blue-200 text-xs md:text-sm text-slate-800 font-medium hover:bg-white transition-colors"
                >
                  <Cpu className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{m}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs md:text-sm text-slate-500 pt-3 border-t border-slate-200">
          <span>Byzid Apparels (Pvt) Ltd. — Operational Fleet & Production Capacity</span>
          <span className="font-mono font-bold text-[#69b23f]">Slide 02 / 06</span>
        </div>
      </div>
    </AspectWrapper>
  );
};
