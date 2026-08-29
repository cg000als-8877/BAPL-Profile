---
name: uiux-design
description: >-
  Expert UI/UX design system and front-end craftsmanship guidelines for high-impact
  enterprise web applications, responsive presentation decks, and executive digital experiences.
  Use when designing or refining layouts, color palettes, typography hierarchy, fluid responsive
  spacing, micro-interactions, accessibility (WCAG), and modern glassmorphic or luxury dark visual systems.
---

# UI/UX Design System & Front-End Craftsmanship Guide

This skill guides the design, layout architecture, and aesthetic refinement of web applications, presentation decks, and interactive experiences.

---

## 1. Core Visual Design Principles

### 1.1 Visual Hierarchy & Contrast
* **Establish Clear Optical Order**: Every screen must have one primary focal point (e.g. Hero title or Primary KPI metric), followed by secondary badges, and tertiary supporting metadata.
* **Contrast Ratios**: Maintain a minimum 4.5:1 contrast ratio for regular body text and 3:1 for large headings (WCAG AA/AAA compliance).
* **Negative Space (Breathing Room)**: Avoid visual clutter. Use deliberate whitespace or subtle glass surfaces to separate functional sections.

### 1.2 Unified Aesthetic & Theme Consistency
* **Luxury Dark Palette**:
  - Background Base: `#050811` (Deep Obsidian) to `#080D1A` (Midnight Slate)
  - Card Surfaces: `rgba(13, 20, 36, 0.75)` with `backdrop-filter: blur(16px)`
  - Border Accents: `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.15)`
  - Primary Neon Accent: `#55C538` / `#72E055` (Vibrant Emerald / Tech Green)
  - Text Primary: `#FFFFFF` / `#F8FAFC`
  - Text Muted: `#94A3B8` / `#64748B`

---

## 2. Responsive Layout & Spatial Architecture

### 2.1 Fluid Viewport Filling (Zero Dead Zones)
* **Never use fixed heights on content blocks**: Instead, use flex containers with `flex-1 min-h-0` so cards expand and stretch naturally across the available screen height.
* **Safe-Area Insets**: Ensure `padding` accounts for mobile browser address bars and bottom navigation pills (`p-4 sm:p-8 md:p-12 lg:p-16`).
* **Desktop vs. Mobile Paradigm**:
  - **Desktop (>= 768px)**: Horizontal slide-snapping with magnetic wheel transitions, 16:9 widescreen canvas, multi-column bento grids (3 or 4 columns).
  - **Mobile (< 768px)**: Vertical portrait slide-snapping with 100dvh full-bleed containment, single or 2-column compressed grids, and thumb-friendly touch targets (min 44px).

---

## 3. Typography Rules

### 3.1 Typeface Selection
* **Primary Headings & Body**: Geometric sans-serif typefaces (e.g. *Plus Jakarta Sans*, *Inter*, *Outfit*, or *SF Pro*).
* **Numbers & Financial Figures**: Use sans-serif with `tabular-nums` or solid geometric figures to guarantee clean, un-slashed zeros (`0`) and eliminate jitter during counter animations.

### 3.2 Type Scale
* **Hero Display Titles**: `text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black`
* **Section Headlines**: `text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black`
* **Card Titles**: `text-sm sm:text-base md:text-lg lg:text-xl font-bold`
* **Body / Descriptions**: `text-xs sm:text-sm md:text-base text-slate-300 font-normal`
* **Metadata & Badges**: `text-[10px] sm:text-xs font-extrabold uppercase tracking-widest`

---

## 4. Motion & Micro-Interactions (GSAP)

### 4.1 Transition Curves
* Use high-performance easing for natural physics:
  - Entrance: `ease: "expo.out"` or `ease: "power3.out"` (duration: `0.45s` - `0.6s`)
  - Stagger: `0.04s` - `0.06s` per grid item to create a cascading wave entrance.
* **Side-Slide Motion**: When slides become active, elements enter smoothly from the side (`x: -60` to `x: 0`) rather than vertical pulls.

### 4.2 Tactile Feedback
* Interactive cards should have subtle hover states (`hover:border-[#55c538]/50 hover:scale-[1.01] transition-all duration-300`).
* Click-to-copy or call-to-action buttons should display confirmation feedback (`Copied!` checkmarks for 2 seconds).

---

## 5. Review Checklist for Any UI/UX Changes

- [ ] Does the page fill 100% of the screen without overflowing or requiring unnecessary scrolling?
- [ ] Are all zeros (`0`) rendered cleanly without technical diagonal slashes?
- [ ] Is there sufficient contrast between text and the background?
- [ ] Do cards and grids adapt fluidly to both narrow phones and wide monitors?
- [ ] Are all touch targets and copy buttons accessible and responsive?
