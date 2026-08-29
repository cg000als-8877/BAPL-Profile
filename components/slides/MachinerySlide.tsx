"use client";

import React, { useEffect, useRef, useState } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  Cpu,
  Scissors,
  CheckCircle2,
  Sparkles,
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
  const badgeRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  const [counterMachines, setCounterMachines] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        badgeRef.current,
        { x: -50, opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, duration: 0.45, delay: 0.05, ease: "expo.out" }
      );

      gsap.fromTo(
        columnsRef.current?.children || [],
        { x: -40, opacity: 0, scale: 0.97 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: "expo.out",
          delay: 0.1,
        }
      );

      const countObj = { total: 0 };
      gsap.to(countObj, {
        total: 250,
        duration: 1.2,
        ease: "power3.out",
        onUpdate: () => {
          setCounterMachines(Math.round(countObj.total));
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const primarySewing = [
    "Plain Machine",
    "Overlock",
    "Interlock",
    "Interlock Machine",
    "Flat Lock",
    "Bartag Machine",
  ];

  const specialtyStitching = [
    "Two Needle",
    "2 Needle Chain stitch",
    "Feed Of The Arm",
    "Cylinder Bed",
    "Pmd Kansai",
    "Smooking Machine",
    "Peaquoting & Zigzag",
  ];

  const finishingAssembly = [
    "Button Hole",
    "Button Attach",
    "Snap Button Machine",
    "Fusing Machine",
    "Heat Seal Machine",
    "Pull Test Machine",
    "Needle Detector",
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-3 sm:gap-5 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header (Cleaned, no extraneous claims) */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-2 md:w-2.5 h-8 md:h-12 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Plant & Equipment Summary
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                MACHINERY SUMMARY
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Sparkles className="w-4 h-4 text-[#55c538]" />
            <span>Industrial Equipment Fleet</span>
          </div>
        </div>

        {/* 2. Headline Banner from PDF */}
        <div
          ref={badgeRef}
          className="shrink-0 p-3.5 sm:p-5 md:p-6 rounded-2xl cyber-card border border-[#55c538]/30 flex items-center gap-3 sm:gap-5 bg-[#091426]/80"
        >
          <div className="px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl bg-[#55c538] text-slate-950 flex flex-col items-center justify-center shrink-0 shadow-lg shadow-[#55c538]/30">
            <span className="text-xl sm:text-3xl md:text-4xl font-black leading-none">
              {counterMachines}
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase">
              SETS
            </span>
          </div>

          <div>
            <h3 className="text-base sm:text-xl md:text-2xl font-black text-white">
              Knit & Woven Machinery
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 font-medium">
              Comprehensive Production Equipment Fleet
            </p>
          </div>
        </div>

        {/* 3. Three Columns matching exact PDF Categories */}
        <div
          ref={columnsRef}
          className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 min-h-0"
        >
          {/* Column 1: PRIMARY SEWING */}
          <div className="p-4 sm:p-5 rounded-2xl cyber-card flex flex-col justify-between h-full border-blue-500/25">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Scissors className="w-4 h-4 text-blue-400" />
                <h4 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider text-blue-400">
                  Primary Sewing
                </h4>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400">
                {primarySewing.length} Types
              </span>
            </div>

            <div className="flex-1 space-y-1.5 overflow-y-auto pr-1">
              {primarySewing.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm font-semibold text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#55c538] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: SPECIALTY STITCHING */}
          <div className="p-4 sm:p-5 rounded-2xl cyber-card flex flex-col justify-between h-full border-purple-500/25">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-400" />
                <h4 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider text-purple-400">
                  Specialty Stitching
                </h4>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400">
                {specialtyStitching.length} Types
              </span>
            </div>

            <div className="flex-1 space-y-1.5 overflow-y-auto pr-1">
              {specialtyStitching.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm font-semibold text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#55c538] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: FINISHING & ASSEMBLY */}
          <div className="p-4 sm:p-5 rounded-2xl cyber-card flex flex-col justify-between h-full border-amber-500/25">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider text-amber-400">
                  Finishing & Assembly
                </h4>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400">
                {finishingAssembly.length} Types
              </span>
            </div>

            <div className="flex-1 space-y-1.5 overflow-y-auto pr-1">
              {finishingAssembly.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm font-semibold text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#55c538] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
