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
import { ThankYouSlide } from "./slides/ThankYouSlide";
import { ThemeToggle } from "./ThemeToggle";

const TOTAL_SLIDES = 12;

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

  // Intersection Observer to detect active slide in view
  useEffect(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const options = {
      root: isMobile ? null : containerRef.current,
      rootMargin: isMobile ? "-5% 0px -15% 0px" : "0px",
      threshold: isMobile ? 0.1 : 0.5,
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

  // Desktop Mouse Wheel translation: scrolling mouse wheel slides horizontally
  useEffect(() => {
    let isLocked = false;

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 768) return;

      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) > 15) {
        e.preventDefault();
        if (isLocked) return;
        isLocked = true;

        if (delta > 0) {
          handleNext();
        } else {
          handlePrev();
        }

        setTimeout(() => {
          isLocked = false;
        }, 650);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleNext, handlePrev]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowDown":
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          handleNext();
          break;
        case "ArrowUp":
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          handlePrev();
          break;
        case "Home":
          e.preventDefault();
          scrollToSlide(0);
          break;
        case "End":
          e.preventDefault();
          scrollToSlide(TOTAL_SLIDES - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, scrollToSlide]);

const MobileSectionDivider: React.FC = () => (
  <div className="block md:hidden w-full px-6 py-4 select-none pointer-events-none">
    <div className="relative flex items-center justify-center w-full">
      <svg
        className="w-full max-w-sm h-4 text-[#55c538] drop-shadow-[0_0_8px_rgba(85,197,56,0.5)] mobile-divider-svg"
        viewBox="0 0 360 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="mobile-divider-path"
          d="M10 8 C 80 1, 130 15, 180 8 C 230 1, 280 15, 350 8"
          stroke="url(#mobile-divider-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <defs>
          {/* Night Mode: Neon Emerald Wave */}
          <linearGradient id="mobile-divider-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#55c538" stopOpacity="0" />
            <stop offset="15%" stopColor="#55c538" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#72e055" stopOpacity="1" />
            <stop offset="85%" stopColor="#55c538" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#55c538" stopOpacity="0" />
          </linearGradient>

          {/* Day Mode: Royal Cobalt & Cyan Wave */}
          <linearGradient id="mobile-divider-gradient-day" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="15%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="85%" stopColor="#2563eb" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
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

      {/* 2. Instant Trust: Certifications (BSCI, OEKO-TEX) */}
      <section
        ref={(el) => { slideRefs.current[1] = el; }}
        id="slide-2"
        className="slide slide-2"
      >
        <CertificationsSlide isActive={currentSlide === 1} onNext={handleNext} />
      </section>

      <MobileSectionDivider />

      {/* 3. Social Proof: Buyers We Handled (16 Global Brands) */}
      <section
        ref={(el) => { slideRefs.current[2] = el; }}
        id="slide-3"
        className="slide slide-3"
      >
        <BuyersSlide isActive={currentSlide === 2} onNext={handleNext} />
      </section>

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

      <MobileSectionDivider />

      {/* 7. Facility & Capacity: Production Unit (300K pcs/mo, 38K sq ft) */}
      <section
        ref={(el) => { slideRefs.current[6] = el; }}
        id="slide-7"
        className="slide slide-7"
      >
        <ProductionUnitSlide isActive={currentSlide === 6} onNext={handleNext} />
      </section>

      <MobileSectionDivider />

      {/* 8. Technical Fleet: Machinery Summary (250+ Plant Fleet) */}
      <section
        ref={(el) => { slideRefs.current[7] = el; }}
        id="slide-8"
        className="slide slide-8"
      >
        <MachinerySlide isActive={currentSlide === 7} onNext={handleNext} />
      </section>

      <MobileSectionDivider />

      {/* 9. Operational Excellence: Strategic Pillars (6 Pillars) */}
      <section
        ref={(el) => { slideRefs.current[8] = el; }}
        id="slide-9"
        className="slide slide-9"
      >
        <StrategySlide isActive={currentSlide === 8} onNext={handleNext} />
      </section>

      <MobileSectionDivider />

      {/* 10. Commercial Credentials: Company Details & Banking */}
      <section
        ref={(el) => { slideRefs.current[9] = el; }}
        id="slide-10"
        className="slide slide-10"
      >
        <CompanyDetailsSlide isActive={currentSlide === 9} onNext={handleNext} />
      </section>

      <MobileSectionDivider />

      {/* 11. Call to Action: Contact Us (MD & Director Lines) */}
      <section
        ref={(el) => { slideRefs.current[10] = el; }}
        id="slide-11"
        className="slide slide-11"
      >
        <ContactSlide isActive={currentSlide === 10} />
      </section>

      {/* 12. Closing: Thank You (Desktop Presentation Only) */}
      <section
        ref={(el) => { slideRefs.current[11] = el; }}
        id="slide-12"
        className="hidden md:flex slide slide-12 slide-thankyou-desktop"
      >
        <ThankYouSlide
          isActive={currentSlide === 11}
          onNavigateToContact={() => scrollToSlide(10)}
        />
      </section>

      {/* Floating Draggable Day / Night Mode Switcher */}
      <ThemeToggle />
    </main>
  );
};
