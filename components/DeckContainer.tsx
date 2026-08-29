"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { HeroSlide } from "./slides/HeroSlide";
import { CapacitySlide } from "./slides/CapacitySlide";
import { StrategySlide } from "./slides/StrategySlide";
import { ProductsSlide } from "./slides/ProductsSlide";
import { TrustSlide } from "./slides/TrustSlide";
import { ContactSlide } from "./slides/ContactSlide";
import { NavigationDots } from "./NavigationDots";
import { PresentationControls } from "./PresentationControls";

const TOTAL_SLIDES = 6;
const SLIDE_LABELS = [
  "Corporate Hero",
  "Capacity & Scale",
  "Strategic Pillars",
  "Product Verticals",
  "Global Trust",
  "Contact & Operations",
];

export const DeckContainer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  // Smooth slide navigation
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

  // Intersection Observer to detect current snapped slide
  useEffect(() => {
    const options = {
      root: containerRef.current,
      rootMargin: "0px",
      threshold: 0.55, // At least 55% of the slide is visible
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
      // Avoid hijacking input if user is typing in any form element
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
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen().catch(() => {});
            }
          }
          break;
        case "p":
        case "P":
          setIsAutoPlay((prev) => !prev);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, scrollToSlide]);

  // AutoPlay logic
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextIndex = (prev + 1) % TOTAL_SLIDES;
        scrollToSlide(nextIndex);
        return nextIndex;
      });
    }, 7000); // 7 seconds per slide

    return () => clearInterval(timer);
  }, [isAutoPlay, scrollToSlide]);

  return (
    <>
      {/* Floating Presentation Controls */}
      <NavigationDots
        totalSlides={TOTAL_SLIDES}
        currentSlide={currentSlide}
        onSelectSlide={scrollToSlide}
        slideLabels={SLIDE_LABELS}
      />

      <PresentationControls
        totalSlides={TOTAL_SLIDES}
        currentSlide={currentSlide}
        onPrev={handlePrev}
        onNext={handleNext}
        isAutoPlay={isAutoPlay}
        onToggleAutoPlay={() => setIsAutoPlay(!isAutoPlay)}
      />

      {/* Main Snap Container with strictly 100vh / 100vw slides */}
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
    </>
  );
};
