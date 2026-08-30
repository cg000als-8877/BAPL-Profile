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
  const bannerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

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
        bannerRef.current,
        { x: -50, opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, duration: 0.45, delay: 0.05, ease: "expo.out" }
      );

      gsap.fromTo(
        panelsRef.current?.children || [],
        { y: 30, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.06,
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
        className="relative w-full h-full p-3 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-2 sm:gap-4 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Plant & Equipment Summary
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
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
          ref={bannerRef}
          className="shrink-0 p-2.5 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl cyber-card border border-[#55c538]/35 flex items-center justify-between gap-3 bg-[#091426]/90"
        >
          <div className="flex items-center gap-3">
            <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#55c538] text-slate-950 flex items-center gap-1.5 shadow-md shadow-[#55c538]/30 font-black shrink-0">
              <Cpu className="w-4 h-4" />
              <span className="text-base sm:text-2xl md:text-3xl font-black leading-none">
                {counterMachines}
              </span>
              <span className="text-[9px] sm:text-xs font-black uppercase">
                SETS
              </span>
            </div>

            <div>
              <h3 className="text-xs sm:text-lg md:text-xl font-black text-white leading-tight">
                Knit & Woven Machinery
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-300 font-medium">
                Comprehensive Production Equipment Fleet
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex text-xs font-bold text-[#72e055] px-3 py-1 rounded-full bg-[#55c538]/10 border border-[#55c538]/30">
            20 Essential Machinery Models
          </span>
        </div>

        {/* 3. FLUID DISPLAY (Zero Tabs, Fills Whole Display on Mobile & Desktop) */}
        <div
          ref={panelsRef}
          className="flex-1 flex flex-col md:grid md:grid-cols-3 gap-2 sm:gap-4 min-h-0"
        >
          {/* PANEL 1: PRIMARY SEWING */}
          <div className="flex-1 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl cyber-card border border-blue-500/30 bg-[#091426]/85 flex flex-col justify-between min-h-0">
            <div className="shrink-0 flex items-center justify-between pb-1 mb-1 sm:pb-2 sm:mb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                <h4 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider text-blue-400">
                  Primary Sewing
                </h4>
              </div>
              <span className="text-[9px] sm:text-xs font-black px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {primarySewing.length} Types
              </span>
            </div>

            <div className="flex-1 grid grid-cols-2 md:grid-cols-1 gap-1 sm:gap-1.5 overflow-hidden content-center">
              {primarySewing.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-[10px] sm:text-xs font-bold text-slate-100 truncate"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#55c538] shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PANEL 2: SPECIALTY STITCHING */}
          <div className="flex-1 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl cyber-card border border-purple-500/30 bg-[#091426]/85 flex flex-col justify-between min-h-0">
            <div className="shrink-0 flex items-center justify-between pb-1 mb-1 sm:pb-2 sm:mb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                <h4 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider text-purple-400">
                  Specialty Stitching
                </h4>
              </div>
              <span className="text-[9px] sm:text-xs font-black px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {specialtyStitching.length} Types
              </span>
            </div>

            <div className="flex-1 grid grid-cols-2 md:grid-cols-1 gap-1 sm:gap-1.5 overflow-hidden content-center">
              {specialtyStitching.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-[10px] sm:text-xs font-bold text-slate-100 truncate"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#55c538] shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PANEL 3: FINISHING & ASSEMBLY */}
          <div className="flex-1 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl cyber-card border border-amber-500/30 bg-[#091426]/85 flex flex-col justify-between min-h-0">
            <div className="shrink-0 flex items-center justify-between pb-1 mb-1 sm:pb-2 sm:mb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                <h4 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-wider text-amber-400">
                  Finishing & Assembly
                </h4>
              </div>
              <span className="text-[9px] sm:text-xs font-black px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {finishingAssembly.length} Types
              </span>
            </div>

            <div className="flex-1 grid grid-cols-2 md:grid-cols-1 gap-1 sm:gap-1.5 overflow-hidden content-center">
              {finishingAssembly.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-lg bg-slate-900/70 border border-slate-800 text-[10px] sm:text-xs font-bold text-slate-100 truncate"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#55c538] shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
