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

const DesktopSectionDivider: React.FC = () => (
  <div className="hidden md:block w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-14 select-none pointer-events-none my-2">
    <div className="w-full h-[1.5px] desktop-divider-line rounded-full" />
  </div>
);

const MobileSectionDivider: React.FC = () => (
  <div className="block md:hidden w-full px-6 py-5 select-none pointer-events-none">
    <div className="relative flex items-center justify-center w-full">
      {/* Night Mode: Glowing Emerald Wave */}
      <svg
        className="w-full max-w-sm h-4 mobile-divider-night"
        viewBox="0 0 360 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 8 C 80 1, 130 15, 180 8 C 230 1, 280 15, 350 8"
          stroke="url(#mobile-divider-grad-night)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="mobile-divider-grad-night" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#55c538" stopOpacity="0.2" />
            <stop offset="20%" stopColor="#55c538" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#72e055" stopOpacity="1" />
            <stop offset="80%" stopColor="#55c538" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#55c538" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Day Mode: Bold High-Contrast Cobalt & Deep Emerald Wave */}
      <svg
        className="w-full max-w-sm h-4 mobile-divider-day"
        viewBox="0 0 360 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 8 C 80 1, 130 15, 180 8 C 230 1, 280 15, 350 8"
          stroke="url(#mobile-divider-grad-day)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="mobile-divider-grad-day" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
            <stop offset="20%" stopColor="#2563eb" stopOpacity="1" />
            <stop offset="50%" stopColor="#059669" stopOpacity="1" />
            <stop offset="80%" stopColor="#2563eb" stopOpacity="1" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

  return (
    <main ref={containerRef} className="snap-container bg-[#050811]">
      {/* 1. Hook: Hero Overview */}
      <section
        ref={(el) => { slideRefs.current[0] = el; }}
        id="slide-1"
        className="slide slide-1"
      >
        <HeroSlide isActive={currentSlide === 0} onNext={handleNext} />
      </section>

      <DesktopSectionDivider />

      {/* 2. Instant Trust: Certifications (BSCI, OEKO-TEX) */}
      <section
        ref={(el) => { slideRefs.current[1] = el; }}
        id="slide-2"
        className="slide slide-2"
      >
        <CertificationsSlide isActive={currentSlide === 1} onNext={handleNext} />
      </section>

      <DesktopSectionDivider />
      <MobileSectionDivider />

      {/* 3. Social Proof: Buyers We Handled (16 Global Brands) */}
      <section
        ref={(el) => { slideRefs.current[2] = el; }}
        id="slide-3"
        className="slide slide-3"
      >
        <BuyersSlide isActive={currentSlide === 2} onNext={handleNext} />
      </section>

      <DesktopSectionDivider />
      <MobileSectionDivider />

      {/* 4. Manufacturing Scope: Our Products (6 Garment Verticals) */}
      <section
        ref={(el) => { slideRefs.current[3] = el; }}
        id="slide-4"
        className="slide slide-4"
      >
        <ProductsSlide isActive={currentSlide === 3} />
      </section>

      {/* 5. Craftsmanship & Lookbook - Part 1: Looks 01 to 40 (Desktop dedicated) */}
      <DesktopSectionDivider />
      <section
        ref={(el) => { slideRefs.current[4] = el; }}
        id="slide-5"
        className="hidden md:flex slide slide-5 slide-catalog-desktop"
      >
        <CatalogSlide
          isActive={currentSlide === 4}
          startId={1}
          endId={40}
          title="PRODUCT IMAGES"
          subtitle="Garment Lookbook & Portfolio"
          onNext={handleNext}
        />
      </section>

      {/* 6. Craftsmanship & Lookbook - Part 2: Looks 41 to 80 (Desktop dedicated) */}
      <DesktopSectionDivider />
      <section
        ref={(el) => { slideRefs.current[5] = el; }}
        id="slide-6"
        className="hidden md:flex slide slide-6 slide-catalog-desktop"
      >
        <CatalogSlide
          isActive={currentSlide === 5}
          startId={41}
          endId={80}
          title="PRODUCT IMAGES"
          subtitle="Garment Lookbook & Portfolio"
          onNext={handleNext}
        />
      </section>

      <DesktopSectionDivider />
      <MobileSectionDivider />

      {/* 7. Facility & Capacity: Production Unit (300K pcs/mo, 38K sq ft) */}
      <section
        ref={(el) => { slideRefs.current[6] = el; }}
        id="slide-7"
        className="slide slide-7"
      >
        <ProductionUnitSlide isActive={currentSlide === 6} onNext={handleNext} />
      </section>

      <DesktopSectionDivider />
      <MobileSectionDivider />

      {/* 8. Technical Fleet: Machinery Summary (320 Sets Plant Fleet) */}
      <section
        ref={(el) => { slideRefs.current[7] = el; }}
        id="slide-8"
        className="slide slide-8"
      >
        <MachinerySlide isActive={currentSlide === 7} onNext={handleNext} />
      </section>

      <DesktopSectionDivider />
      <MobileSectionDivider />

      {/* 9. Operational Excellence: Strategic Pillars (6 Pillars) */}
      <section
        ref={(el) => { slideRefs.current[8] = el; }}
        id="slide-9"
        className="slide slide-9"
      >
        <StrategySlide isActive={currentSlide === 8} onNext={handleNext} />
      </section>

      <DesktopSectionDivider />
      <MobileSectionDivider />

      {/* 10. Commercial Credentials: Company Details & Banking */}
      <section
        ref={(el) => { slideRefs.current[9] = el; }}
        id="slide-10"
        className="slide slide-10"
      >
        <CompanyDetailsSlide isActive={currentSlide === 9} onNext={handleNext} />
      </section>

      <DesktopSectionDivider />
      <MobileSectionDivider />

      {/* 11. Call to Action: Contact Us (MD & Director Lines) */}
      <section
        ref={(el) => { slideRefs.current[10] = el; }}
        id="slide-11"
        className="slide slide-11"
      >
        <ContactSlide isActive={currentSlide === 10} />
      </section>

      {/* Floating Draggable Day / Night Mode Switcher */}
      <ThemeToggle />
    </main>
  );
};
