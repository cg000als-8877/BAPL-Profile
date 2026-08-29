"use client";

import React, { useEffect, useRef, useState } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  Building2,
  Phone,
  Mail,
  UserCheck,
  CreditCard,
  FileCheck2,
  Copy,
  Check,
  ExternalLink,
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
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );

      gsap.fromTo(
        leftColRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.1 }
      );

      gsap.fromTo(
        rightColRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.1 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-slate-50 text-slate-900">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-6 md:p-10 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100"
      >
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#69b23f]">
                Get In Touch
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                CONTACT & OPERATIONS
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm text-xs text-slate-600">
            <UserCheck className="w-3.5 h-3.5 text-[#69b23f]" />
            <span>Direct Executive Channels</span>
          </div>
        </div>

        {/* Split Screen 2-Column Layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 my-auto max-h-[70vh] overflow-y-auto md:overflow-visible py-1">
          {/* Left Column: Factory Location & Regulatory */}
          <div ref={leftColRef} className="flex flex-col gap-3">
            {/* Factory Address Card */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:border-[#69b23f]/50 transition-all">
              <div className="flex items-center gap-2 text-xs font-bold text-[#69b23f] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Factory & Registered Office</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                Byzid Apparels (Pvt) Ltd.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                ABM Tower, 671/1, Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                <a
                  href="tel:008802334451856"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#88cb5c]" />
                  <span>0088-02334451856</span>
                </a>
              </div>
            </div>

            {/* Regulatory & Trade License */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                <FileCheck2 className="w-4 h-4 text-[#69b23f]" />
                <span>Regulatory Credentials</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px]">BIN</span>
                  <span className="font-mono font-bold text-slate-800">001287924-0505</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px]">BGMEA Reg.</span>
                  <span className="font-mono font-bold text-slate-800">No. 2673</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px]">IRC / ERC</span>
                  <span className="font-mono font-medium text-slate-800 truncate block">
                    260315120087920
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px]">Fire License</span>
                  <span className="font-mono font-medium text-slate-800">C HATTA-6961/97-98</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Executives & Banking */}
          <div ref={rightColRef} className="flex flex-col gap-3">
            {/* Key Executives */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#69b23f] uppercase tracking-wider mb-2.5">
                <UserCheck className="w-4 h-4" />
                <span>Executive Leadership</span>
              </div>

              {/* MD */}
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 mb-2 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Mr. Abdur Rahaman
                  </div>
                  <div className="text-[11px] text-[#4e8c2c] font-medium">
                    Managing Director
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    info@byzidapparels.com
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("info@byzidapparels.com", "md")}
                  className="p-2 rounded-lg bg-white border border-slate-200 hover:border-[#69b23f] text-slate-600 hover:text-[#69b23f] transition-all shadow-2xs"
                  title="Copy MD Email"
                >
                  {copiedEmail === "md" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Director Operations */}
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Mrs. Susan Rebeiro
                  </div>
                  <div className="text-[11px] text-[#4e8c2c] font-medium">
                    Director of Operations
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    susan@byzidapparels.com
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("susan@byzidapparels.com", "ops")}
                  className="p-2 rounded-lg bg-white border border-slate-200 hover:border-[#69b23f] text-slate-600 hover:text-[#69b23f] transition-all shadow-2xs"
                  title="Copy Ops Director Email"
                >
                  {copiedEmail === "ops" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Banking Details */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900 text-white shadow-sm border border-slate-800">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#88cb5c] uppercase tracking-wider">
                  <CreditCard className="w-4 h-4" />
                  <span>Banking Information</span>
                </div>
                <span className="text-[10px] text-slate-400">Rupali Bank Ltd.</span>
              </div>
              <div className="text-[11px] text-slate-300 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-400">Branch:</span>
                  <span className="font-medium text-right text-slate-200">
                    RUPALI SADAN CORP. BRANCH, CHATTOGRAM
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

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-200">
          <span>Byzid Apparels (Pvt) Ltd. — Global Export Enquiries & Operations</span>
          <span className="font-mono font-semibold text-[#69b23f]">Slide 06 / 06</span>
        </div>
      </div>
    </AspectWrapper>
  );
};
