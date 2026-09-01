"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const CertificationsSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <AspectWrapper className="bg-transparent text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-4 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-3 sm:gap-5 overflow-visible"
      >

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-center md:justify-between w-full">
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-2.5 sm:gap-4 w-full md:w-auto">
            <div className="hidden md:block w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-[11px] sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Ethical & Safety Standards
              </div>
              <h2 className="text-lg xs:text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-normal whitespace-nowrap">
                WE ARE CERTIFIED BY
              </h2>
              {/* Thin line under title and subtitle on mobile */}
              <div className="block md:hidden w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#55c538] to-transparent rounded-full mt-2" />
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#55c538]" />
            <span>Globally Audited Compliance</span>
          </div>
        </div>

        {/* 2. Bento Grid of Certifications: 100% Flexible to Logo Dimensions, Zero Cropping */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 min-h-0 items-stretch"
        >
          {/* Card 1: amfori BSCI */}
          <div className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card border border-indigo-500/35 bg-[#091426]/90 flex flex-col justify-between h-full shadow-2xl">
            <div>
              <div className="mb-2 sm:mb-3">
                <span className="text-xs sm:text-base font-black uppercase text-indigo-400 tracking-wider">
                  Social & Workplace Compliance
                </span>
              </div>

              {/* Stacked Flexible Logo Frames for BSCI and amfori */}
              <div className="flex flex-col gap-2.5 sm:gap-3.5 mb-3 sm:mb-4">
                {/* BSCI Flexible Card (Exact 1019/290 Aspect Ratio) */}
                <div className="bg-white/95 hover:bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg relative w-full aspect-[1019/290] flex items-center justify-center transition-all overflow-hidden">
                  <Image
                    src="/logos/certifications/bsci.png"
                    alt="BSCI Business Social Compliance Initiative"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className="object-contain object-center p-1 sm:p-2"
                  />
                </div>

                {/* amfori Flexible Card (Exact 1223/315 Aspect Ratio) */}
                <div className="bg-white/95 hover:bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-lg relative w-full aspect-[1223/315] flex items-center justify-center transition-all overflow-hidden">
                  <Image
                    src="/logos/certifications/amfori.png"
                    alt="amfori BSCI Global Trade Association"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className="object-contain object-center p-1 sm:p-2"
                  />
                </div>
              </div>

              <h3 className="text-sm sm:text-xl font-black text-white mb-0.5">
                amfori BSCI Certified
              </h3>
              <div className="text-xs sm:text-sm text-slate-400 font-normal tracking-wide uppercase mb-1 sm:mb-1.5">
                Global Standard
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-snug sm:leading-relaxed">
                Audited for rigorous workplace safety, fair worker compensation, ethical labor practices, and transparent supply chain standards.
              </p>
            </div>

            <div className="pt-2 sm:pt-3 border-t border-slate-800 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#55c538] shrink-0" />
              <span>Full compliance with international ethical audit benchmarks</span>
            </div>
          </div>

          {/* Card 2: OEKO-TEX Standard 100 (Flexible to Natural 963x606 Aspect Ratio with Zero Cropping) */}
          <div className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card border border-emerald-500/35 bg-[#091426]/90 flex flex-col justify-between h-full shadow-2xl">
            <div>
              <div className="mb-2 sm:mb-3">
                <span className="text-xs sm:text-base font-black uppercase text-[#72e055] tracking-wider">
                  Chemical Safety & Ecology
                </span>
              </div>

              {/* Flexible White Showcase Card matching exact natural 963/606 aspect ratio */}
              <div className="bg-white/95 hover:bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl relative w-full aspect-[963/606] max-h-[300px] flex items-center justify-center mb-3 sm:mb-4 transition-all overflow-hidden">
                <Image
                  src="/logos/certifications/eee.png"
                  alt="OEKO-TEX Standard 100 Confidence in Textiles"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-contain object-center p-1.5 sm:p-2.5"
                />
              </div>

              <h3 className="text-sm sm:text-xl font-black text-white mb-0.5">
                OEKO-TEX® Standard 100
              </h3>
              <div className="text-xs sm:text-sm text-slate-400 font-normal tracking-wide uppercase mb-1 sm:mb-1.5">
                Safe Skin Test
              </div>
              <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-snug sm:leading-relaxed">
                Certified Confidence in Textiles, rigorously laboratory-tested and verified free from harmful chemical substances and toxic dyes.
              </p>
            </div>

            <div className="pt-2 sm:pt-3 border-t border-slate-800 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#55c538] shrink-0" />
              <span>Safe for infant, toddler, children, and adult garments</span>
            </div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
