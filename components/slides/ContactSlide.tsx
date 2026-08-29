"use client";

import React, { useEffect, useRef, useState } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  Phone,
  UserCheck,
  CreditCard,
  FileCheck2,
  Copy,
  Check,
  MapPin,
  Building,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const ContactSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const topSectionRef = useRef<HTMLDivElement>(null);
  const bottomSectionRef = useRef<HTMLDivElement>(null);

  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(label);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" }
      );

      gsap.fromTo(
        topSectionRef.current?.children || [],
        { x: -50, opacity: 0, scale: 0.97 },
        { x: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.05, ease: "expo.out", delay: 0.05 }
      );

      gsap.fromTo(
        bottomSectionRef.current?.children || [],
        { x: -50, opacity: 0, scale: 0.97 },
        { x: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.05, ease: "expo.out", delay: 0.1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-3 sm:gap-5 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-2 md:w-2.5 h-8 md:h-12 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Get In Touch & Corporate Details
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                CONTACT & OPERATIONS
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <UserCheck className="w-4 h-4 text-[#55c538]" />
            <span>Direct Leadership & Banking</span>
          </div>
        </div>

        {/* 2. TOP SECTION: Leadership Contacts & Banking Information (Brought to Top) */}
        <div
          ref={topSectionRef}
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 min-h-0"
        >
          {/* Key Executive Leadership */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between h-full border-emerald-500/25">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#72e055] uppercase tracking-wider mb-2">
              <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Executive Leadership Contacts</span>
            </div>

            {/* Managing Director */}
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-white">
                  Mr. Abdur Rahaman
                </div>
                <div className="text-xs text-[#72e055] font-semibold">
                  Managing Director
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300">
                  info@byzidapparels.com
                </div>
              </div>
              <button
                onClick={() => handleCopy("info@byzidapparels.com", "md")}
                className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-slate-300 hover:text-white transition-all shadow-sm"
                title="Copy Email"
              >
                {copiedEmail === "md" ? (
                  <Check className="w-4 h-4 text-[#55c538]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Director of Operations */}
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between mt-2">
              <div>
                <div className="text-sm sm:text-base md:text-lg font-bold text-white">
                  Mrs. Susan Rebeiro
                </div>
                <div className="text-xs text-[#72e055] font-semibold">
                  Director of Operations
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300">
                  susan@byzidapparels.com
                </div>
              </div>
              <button
                onClick={() => handleCopy("susan@byzidapparels.com", "ops")}
                className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-slate-300 hover:text-white transition-all shadow-sm"
                title="Copy Email"
              >
                {copiedEmail === "ops" ? (
                  <Check className="w-4 h-4 text-[#55c538]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Corporate Banking Information */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between h-full border-blue-500/25">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#72e055] uppercase tracking-wider">
                <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Corporate Banking</span>
              </div>
              <span className="text-xs font-bold text-slate-300 px-2.5 py-0.5 rounded-md bg-white/10 border border-white/10">
                Rupali Bank Ltd.
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Principal Branch:</span>
                <span className="font-bold text-white">RUPALI SADAN, CHATTOGRAM</span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-800">
                <span className="text-slate-400">Account Number:</span>
                <span className="font-extrabold text-[#72e055] text-sm sm:text-base">
                  1271020012021
                </span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-800">
                <span className="text-slate-400">SWIFT Code:</span>
                <span className="font-bold text-white">RUPBBDDHRSC</span>
              </div>
            </div>

            <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
              Direct L/C & Foreign Export Trade Facility
            </div>
          </div>
        </div>

        {/* 3. BOTTOM SECTION: Factory Address & Regulatory Credentials */}
        <div
          ref={bottomSectionRef}
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 min-h-0"
        >
          {/* Factory Address */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#72e055] uppercase tracking-wider mb-1.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Headquarters & Production Facility</span>
              </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-black text-white mb-1">
                Byzid Apparels (Pvt) Ltd.
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                ABM Tower, 671/1, Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
              </p>
            </div>

            <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between">
              <a
                href="tel:008802334451856"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/10 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#72e055]" />
                <span>0088-02334451856</span>
              </a>
              <span className="text-[10px] sm:text-xs text-slate-400">Open 24/7 Factory Operations</span>
            </div>
          </div>

          {/* Regulatory Credentials */}
          <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card flex flex-col justify-between h-full">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-300 uppercase tracking-wider mb-2">
              <FileCheck2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#55c538]" />
              <span>Regulatory Credentials</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 block text-[9px] sm:text-[10px]">BIN</span>
                <span className="font-bold text-white text-xs sm:text-sm">001287924-0505</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 block text-[9px] sm:text-[10px]">BGMEA Reg.</span>
                <span className="font-bold text-white text-xs sm:text-sm">No. 2673</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 block text-[9px] sm:text-[10px]">IRC / ERC</span>
                <span className="font-bold text-white text-xs sm:text-sm truncate block">260315120087920</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 block text-[9px] sm:text-[10px]">Fire License</span>
                <span className="font-bold text-white text-xs sm:text-sm">CHATTA-6961</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
