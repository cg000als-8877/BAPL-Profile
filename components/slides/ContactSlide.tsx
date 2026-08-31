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
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const ContactSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const profilesRef = useRef<HTMLDivElement>(null);
  const bankRef = useRef<HTMLDivElement>(null);
  const addressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        profilesRef.current?.children || [],
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
        bankRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, delay: 0.12, ease: "expo.out" }
      );

      gsap.fromTo(
        addressRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, delay: 0.18, ease: "expo.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-3.5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between gap-2.5 sm:gap-3.5 md:gap-4 overflow-y-visible md:overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-6 sm:h-10 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#72e055]">
                Direct Communication & Banking
              </div>
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-normal">
                CONTACT US
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <UserCheck className="w-4 h-4 text-[#55c538]" />
            <span>Executive Leadership & Commercials</span>
          </div>
        </div>

        {/* 2. KEY CONTACT PERSONS: Executive Profile Cards */}
        <div className="flex flex-col gap-1.5 shrink-0">
          <div className="text-[11px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-[#55c538]" />
            <span>KEY CONTACT PERSONS</span>
          </div>

          <div
            ref={profilesRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4"
          >
            {/* Profile Card 1: Mr. Abdur Rahaman */}
            <div className="p-3 sm:p-4 md:p-5 rounded-2xl cyber-card border border-emerald-500/35 bg-gradient-to-br from-[#09162a]/95 to-[#060c18]/95 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#55c538] transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#55c538]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Monogram Badge & Role Tag */}
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#55c538]/30 to-[#55c538]/10 border border-[#55c538]/40 flex items-center justify-center text-xs sm:text-sm font-black text-[#72e055] shadow-lg">
                    AR
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full cyber-pill text-[10px] sm:text-xs font-bold text-[#72e055] border border-[#55c538]/30 shadow-md">
                    <span>Managing Director</span>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black text-white leading-tight">
                  Mr. Abdur Rahaman
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm font-extrabold text-[#72e055] mt-0.5">
                  Managing Director • Byzid Apparels (Pvt) Ltd.
                </p>
              </div>

              {/* Email Contact Action Box with Send Email Button */}
              <div className="mt-2 sm:mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <a
                  href="mailto:info@byzidapparels.com?subject=Business%20Inquiry%20-%20Byzid%20Apparels"
                  className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base font-bold text-slate-200 hover:text-white transition-colors truncate"
                  title="Click to Send Email"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#55c538] shrink-0" />
                  <span className="truncate">info@byzidapparels.com</span>
                </a>

                <a
                  href="mailto:info@byzidapparels.com?subject=Business%20Inquiry%20-%20Byzid%20Apparels"
                  className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-[#55c538] hover:bg-[#72e055] text-slate-950 text-[11px] sm:text-xs md:text-sm font-black transition-all shadow-md shadow-[#55c538]/20 flex items-center gap-1.5 shrink-0"
                >
                  <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Profile Card 2: Mrs. Susan Rebeiro */}
            <div className="p-3 sm:p-4 md:p-5 rounded-2xl cyber-card border border-blue-500/35 bg-gradient-to-br from-[#09162a]/95 to-[#060c18]/95 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-blue-400 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Monogram Badge & Role Tag */}
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-500/10 border border-blue-500/40 flex items-center justify-center text-xs sm:text-sm font-black text-blue-400 shadow-lg">
                    SR
                  </div>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full cyber-pill text-[10px] sm:text-xs font-bold text-blue-400 border border-blue-500/30 shadow-md">
                    <span>Director of Operations</span>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black text-white leading-tight">
                  Mrs. Susan Rebeiro
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm font-extrabold text-blue-400 mt-0.5">
                  Director of Operations • Byzid Apparels (Pvt) Ltd.
                </p>
              </div>

              {/* Email Contact Action Box with Send Email Button */}
              <div className="mt-2 sm:mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <a
                  href="mailto:susan@byzidapparels.com?subject=Operational%20Inquiry%20-%20Byzid%20Apparels"
                  className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base font-bold text-slate-200 hover:text-white transition-colors truncate"
                  title="Click to Send Email"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
                  <span className="truncate">susan@byzidapparels.com</span>
                </a>

                <a
                  href="mailto:susan@byzidapparels.com?subject=Operational%20Inquiry%20-%20Byzid%20Apparels"
                  className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 text-[11px] sm:text-xs md:text-sm font-black transition-all shadow-md shadow-blue-500/20 flex items-center gap-1.5 shrink-0"
                >
                  <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BANKING DETAILS (Under Profiles, Above Address) */}
        <div
          ref={bankRef}
          className="p-3 sm:p-4 rounded-2xl cyber-card border border-purple-500/40 bg-gradient-to-br from-[#10142b]/95 via-[#091024]/95 to-[#060a18]/95 shadow-xl shrink-0"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-lg bg-purple-500/20 text-purple-300">
                <CreditCard className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-purple-300 uppercase tracking-wider">
                BANKING DETAILS
              </span>
            </div>
            <span className="text-[10.5px] sm:text-xs font-bold text-slate-400 font-mono">
              Rupali Bank Ltd.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm pt-1 border-t border-slate-800/80">
            {/* Bank & Branch */}
            <div className="sm:col-span-2">
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Bank & Corporate Branch:
              </div>
              <div className="font-bold text-white text-xs sm:text-sm truncate">
                Rupali Bank Ltd.
              </div>
              <div className="text-[10.5px] sm:text-xs text-slate-300 truncate">
                RUPALI SADAN CORP. BRANCH, 320, LALDIGHI EAST, CHATTOGRAM, BD
              </div>
            </div>

            {/* Account Number */}
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Account Number:
              </div>
              <div className="font-extrabold text-[#72e055] font-mono text-xs sm:text-sm md:text-base">
                1271020012021
              </div>
            </div>

            {/* SWIFT & Contact */}
            <div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium">
                SWIFT Code:
              </div>
              <div className="font-extrabold text-white font-mono text-xs sm:text-sm">
                RUPBBDDHRSC
              </div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">
                Tel: 880-02333356130
              </div>
            </div>
          </div>
        </div>

        {/* 4. Registered Office & Mailing Address (Bottom Section) */}
        <div
          ref={addressRef}
          className="shrink-0 p-3 sm:p-4 rounded-2xl cyber-card border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-2 sm:gap-3 bg-slate-950/95 shadow-xl"
        >
          <div>
            <div className="flex items-center gap-1.5 text-[10.5px] sm:text-xs font-extrabold text-[#72e055] uppercase tracking-wider mb-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#55c538]" />
              <span>REGISTERED OFFICE & MAILING ADDRESS</span>
            </div>
            <h3 className="text-xs sm:text-base md:text-lg font-black text-white">
              BYZID APPARELS (PVT.) LTD
            </h3>
            <p className="text-[11px] sm:text-xs md:text-sm text-slate-200 font-medium leading-tight">
              ABM TOWER, 671/1 Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
            </p>
          </div>

          <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800 md:pl-4">
            <a
              href="tel:008802334451856"
              className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-xl bg-[#55c538] text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-[#55c538]/30 hover:bg-[#72e055] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-slate-950" />
              <span>TEL # 0088-02334451856</span>
            </a>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
