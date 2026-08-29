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
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const ContactSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

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
        leftColRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out", delay: 0.05 }
      );

      gsap.fromTo(
        rightColRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out", delay: 0.05 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between gap-3 sm:gap-4 md:gap-6 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 md:gap-4">
            <div className="w-1.5 md:w-2 h-7 md:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Get In Touch
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                CONTACT & OPERATIONS
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 cyber-pill rounded-full text-xs md:text-sm font-semibold text-slate-200 shadow-md">
            <UserCheck className="w-3.5 h-3.5 text-[#55c538]" />
            <span>Direct Communication</span>
          </div>
        </div>

        {/* Split Screen Layout */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8 min-h-0">
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col justify-between gap-2.5 sm:gap-4 md:gap-6 h-full">
            {/* Factory Address Card */}
            <div className="p-3.5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl cyber-card flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#72e055] uppercase tracking-wider mb-1 sm:mb-2">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Headquarters & Factory</span>
                </div>
                <h3 className="text-sm sm:text-lg md:text-2xl font-bold text-white mb-1">
                  Byzid Apparels (Pvt) Ltd.
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed mb-2">
                  ABM Tower, 671/1, Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <a
                  href="tel:008802334451856"
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/10 transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#72e055]" />
                  <span>0088-02334451856</span>
                </a>
              </div>
            </div>

            {/* Regulatory Credentials */}
            <div className="p-3.5 sm:p-5 md:p-7 rounded-xl md:rounded-2xl cyber-card flex flex-col justify-between flex-1">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                <FileCheck2 className="w-3.5 h-3.5 text-[#55c538]" />
                <span>Regulatory Credentials</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 block text-[9px] sm:text-xs">BIN</span>
                  <span className="font-bold text-white">001287924-0505</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 block text-[9px] sm:text-xs">BGMEA Reg.</span>
                  <span className="font-bold text-white">No. 2673</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 block text-[9px] sm:text-xs">IRC / ERC</span>
                  <span className="font-bold text-white truncate block">260315120087920</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 block text-[9px] sm:text-xs">Fire License</span>
                  <span className="font-bold text-white">CHATTA-6961</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="flex flex-col justify-between gap-2.5 sm:gap-4 md:gap-6 h-full">
            {/* Key Executives */}
            <div className="p-3.5 sm:p-6 md:p-8 rounded-xl md:rounded-2xl cyber-card flex flex-col justify-between flex-1">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#72e055] uppercase tracking-wider mb-2">
                <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Executive Contacts</span>
              </div>

              {/* MD */}
              <div className="p-2.5 sm:p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 mb-2 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-base font-bold text-white">
                    Mr. Abdur Rahaman
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#72e055] font-semibold">
                    Managing Director
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400">
                    info@byzidapparels.com
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("info@byzidapparels.com", "md")}
                  className="p-2 sm:p-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-slate-300 hover:text-white transition-all"
                  title="Copy Email"
                >
                  {copiedEmail === "md" ? (
                    <Check className="w-3.5 h-3.5 text-[#55c538]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Operations Director */}
              <div className="p-2.5 sm:p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-base font-bold text-white">
                    Mrs. Susan Rebeiro
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#72e055] font-semibold">
                    Director of Operations
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400">
                    susan@byzidapparels.com
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("susan@byzidapparels.com", "ops")}
                  className="p-2 sm:p-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-slate-300 hover:text-white transition-all"
                  title="Copy Email"
                >
                  {copiedEmail === "ops" ? (
                    <Check className="w-3.5 h-3.5 text-[#55c538]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Banking */}
            <div className="p-3.5 sm:p-5 md:p-7 rounded-xl md:rounded-2xl cyber-card flex flex-col justify-between flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#72e055] uppercase tracking-wider">
                  <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Banking Information</span>
                </div>
                <span className="text-[10px] text-slate-400">Rupali Bank Ltd.</span>
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm text-slate-300 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Branch:</span>
                  <span className="font-semibold text-right text-slate-200">
                    RUPALI SADAN, CHATTOGRAM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">A/C No:</span>
                  <span className="font-bold text-[#72e055]">1271020012021</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">SWIFT:</span>
                  <span className="font-bold text-white">RUPBBDDHRSC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
