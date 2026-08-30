"use client";

import React, { useEffect, useRef } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const ProductsSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 20, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "expo.out",
          delay: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const products = [
    {
      id: "01",
      title: "Denim Wear",
      items: ["Basic 5 Pocket Jeans", "Denim Shorts", "Cargo & Jogger Pants"],
      border: "border-blue-500/30",
    },
    {
      id: "02",
      title: "T-Shirts & Polos",
      items: ["Polo Shirts", "Single Jersey Tops", "Printed T-Shirts"],
      border: "border-emerald-500/30",
    },
    {
      id: "03",
      title: "Hoodies & Sweatshirts",
      items: ["Fleece Hoodies", "Sweatshirts", "Track & Jogger Pants"],
      border: "border-purple-500/30",
    },
    {
      id: "04",
      title: "Woven Shirts",
      items: ["Casual Shirts", "Flannel Plaid Shirts", "Cotton Tops"],
      border: "border-amber-500/30",
    },
    {
      id: "05",
      title: "Shorts & Swimwear",
      items: ["Board Shorts", "Swim Trunks", "Casual Beach Shorts"],
      border: "border-cyan-500/30",
    },
    {
      id: "06",
      title: "Kids & Infant Wear",
      items: ["Onesies & Rompers", "Dungarees", "Jump Suits"],
      border: "border-rose-500/30",
    },
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-3.5 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-2.5 sm:gap-4 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-[10px] sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Manufacturing Lines
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                OUR PRODUCTS
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Sparkles className="w-4 h-4 text-[#55c538]" />
            <span>Knit & Woven Apparel</span>
          </div>
        </div>

        {/* 2. Compact 2-Col Mobile & 3-Col Desktop Grid (100% In-Frame, Zero Dead Gaps) */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3.5 lg:gap-5 min-h-0"
        >
          {products.map((p) => (
            <div
              key={p.id}
              className={`p-2.5 sm:p-4 md:p-5 lg:p-6 rounded-xl sm:rounded-2xl cyber-card border ${p.border} bg-[#091426]/95 flex flex-col justify-between shadow-xl min-h-0 hover:border-[#55c538] hover:scale-[1.01] transition-all`}
            >
              {/* Header inside card: Index and Title */}
              <div>
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <span className="text-[10px] sm:text-xs md:text-sm font-black text-slate-400 font-mono">
                    {p.id}
                  </span>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#55c538] opacity-60" />
                </div>

                <h3 className="text-xs sm:text-base md:text-lg lg:text-xl font-black text-white leading-tight mb-1.5 sm:mb-2 tracking-tight">
                  {p.title}
                </h3>
              </div>

              {/* Compact Garment List without huge gaps */}
              <div className="space-y-1 sm:space-y-1.5 pt-1.5 border-t border-slate-800/80">
                {p.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 text-[9.5px] sm:text-xs md:text-sm text-slate-200 font-medium leading-tight"
                  >
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#55c538] shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AspectWrapper>
  );
};
