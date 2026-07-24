# Shivam Lalakiya — Portfolio

Source code for my personal portfolio: a single-page site built with React, TypeScript, Vite, and GSAP, with a lightweight Three.js physics visualization for the tech-stack section.

Live site: [https://shivamlalakiya.github.io/](https://shivamlalakiya.github.io/)

![Portfolio Preview](public/og-image.png)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [License](#license)

## Features

- Apple-inspired dark UI driven by a single design-token system in `src/index.css`.
- Photo-cutout hero with a background-removed portrait, ambient glow, and animated intro.
- GSAP ScrollSmoother + scroll-triggered reveals across sections.
- Sections: Landing, About, Career timeline, Work (project carousel), Tech Stack (3D physics playground), Contact.
- Custom cursor, hover interactions, responsive layout, and reduced-motion / keyboard-focus support.

## Tech Stack

### Core

- React 18
- TypeScript
- Vite

### Animation & 3D

- GSAP (ScrollSmoother, ScrollTrigger, SplitText)
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `@react-three/rapier`

### Supporting

- `react-icons`

## Project Structure

```text
.
├── public/                    # Static assets (photo, tech tiles, resume, og-image, favicon)
├── src/
│   ├── components/
│   │   ├── styles/            # Section/component CSS
│   │   ├── utils/             # GSAP scroll + intro-FX helpers
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx  # Page composition
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx
│   │   └── Work.tsx
│   ├── context/               # LoadingProvider wrapper
│   ├── data/                  # Content: profile, experience, projects, social
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/shivamlalakiya/shivamlalakiya.github.io
cd shivamlalakiya.github.io
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` — start the Vite dev server (host exposed for LAN testing).
- `npm run build` — type-check (`tsc -b`) and build the production bundle.
- `npm run preview` — serve the production build locally.
- `npm run lint` — run ESLint.

## Customization Guide

- **Content**: edit `src/data/` (`profile.ts`, `experience.ts`, `projects.ts`, `social.ts`).
- **Copy in sections**: `src/components/` (`About.tsx`, `Career.tsx`, `Work.tsx`, `Contact.tsx`).
- **Styling / design tokens**: `src/index.css` (`:root`) and `src/components/styles/`.
- **Scroll & intro animations**: `src/components/utils/` (`GsapScroll.ts`, `initialFX.ts`).
- **Tech-stack visualization**: `src/components/TechStack.tsx` (`imageUrls` array + physics settings).

## Deployment

Deployed to GitHub Pages from the `dist/` build. To build and validate locally:

```bash
npm run build
npm run preview
```

## License

Open source under the [MIT License](LICENSE).
