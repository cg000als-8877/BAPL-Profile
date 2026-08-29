"use client";

import React, { useEffect, useRef, useState } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  Cpu,
  Scissors,
  CheckCircle2,
  Sparkles,
  Settings2,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const MachinerySlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const fleetRef = useRef<HTMLDivElement>(null);

  const [counterMachines, setCounterMachines] = useState(0);
  const [counterSewing, setCounterSewing] = useState(0);
  const [counterSpecialty, setCounterSpecialty] = useState(0);
  const [counterFinishing, setCounterFinishing] = useState(0);

  const [activeTab, setActiveTab] = useState<"all" | "sewing" | "specialty" | "finishing">("all");

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" }
      );

      gsap.fromTo(
        statsRef.current?.children || [],
        { x: -60, opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.05, ease: "expo.out" }
      );

      gsap.fromTo(
        fleetRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "expo.out" }
      );

      const countObj = { total: 0, sewing: 0, specialty: 0, finishing: 0 };
      gsap.to(countObj, {
        total: 250,
        sewing: 140,
        specialty: 65,
        finishing: 45,
        duration: 1.2,
        ease: "power3.out",
        onUpdate: () => {
          setCounterMachines(Math.round(countObj.total));
          setCounterSewing(Math.round(countObj.sewing));
          setCounterSpecialty(Math.round(countObj.specialty));
          setCounterFinishing(Math.round(countObj.finishing));
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const machineDetails = [
    { name: "Plain Machine", type: "sewing", role: "High-speed single needle straight stitching for knit & woven seams", count: "80 Sets" },
    { name: "Overlock (4/5 Thread)", type: "sewing", role: "Safety edge finishing and seam reinforcement", count: "35 Sets" },
    { name: "Interlock Machine", type: "sewing", role: "Dual-sided elastic fabric joining for activewear", count: "15 Sets" },
    { name: "Flat Lock (4 Needle)", type: "sewing", role: "Seamless comfort stitching for sports & underwear", count: "10 Sets" },
    { name: "Bartag Machine", type: "sewing", role: "Heavy-duty pocket and stress-point bar reinforcement", count: "8 Sets" },
    { name: "Two Needle Machine", type: "specialty", role: "Parallel decorative & structural twin stitching", count: "20 Sets" },
    { name: "2 Needle Chain Stitch", type: "specialty", role: "High-tension waistband and denim inseam stitching", count: "15 Sets" },
    { name: "Feed Of The Arm", type: "specialty", role: "Lap seam closing for denim jeans & heavy workwear", count: "12 Sets" },
    { name: "Cylinder Bed", type: "specialty", role: "Tubular sleeve, collar, and cuff edge binding", count: "10 Sets" },
    { name: "PMD Kansai Special", type: "specialty", role: "Multi-needle elastic insertion and waistband construction", count: "8 Sets" },
    { name: "Button Hole Machine", type: "finishing", role: "Computerized precision keyhole & eyelet cutting", count: "12 Sets" },
    { name: "Button Attach Machine", type: "finishing", role: "Automated shank and 4-hole button fastening", count: "12 Sets" },
    { name: "Snap Button Machine", type: "finishing", role: "Heavy pneumatic fastener for infant & denim snaps", count: "8 Sets" },
    { name: "Fusing Machine", type: "finishing", role: "Continuous heat-press collar & placket fusing", count: "5 Sets" },
    { name: "Needle Detector Unit", type: "finishing", role: "Ferrous metal safety scanning for export compliance", count: "4 Sets" },
  ];

  const filteredMachines =
    activeTab === "all"
      ? machineDetails
      : machineDetails.filter((m) => m.type === activeTab);

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-3 sm:gap-5 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-2 md:w-2.5 h-8 md:h-12 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055] flex items-center gap-1.5">
                <Settings2 className="w-3.5 h-3.5 text-[#55c538]" />
                <span>Japanese & European Technology</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                MACHINE SUMMARY
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Cpu className="w-4 h-4 text-[#55c538]" />
            <span>250 Total Sets Fleet</span>
          </div>
        </div>

        {/* 4 Machine Category KPI Cards */}
        <div
          ref={statsRef}
          className="shrink-0 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4"
        >
          <div className="p-3 sm:p-4 rounded-xl cyber-card flex flex-col justify-between border-emerald-500/30">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">Total Machine Fleet</span>
              <Cpu className="w-4 h-4 text-[#55c538]" />
            </div>
            <div className="text-xl sm:text-3xl font-black text-white mt-1">
              {counterMachines} <span className="text-xs sm:text-sm text-[#72e055] font-bold">SETS</span>
            </div>
            <div className="text-[10px] text-slate-400">Complete Production Capacity</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl cyber-card flex flex-col justify-between border-blue-500/30">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">Primary Sewing</span>
              <Scissors className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-xl sm:text-3xl font-black text-white mt-1">
              {counterSewing}+ <span className="text-xs sm:text-sm text-blue-400 font-bold">SETS</span>
            </div>
            <div className="text-[10px] text-slate-400">Plain, Overlock, Flatlock</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl cyber-card flex flex-col justify-between border-purple-500/30">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">Specialty Stitching</span>
              <Zap className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-xl sm:text-3xl font-black text-white mt-1">
              {counterSpecialty}+ <span className="text-xs sm:text-sm text-purple-400 font-bold">SETS</span>
            </div>
            <div className="text-[10px] text-slate-400">Chain Stitch, Feed of Arm, Kansai</div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl cyber-card flex flex-col justify-between border-amber-500/30">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase">Finishing & QA</span>
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-xl sm:text-3xl font-black text-white mt-1">
              {counterFinishing}+ <span className="text-xs sm:text-sm text-amber-400 font-bold">SETS</span>
            </div>
            <div className="text-[10px] text-slate-400">Button Hole, Fusing, Detector</div>
          </div>
        </div>

        {/* Interactive Machinery Inventory Grid */}
        <div
          ref={fleetRef}
          className="flex-1 p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between min-h-0"
        >
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800 overflow-x-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-[#55c538] text-slate-950 font-black"
                  : "cyber-pill text-slate-300 hover:text-white"
              }`}
            >
              All Machinery ({machineDetails.length} Models)
            </button>
            <button
              onClick={() => setActiveTab("sewing")}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "sewing"
                  ? "bg-[#55c538] text-slate-950 font-black"
                  : "cyber-pill text-slate-300 hover:text-white"
              }`}
            >
              Primary Sewing
            </button>
            <button
              onClick={() => setActiveTab("specialty")}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "specialty"
                  ? "bg-[#55c538] text-slate-950 font-black"
                  : "cyber-pill text-slate-300 hover:text-white"
              }`}
            >
              Specialty Lines
            </button>
            <button
              onClick={() => setActiveTab("finishing")}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "finishing"
                  ? "bg-[#55c538] text-slate-950 font-black"
                  : "cyber-pill text-slate-300 hover:text-white"
              }`}
            >
              Finishing & Safety
            </button>
          </div>

          {/* Machine Inventory Cards Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 overflow-y-auto pr-1">
            {filteredMachines.map((m, i) => (
              <div
                key={i}
                className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start justify-between gap-2 hover:border-[#55c538]/50 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#55c538] shrink-0" />
                    <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {m.name}
                    </h5>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-1 leading-snug">
                    {m.role}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-md bg-[#55c538]/15 text-[#72e055] border border-[#55c538]/30">
                  {m.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
