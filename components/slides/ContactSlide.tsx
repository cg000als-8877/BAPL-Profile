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
  Navigation,
  ExternalLink,
  ArrowUp,
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
        <div ref={headerRef} className="shrink-0 flex items-center justify-center md:justify-between w-full">
          <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-2.5 sm:gap-4 w-full md:w-auto">
            <div className="hidden md:block w-1.5 sm:w-2.5 h-6 sm:h-10 bg-[#55c538] rounded-full glow-bar" />
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Direct Communication & Commercials
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-normal">
                CONTACT US
              </h2>
              {/* Thin line under title and subtitle on mobile */}
              <div className="block md:hidden w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#55c538] to-transparent rounded-full mt-2" />
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <UserCheck className="w-4 h-4 text-[#55c538]" />
            <span>Executive Board & Commercial Credentials</span>
          </div>
        </div>

        {/* 2. UPPER ROW: EXECUTIVE LEADERSHIP CARDS (Equal 50% Height Balance) */}
        <div className="flex flex-col gap-1.5 flex-1 min-h-0">
          <div className="text-[11px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 shrink-0">
            <UserCheck className="w-3.5 h-3.5 text-[#55c538]" />
            <span>EXECUTIVE LEADERSHIP & INQUIRIES</span>
          </div>

          <div
            ref={profilesRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0"
          >
            {/* Profile Card 1: Mr. Abdur Rahaman */}
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card border border-emerald-500/35 bg-gradient-to-br from-[#09162a]/95 via-[#060e1c]/95 to-[#040812]/95 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#55c538] transition-all h-full">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#55c538]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Monogram Badge & Role Tag */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#55c538]/30 to-[#55c538]/10 border border-[#55c538]/40 flex items-center justify-center text-base sm:text-lg md:text-xl font-black text-[#72e055] shadow-xl shrink-0">
                      AR
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl md:text-xl lg:text-2xl font-black text-white leading-tight">
                        Mr. Abdur Rahaman
                      </h3>
                      <div className="text-xs sm:text-sm md:text-base font-extrabold text-[#72e055] mt-0.5">
                        Managing Director
                      </div>
                      <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-300">
                        Byzid Apparels (Pvt) Ltd.
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full cyber-pill text-[11px] sm:text-xs font-bold text-[#72e055] border border-[#55c538]/30 shadow-md shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#55c538] animate-pulse" />
                    <span>Managing Director</span>
                  </div>
                </div>

                {/* Executive Scope Note */}
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-2 hidden md:block">
                  Overseeing 30+ years of manufacturing excellence, direct client relationships, and global buyer partnerships.
                </p>
              </div>

              {/* Email Contact Action Box */}
              <div className="mt-1 pt-2.5 sm:pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <a
                  href="mailto:info@byzidapparels.com?subject=Business%20Inquiry%20-%20Byzid%20Apparels"
                  className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold text-slate-100 hover:text-white transition-colors truncate"
                  title="Click to Send Email"
                >
                  <div className="p-1.5 rounded-lg bg-[#55c538]/10 text-[#55c538] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate font-mono">info@byzidapparels.com</span>
                </a>

                <a
                  href="mailto:info@byzidapparels.com?subject=Business%20Inquiry%20-%20Byzid%20Apparels"
                  className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#55c538] hover:bg-[#72e055] text-slate-950 text-xs sm:text-sm font-black transition-all shadow-md shadow-[#55c538]/25 flex items-center gap-1.5 shrink-0 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Profile Card 2: Mrs. Susan Rebeiro */}
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card border border-blue-500/35 bg-gradient-to-br from-[#09162a]/95 via-[#060e1c]/95 to-[#040812]/95 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-blue-400 transition-all h-full">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Monogram Badge & Role Tag */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-500/30 to-blue-500/10 border border-blue-500/40 flex items-center justify-center text-base sm:text-lg md:text-xl font-black text-blue-400 shadow-xl shrink-0">
                      SR
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl md:text-xl lg:text-2xl font-black text-white leading-tight">
                        Mrs. Susan Rebeiro
                      </h3>
                      <div className="text-xs sm:text-sm md:text-base font-extrabold text-blue-400 mt-0.5">
                        Director of Operations
                      </div>
                      <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-300">
                        Byzid Apparels (Pvt) Ltd.
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full cyber-pill text-[11px] sm:text-xs font-bold text-blue-400 border border-blue-500/30 shadow-md shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span>Director of Operations</span>
                  </div>
                </div>

                {/* Executive Scope Note */}
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-2 hidden md:block">
                  Directing end-to-end plant operations, 12-line sewing production, quality benchmarks, and container shipments.
                </p>
              </div>

              {/* Email Contact Action Box */}
              <div className="mt-1 pt-2.5 sm:pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <a
                  href="mailto:susan@byzidapparels.com?subject=Operational%20Inquiry%20-%20Byzid%20Apparels"
                  className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-bold text-slate-100 hover:text-white transition-colors truncate"
                  title="Click to Send Email"
                >
                  <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate font-mono">susan@byzidapparels.com</span>
                </a>

                <a
                  href="mailto:susan@byzidapparels.com?subject=Operational%20Inquiry%20-%20Byzid%20Apparels"
                  className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-slate-950 text-xs sm:text-sm font-black transition-all shadow-md shadow-blue-500/25 flex items-center gap-1.5 shrink-0 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. LOWER ROW: BALANCED & STRUCTURED COMMERCIAL DETAILS (Equal 50% Height Balance) */}
        <div className="flex flex-col gap-1.5 flex-1 min-h-0">
          <div className="text-[11px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 shrink-0">
            <CreditCard className="w-3.5 h-3.5 text-purple-400" />
            <span>COMMERCIAL BANKING & CORPORATE LOCATION</span>
          </div>

          <div
            ref={bottomGridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0"
          >
            {/* Card 3: Commercial Banking Details */}
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card border border-purple-500/35 bg-gradient-to-br from-[#0d1226]/95 via-[#080d1e]/95 to-[#040712]/95 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-purple-400 transition-all h-full">
              <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                      <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm md:text-base font-black text-purple-300 uppercase tracking-wider">
                        Commercial Banking Details
                      </h4>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-400">
                        Rupali Bank Ltd.
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full cyber-pill text-[11px] sm:text-xs font-bold text-purple-300 border border-purple-500/30 shadow-md shrink-0">
                    <span>Corporate Account</span>
                  </div>
                </div>

                {/* Structured 2-Column Info Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-2 border-t border-slate-800/80">
                  {/* Account Number */}
                  <div className="p-2 sm:p-2.5 rounded-xl bg-purple-500/5 border border-purple-500/20">
                    <div className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">
                      Account Number
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-extrabold text-[#72e055] font-mono mt-0.5">
                      1271020*****
                    </div>
                  </div>

                  {/* SWIFT Code */}
                  <div className="p-2 sm:p-2.5 rounded-xl bg-purple-500/5 border border-purple-500/20">
                    <div className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">
                      SWIFT Code
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-extrabold text-white font-mono mt-0.5">
                      RUPBBDDHRSC
                    </div>
                  </div>

                  {/* Corporate Branch & Address */}
                  <div className="col-span-2 p-2 sm:p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">
                      Corporate Branch & Location
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                      Rupali Sadan Corporate Branch
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-300">
                      320, Laldighi East, Chattogram, Bangladesh
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Bar */}
              <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-purple-400" />
                  <span>Tel: +880-02333356130</span>
                </span>
                <span className="text-[#72e055] font-bold">100% Export Compliant</span>
              </div>
            </div>

            {/* Card 4: Registered Office, Factory & Google Maps Directions */}
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl cyber-card border border-slate-700/80 bg-gradient-to-br from-[#0c1527]/95 via-[#080e1a]/95 to-[#040810]/95 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#55c538] transition-all h-full">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#55c538]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#55c538]/20 border border-[#55c538]/30 flex items-center justify-center text-[#55c538] shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm md:text-base font-black text-[#72e055] uppercase tracking-wider">
                        Registered Office & Plant
                      </h4>
                      <span className="text-[11px] sm:text-xs font-bold text-slate-400">
                        Headquarters & Production Facility
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full cyber-pill text-[11px] sm:text-xs font-bold text-[#72e055] border border-[#55c538]/30 shadow-md shrink-0">
                    <span>Headquarters</span>
                  </div>
                </div>

                {/* Structured 2-Column Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-2 border-t border-slate-800/80">
                  {/* Registered Corporate Office */}
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-[10px] sm:text-xs text-[#72e055] font-extrabold uppercase tracking-wider">
                      Registered Office
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                      BYZID APPARELS (PVT.) LTD
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-300 leading-snug mt-0.5">
                      ABM TOWER, 671/1 Sholakbahar, Bahaddarhat, Chattogram.
                    </div>
                  </div>

                  {/* Factory Production Unit */}
                  <div className="p-2 sm:p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="text-[10px] sm:text-xs text-[#72e055] font-extrabold uppercase tracking-wider">
                      Factory Facility
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                      Chandgaon Industrial Area
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-300 leading-snug mt-0.5">
                      Chattogram, Bangladesh
                    </div>
                  </div>

                  {/* Logistics Badges */}
                  <div className="col-span-1 sm:col-span-2 flex flex-wrap items-center gap-1.5 pt-0.5 text-[10px] sm:text-xs text-slate-300">
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                      Port: 12 km to Sea Port
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10">
                      Airport: 18 km to Shah Amanat Intl
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Direct Line + Google Maps Direction Button */}
              <div className="mt-2 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                <a
                  href="tel:008802334451856"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 font-bold text-xs hover:border-[#55c538] transition-all active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-[#55c538]" />
                  <span>TEL: +880-02334451856</span>
                </a>

                <a
                  href="https://maps.app.goo.gl/rmAxTS1NAkbz3sLC7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-[#55c538] hover:from-blue-500 hover:to-[#72e055] text-white font-black text-xs shadow-md shadow-blue-500/25 transition-all active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View Only: Scroll to Top Button at the End of the Page */}
        <div className="flex md:hidden flex-col items-center justify-center pt-8 pb-6 w-full select-none">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex flex-col items-center gap-2 p-2 text-slate-400 hover:text-white transition-all active:scale-95"
          >
            <div className="w-11 h-11 rounded-full bg-slate-900/90 border border-slate-700/80 group-hover:border-[#55c538] flex items-center justify-center text-[#72e055] shadow-lg shadow-[#55c538]/15 transition-all">
              <ArrowUp className="w-5 h-5 animate-bounce" />
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#72e055] transition-colors">
              GO BACK TO TOP
            </span>
          </button>
        </div>
      </div>
    </AspectWrapper>
  );
};
