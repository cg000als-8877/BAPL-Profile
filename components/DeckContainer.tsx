"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { HeroSlide } from "./slides/HeroSlide";
import { StrategySlide } from "./slides/StrategySlide";
import { ProductionUnitSlide } from "./slides/ProductionUnitSlide";
import { MachinerySlide } from "./slides/MachinerySlide";
import { ProductsSlide } from "./slides/ProductsSlide";
import { CatalogSlide } from "./slides/CatalogSlide";
import { CertificationsSlide } from "./slides/CertificationsSlide";
import { BuyersSlide } from "./slides/BuyersSlide";
import { CompanyDetailsSlide } from "./slides/CompanyDetailsSlide";
import { ContactSlide } from "./slides/ContactSlide";
import { ThankYouSlide } from "./slides/ThankYouSlide";

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
    const options = {
      root: containerRef.current,
      rootMargin: "0px",
      threshold: 0.5,
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

  return (
    <main ref={containerRef} className="snap-container bg-[#050811]">
      {/* Slide 1: Hero Overview */}
      <section
        ref={(el) => { slideRefs.current[0] = el; }}
        id="slide-1"
        className="slide slide-1"
      >
        <HeroSlide isActive={currentSlide === 0} onNext={handleNext} />
      </section>

      {/* Slide 2: Strategic Pillars */}
      <section
        ref={(el) => { slideRefs.current[1] = el; }}
        id="slide-2"
        className="slide slide-2"
      >
        <StrategySlide isActive={currentSlide === 1} onNext={handleNext} />
      </section>

      {/* Slide 3: Production Unit & Facility */}
      <section
        ref={(el) => { slideRefs.current[2] = el; }}
        id="slide-3"
        className="slide slide-3"
      >
        <ProductionUnitSlide isActive={currentSlide === 2} onNext={handleNext} />
      </section>

      {/* Slide 4: Machinery Summary & Plant Fleet */}
      <section
        ref={(el) => { slideRefs.current[3] = el; }}
        id="slide-4"
        className="slide slide-4"
      >
        <MachinerySlide isActive={currentSlide === 3} onNext={handleNext} />
      </section>

      {/* Slide 5: Product Verticals & Scope */}
      <section
        ref={(el) => { slideRefs.current[4] = el; }}
        id="slide-5"
        className="slide slide-5"
      >
        <ProductsSlide isActive={currentSlide === 4} />
      </section>

      {/* Slide 6: Product Catalog - Part 1 (Looks 01 to 40) */}
      <section
        ref={(el) => { slideRefs.current[5] = el; }}
        id="slide-6"
        className="hidden md:flex slide slide-6 slide-catalog-desktop"
      >
        <CatalogSlide
          isActive={currentSlide === 5}
          startId={1}
          endId={40}
          title="PRODUCT IMAGES"
          subtitle="Garment Lookbook & Portfolio"
          onNext={handleNext}
        />
      </section>

      {/* Slide 7: Product Catalog - Part 2 (Looks 41 to 80) */}
      <section
        ref={(el) => { slideRefs.current[6] = el; }}
        id="slide-7"
        className="hidden md:flex slide slide-7 slide-catalog-desktop"
      >
        <CatalogSlide
          isActive={currentSlide === 6}
          startId={41}
          endId={80}
          title="PRODUCT IMAGES"
          subtitle="Garment Lookbook & Portfolio"
          onNext={handleNext}
        />
      </section>

      {/* Slide 8: We Are Certified By */}
      <section
        ref={(el) => { slideRefs.current[7] = el; }}
        id="slide-8"
        className="slide slide-8"
      >
        <CertificationsSlide isActive={currentSlide === 7} onNext={handleNext} />
      </section>

      {/* Slide 9: Buyers We Handled */}
      <section
        ref={(el) => { slideRefs.current[8] = el; }}
        id="slide-9"
        className="slide slide-9"
      >
        <BuyersSlide isActive={currentSlide === 8} onNext={handleNext} />
      </section>

      {/* Slide 10: Company Details & Regulatory Profile */}
      <section
        ref={(el) => { slideRefs.current[9] = el; }}
        id="slide-9b"
        className="slide slide-10"
      >
        <CompanyDetailsSlide isActive={currentSlide === 9} onNext={handleNext} />
      </section>

      {/* Slide 11: Contact Us */}
      <section
        ref={(el) => { slideRefs.current[10] = el; }}
        id="slide-10"
        className="slide slide-11"
      >
        <ContactSlide isActive={currentSlide === 10} />
      </section>

      {/* Slide 12: Thank You */}
      <section
        ref={(el) => { slideRefs.current[11] = el; }}
        id="slide-11"
        className="slide slide-12"
      >
        <ThankYouSlide
          isActive={currentSlide === 11}
          onNavigateToContact={() => scrollToSlide(10)}
        />
      </section>
    </main>
  );
};
