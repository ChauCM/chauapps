# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ChauApps marketing site — a React 19 + TypeScript + Vite static frontend. No backend; all data is static or hard-coded in components.

## Commands

```bash
npm run dev        # Vite dev server with HMR
npm run build      # tsc -b && vite build (TypeScript project-references check runs before bundling — type errors fail the build)
npm run preview    # serve dist/ locally
npm run lint       # ESLint (flat config in eslint.config.js)

./run_local.sh     # `npm run dev` — Vite dev server with HMR
./deploy.sh        # build + `firebase deploy --only hosting` (requires firebase CLI auth)
```

There are no tests in this repo.

## Architecture

- **Routing**: `src/main.tsx` mounts a `BrowserRouter` with two routes — `/` → `src/App.tsx` (landing), `/portfolio` → `src/Portfolio.tsx`. SPA fallback is configured in `firebase.json` (`rewrites` send all paths to `/index.html`).
- **App.tsx** is a comic-themed landing page: hero, scroll-snapping comic panel storyboard (images from `public/images/comic/comic N.jpg`), benefits grid, and footer. Inline-defined `ComicPanel` component handles the alternating left/right zig-zag layout with overlapping negative margins.
- **Portfolio.tsx** is a self-contained resume/portfolio page; profile image lives at `public/images/profile.jpg`.
- **Styling** uses Tailwind with a custom `comic-*` color palette (beige/cream/tan/brown/dark/orange) and `brand-*` blues defined in `tailwind.config.js`. Custom keyframe animations (`fade-in-*`, `float`, `glow`, `gradient`, `shimmer`) are also declared there — prefer these tokens over arbitrary hex/keyframes when adding UI.
- **Animations**: Framer Motion `motion.*` components with `whileInView` + `viewport={{ once: true }}` is the established pattern for scroll-triggered reveals.

## Deployment

Hosting is Firebase (`firebase.json` → `public: "dist"`). Use `./deploy.sh` rather than running `firebase deploy` directly so the build runs first. The `.firebase/hosting.*.cache` file is checked in and updated by deploys.

## SEO / social previews

`vite.config.ts` contains a `postStaticMetaPlugin` that, after each build, emits `dist/blog/<slug>/index.html` per post with per-page `<title>`, `description`, OpenGraph and Twitter Card meta. The default site meta lives in `index.html` between `<!--meta:start-->` and `<!--meta:end-->` markers — the plugin swaps that block surgically so the hashed JS/CSS refs are preserved. Firebase Hosting serves the matching static file before the SPA-fallback rewrite, so social scrapers (which do not run JS) see real per-route meta.

When adding a post, update **both**:
1. `src/posts.ts` (drives the in-app reader)
2. The `posts` array inside `vite.config.ts` (drives the static meta files)

`SITE_URL` in `vite.config.ts` is the canonical absolute origin used in OG/canonical URLs.

## Notes for changes

- New routes must be registered in `src/main.tsx`; Firebase rewrites already handle deep links.
- The `contents/` directory holds blog markdown and images; the markdown is imported into `src/posts.ts` via Vite's `?raw` suffix.
