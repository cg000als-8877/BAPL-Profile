"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { ShieldCheck, Award, Sparkles } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const TrustSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const buyersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        certsRef.current?.children || [],
        { y: 20, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: "expo.out",
          delay: 0.05,
        }
      );

      gsap.fromTo(
        buyersRef.current?.children || [],
        { y: 25, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.02,
          ease: "expo.out",
          delay: 0.1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const certificationLogos = [
    { src: "/logos/certifications/bsci.png", alt: "BSCI - Business Social Compliance Initiative" },
    { src: "/logos/certifications/amfori.png", alt: "amfori BSCI Social Compliance" },
    { src: "/logos/certifications/eee.png", alt: "OEKO-TEX Standard 100 Confidence in Textiles" },
  ];

  const buyerLogos = [
    { id: 1, src: "/logos/buyers/1.png", alt: "Body Glove" },
    { id: 2, src: "/logos/buyers/2.png", alt: "Soul Star" },
    { id: 3, src: "/logos/buyers/3.png", alt: "Buffalo David Bitton" },
    { id: 4, src: "/logos/buyers/4.png", alt: "DKNY" },
    { id: 5, src: "/logos/buyers/5.png", alt: "Bench" },
    { id: 6, src: "/logos/buyers/6.png", alt: "Original Weatherproof" },
    { id: 7, src: "/logos/buyers/7.png", alt: "Airwalk" },
    { id: 8, src: "/logos/buyers/8.png", alt: "Joe's Jeans" },
    { id: 9, src: "/logos/buyers/9.png", alt: "Steve Jeans" },
    { id: 10, src: "/logos/buyers/10.png", alt: "BCBG" },
    { id: 12, src: "/logos/buyers/12.png", alt: "Umbro" },
    { id: 13, src: "/logos/buyers/13.png", alt: "Brave Soul" },
    { id: 14, src: "/logos/buyers/14.png", alt: "Kenneth Cole" },
    { id: 15, src: "/logos/buyers/15.png", alt: "Torkard Clothing" },
    { id: 16, src: "/logos/buyers/16.png", alt: "Stokomani" },
    { id: 17, src: "/logos/buyers/17.png", alt: "True Religion" },
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-3.5 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-2.5 sm:gap-4 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 left-1/3 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#72e055]">
                Reputation & Credentials
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                GLOBAL TRUST & COMPLIANCE
              </h2>
            </div>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#55c538]" />
            <span>Ethical Standards</span>
          </div>
        </div>

        {/* 2. CERTIFICATIONS SECTION (White Bento Grid Cards for Transparent PNGs) */}
        <div className="shrink-0 flex flex-col justify-between">
          <div className="text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#55c538]" />
            <span>WE ARE CERTIFIED BY</span>
          </div>

          <div
            ref={certsRef}
            className="grid grid-cols-3 gap-2 sm:gap-4"
          >
            {certificationLogos.map((cert, idx) => (
              <div
                key={idx}
                className="group relative bg-white/95 hover:bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl border border-white/80 transition-all hover:scale-[1.02] flex items-center justify-center h-14 sm:h-20 md:h-24 overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. BUYERS WE HANDLED (White Bento / Pinterest Style Grid for 16 Transparent Logos) */}
        <div className="flex-1 flex flex-col justify-between min-h-0">
          <div className="shrink-0 text-[10px] sm:text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#55c538]" />
              <span>BUYERS WE HANDLED</span>
            </div>
            <span className="text-[9px] sm:text-xs text-slate-400 font-semibold">
              16 Global Retail Brands
            </span>
          </div>

          {/* 16 Logo Bento Grid (4x4 on Mobile, 8x2 on Desktop) */}
          <div
            ref={buyersRef}
            className="flex-1 grid grid-cols-4 lg:grid-cols-8 gap-1.5 sm:gap-2.5 min-h-0"
          >
            {buyerLogos.map((buyer) => (
              <div
                key={buyer.id}
                className="group relative bg-white/95 hover:bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 shadow-md border border-white/80 transition-all hover:scale-[1.03] flex items-center justify-center h-full min-h-[36px] sm:min-h-[52px] overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={buyer.src}
                    alt={buyer.alt}
                    fill
                    sizes="(max-width: 768px) 25vw, 12vw"
                    className="object-contain object-center transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
