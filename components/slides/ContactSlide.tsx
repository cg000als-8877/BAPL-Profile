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
      // Magnetic Flash Entrance from Side
      gsap.fromTo(
        headerRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.55, ease: "expo.out" }
      );

      gsap.fromTo(
        leftColRef.current,
        { x: -90, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out", delay: 0.1 }
      );

      gsap.fromTo(
        rightColRef.current,
        { x: 90, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out", delay: 0.1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-slate-50 text-slate-900">
      <div
        ref={containerRef}
        className="relative w-full h-full p-6 sm:p-10 md:p-14 lg:p-20 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-2 md:w-2.5 h-10 md:h-14 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-xs md:text-sm lg:text-base font-extrabold uppercase tracking-widest text-[#69b23f]">
                Get In Touch
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                CONTACT & OPERATIONS
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full border border-slate-200 shadow-md text-xs md:text-sm lg:text-base font-semibold text-slate-700">
            <UserCheck className="w-4 h-4 text-[#69b23f]" />
            <span>Direct Executive Communication</span>
          </div>
        </div>

        {/* Split Screen 2-Column Layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-auto">
          {/* Left Column: Factory Location & Regulatory */}
          <div ref={leftColRef} className="flex flex-col gap-4 md:gap-6">
            {/* Factory Address Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:border-[#69b23f] transition-all">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#69b23f] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span>Factory & Registered Headquarters</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2">
                Byzid Apparels (Pvt) Ltd.
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed mb-4">
                ABM Tower, 671/1, Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100">
                <a
                  href="tel:008802334451856"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm font-bold transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#88cb5c]" />
                  <span>0088-02334451856</span>
                </a>
              </div>
            </div>

            {/* Regulatory Credentials */}
            <div className="p-6 md:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-md">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
                <FileCheck2 className="w-4 h-4 md:w-5 md:h-5 text-[#69b23f]" />
                <span>Corporate Regulatory Credentials</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] md:text-xs">BIN</span>
                  <span className="font-mono font-bold text-slate-800 text-sm md:text-base">001287924-0505</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] md:text-xs">BGMEA Reg.</span>
                  <span className="font-mono font-bold text-slate-800 text-sm md:text-base">No. 2673</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] md:text-xs">IRC / ERC</span>
                  <span className="font-mono font-bold text-slate-800 text-xs md:text-sm truncate block">
                    260315120087920
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] md:text-xs">Fire License</span>
                  <span className="font-mono font-bold text-slate-800 text-xs md:text-sm">C HATTA-6961/97-98</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Executives & Banking */}
          <div ref={rightColRef} className="flex flex-col gap-4 md:gap-6">
            {/* Key Executives */}
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#69b23f] uppercase tracking-wider mb-4">
                <UserCheck className="w-4 h-4 md:w-5 md:h-5" />
                <span>Executive Leadership Contacts</span>
              </div>

              {/* MD */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-3 flex items-center justify-between">
                <div>
                  <div className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                    Mr. Abdur Rahaman
                  </div>
                  <div className="text-xs md:text-sm text-[#4e8c2c] font-semibold">
                    Managing Director
                  </div>
                  <div className="text-xs md:text-sm text-slate-500 font-mono mt-0.5">
                    info@byzidapparels.com
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("info@byzidapparels.com", "md")}
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#69b23f] text-slate-600 hover:text-[#69b23f] transition-all shadow-sm"
                  title="Copy MD Email"
                >
                  {copiedEmail === "md" ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Director Operations */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                    Mrs. Susan Rebeiro
                  </div>
                  <div className="text-xs md:text-sm text-[#4e8c2c] font-semibold">
                    Director of Operations
                  </div>
                  <div className="text-xs md:text-sm text-slate-500 font-mono mt-0.5">
                    susan@byzidapparels.com
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("susan@byzidapparels.com", "ops")}
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-[#69b23f] text-slate-600 hover:text-[#69b23f] transition-all shadow-sm"
                  title="Copy Ops Director Email"
                >
                  {copiedEmail === "ops" ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Banking Details */}
            <div className="p-6 md:p-7 rounded-2xl bg-slate-950 text-white shadow-xl border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#88cb5c] uppercase tracking-wider">
                  <CreditCard className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Corporate Banking Information</span>
                </div>
                <span className="text-xs text-slate-400">Rupali Bank Ltd.</span>
              </div>
              <div className="text-xs md:text-sm text-slate-300 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Branch:</span>
                  <span className="font-semibold text-right text-slate-200">
                    RUPALI SADAN CORP. BRANCH, CHATTOGRAM
                  </span>
                </div>
                <div className="flex justify-between font-mono">
                  <span className="text-slate-400">A/C No:</span>
                  <span className="font-bold text-[#88cb5c] text-sm md:text-base">1271020012021</span>
                </div>
                <div className="flex justify-between font-mono">
                  <span className="text-slate-400">SWIFT:</span>
                  <span className="font-bold text-white text-sm md:text-base">RUPBBDDHRSC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs md:text-sm text-slate-500 pt-3 border-t border-slate-200">
          <span>Byzid Apparels (Pvt) Ltd. — Global Export Inquiries & Corporate Operations</span>
          <span className="font-mono font-bold text-[#69b23f]">Slide 06 / 06</span>
        </div>
      </div>
    </AspectWrapper>
  );
};
