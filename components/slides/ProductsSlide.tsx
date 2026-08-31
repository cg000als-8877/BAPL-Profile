"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { Sparkles, CheckCircle2, ImageIcon } from "lucide-react";

interface SlideProps {
  isActive: boolean;
}

interface FrameProps {
  id: number;
  label: string;
  aspectClass: string;
}

const MobilePinterestFrameItem: React.FC<FrameProps> = ({
  id,
  label,
  aspectClass,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(`/Product Images/${id}.webp`);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (imgSrc.endsWith(".webp")) {
      setImgSrc(`/Product Images/${id}.png`);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #ffffff 0%, #f4f4f6 45%, #e2e2e8 100%)",
      }}
      className={`group relative w-full ${aspectClass} rounded-2xl p-1.5 shadow-md border border-white/80 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 active:scale-[0.98] select-none`}
    >
      {!hasError ? (
        <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src={imgSrc}
            alt={label}
            fill
            unoptimized
            onError={handleError}
            sizes="50vw"
            className="object-contain object-center p-1"
          />

          {/* Floating Luxury Look Pill */}
          <div className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-[9.5px] font-black text-white font-mono tracking-wider shadow-md">
            {label}
          </div>
        </div>
      ) : (
        <div className="w-full h-full rounded-xl border border-dashed border-slate-400 flex flex-col items-center justify-center text-center p-1">
          <div className="w-4 h-4 rounded-md bg-slate-300/80 flex items-center justify-center text-slate-500 mb-0.5">
            <ImageIcon className="w-3 h-3" />
          </div>
          <span className="text-[10px] font-black text-slate-500 font-mono">
            {label}
          </span>
        </div>
      )}
    </div>
  );
};

