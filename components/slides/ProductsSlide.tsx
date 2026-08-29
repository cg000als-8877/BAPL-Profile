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
      // Magnetic Flash Entrance from Side
      gsap.fromTo(
        headerRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.55, ease: "expo.out" }
      );

      gsap.fromTo(
        filterRef.current,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "expo.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { x: -90, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "expo.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const productCards = [
    {
      id: 1,
      title: "Denim Wear & Basic 5 Pocket",
      category: "denim",
      tags: ["Denim Jeans", "Shorts", "Cargo & Jogger", "Chino & Capri"],
      description: "Rigid & stretch denim with advanced enzyme, stone, and tint wash finishes.",
      badge: "Flagship Line",
      color: "border-blue-200 bg-gradient-to-br from-blue-50/90 to-white",
      iconColor: "text-blue-600 bg-blue-100",
    },
    {
      id: 2,
      title: "T-Shirts, Polos & Graphic Tees",
      category: "knit",
      tags: ["Polo Shirts", "Drop Needle", "Printed Jersey", "Camo Tops"],
      description: "High-comfort 100% combed cotton, CVC, TC single jersey & pique fabrics.",
      badge: "High Volume",
      color: "border-emerald-200 bg-gradient-to-br from-emerald-50/90 to-white",
      iconColor: "text-emerald-600 bg-emerald-100",
    },
    {
      id: 3,
      title: "Jackets, Hoodies & Fleece Trousers",
      category: "knit",
      tags: ["Jogger Pants", "Hoodies", "Sportswear", "Tracksuits"],
      description: "Brushed fleece, French terry, and heavyweight activewear silhouettes.",
      badge: "Winter & Athletic",
      color: "border-purple-200 bg-gradient-to-br from-purple-50/90 to-white",
      iconColor: "text-purple-600 bg-purple-100",
    },
    {
      id: 4,
      title: "Woven Shirts & Casual Tops",
      category: "woven",
      tags: ["Flannel Plaid", "Casual Shirts", "Ladies Blouse", "Maxi Dress"],
      description: "Precision yarn-dyed checks, poplin, twill, and intricate smocked styling.",
      badge: "Specialty Woven",
      color: "border-amber-200 bg-gradient-to-br from-amber-50/90 to-white",
      iconColor: "text-amber-600 bg-amber-100",
    },
    {
      id: 5,
      title: "Swimwear, Board Shorts & Trunks",
      category: "woven",
      tags: ["Quick-dry Shorts", "Board Shorts", "Beachwear", "Athletic Trunks"],
      description: "Hydrophobic quick-dry fabrics, contrast drawstrings, and mesh lining.",
      badge: "Summer Active",
      color: "border-cyan-200 bg-gradient-to-br from-cyan-50/90 to-white",
      iconColor: "text-cyan-600 bg-cyan-100",
    },
    {
      id: 6,
      title: "Infant, Toddler & Newborn",
      category: "kids",
      tags: ["Onesies", "Frocks", "Dungarees", "Jump Suits", "Undergarments"],
      description: "Ultra-soft, OEKO-TEX certified skin-safe fabrics with safety-tested snap buttons.",
      badge: "Safety Certified",
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
        className="relative w-full h-full p-6 sm:p-10 md:p-14 lg:p-20 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100"
      >
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div ref={headerRef} className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="w-2 md:w-2.5 h-10 md:h-14 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-xs md:text-sm lg:text-base font-extrabold uppercase tracking-widest text-[#69b23f]">
                Manufacturing Scope
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                PRODUCT VERTICALS
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-slate-700 font-bold border border-slate-200 shadow-md text-xs md:text-sm lg:text-base">
            Demographics: Mens • Ladies • Boys • Girls • Infant • Toddler • Newborn
          </div>
        </div>

        {/* Category Pills Bar */}
        <div ref={filterRef} className="relative z-10 flex items-center gap-2.5 my-3 overflow-x-auto pb-1">
          {[
            { id: "all", label: "All Product Lines" },
            { id: "denim", label: "Denim & Bottoms" },
            { id: "knit", label: "Knitwear & Fleece" },
            { id: "woven", label: "Woven & Shirts" },
            { id: "kids", label: "Infant & Kids" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2 rounded-xl text-xs md:text-sm lg:text-base font-bold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-[#69b23f] text-white shadow-lg shadow-[#69b23f]/30"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Responsive Grid */}
        <div
          ref={gridRef}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 my-auto"
        >
          {filteredCards.map((p) => (
            <div
              key={p.id}
              className={`p-5 md:p-6 rounded-2xl border ${p.color} shadow-md hover:shadow-xl transition-all hover:scale-[1.01] flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs md:text-sm font-bold px-3 py-1 rounded-lg bg-white text-slate-800 border border-slate-200 shadow-sm">
                    {p.badge}
                  </span>
                  <div className={`p-2 rounded-xl ${p.iconColor}`}>
                    <Layers className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                  {p.description}
                </p>
              </div>

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold px-3 py-1 rounded-full bg-white text-slate-800 border border-slate-200 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#69b23f]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs md:text-sm text-slate-500 pt-3 border-t border-slate-200">
          <span>Complete Woven & Knit Apparel Production Solutions</span>
          <span className="font-mono font-bold text-[#69b23f]">Slide 04 / 06</span>
        </div>
      </div>
    </AspectWrapper>
  );
};
