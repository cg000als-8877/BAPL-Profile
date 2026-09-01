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
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setCounterMachines(250);
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", clearProps: "transform" }
      );

      gsap.fromTo(
        bannerRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.05, ease: "power2.out", clearProps: "transform" }
      );

      gsap.fromTo(
        panelsRef.current?.children || [],
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.08,
          clearProps: "transform",
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
        className="relative w-full min-h-full p-4 sm:p-6 md:p-10 lg:p-14 flex flex-col justify-between gap-3 sm:gap-4 overflow-y-visible md:overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-center md:justify-between w-full">
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-2.5 sm:gap-4 w-full md:w-auto">
            <div className="hidden md:block w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Plant & Equipment Summary
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-normal">
                MACHINERY SUMMARY
              </h2>
              {/* Thin line under title and subtitle on mobile */}
              <div className="block md:hidden w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#55c538] to-transparent rounded-full mt-2" />
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
          className="shrink-0 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl cyber-card border border-[#55c538]/35 flex items-center justify-between gap-3 bg-[#091426]/95 shadow-xl"
        >
          <div className="flex items-center gap-3.5">
            <div className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#55c538] text-slate-950 flex items-center gap-2 shadow-lg shadow-[#55c538]/30 font-black shrink-0">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black leading-none font-mono">
                {counterMachines}
              </span>
              <span className="text-[10px] sm:text-xs font-black uppercase">
                SETS
              </span>
            </div>

            <div>
              <h3 className="text-sm sm:text-xl md:text-2xl font-black text-white leading-tight">
                Knit & Woven Machinery
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-200 font-medium">
                Comprehensive Production Equipment Fleet
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex text-xs md:text-sm font-bold text-[#72e055] px-3.5 py-1.5 rounded-full bg-[#55c538]/10 border border-[#55c538]/30 shadow-md">
            20 Essential Machinery Models
          </span>
        </div>

        {/* 3. FLUID DISPLAY (Zero Tabs, Fills Whole Display on Mobile & Desktop) */}
        <div
          ref={panelsRef}
          className="flex-1 flex flex-col md:grid md:grid-cols-3 gap-2.5 sm:gap-4 lg:gap-5 min-h-0"
        >
          {/* PANEL 1: PRIMARY SEWING */}
          <div className="flex-1 p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl cyber-card border border-blue-500/30 bg-[#091426]/90 flex flex-col justify-between min-h-0 shadow-2xl">
            <div className="shrink-0 flex items-center justify-between pb-1.5 mb-1.5 sm:pb-3 sm:mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <h4 className="text-xs sm:text-base lg:text-lg font-black uppercase tracking-wider text-blue-400">
                  Primary Sewing
                </h4>
              </div>
              <span className="text-[10px] sm:text-xs font-black px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {primarySewing.length} Types
              </span>
            </div>

            <div className="flex-1 grid grid-cols-2 md:grid-cols-1 gap-1.5 sm:gap-2 overflow-hidden content-center">
              {primarySewing.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-1.5 sm:p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px] sm:text-sm lg:text-base font-bold text-slate-100 truncate"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#55c538] shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PANEL 2: SPECIALTY STITCHING */}
          <div className="flex-1 p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl cyber-card border border-purple-500/30 bg-[#091426]/90 flex flex-col justify-between min-h-0 shadow-2xl">
            <div className="shrink-0 flex items-center justify-between pb-1.5 mb-1.5 sm:pb-3 sm:mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                <h4 className="text-xs sm:text-base lg:text-lg font-black uppercase tracking-wider text-purple-400">
                  Specialty Stitching
                </h4>
              </div>
              <span className="text-[10px] sm:text-xs font-black px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {specialtyStitching.length} Types
              </span>
            </div>

            <div className="flex-1 grid grid-cols-2 md:grid-cols-1 gap-1.5 sm:gap-2 overflow-hidden content-center">
              {specialtyStitching.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-1.5 sm:p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px] sm:text-sm lg:text-base font-bold text-slate-100 truncate"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#55c538] shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PANEL 3: FINISHING & ASSEMBLY */}
          <div className="flex-1 p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl cyber-card border border-amber-500/30 bg-[#091426]/90 flex flex-col justify-between min-h-0 shadow-2xl">
            <div className="shrink-0 flex items-center justify-between pb-1.5 mb-1.5 sm:pb-3 sm:mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                <h4 className="text-xs sm:text-base lg:text-lg font-black uppercase tracking-wider text-amber-400">
                  Finishing & Assembly
                </h4>
              </div>
              <span className="text-[10px] sm:text-xs font-black px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {finishingAssembly.length} Types
              </span>
            </div>

            <div className="flex-1 grid grid-cols-2 md:grid-cols-1 gap-1.5 sm:gap-2 overflow-hidden content-center">
              {finishingAssembly.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-1.5 sm:p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px] sm:text-sm lg:text-base font-bold text-slate-100 truncate"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#55c538] shrink-0" />
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