export const ProductsSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileStackRef = useRef<HTMLDivElement>(null);
  const desktopGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", clearProps: "transform" }
      );

      gsap.fromTo(
        desktopGridRef.current?.children || [],
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.out",
          delay: 0.05,
          clearProps: "transform",
        }
      );

      gsap.fromTo(
        mobileStackRef.current?.children || [],
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.05,
          clearProps: "transform",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const products = [
    {
      id: "01",
      title: "Denim Wear",
      items: ["Basic 5 Pocket Jeans", "Denim Shorts", "Cargo & Joggers"],
      border: "border-blue-500/35",
      bg: "bg-blue-500/10",
    },
    {
      id: "02",
      title: "T-Shirts & Polos",
      items: ["Polo Shirts", "Single Jersey Tops", "Printed T-Shirts"],
      border: "border-emerald-500/35",
      bg: "bg-emerald-500/10",
    },
    {
      id: "03",
      title: "Hoodies & Sweats",
      items: ["Fleece Hoodies", "Sweatshirts", "Track & Jogger Pants"],
      border: "border-purple-500/35",
      bg: "bg-purple-500/10",
    },
    {
      id: "04",
      title: "Pants & Trousers",
      items: ["Chino Pants", "Cargo Trousers", "Casual Bottoms"],
      border: "border-amber-500/35",
      bg: "bg-amber-500/10",
    },
    {
      id: "05",
      title: "Active & Swimwear",
      items: ["Board Shorts", "Performance Shorts", "Athletic Gear"],
      border: "border-cyan-500/35",
      bg: "bg-cyan-500/10",
    },
    {
      id: "06",
      title: "Knit & Woven Tops",
      items: ["Tank Tops", "Fashion Tops", "Woven Casuals"],
      border: "border-rose-500/35",
      bg: "bg-rose-500/10",
    },
  ];

  // 80 Frames lookbook
  const catalogFrames = Array.from({ length: 80 }, (_, i) => ({
    id: i + 1,
    label: `Look ${String(i + 1).padStart(2, "0")}`,
  }));

  const col1Aspects = [
    "aspect-[3/4.2]",
    "aspect-[3/4]",
    "aspect-[2/3]",
    "aspect-[4/5]",
  ];
  const col2Aspects = [
    "aspect-[2/3]",
    "aspect-[4/5]",
    "aspect-[3/4.2]",
    "aspect-[3/4]",
  ];

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full min-h-full p-3.5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between gap-3 sm:gap-4 overflow-y-visible md:overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        <div className="absolute top-0 right-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Header */}
        <div ref={headerRef} className="shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <div className="w-1.5 sm:w-2.5 h-6 sm:h-11 bg-[#55c538] rounded-full glow-bar" />
            <div>
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#72e055]">
                Manufacturing Scope
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-normal">
                OUR PRODUCTS
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Sparkles className="w-4 h-4 text-[#55c538]" />
            <span>Knit & Woven Apparel</span>
          </div>
        </div>

        {/* 2. MOBILE VIEW: 6 Categories + 2-Column Pinterest Masonry Lookbook Feed */}
        <div
          ref={mobileStackRef}
          className="flex flex-col md:hidden gap-3.5 w-full pb-8"
        >
          {/* A. 6 Product Category Cards (2-Column Grid on Mobile) */}
          <div className="grid grid-cols-2 gap-2 w-full">
            {products.map((p) => (
              <div
                key={p.id}
                className={`p-2.5 rounded-xl cyber-card border ${p.border} bg-[#091426]/95 flex flex-col justify-between shadow-md`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-slate-400 font-mono">
                    {p.id}
                  </span>
                </div>
                <h3 className="text-[13px] sm:text-sm font-black text-white leading-tight mb-1.5">
                  {p.title}
                </h3>

                <div className="space-y-0.5 pt-1 border-t border-slate-800/80">
                  {p.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 text-[11.5px] text-slate-200 font-medium truncate"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#55c538] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* B. Subtitle & Divider for Pinterest Lookbook */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-4 bg-[#55c538] rounded-full glow-bar" />
              <h3 className="text-sm font-black text-white uppercase tracking-wider">
                PRODUCT IMAGES
              </h3>
            </div>
            <span className="text-[11px] font-bold text-[#72e055] px-2 py-0.5 rounded-full bg-[#55c538]/10 border border-[#55c538]/30">
              80 Looks • Masonry Feed
            </span>
          </div>

          {/* C. PINTEREST MASONRY GRID (2 Staggered Columns on Mobile) */}
          <div className="w-full grid grid-cols-2 gap-2.5 items-start">
            {/* Column 1 (Left Stream) */}
            <div className="flex flex-col gap-2.5">
              {catalogFrames
                .filter((_, idx) => idx % 2 === 0)
                .map((frame, colIdx) => (
                  <MobilePinterestFrameItem
                    key={frame.id}
                    id={frame.id}
                    label={frame.label}
                    aspectClass={col1Aspects[colIdx % col1Aspects.length]}
                  />
                ))}
            </div>

            {/* Column 2 (Right Stream) */}
            <div className="flex flex-col gap-2.5">
              {catalogFrames
                .filter((_, idx) => idx % 2 === 1)
                .map((frame, colIdx) => (
                  <MobilePinterestFrameItem
                    key={frame.id}
                    id={frame.id}
                    label={frame.label}
                    aspectClass={col2Aspects[colIdx % col2Aspects.length]}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* 3. DESKTOP VIEW: Spacious 3x2 Bento Grid */}
        <div
          ref={desktopGridRef}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 flex-1 min-h-0 content-center"
        >
          {products.map((p) => (
            <div
              key={p.id}
              className={`p-5 md:p-6 lg:p-7 rounded-2xl cyber-card border ${p.border} bg-[#091426]/95 flex flex-col justify-between shadow-2xl hover:border-[#55c538] hover:scale-[1.02] transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-sm font-black text-slate-400 font-mono">
                    {p.id}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-black text-white mb-2 sm:mb-3 tracking-normal">
                  {p.title}
                </h3>
              </div>

              {/* Item List */}
              <div className="space-y-2 pt-2.5 border-t border-slate-800/80">
                {p.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs md:text-sm lg:text-base text-slate-200 font-medium"
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
