"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { HeroSlide } from "./slides/HeroSlide";
import { CertificationsSlide } from "./slides/CertificationsSlide";
import { BuyersSlide } from "./slides/BuyersSlide";
import { ProductsSlide } from "./slides/ProductsSlide";
import { CatalogSlide } from "./slides/CatalogSlide";
import { ProductionUnitSlide } from "./slides/ProductionUnitSlide";
import { MachinerySlide } from "./slides/MachinerySlide";
import { StrategySlide } from "./slides/StrategySlide";
import { CompanyDetailsSlide } from "./slides/CompanyDetailsSlide";
import { ContactSlide } from "./slides/ContactSlide";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowUp } from "lucide-react";

const TOTAL_SLIDES = 11;

export const DeckContainer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  const scrollToSlide = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_SLIDES) return;
    const target = slideRefs.current[index];
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, []);

  const handleNext = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      scrollToSlide(currentSlide + 1);
    }
  }, [currentSlide, scrollToSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  }, [currentSlide, scrollToSlide]);

  // Intersection Observer to trigger GSAP animations as sections scroll into view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-10% 0px -10% 0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = slideRefs.current.indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            setCurrentSlide(index);
          }
        }
      });
    }, options);

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={containerRef} className="snap-container bg-[#050811] relative overflow-x-hidden">
      {/* Universal Seamless Background Glow Orbs (Fixed across entire website without any clipping or section borders) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Ambient Blob 1: Top-Right Glow */}
        <div className="ambient-blob-1 absolute -top-40 -right-40 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-[#55c538]/[0.08] blur-[160px] pointer-events-none" />
        {/* Ambient Blob 2: Mid-Left Glow */}
        <div className="ambient-blob-2 absolute top-[30%] -left-48 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full bg-[#72e055]/[0.06] blur-[170px] pointer-events-none" />
        {/* Ambient Blob 3: Mid-Right Glow */}
        <div className="ambient-blob-3 absolute top-[60%] -right-48 w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] rounded-full bg-[#55c538]/[0.07] blur-[160px] pointer-events-none" />
        {/* Ambient Blob 4: Bottom-Center Glow */}
        <div className="ambient-blob-4 absolute -bottom-40 left-[20%] w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-[#55c538]/[0.08] blur-[180px] pointer-events-none" />
      </div>

      {/* 1. Hook: Hero Overview */}
      <section
        ref={(el) => { slideRefs.current[0] = el; }}
        id="slide-1"
        className="slide slide-1 relative z-10"
      >
        <HeroSlide isActive={currentSlide === 0} onNext={handleNext} />
      </section>

      {/* 2. Instant Trust: Certifications (BSCI, OEKO-TEX) */}
      <section
        ref={(el) => { slideRefs.current[1] = el; }}
        id="slide-2"
        className="slide slide-2"
      >
        <CertificationsSlide isActive={currentSlide === 1} onNext={handleNext} />
      </section>

      {/* 3. Social Proof: Buyers We Handled (16 Global Brands) */}
      <section
        ref={(el) => { slideRefs.current[2] = el; }}
        id="slide-3"
        className="slide slide-3"
      >
        <BuyersSlide isActive={currentSlide === 2} onNext={handleNext} />
      </section>

      {/* 4. Manufacturing Scope: Our Products (6 Garment Verticals) */}
      <section
        ref={(el) => { slideRefs.current[3] = el; }}
        id="slide-4"
        className="slide slide-4"
      >
        <ProductsSlide isActive={currentSlide === 3} />
      </section>

      {/* 5. Craftsmanship & Lookbook: 9-Column Pinterest Lookbook (80 Looks with 27 Initial + Load More) */}
      <section
        ref={(el) => { slideRefs.current[4] = el; }}
        id="slide-5"
        className="slide slide-5 slide-catalog"
      >
        <CatalogSlide isActive={currentSlide === 4} onNext={handleNext} />
      </section>

      {/* 6. Facility & Capacity: Production Unit (300K pcs/mo, 38K sq ft) */}
      <section
        ref={(el) => { slideRefs.current[5] = el; }}
        id="slide-6"
        className="slide slide-6"
      >
        <ProductionUnitSlide isActive={currentSlide === 5} onNext={handleNext} />
      </section>

      {/* 7. Technical Fleet: Machinery Summary (380 Sets Plant Fleet) */}
      <section
        ref={(el) => { slideRefs.current[6] = el; }}
        id="slide-7"
        className="slide slide-7"
      >
        <MachinerySlide isActive={currentSlide === 6} onNext={handleNext} />
      </section>

      {/* 8. Operational Excellence: Strategic Pillars (6 Pillars) */}
      <section
        ref={(el) => { slideRefs.current[7] = el; }}
        id="slide-8"
        className="slide slide-8"
      >
        <StrategySlide isActive={currentSlide === 7} onNext={handleNext} />
      </section>

      {/* 9. Commercial Credentials: Company Details & Banking */}
      <section
        ref={(el) => { slideRefs.current[8] = el; }}
        id="slide-9"
        className="slide slide-9"
      >
        <CompanyDetailsSlide isActive={currentSlide === 8} onNext={handleNext} />
      </section>

      {/* 10. Call to Action: Contact Us (MD & Director Lines) */}
      <section
        ref={(el) => { slideRefs.current[9] = el; }}
        id="slide-10"
        className="slide slide-10"
      >
        <ContactSlide isActive={currentSlide === 9} />
      </section>

      {/* Mobile Bottom Footer & Back to Top (Ensures 100% accessible scroll past last card) */}
      <footer className="block md:hidden w-full px-6 pt-2 pb-24 text-center select-none relative z-10">
        <button
          type="button"
          onClick={() => scrollToSlide(0)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#55c538] text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#55c538]" />
          <span>Back to Top</span>
        </button>
        <p className="text-[10px] text-slate-400 mt-3 font-medium">
          © {new Date().getFullYear()} Byzid Apparels (Pvt.) Ltd. All rights reserved.
        </p>
      </footer>

      {/* Floating Draggable Day / Night Mode Switcher */}
      <ThemeToggle />
    </main>
  );
};
