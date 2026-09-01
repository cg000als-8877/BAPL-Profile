"use client";

import React, { useEffect, useState, useRef } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"night" | "day">("night");
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const isDraggingRef = useRef(false);
  const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const startTouchRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("bapl-theme") as "night" | "day" | null;
    const initialTheme = savedTheme || "night";
    setTheme(initialTheme);
    applyTheme(initialTheme);

    // Initial position on side: bottom-right
    const initX = Math.max(16, window.innerWidth - 68);
    const initY = Math.max(16, window.innerHeight - 110);
    setPosition({ x: initX, y: initY });

    const handleResize = () => {
      setPosition((prev) => {
        if (!prev) return { x: window.innerWidth - 68, y: window.innerHeight - 110 };
        return {
          x: Math.min(Math.max(12, prev.x), window.innerWidth - 64),
          y: Math.min(Math.max(12, prev.y), window.innerHeight - 64),
        };
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const applyTheme = (mode: "night" | "day") => {
    document.documentElement.setAttribute("data-theme", mode);
    if (mode === "day") {
      document.documentElement.classList.add("light", "day-mode");
      document.documentElement.classList.remove("dark", "night-mode");
    } else {
      document.documentElement.classList.add("dark", "night-mode");
      document.documentElement.classList.remove("light", "day-mode");
    }
  };

  const toggleTheme = () => {
    const next = theme === "night" ? "day" : "night";
    setTheme(next);
    localStorage.setItem("bapl-theme", next);
    applyTheme(next);
  };

  // Drag handlers
  const onPointerDown = (clientX: number, clientY: number) => {
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startTouchRef.current = { x: clientX, y: clientY };
    startPosRef.current = position || { x: window.innerWidth - 68, y: window.innerHeight - 110 };
  };

  const onPointerMove = (clientX: number, clientY: number) => {
    if (!isDraggingRef.current) return;
    const dx = clientX - startTouchRef.current.x;
    const dy = clientY - startTouchRef.current.y;

    if (Math.hypot(dx, dy) > 5) {
      hasMovedRef.current = true;
    }

    const newX = Math.min(Math.max(12, startPosRef.current.x + dx), window.innerWidth - 64);
    const newY = Math.min(Math.max(12, startPosRef.current.y + dy), window.innerHeight - 64);

    setPosition({ x: newX, y: newY });
  };

  const onPointerUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      if (!hasMovedRef.current) {
        toggleTheme();
      }
    }
  };

  // Touch Event Listeners
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    onPointerDown(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    onPointerMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    onPointerUp();
  };

  // Mouse Event Listeners
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    onPointerDown(e.clientX, e.clientY);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      onPointerMove(moveEvent.clientX, moveEvent.clientY);
    };

    const handleMouseUp = () => {
      onPointerUp();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  if (!mounted || !position) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999,
        touchAction: "none",
      }}
      className="select-none transition-transform active:scale-95 cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      title={`Drag anywhere or tap to switch to ${theme === "night" ? "Day" : "Night"} Mode`}
    >
      <button
        type="button"
        aria-label={`Switch to ${theme === "night" ? "Day" : "Night"} Mode`}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-xl border-2 transition-all duration-300 pointer-events-auto ${
          theme === "day"
            ? "bg-white/95 text-amber-600 border-amber-400/80 shadow-amber-500/25 hover:scale-105 hover:shadow-amber-500/40"
            : "bg-[#091426]/95 text-[#72e055] border-[#55c538]/80 shadow-[#55c538]/30 hover:scale-105 hover:shadow-[#55c538]/50"
        }`}
      >
        {theme === "day" ? (
          <Sun className="w-6 h-6 text-amber-500 animate-spin-slow" />
        ) : (
          <Moon className="w-6 h-6 text-[#72e055] drop-shadow-[0_0_8px_rgba(85,197,56,0.8)]" />
        )}
      </button>
    </div>
  );
};
