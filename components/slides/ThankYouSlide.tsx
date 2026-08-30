"use client";

import React, { useEffect, useRef } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";

interface SlideProps {
  isActive: boolean;
  onNavigateToContact?: () => void;
}

export const ThankYouSlide: React.FC<SlideProps> = ({ isActive }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { scale: 0.9, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-center text-center p-6 sm:p-12 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute w-96 sm:w-[600px] h-96 sm:h-[600px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
          {/* Grand THANK YOU Title in the Dead Center Middle */}
          <h1
            ref={textRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-widest text-white leading-none drop-shadow-2xl select-none"
          >
            THANK YOU
          </h1>
        </div>
      </div>
    </AspectWrapper>
  );
};
