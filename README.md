# Nesil Noble — Next.js Portfolio

Converted to **Next.js (App Router)** while preserving 100% of the original visual design, animations, typography, and interactive case study system.

## Getting Started

### 1. Run Development Server
```bash
npm run dev
```
or double-click `start-local.bat`. Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm start
```

## Architecture

- **`app/layout.jsx`**: Root layout with SEO metadata, OpenGraph cards, viewport settings, and script injectors for GSAP, ScrollTrigger, and Lenis.
- **`app/globals.css`**: Complete design system, resets, layout, and embedded typography fonts (Big Shoulders).
- **`app/page.jsx` & `app/Portfolio.jsx`**: Client-side interactive portfolio component running the GSAP ScrollTrigger timeline, custom particle dust canvas, eye-tracking SVG, and Lenis smooth scroll.
- **`app/lucid-dreams.js`**: Core animation engine, timeline sequencing, and case study modal controller.
- **`public/`**: Static assets including:
  - `public/work/`: Standalone case study pages and image covers.
  - `public/resume/`: PDF resume.
  - `public/vendor/`: GSAP, ScrollTrigger, Lenis, and Three.js libraries.
  - `public/favicon.svg` & `apple-touch-icon.png`.
- **`next.config.mjs`**: Next.js configuration with path rewrites for clean case study routing (`/work/:slug`).
