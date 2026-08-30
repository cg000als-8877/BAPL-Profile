"use client";

import React, { useEffect, useRef } from "react";
import { AspectWrapper } from "../AspectWrapper";
import gsap from "gsap";
import { PhoneCall, Sparkles } from "lucide-react";

interface SlideProps {
  isActive: boolean;
  onNavigateToContact?: () => void;
}

export const ThankYouSlide: React.FC<SlideProps> = ({
  isActive,
  onNavigateToContact,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { scale: 0.9, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }
      );

      gsap.fromTo(
        btnRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.2, ease: "expo.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  const handleContactClick = () => {
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      const contactSlide = document.getElementById("slide-9");
      if (contactSlide) {
        contactSlide.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AspectWrapper className="bg-[#050811] text-white">
      <div
        ref={containerRef}
        className="relative w-full h-full min-h-[100dvh] flex flex-col items-center justify-center text-center p-6 sm:p-12 overflow-hidden bg-gradient-to-br from-[#080d1a] via-[#050811] to-[#04060d]"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute w-96 sm:w-[600px] h-96 sm:h-[600px] bg-[#55c538]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 my-auto">
          {/* Grand THANK YOU Title in the Dead Center Middle */}
          <h1
            ref={textRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-widest text-white leading-none drop-shadow-2xl"
          >
            THANK YOU
          </h1>

          {/* Shortcut Contact Us Button Under It */}
          <div ref={btnRef} className="mt-2 sm:mt-4">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-[#55c538] text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-[#55c538]/30 hover:bg-[#72e055] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </AspectWrapper>
  );
};
