"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { HeroSlide } from "./slides/HeroSlide";
import { CapacitySlide } from "./slides/CapacitySlide";
import { StrategySlide } from "./slides/StrategySlide";
import { ProductsSlide } from "./slides/ProductsSlide";
import { TrustSlide } from "./slides/TrustSlide";
import { ContactSlide } from "./slides/ContactSlide";

const TOTAL_SLIDES = 6;

export const DeckContainer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  const scrollToSlide = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_SLIDES) return;
    const target = slideRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
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

  // Intersection Observer to detect current slide accurately
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
        case "f":
        case "F":
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
          } else if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, scrollToSlide]);

  return (
    <main ref={containerRef} className="snap-container bg-[#070b14]">
      {/* Slide 1: Hero Section */}
      <section
        ref={(el) => { slideRefs.current[0] = el; }}
        id="slide-1"
        className="slide slide-1"
      >
        <HeroSlide isActive={currentSlide === 0} onNext={handleNext} />
      </section>

      {/* Slide 2: Capacity & Scale */}
      <section
        ref={(el) => { slideRefs.current[1] = el; }}
        id="slide-2"
        className="slide slide-2"
      >
        <CapacitySlide isActive={currentSlide === 1} onNext={handleNext} />
      </section>

      {/* Slide 3: Strategic Edge */}
      <section
        ref={(el) => { slideRefs.current[2] = el; }}
        id="slide-3"
        className="slide slide-3"
      >
        <StrategySlide isActive={currentSlide === 2} />
      </section>

      {/* Slide 4: Product Verticals */}
      <section
        ref={(el) => { slideRefs.current[3] = el; }}
        id="slide-4"
        className="slide slide-4"
      >
        <ProductsSlide isActive={currentSlide === 3} />
      </section>

      {/* Slide 5: Global Trust */}
      <section
        ref={(el) => { slideRefs.current[4] = el; }}
        id="slide-5"
        className="slide slide-5"
      >
        <TrustSlide isActive={currentSlide === 4} />
      </section>

      {/* Slide 6: Contact & Operations */}
      <section
        ref={(el) => { slideRefs.current[5] = el; }}
        id="slide-6"
        className="slide slide-6"
      >
        <ContactSlide isActive={currentSlide === 5} />
      </section>
    </main>
  );
};
