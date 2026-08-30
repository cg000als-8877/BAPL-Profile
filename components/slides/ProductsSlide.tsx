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
        { x: -40, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.04,
          ease: "expo.out",
          delay: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  // Authentic product lines strictly matching the PDF categories
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
        className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-3 sm:gap-5 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header (Title strictly matching PDF: OUR PRODUCTS) */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-2 md:w-2.5 h-8 md:h-12 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Manufacturing Lines
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                OUR PRODUCTS
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Sparkles className="w-4 h-4 text-[#55c538]" />
            <span>Knit & Woven Apparel</span>
          </div>
        </div>

        {/* 2. Simplified 6-Card Grid (Strictly PDF Garment Types, Zero Extraneous Bloat) */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 min-h-0"
        >
          {products.map((p) => (
            <div
              key={p.id}
              className={`p-4 sm:p-6 md:p-7 rounded-2xl cyber-card border ${p.border} bg-[#091426]/90 flex flex-col justify-between h-full shadow-xl hover:border-[#55c538] hover:scale-[1.02] transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-xs sm:text-sm font-black text-slate-400 font-mono">
                    {p.id}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#55c538] opacity-60" />
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-2 sm:mb-3 tracking-tight">
                  {p.title}
                </h3>
              </div>

              {/* Garment Item List strictly from PDF */}
              <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-slate-800/80">
                {p.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-slate-200 font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#55c538] shrink-0" />
                    <span>{item}</span>
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
