"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"night" | "day">("day");
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const isDraggingRef = useRef(false);
  const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const startTouchRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const startTimeRef = useRef<number>(0);
  const hasDraggedRef = useRef(false);
  const lastToggleTimeRef = useRef<number>(0);

  const applyTheme = useCallback((mode: "night" | "day") => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const body = document.body;

    root.setAttribute("data-theme", mode);
    if (body) body.setAttribute("data-theme", mode);

    root.classList.remove("light", "dark", "day-mode", "night-mode");
    if (mode === "day") {
      root.classList.add("light", "day-mode");
      if (body) {
        body.classList.remove("dark", "night-mode");
        body.classList.add("light", "day-mode");
      }
    } else {
      root.classList.add("dark", "night-mode");
      if (body) {
        body.classList.remove("light", "day-mode");
        body.classList.add("dark", "night-mode");
      }
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const now = Date.now();
    // Debounce to prevent ghost click / double-firing on mobile touch devices
    if (now - lastToggleTimeRef.current < 400) {
      return;
    }
    lastToggleTimeRef.current = now;

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "night" ? "day" : "night";
      try {
        localStorage.setItem("bapl-theme", nextTheme);
      } catch {
        // ignore
      }
      applyTheme(nextTheme);
      return nextTheme;
    });
  }, [applyTheme]);

  useEffect(() => {
    setMounted(true);
    let initialTheme: "night" | "day" = "day";
    try {
      const saved = localStorage.getItem("bapl-theme") as "night" | "day" | null;
      if (saved === "day" || saved === "night") {
        initialTheme = saved;
      }
    } catch {
      // ignore
    }
    setTheme(initialTheme);
    applyTheme(initialTheme);

    // Initial position: Bottom-right corner (16-20px from screen edges)
    const initX = Math.max(16, window.innerWidth - 64);
    const initY = Math.max(16, window.innerHeight - 76);
    setPosition({ x: initX, y: initY });

    const handleResize = () => {
      setPosition((prev) => {
        if (!prev) return { x: window.innerWidth - 64, y: window.innerHeight - 76 };
        return {
          x: Math.min(Math.max(12, prev.x), window.innerWidth - 60),
          y: Math.min(Math.max(12, prev.y), window.innerHeight - 72),
        };
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [applyTheme]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startTimeRef.current = Date.now();
    startTouchRef.current = { x: touch.clientX, y: touch.clientY };
    startPosRef.current = position || { x: window.innerWidth - 60, y: window.innerHeight - 90 };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startTouchRef.current.x;
    const dy = touch.clientY - startTouchRef.current.y;

    // Generous threshold to distinguish between a tap vs intentional drag
    if (Math.hypot(dx, dy) > 12) {
      hasDraggedRef.current = true;
    }

    const newX = Math.min(Math.max(8, startPosRef.current.x + dx), window.innerWidth - 56);
    const newY = Math.min(Math.max(8, startPosRef.current.y + dy), window.innerHeight - 56);

    setPosition({ x: newX, y: newY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const duration = Date.now() - startTimeRef.current;
    if (!hasDraggedRef.current || duration < 250) {
      e.preventDefault();
      toggleTheme();
    }
  };

  // Mouse handlers (for desktop testing / dragging)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startTimeRef.current = Date.now();
    startTouchRef.current = { x: e.clientX, y: e.clientY };
    startPosRef.current = position || { x: window.innerWidth - 60, y: window.innerHeight - 90 };

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = moveEvent.clientX - startTouchRef.current.x;
      const dy = moveEvent.clientY - startTouchRef.current.y;

      if (Math.hypot(dx, dy) > 8) {
        hasDraggedRef.current = true;
      }

      const newX = Math.min(Math.max(8, startPosRef.current.x + dx), window.innerWidth - 56);
      const newY = Math.min(Math.max(8, startPosRef.current.y + dy), window.innerHeight - 56);

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        const duration = Date.now() - startTimeRef.current;
        if (!hasDraggedRef.current || duration < 250) {
          toggleTheme();
        }
      }
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
      className="select-none cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      title={`Tap or drag to switch to ${theme === "night" ? "Day" : "Night"} Mode`}
    >
      <button
        type="button"
        aria-label={`Switch to ${theme === "night" ? "Day" : "Night"} Mode`}
        onClick={(e) => {
          // If click was triggered without drag, ensure toggle
          if (!hasDraggedRef.current) {
            e.stopPropagation();
            toggleTheme();
          }
        }}
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-transform active:scale-95 pointer-events-auto shadow-2xl ${
          theme === "day"
            ? "bg-gradient-to-b from-white via-slate-100 to-slate-200 border-slate-300 shadow-[inset_0_1.5px_1px_rgba(255,255,255,1),_0_8px_18px_-2px_rgba(15,23,42,0.3)] hover:shadow-amber-500/25"
            : "bg-gradient-to-b from-[#202631] via-[#181c23] to-[#111419] border-slate-600/80 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.15),_0_8px_20px_-2px_rgba(0,0,0,0.8)] hover:shadow-slate-500/20"
        }`}
      >
        {theme === "day" ? (
          <Sun className="w-5 h-5 text-amber-500 drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] pointer-events-none" />
        ) : (
          <Moon className="w-5 h-5 text-[#dbe2ea] drop-shadow-[0_0_6px_rgba(219,226,234,0.4)] pointer-events-none" />
        )}
      </button>
    </div>
  );
};
