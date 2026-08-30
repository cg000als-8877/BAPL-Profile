"use client";

import React, { useEffect, useRef, useState } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { Layers, CheckCircle2, Sparkles } from "lucide-react";

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
        { x: -70, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "expo.out" }
      );

      gsap.fromTo(
        filterRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, delay: 0.05, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { x: -60, opacity: 0, scale: 0.96 },
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
      iconColor: "text-blue-400 bg-blue-500/20",
    },
    {
      id: 2,
      title: "T-Shirts & Polos",
      category: "knit",
      tags: ["Polo Shirts", "Jersey", "Camo Tops"],
      description: "Combed cotton, CVC, TC single jersey & pique fabrics.",
      badge: "Volume",
      iconColor: "text-[#72e055] bg-[#55c538]/20",
    },
    {
      id: 3,
      title: "Jackets & Hoodies",
      category: "knit",
      tags: ["Jogger Pants", "Hoodies", "Tracksuits"],
      description: "Brushed fleece, French terry, and athletic silhouettes.",
      badge: "Winter",
      iconColor: "text-purple-400 bg-purple-500/20",
    },
    {
      id: 4,
      title: "Woven Shirts & Tops",
      category: "woven",
      tags: ["Flannel Plaid", "Casual Shirts", "Blouse"],
      description: "Precision yarn-dyed checks, poplin, and smocked styling.",
      badge: "Woven",
      iconColor: "text-amber-400 bg-amber-500/20",
    },
    {
      id: 5,
      title: "Swimwear & Shorts",
      category: "woven",
      tags: ["Board Shorts", "Trunks", "Beachwear"],
      description: "Hydrophobic quick-dry fabrics and contrast drawstrings.",
      badge: "Active",
      iconColor: "text-cyan-400 bg-cyan-500/20",
    },
    {
      id: 6,
      title: "Infant & Kids",
      category: "kids",
      tags: ["Onesies", "Frocks", "Dungarees", "Jump Suits"],
      description: "Skin-safe OEKO-TEX fabrics with safety snap buttons.",
      badge: "Safety",
      iconColor: "text-rose-400 bg-rose-500/20",
    },
  ];

  const filteredCards =
    activeCategory === "all"
      ? productCards
      : productCards.filter((c) => c.category === activeCategory);

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full p-4 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-3 sm:gap-4 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-1/4 right-0 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-2 md:w-2.5 h-8 md:h-12 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Manufacturing Scope
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                PRODUCT VERTICALS
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full cyber-pill text-slate-200 font-bold shadow-md text-xs sm:text-sm md:text-base">
            <Sparkles className="w-4 h-4 text-[#55c538]" />
            <span>Mens • Ladies • Boys • Girls • Kids</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div ref={filterRef} className="shrink-0 flex items-center gap-2 my-0.5 sm:my-1 overflow-x-auto pb-0.5">
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
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#55c538] text-slate-950 shadow-md shadow-[#55c538]/30 font-black"
                  : "cyber-pill text-slate-300 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 6 Cards Grid (Large, Bold, Space-Filling with Increased Typography) */}
        <div
          ref={gridRef}
          className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 min-h-0"
        >
          {filteredCards.map((p) => (
            <div
              key={p.id}
              className="p-4 sm:p-6 md:p-7 rounded-2xl cyber-card flex flex-col justify-between h-full bg-[#091426]/90 shadow-2xl hover:border-[#55c538]/50 hover:scale-[1.01] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] sm:text-xs md:text-sm font-black px-2.5 py-1 rounded-md bg-white/10 text-slate-200 border border-white/10">
                    {p.badge}
                  </span>
                  <div className={`p-2 sm:p-2.5 rounded-xl ${p.iconColor} shadow-md`}>
                    <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black text-white mb-1.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed mb-3">
                  {p.description}
                </p>
              </div>

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2.5 border-t border-slate-800/80">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs md:text-sm font-bold px-2.5 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#55c538] shrink-0" />
                    <span>{tag}</span>
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
