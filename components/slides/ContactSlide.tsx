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
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        leftColRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "expo.out", delay: 0.05 }
      );

      gsap.fromTo(
        rightColRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "expo.out", delay: 0.05 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

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
                Get In Touch
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                CONTACT & OPERATIONS
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 cyber-pill rounded-full text-xs font-semibold text-slate-200 shadow-sm">
            <UserCheck className="w-3.5 h-3.5 text-[#55c538]" />
            <span>Direct Communication</span>
          </div>
        </div>

        {/* Split Screen Layout (Refined scale) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5 my-auto">
          {/* Left Column */}
          <div ref={leftColRef} className="flex flex-col gap-2.5 sm:gap-3.5">
            {/* Factory Address Card */}
            <div className="p-3 sm:p-4.5 rounded-xl cyber-card">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#72e055] uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Headquarters & Factory</span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-0.5">
                Byzid Apparels (Pvt) Ltd.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2.5">
                ABM Tower, 671/1, Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
              </p>

              <div className="pt-2 border-t border-slate-800">
                <a
                  href="tel:008802334451856"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/10 transition-all shadow-sm"
                >
                  <Phone className="w-3 h-3 text-[#72e055]" />
                  <span>0088-02334451856</span>
                </a>
              </div>
            </div>

            {/* Regulatory Credentials */}
            <div className="p-3 sm:p-4 rounded-xl cyber-card">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-[#55c538]" />
                <span>Regulatory Credentials</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                <div className="p-1.5 sm:p-2 rounded-md bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">BIN</span>
                  <span className="font-bold text-white text-[11px] sm:text-xs">001287924-0505</span>
                </div>
                <div className="p-1.5 sm:p-2 rounded-md bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">BGMEA Reg.</span>
                  <span className="font-bold text-white text-[11px] sm:text-xs">No. 2673</span>
                </div>
                <div className="p-1.5 sm:p-2 rounded-md bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">IRC / ERC</span>
                  <span className="font-bold text-white text-[11px] sm:text-xs truncate block">260315120087920</span>
                </div>
                <div className="p-1.5 sm:p-2 rounded-md bg-slate-900/60 border border-slate-800">
                  <span className="text-slate-400 block text-[9px]">Fire License</span>
                  <span className="font-bold text-white text-[11px] sm:text-xs">CHATTA-6961</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div ref={rightColRef} className="flex flex-col gap-2.5 sm:gap-3.5">
            {/* Key Executives */}
            <div className="p-3 sm:p-4 rounded-xl cyber-card">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#72e055] uppercase tracking-wider mb-2">
                <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Executive Contacts</span>
              </div>

              {/* MD */}
              <div className="p-2 sm:p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 mb-1.5 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">
                    Mr. Abdur Rahaman
                  </div>
                  <div className="text-[10px] text-[#72e055] font-medium">
                    Managing Director
                  </div>
                  <div className="text-[10px] text-slate-400">
                    info@byzidapparels.com
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("info@byzidapparels.com", "md")}
                  className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/10 text-slate-300 hover:text-white transition-all"
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
              <div className="p-2 sm:p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">
                    Mrs. Susan Rebeiro
                  </div>
                  <div className="text-[10px] text-[#72e055] font-medium">
                    Director of Operations
                  </div>
                  <div className="text-[10px] text-slate-400">
                    susan@byzidapparels.com
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("susan@byzidapparels.com", "ops")}
                  className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/10 text-slate-300 hover:text-white transition-all"
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
            <div className="p-3 sm:p-4 rounded-xl cyber-card">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#72e055] uppercase tracking-wider">
                  <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Banking Information</span>
                </div>
                <span className="text-[10px] text-slate-400">Rupali Bank Ltd.</span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 space-y-1">
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
