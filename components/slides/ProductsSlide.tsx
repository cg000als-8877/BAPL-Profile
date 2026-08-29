"use client";

import React, { useEffect, useRef, useState } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { Layers, CheckCircle2 } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const ProductsSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState<"all" | "denim" | "knit" | "woven" | "kids">("all");

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" }
      );

      gsap.fromTo(
        filterRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, delay: 0.05, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { x: -70, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.04,
          ease: "expo.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const productCards = [
    {
      id: 1,
      title: "Denim & 5 Pocket",
      category: "denim",
      tags: ["Jeans", "Shorts", "Cargo & Jogger"],
      description: "Rigid & stretch denim with advanced enzyme, stone, and tint wash finishes.",
      badge: "Flagship",
      color: "border-blue-200 bg-gradient-to-br from-blue-50/90 to-white",
      iconColor: "text-blue-600 bg-blue-100",
    },
    {
      id: 2,
      title: "T-Shirts & Polos",
      category: "knit",
      tags: ["Polo Shirts", "Jersey", "Camo Tops"],
      description: "Combed cotton, CVC, TC single jersey & pique fabrics.",
      badge: "Volume",
      color: "border-emerald-200 bg-gradient-to-br from-emerald-50/90 to-white",
      iconColor: "text-emerald-600 bg-emerald-100",
    },
    {
      id: 3,
      title: "Jackets & Hoodies",
      category: "knit",
      tags: ["Jogger Pants", "Hoodies", "Tracksuits"],
      description: "Brushed fleece, French terry, and athletic silhouettes.",
      badge: "Winter",
      color: "border-purple-200 bg-gradient-to-br from-purple-50/90 to-white",
      iconColor: "text-purple-600 bg-purple-100",
    },
    {
      id: 4,
      title: "Woven Shirts & Tops",
      category: "woven",
      tags: ["Flannel Plaid", "Casual Shirts", "Blouse"],
      description: "Precision yarn-dyed checks, poplin, and smocked styling.",
      badge: "Woven",
      color: "border-amber-200 bg-gradient-to-br from-amber-50/90 to-white",
      iconColor: "text-amber-600 bg-amber-100",
    },
    {
      id: 5,
      title: "Swimwear & Shorts",
      category: "woven",
      tags: ["Board Shorts", "Trunks", "Beachwear"],
      description: "Hydrophobic quick-dry fabrics and contrast drawstrings.",
      badge: "Active",
      color: "border-cyan-200 bg-gradient-to-br from-cyan-50/90 to-white",
      iconColor: "text-cyan-600 bg-cyan-100",
    },
    {
      id: 6,
      title: "Infant & Kids",
      category: "kids",
      tags: ["Onesies", "Frocks", "Dungarees", "Jump Suits"],
      description: "Skin-safe OEKO-TEX fabrics with safety snap buttons.",
      badge: "Safety",
      color: "border-rose-200 bg-gradient-to-br from-rose-50/90 to-white",
      iconColor: "text-rose-600 bg-rose-100",
    },
  ];

  const filteredCards =
    activeCategory === "all"
      ? productCards
      : productCards.filter((c) => c.category === activeCategory);

  return (
    <AspectWrapper className="bg-slate-50 text-slate-900">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-8 md:p-14 lg:p-20 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100"
      >
        <div className="absolute top-1/4 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
          <div className="flex items-center gap-2.5 md:gap-4">
            <div className="w-1.5 md:w-2.5 h-7 md:h-12 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-extrabold uppercase tracking-widest text-[#69b23f]">
                Manufacturing Scope
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                PRODUCT VERTICALS
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-slate-700 font-bold border border-slate-200 shadow-sm text-xs md:text-sm">
            Mens • Ladies • Boys • Girls • Kids
          </div>
        </div>

        {/* Filter Pills */}
        <div ref={filterRef} className="relative z-10 flex items-center gap-1.5 sm:gap-2.5 my-1.5 sm:my-3 overflow-x-auto pb-0.5">
          {[
            { id: "all", label: "All Lines" },
            { id: "denim", label: "Denim & Bottoms" },
            { id: "knit", label: "Knit & Fleece" },
            { id: "woven", label: "Woven Shirts" },
            { id: "kids", label: "Kids & Infant" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3 sm:px-5 py-1 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-sm md:text-base font-bold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-[#69b23f] text-white shadow-sm shadow-[#69b23f]/30"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Cards Grid (2 cols on mobile, 3 cols on desktop) */}
        <div
          ref={gridRef}
          className="relative z-10 grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 my-auto"
        >
          {filteredCards.map((p) => (
            <div
              key={p.id}
              className={`p-2.5 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border ${p.color} shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5 sm:mb-3">
                  <span className="text-[9px] sm:text-xs md:text-sm font-bold px-2 py-0.5 rounded-md bg-white text-slate-800 border border-slate-200">
                    {p.badge}
                  </span>
                  <div className={`p-1 sm:p-2 rounded-lg ${p.iconColor}`}>
                    <Layers className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <h3 className="text-xs sm:text-base md:text-xl font-bold text-slate-900 mb-1 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-base text-slate-600 leading-tight sm:leading-relaxed mb-2">
                  {p.description}
                </p>
              </div>

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-1 pt-1.5 sm:pt-3 border-t border-slate-200/80">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[9px] sm:text-xs font-semibold px-1.5 sm:px-3 py-0.5 rounded-full bg-white text-slate-800 border border-slate-200"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#69b23f]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AspectWrapper>
  );
};
