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
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" }
      );

      gsap.fromTo(
        leftColRef.current,
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out", delay: 0.05 }
      );

      gsap.fromTo(
        rightColRef.current,
        { x: 70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out", delay: 0.05 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-slate-50 text-slate-900">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-8 md:p-14 lg:p-20 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5 md:gap-4">
            <div className="w-1.5 md:w-2.5 h-7 md:h-12 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold uppercase tracking-widest text-[#69b23f]">
                Get In Touch
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                CONTACT & OPERATIONS
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm text-xs md:text-sm font-semibold text-slate-700">
            <UserCheck className="w-3.5 h-3.5 text-[#69b23f]" />
            <span>Direct Communication</span>
          </div>
        </div>

        {/* Split Screen Layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8 my-auto">
          {/* Left Column: Factory Location & Regulatory */}
          <div ref={leftColRef} className="flex flex-col gap-2.5 sm:gap-4 md:gap-6">
            {/* Factory Address Card */}
            <div className="p-3 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#69b23f] uppercase tracking-wider mb-1 sm:mb-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Headquarters & Factory</span>
              </div>
              <h3 className="text-xs sm:text-lg md:text-2xl font-bold text-slate-900 mb-0.5 sm:mb-1">
                Byzid Apparels (Pvt) Ltd.
              </h3>
              <p className="text-[10px] sm:text-sm md:text-base text-slate-600 leading-relaxed mb-2 sm:mb-3">
                ABM Tower, 671/1, Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
              </p>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href="tel:008802334451856"
                  className="inline-flex items-center gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg bg-slate-900 text-white text-[10px] sm:text-xs md:text-sm font-bold shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#88cb5c]" />
                  <span>0088-02334451856</span>
                </a>
              </div>
            </div>

            {/* Regulatory Credentials */}
            <div className="p-3 sm:p-5 md:p-7 rounded-xl md:rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                <FileCheck2 className="w-3.5 h-3.5 text-[#69b23f]" />
                <span>Regulatory Credentials</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5 text-[10px] sm:text-xs md:text-sm">
                <div className="p-1.5 sm:p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[9px]">BIN</span>
                  <span className="font-mono font-bold text-slate-800">001287924-0505</span>
                </div>
                <div className="p-1.5 sm:p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[9px]">BGMEA Reg.</span>
                  <span className="font-mono font-bold text-slate-800">No. 2673</span>
                </div>
                <div className="p-1.5 sm:p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[9px]">IRC / ERC</span>
                  <span className="font-mono font-bold text-slate-800 truncate block">260315120087920</span>
                </div>
                <div className="p-1.5 sm:p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[9px]">Fire License</span>
                  <span className="font-mono font-bold text-slate-800">CHATTA-6961</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executives & Banking */}
          <div ref={rightColRef} className="flex flex-col gap-2.5 sm:gap-4 md:gap-6">
            {/* Key Executives */}
            <div className="p-3 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#69b23f] uppercase tracking-wider mb-2.5">
                <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Executive Contacts</span>
              </div>

              {/* MD */}
              <div className="p-2 sm:p-3.5 rounded-lg bg-slate-50 border border-slate-100 mb-2 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-base font-bold text-slate-900">
                    Mr. Abdur Rahaman
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#4e8c2c] font-semibold">
                    Managing Director
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-mono">
                    info@byzidapparels.com
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("info@byzidapparels.com", "md")}
                  className="p-1.5 sm:p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#69b23f] shadow-2xs"
                  title="Copy Email"
                >
                  {copiedEmail === "md" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Operations Director */}
              <div className="p-2 sm:p-3.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-base font-bold text-slate-900">
                    Mrs. Susan Rebeiro
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#4e8c2c] font-semibold">
                    Director of Operations
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-mono">
                    susan@byzidapparels.com
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("susan@byzidapparels.com", "ops")}
                  className="p-1.5 sm:p-2.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#69b23f] shadow-2xs"
                  title="Copy Email"
                >
                  {copiedEmail === "ops" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Banking */}
            <div className="p-3 sm:p-5 md:p-7 rounded-xl md:rounded-2xl bg-slate-950 text-white shadow-md border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#88cb5c] uppercase tracking-wider">
                  <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Banking Information</span>
                </div>
                <span className="text-[10px] text-slate-400">Rupali Bank Ltd.</span>
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-slate-300 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-400">Branch:</span>
                  <span className="font-semibold text-right text-slate-200">
                    RUPALI SADAN, CHATTOGRAM
                  </span>
                </div>
                <div className="flex justify-between font-mono">
                  <span className="text-slate-400">A/C No:</span>
                  <span className="font-bold text-[#88cb5c]">1271020012021</span>
                </div>
                <div className="flex justify-between font-mono">
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
