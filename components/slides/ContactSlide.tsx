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
  const contactsRef = useRef<HTMLDivElement>(null);
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
        contactsRef.current?.children || [],
        { x: -50, opacity: 0, scale: 0.97 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: "expo.out",
          delay: 0.05,
        }
      );

      gsap.fromTo(
        addressRef.current,
        { x: -40, opacity: 0, scale: 0.98 },
        { x: 0, opacity: 1, scale: 1, duration: 0.45, delay: 0.15, ease: "expo.out" }
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
                Direct Communication
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                CONTACT US
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <UserCheck className="w-4 h-4 text-[#55c538]" />
            <span>Executive Contacts</span>
          </div>
        </div>

        {/* 2. Key Contact Persons Section (Top Section) */}
        <div className="flex-1 flex flex-col justify-center min-h-0">
          <div className="text-xs sm:text-sm font-extrabold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-[#55c538]" />
            <span>KEY CONTACT PERSONS</span>
          </div>

          <div
            ref={contactsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5"
          >
            {/* Managing Director */}
            <div className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card border border-emerald-500/30 bg-[#091426]/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#55c538]/20 text-[#72e055] border border-[#55c538]/30">
                    Executive
                  </span>
                  <Mail className="w-5 h-5 text-[#55c538]" />
                </div>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-white mb-1">
                  Mr. Abdur Rahaman
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#72e055] font-bold mb-3">
                  Managing Director
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-200 truncate">
                  info@byzidapparels.com
                </span>
                <button
                  onClick={() => handleCopy("info@byzidapparels.com", "md")}
                  className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-slate-300 hover:text-white transition-all shadow-sm shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail === "md" ? (
                    <Check className="w-4 h-4 text-[#55c538]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Director of Operations */}
            <div className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card border border-blue-500/30 bg-[#091426]/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    Operations
                  </span>
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-white mb-1">
                  Mrs. Susan Rebeiro
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-blue-400 font-bold mb-3">
                  Director of Operations
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-200 truncate">
                  susan@byzidapparels.com
                </span>
                <button
                  onClick={() => handleCopy("susan@byzidapparels.com", "ops")}
                  className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-slate-300 hover:text-white transition-all shadow-sm shrink-0"
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
          </div>
        </div>

        {/* 3. Registered Office & Mailing Address (Bottom Section) */}
        <div
          ref={addressRef}
          className="shrink-0 p-4 sm:p-6 rounded-2xl cyber-card border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-950/90"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#72e055] uppercase tracking-wider mb-1">
              <MapPin className="w-4 h-4 text-[#55c538]" />
              <span>REGISTERED OFFICE & MAILING ADDRESS</span>
            </div>
            <h3 className="text-base sm:text-xl font-black text-white mb-1">
              BYZID APPARELS (PVT.) LTD
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-200 font-medium">
              ABMTOWER, 671/1 Sholakbahar, Bahaddarhat, Chattogram, Bangladesh.
            </p>
          </div>

          <div className="shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800 md:pl-6">
            <a
              href="tel:008802334451856"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-[#55c538] text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-[#55c538]/30 hover:bg-[#72e055] transition-all"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>TEL # 0088-02334451856</span>
            </a>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
