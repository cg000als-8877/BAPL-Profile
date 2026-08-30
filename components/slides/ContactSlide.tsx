"use client";

import React, { useEffect, useRef, useState } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  Phone,
  UserCheck,
  MapPin,
  Copy,
  Check,
  Mail,
  Sparkles,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const ContactSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);

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
        cardsRef.current?.children || [],
        { y: 30, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: "expo.out",
          delay: 0.05,
        }
      );

      gsap.fromTo(
        addressRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, delay: 0.15, ease: "expo.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-3.5 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-3 sm:gap-5 overflow-y-visible md:overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Direct Communication
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                CONTACT US
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <UserCheck className="w-4 h-4 text-[#55c538]" />
            <span>Executive Leadership</span>
          </div>
        </div>

        {/* 2. KEY CONTACT PERSONS: Executive Profile Cards */}
        <div className="flex flex-col justify-center my-auto py-1">
          <div className="text-[10px] sm:text-xs md:text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
            <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#55c538]" />
            <span>KEY CONTACT PERSONS</span>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-6"
          >
            {/* Profile Card 1: Mr. Abdur Rahaman */}
            <div className="p-3 sm:p-6 md:p-8 rounded-2xl cyber-card border border-emerald-500/35 bg-gradient-to-br from-[#09162a]/95 to-[#060c18]/95 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#55c538] transition-all">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#55c538]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Monogram Badge & Role Tag */}
                <div className="flex items-center justify-between mb-2 sm:mb-3.5">
                  <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#55c538]/30 to-[#55c538]/10 border border-[#55c538]/40 flex items-center justify-center text-xs sm:text-lg font-black text-[#72e055] shadow-lg">
                    AR
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full cyber-pill text-[9.5px] sm:text-xs font-bold text-[#72e055] border border-[#55c538]/30 shadow-md">
                    <span>Executive Leadership</span>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Mr. Abdur Rahaman
                </h3>
                <p className="text-xs sm:text-base md:text-lg font-extrabold text-[#72e055] mt-0.5 sm:mt-1">
                  Managing Director
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5 sm:mt-1">
                  Byzid Apparels (Pvt) Ltd.
                </p>
              </div>

              {/* Email Contact Action Box */}
              <div className="mt-2.5 sm:mt-5 pt-2 sm:pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <a
                  href="mailto:info@byzidapparels.com"
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base md:text-lg font-bold text-slate-200 hover:text-white transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#55c538] shrink-0" />
                  <span className="truncate">info@byzidapparels.com</span>
                </a>

                <button
                  onClick={() => handleCopy("info@byzidapparels.com", "md")}
                  className="px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-slate-200 hover:text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-1 shrink-0 cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail === "md" ? (
                    <>
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#55c538]" />
                      <span className="text-[#55c538]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Profile Card 2: Mrs. Susan Rebeiro */}
            <div className="p-3 sm:p-6 md:p-8 rounded-2xl cyber-card border border-blue-500/35 bg-gradient-to-br from-[#09162a]/95 to-[#060c18]/95 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-blue-400 transition-all">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Monogram Badge & Role Tag */}
                <div className="flex items-center justify-between mb-2 sm:mb-3.5">
                  <div className="w-8 h-8 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-500/10 border border-blue-500/40 flex items-center justify-center text-xs sm:text-lg font-black text-blue-400 shadow-lg">
                    SR
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full cyber-pill text-xs sm:text-xs font-bold text-blue-400 border border-blue-500/30 shadow-md">
                    <span>Plant & Operations</span>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Mrs. Susan Rebeiro
                </h3>
                <p className="text-xs sm:text-base md:text-lg font-extrabold text-blue-400 mt-0.5 sm:mt-1">
                  Director of Operations
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5 sm:mt-1">
                  Byzid Apparels (Pvt) Ltd.
                </p>
              </div>

              {/* Email Contact Action Box */}
              <div className="mt-2.5 sm:mt-5 pt-2 sm:pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <a
                  href="mailto:susan@byzidapparels.com"
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base md:text-lg font-bold text-slate-200 hover:text-white transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
                  <span className="truncate">susan@byzidapparels.com</span>
                </a>

                <button
                  onClick={() => handleCopy("susan@byzidapparels.com", "ops")}
                  className="px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-slate-200 hover:text-white text-[10px] sm:text-sm font-bold transition-all shadow-md flex items-center gap-1 shrink-0 cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail === "ops" ? (
                    <>
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#55c538]" />
                      <span className="text-[#55c538]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Registered Office & Mailing Address (Bottom Section) */}
        <div
          ref={addressRef}
          className="shrink-0 p-3 sm:p-6 rounded-2xl cyber-card border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-3 bg-slate-950/95 shadow-xl"
        >
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm font-extrabold text-[#72e055] uppercase tracking-wider mb-0.5">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#55c538]" />
              <span>REGISTERED OFFICE & MAILING ADDRESS</span>
            </div>
            <h3 className="text-xs sm:text-xl md:text-2xl font-black text-white">
              BYZID APPARELS (PVT.) LTD
            </h3>
            <p className="text-[11px] sm:text-base md:text-lg text-slate-200 font-medium leading-tight">
              ABMTOWER, 671/1 Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
            </p>
          </div>

          <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800 md:pl-6">
            <a
              href="tel:008802334451856"
              className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-[#55c538] text-slate-950 font-black text-xs sm:text-sm md:text-base shadow-lg shadow-[#55c538]/30 hover:bg-[#72e055] transition-all"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
              <span>TEL # 0088-02334451856</span>
            </a>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
