"use client";

import React, { useEffect, useRef, useState } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import {
  Tag,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

export const ProductsSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState<"all" | "denim" | "knit" | "woven" | "kids">("all");

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );

      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 25, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
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
      color: "border-blue-200 bg-gradient-to-br from-blue-50/80 to-white",
      iconColor: "text-blue-600 bg-blue-100/80",
    },
    {
      id: 2,
      title: "T-Shirts, Polos & Graphic Tees",
      category: "knit",
      tags: ["Polo Shirts", "Drop Needle", "Printed Jersey", "Camo Tops"],
      description: "High-comfort 100% combed cotton, CVC, TC single jersey & pique fabrics.",
      badge: "High Volume",
      color: "border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-white",
      iconColor: "text-emerald-600 bg-emerald-100/80",
    },
    {
      id: 3,
      title: "Jackets, Hoodies & Fleece Trousers",
      category: "knit",
      tags: ["Jogger Pants", "Hoodies", "Sportswear", "Tracksuits"],
      description: "Brushed fleece, French terry, and heavyweight activewear silhouettes.",
      badge: "Winter & Athletic",
      color: "border-purple-200 bg-gradient-to-br from-purple-50/80 to-white",
      iconColor: "text-purple-600 bg-purple-100/80",
    },
    {
      id: 4,
      title: "Woven Shirts & Casual Tops",
      category: "woven",
      tags: ["Flannel Plaid", "Casual Shirts", "Ladies Blouse", "Maxi Dress"],
      description: "Precision yarn-dyed checks, poplin, twill, and intricate smocked styling.",
      badge: "Specialty Woven",
      color: "border-amber-200 bg-gradient-to-br from-amber-50/80 to-white",
      iconColor: "text-amber-600 bg-amber-100/80",
    },
    {
      id: 5,
      title: "Swimwear, Board Shorts & Trunks",
      category: "woven",
      tags: ["Quick-dry Shorts", "Board Shorts", "Beachwear", "Athletic Trunks"],
      description: "Hydrophobic quick-dry fabrics, contrast drawstrings, and mesh lining.",
      badge: "Summer Active",
      color: "border-cyan-200 bg-gradient-to-br from-cyan-50/80 to-white",
      iconColor: "text-cyan-600 bg-cyan-100/80",
    },
    {
      id: 6,
      title: "Infant, Toddler & Newborn",
      category: "kids",
      tags: ["Onesies", "Frocks", "Dungarees", "Jump Suits", "Undergarments"],
      description: "Ultra-soft, OEKO-TEX certified skin-safe fabrics with safety-tested snap buttons.",
      badge: "Safety Certified",
      color: "border-rose-200 bg-gradient-to-br from-rose-50/80 to-white",
      iconColor: "text-rose-600 bg-rose-100/80",
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
        className="relative w-full h-full p-4 sm:p-6 md:p-10 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100"
      >
        {/* Background Decorative Blob */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#69b23f]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Ribbon & Filter Selector */}
        <div ref={headerRef} className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-[#69b23f] rounded-full" />
            <div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#69b23f]">
                Manufacturing Scope
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                PRODUCT VERTICALS
              </h2>
            </div>
          </div>

          {/* Demographic Breadcrumb */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
            <div className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200 whitespace-nowrap text-[11px]">
              Demographics: Mens • Ladies • Boys • Girls • Infant • Toddler • Newborn
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="relative z-10 flex items-center gap-1.5 sm:gap-2 my-1 sm:my-2 overflow-x-auto pb-1">
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
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-[#69b23f] text-white shadow-md shadow-[#69b23f]/30 font-semibold"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Responsive Grid */}
        <div
          ref={gridRef}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3.5 my-auto max-h-[62vh] overflow-y-auto sm:overflow-visible py-1"
        >
          {filteredCards.map((p) => (
            <div
              key={p.id}
              className={`p-3 sm:p-4 rounded-xl border ${p.color} shadow-sm hover:shadow-md transition-all hover:scale-[1.01] flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/90 text-slate-700 border border-slate-200 shadow-2xs">
                    {p.badge}
                  </span>
                  <div className={`p-1.5 rounded-lg ${p.iconColor}`}>
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 leading-snug">
                  {p.title}
                </h3>
                <p className="text-[11px] text-slate-600 leading-tight mb-2.5 font-normal">
                  {p.description}
                </p>
              </div>

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200/60">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-[#69b23f]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-200">
          <span>Complete Woven & Knit Apparel Production Solutions</span>
          <span className="font-mono font-semibold text-[#69b23f]">Slide 04 / 06</span>
        </div>
      </div>
    </AspectWrapper>
  );
};
