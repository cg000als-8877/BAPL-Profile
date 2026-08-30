"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { Globe2, Sparkles } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
}

export const BuyersSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const desktopGridRef = useRef<HTMLDivElement>(null);
  const mobileMosaicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "expo.out" }
      );

      gsap.fromTo(
        desktopGridRef.current?.children || [],
        { y: 25, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.025,
          ease: "expo.out",
          delay: 0.05,
        }
      );

      gsap.fromTo(
        mobileMosaicRef.current?.children || [],
        { y: 20, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.03,
          ease: "expo.out",
          delay: 0.05,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const buyerLogos = [
    { id: 4, src: "/logos/buyers/4.png", alt: "DKNY", featured: true },
    { id: 1, src: "/logos/buyers/1.png", alt: "Body Glove", featured: false },
    { id: 17, src: "/logos/buyers/17.png", alt: "True Religion", featured: true },
    { id: 12, src: "/logos/buyers/12.png", alt: "Umbro", featured: false },
    { id: 5, src: "/logos/buyers/5.png", alt: "Bench", featured: false },
    { id: 3, src: "/logos/buyers/3.png", alt: "Buffalo David Bitton", featured: true },
    { id: 7, src: "/logos/buyers/7.png", alt: "Airwalk", featured: false },
    { id: 8, src: "/logos/buyers/8.png", alt: "Joe's Jeans", featured: false },
    { id: 14, src: "/logos/buyers/14.png", alt: "Kenneth Cole", featured: true },
    { id: 6, src: "/logos/buyers/6.png", alt: "Original Weatherproof", featured: false },
    { id: 10, src: "/logos/buyers/10.png", alt: "BCBG", featured: false },
    { id: 13, src: "/logos/buyers/13.png", alt: "Brave Soul", featured: false },
    { id: 2, src: "/logos/buyers/2.png", alt: "Soul Star", featured: false },
    { id: 9, src: "/logos/buyers/9.png", alt: "Steve Jeans", featured: false },
    { id: 15, src: "/logos/buyers/15.png", alt: "Torkard Clothing", featured: false },
    { id: 16, src: "/logos/buyers/16.png", alt: "Stokomani", featured: false },
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
                International Retail Portfolio
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                BUYERS WE HANDLED
              </h2>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 cyber-pill rounded-full text-xs md:text-sm font-bold text-slate-200 shadow-md">
            <Globe2 className="w-4 h-4 text-[#55c538]" />
            <span>16 Global Retail Brands</span>
          </div>
        </div>

        {/* 2. MOBILE VIEW ONLY: Pinterest Staggered Bento Mosaic (Fluid, Dynamic & Roomy) */}
        <div
          ref={mobileMosaicRef}
          className="flex-1 grid grid-cols-6 gap-1.5 min-h-0 md:hidden content-between"
        >
          {/* Row 1: DKNY (Span 3) + True Religion (Span 3) */}
          <div className="col-span-3 bg-white/95 rounded-xl p-2 shadow-lg flex items-center justify-center h-12 relative">
            <Image src="/logos/buyers/4.png" alt="DKNY" fill sizes="50vw" className="object-contain p-1.5" />
          </div>
          <div className="col-span-3 bg-white/95 rounded-xl p-2 shadow-lg flex items-center justify-center h-12 relative">
            <Image src="/logos/buyers/17.png" alt="True Religion" fill sizes="50vw" className="object-contain p-1.5" />
          </div>

          {/* Row 2: Body Glove (Span 2) + Umbro (Span 2) + Bench (Span 2) */}
          <div className="col-span-2 bg-white/95 rounded-xl p-1.5 shadow-md flex items-center justify-center h-11 relative">
            <Image src="/logos/buyers/1.png" alt="Body Glove" fill sizes="33vw" className="object-contain p-1" />
          </div>
          <div className="col-span-2 bg-white/95 rounded-xl p-1.5 shadow-md flex items-center justify-center h-11 relative">
            <Image src="/logos/buyers/12.png" alt="Umbro" fill sizes="33vw" className="object-contain p-1" />
          </div>
          <div className="col-span-2 bg-white/95 rounded-xl p-1.5 shadow-md flex items-center justify-center h-11 relative">
            <Image src="/logos/buyers/5.png" alt="Bench" fill sizes="33vw" className="object-contain p-1" />
          </div>

          {/* Row 3: Buffalo (Span 3) + Kenneth Cole (Span 3) */}
          <div className="col-span-3 bg-white/95 rounded-xl p-2 shadow-lg flex items-center justify-center h-12 relative">
            <Image src="/logos/buyers/3.png" alt="Buffalo" fill sizes="50vw" className="object-contain p-1.5" />
          </div>
          <div className="col-span-3 bg-white/95 rounded-xl p-2 shadow-lg flex items-center justify-center h-12 relative">
            <Image src="/logos/buyers/14.png" alt="Kenneth Cole" fill sizes="50vw" className="object-contain p-1.5" />
          </div>

          {/* Row 4: Airwalk (Span 2) + Joe's (Span 2) + BCBG (Span 2) */}
          <div className="col-span-2 bg-white/95 rounded-xl p-1.5 shadow-md flex items-center justify-center h-11 relative">
            <Image src="/logos/buyers/7.png" alt="Airwalk" fill sizes="33vw" className="object-contain p-1" />
          </div>
          <div className="col-span-2 bg-white/95 rounded-xl p-1.5 shadow-md flex items-center justify-center h-11 relative">
            <Image src="/logos/buyers/8.png" alt="Joe's Jeans" fill sizes="33vw" className="object-contain p-1" />
          </div>
          <div className="col-span-2 bg-white/95 rounded-xl p-1.5 shadow-md flex items-center justify-center h-11 relative">
            <Image src="/logos/buyers/10.png" alt="BCBG" fill sizes="33vw" className="object-contain p-1" />
          </div>

          {/* Row 5: Weatherproof (Span 3) + Brave Soul (Span 3) */}
          <div className="col-span-3 bg-white/95 rounded-xl p-2 shadow-lg flex items-center justify-center h-12 relative">
            <Image src="/logos/buyers/6.png" alt="Weatherproof" fill sizes="50vw" className="object-contain p-1.5" />
          </div>
          <div className="col-span-3 bg-white/95 rounded-xl p-2 shadow-lg flex items-center justify-center h-12 relative">
            <Image src="/logos/buyers/13.png" alt="Brave Soul" fill sizes="50vw" className="object-contain p-1.5" />
          </div>

          {/* Row 6: Soul Star (Span 2) + Steve Jeans (Span 2) + Stokomani (Span 2) */}
          <div className="col-span-2 bg-white/95 rounded-xl p-1.5 shadow-md flex items-center justify-center h-11 relative">
            <Image src="/logos/buyers/2.png" alt="Soul Star" fill sizes="33vw" className="object-contain p-1" />
          </div>
          <div className="col-span-2 bg-white/95 rounded-xl p-1.5 shadow-md flex items-center justify-center h-11 relative">
            <Image src="/logos/buyers/9.png" alt="Steve Jeans" fill sizes="33vw" className="object-contain p-1" />
          </div>
          <div className="col-span-2 bg-white/95 rounded-xl p-1.5 shadow-md flex items-center justify-center h-11 relative">
            <Image src="/logos/buyers/16.png" alt="Stokomani" fill sizes="33vw" className="object-contain p-1" />
          </div>
        </div>

        {/* 3. DESKTOP VIEW ONLY: 4x4 Grid with Micro-Interactions */}
        <div
          ref={desktopGridRef}
          className="hidden md:grid md:grid-cols-4 gap-4 flex-1 min-h-0"
        >
          {buyerLogos.map((buyer) => (
            <div
              key={buyer.id}
              className="group relative bg-white/95 hover:bg-white rounded-2xl p-4 shadow-xl border border-white/80 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl flex items-center justify-center h-full min-h-[64px] overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={buyer.src}
                  alt={buyer.alt}
                  fill
                  sizes="25vw"
                  className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AspectWrapper>
  );
};
