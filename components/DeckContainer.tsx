"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { HeroSlide } from "./slides/HeroSlide";
import { ContactSlide } from "./slides/ContactSlide";
import { StrategySlide } from "./slides/StrategySlide";
import { ProductionUnitSlide } from "./slides/ProductionUnitSlide";
import { MachinerySlide } from "./slides/MachinerySlide";
import { ProductsSlide } from "./slides/ProductsSlide";
import { TrustSlide } from "./slides/TrustSlide";

const TOTAL_SLIDES = 7;

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
        block: "nearest",
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

  // Intersection Observer to accurately detect the active slide in view
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

  // Desktop Mouse Wheel translation: scrolling mouse wheel slides horizontally to the left
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
      {/* Slide 1: Hero Section */}
      <section
        ref={(el) => { slideRefs.current[0] = el; }}
        id="slide-1"
        className="slide slide-1"
      >
        <HeroSlide isActive={currentSlide === 0} onNext={handleNext} />
      </section>

      {/* Slide 2: Contact & Operations (Moved to 2nd Page) */}
      <section
        ref={(el) => { slideRefs.current[1] = el; }}
        id="slide-2"
        className="slide slide-2"
      >
        <ContactSlide isActive={currentSlide === 1} />
      </section>

      {/* Slide 3: Strategic Pillars */}
      <section
        ref={(el) => { slideRefs.current[2] = el; }}
        id="slide-3"
        className="slide slide-3"
      >
        <StrategySlide isActive={currentSlide === 2} />
      </section>

      {/* Slide 4: Production Unit & Factory Facility (NEW Slide with Blueprint Background) */}
      <section
        ref={(el) => { slideRefs.current[3] = el; }}
        id="slide-4"
        className="slide slide-4"
      >
        <ProductionUnitSlide isActive={currentSlide === 3} onNext={handleNext} />
      </section>

      {/* Slide 5: Dedicated Machine Summary & Fleet */}
      <section
        ref={(el) => { slideRefs.current[4] = el; }}
        id="slide-5"
        className="slide slide-5"
      >
        <MachinerySlide isActive={currentSlide === 4} onNext={handleNext} />
      </section>

      {/* Slide 6: Product Verticals */}
      <section
        ref={(el) => { slideRefs.current[5] = el; }}
        id="slide-6"
        className="slide slide-6"
      >
        <ProductsSlide isActive={currentSlide === 5} />
      </section>

      {/* Slide 7: Global Trust & Compliance */}
      <section
        ref={(el) => { slideRefs.current[6] = el; }}
        id="slide-7"
        className="slide slide-7"
      >
        <TrustSlide isActive={currentSlide === 6} />
      </section>
    </main>
  );
};
