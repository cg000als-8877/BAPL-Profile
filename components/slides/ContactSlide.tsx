"use client";

import React, { useEffect, useRef } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  Phone,
  UserCheck,
  MapPin,
  Mail,
  Send,
  CreditCard,
  Building2,
  ShieldCheck,
  Globe2,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const ContactSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const profilesRef = useRef<HTMLDivElement>(null);
  const bottomGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", clearProps: "transform" }
      );

      gsap.fromTo(
        profilesRef.current?.children || [],
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.05,
          clearProps: "transform",
        }
      );

      gsap.fromTo(
        bottomGridRef.current?.children || [],
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.05,
          delay: 0.1,
          ease: "power2.out",
          clearProps: "transform",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between gap-3 sm:gap-4 md:gap-5 overflow-y-visible md:overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-6 sm:h-10 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#72e055]">
                Direct Communication & Commercials
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-normal">
                CONTACT US
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <UserCheck className="w-4 h-4 text-[#55c538]" />
            <span>Executive Board & Banking Credentials</span>
          </div>
        </div>

        {/* 2. UPPER SECTION: KEY CONTACT PERSONS (Expanded to fill height gracefully) */}
        <div className="flex flex-col gap-2 flex-1 md:min-h-0">
          <div className="text-[11px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 shrink-0">
            <UserCheck className="w-3.5 h-3.5 text-[#55c538]" />
            <span>EXECUTIVE LEADERSHIP & INQUIRIES</span>
          </div>

          <div
            ref={profilesRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0"
          >
            {/* Profile Card 1: Mr. Abdur Rahaman */}
            <div className="p-4 sm:p-5 md:p-6 lg:p-7 rounded-2xl cyber-card border border-emerald-500/35 bg-gradient-to-br from-[#09162a]/95 via-[#060e1c]/95 to-[#040812]/95 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#55c538] transition-all h-full">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#55c538]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Monogram Badge & Role Tag */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#55c538]/30 to-[#55c538]/10 border border-[#55c538]/40 flex items-center justify-center text-sm sm:text-base font-black text-[#72e055] shadow-lg shrink-0">
                      AR
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white leading-tight">
                        Mr. Abdur Rahaman
                      </h3>
                      <p className="text-xs sm:text-sm font-extrabold text-[#72e055] mt-0.5">
                        Managing Director • Byzid Apparels (Pvt) Ltd.
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full cyber-pill text-[11px] sm:text-xs font-bold text-[#72e055] border border-[#55c538]/30 shadow-md shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#55c538] animate-pulse" />
                    <span>Managing Director</span>
                  </div>
                </div>

                {/* Executive Scope / Bio Note */}
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-3 hidden md:block">
                  Overseeing 30+ years of manufacturing excellence, direct client relationships, and global buyer partnerships across North America and Europe.
                </p>
              </div>

              {/* Email Contact Action Box with Send Email Button */}
              <div className="mt-2 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <a
                  href="mailto:info@byzidapparels.com?subject=Business%20Inquiry%20-%20Byzid%20Apparels"
                  className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold text-slate-200 hover:text-white transition-colors truncate"
                  title="Click to Send Email"
                >
                  <div className="p-1.5 rounded-lg bg-[#55c538]/10 text-[#55c538] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate font-mono">info@byzidapparels.com</span>
                </a>

                <a
                  href="mailto:info@byzidapparels.com?subject=Business%20Inquiry%20-%20Byzid%20Apparels"
                  className="px-3.5 sm:px-4 py-2 rounded-xl bg-[#55c538] hover:bg-[#72e055] text-slate-950 text-xs sm:text-sm font-black transition-all shadow-lg shadow-[#55c538]/25 flex items-center gap-2 shrink-0 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Profile Card 2: Mrs. Susan Rebeiro */}
            <div className="p-4 sm:p-5 md:p-6 lg:p-7 rounded-2xl cyber-card border border-blue-500/35 bg-gradient-to-br from-[#09162a]/95 via-[#060e1c]/95 to-[#040812]/95 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-blue-400 transition-all h-full">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Monogram Badge & Role Tag */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-500/10 border border-blue-500/40 flex items-center justify-center text-sm sm:text-base font-black text-blue-400 shadow-lg shrink-0">
                      SR
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white leading-tight">
                        Mrs. Susan Rebeiro
                      </h3>
                      <p className="text-xs sm:text-sm font-extrabold text-blue-400 mt-0.5">
                        Director of Operations • Byzid Apparels (Pvt) Ltd.
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full cyber-pill text-[11px] sm:text-xs font-bold text-blue-400 border border-blue-500/30 shadow-md shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span>Director of Operations</span>
                  </div>
                </div>

                {/* Executive Scope / Bio Note */}
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-3 hidden md:block">
                  Directing end-to-end plant operations, daily 12-line sewing production flow, strict quality benchmarks, and container export logistics.
                </p>
              </div>

              {/* Email Contact Action Box with Send Email Button */}
              <div className="mt-2 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <a
                  href="mailto:susan@byzidapparels.com?subject=Operational%20Inquiry%20-%20Byzid%20Apparels"
                  className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold text-slate-200 hover:text-white transition-colors truncate"
                  title="Click to Send Email"
                >
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate font-mono">susan@byzidapparels.com</span>
                </a>

                <a
                  href="mailto:susan@byzidapparels.com?subject=Operational%20Inquiry%20-%20Byzid%20Apparels"
                  className="px-3.5 sm:px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 text-xs sm:text-sm font-black transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 shrink-0 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. LOWER SECTION: Balanced 2-Column Desktop Grid (Banking Details & Registered Office) */}
        <div
          ref={bottomGridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 shrink-0"
        >
          {/* Card A: Banking Details */}
          <div className="p-4 sm:p-5 rounded-2xl cyber-card border border-purple-500/40 bg-gradient-to-br from-[#10142b]/95 via-[#091024]/95 to-[#060a18]/95 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-purple-300 uppercase tracking-wider">
                    COMMERCIAL BANKING DETAILS
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-400 font-mono">
                  Rupali Bank Ltd.
                </span>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs sm:text-sm">
                <div>
                  <div className="text-[10.5px] sm:text-xs text-slate-400 font-medium">
                    Corporate Branch:
                  </div>
                  <div className="font-bold text-white text-xs sm:text-sm">
                    RUPALI SADAN CORP. BRANCH
                  </div>
                  <div className="text-[11px] text-slate-300 leading-snug">
                    320, Laldighi East, Chattogram, Bangladesh
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/60">
                  <div>
                    <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                      Account Number:
                    </div>
                    <div className="font-extrabold text-[#72e055] font-mono text-xs sm:text-sm md:text-base">
                      1271020012021
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                      SWIFT Code:
                    </div>
                    <div className="font-extrabold text-white font-mono text-xs sm:text-sm md:text-base">
                      RUPBBDDHRSC
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Tel: +880-02333356130</span>
              <span className="text-[#72e055] font-bold">100% Export Compliant</span>
            </div>
          </div>

          {/* Card B: Registered Office & Direct Telephone Line */}
          <div className="p-4 sm:p-5 rounded-2xl cyber-card border border-slate-700/80 bg-gradient-to-br from-[#0c1527]/95 via-[#080e1a]/95 to-[#040810]/95 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#55c538]/20 text-[#55c538]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#72e055] uppercase tracking-wider">
                    REGISTERED OFFICE & MAILING ADDRESS
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-400">
                  Headquarters
                </span>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <h3 className="text-sm sm:text-base md:text-lg font-black text-white mb-0.5">
                  BYZID APPARELS (PVT.) LTD
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  ABM TOWER, 671/1 Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
                </p>
                <div className="mt-2 text-[11px] sm:text-xs text-slate-400 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#55c538]" />
                  <span>Factory Location: Chandgaon I/A, Chattogram</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
                Direct Line:
              </span>
              <a
                href="tel:008802334451856"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#55c538] text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-[#55c538]/25 hover:bg-[#72e055] transition-all active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-slate-950" />
                <span>TEL: +880-02334451856</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
