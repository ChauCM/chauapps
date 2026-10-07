# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Chau Apps company site: a React 19 + TypeScript + Vite static frontend. The home page showcases the company's apps (Stepo, MaiSay) and the founder's writing; `/portfolio` is the founder profile. All content is hard-coded in components.

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

- **Routing**: `src/main.tsx` mounts a `BrowserRouter` with three routes: `/` → `src/App.tsx` (company home), `/portfolio` → `src/Portfolio.tsx` (founder profile), `/blog/:slug` → `src/BlogPost.tsx`. SPA fallback is configured in `firebase.json` (`rewrites` send all paths to `/index.html`).
- **Shared chrome**: `src/site.tsx` exports `SiteNav`, `SiteFooter` and `ScrollManager` (hash and scroll-to-top handling). Every page uses them; pass `width="wide"` on the home page, default is the 680px reading column. External URLs and the company email live in `src/links.ts`.
- **App.tsx** is the company home: hero, one panel per app on that app's own brand ground (`stepo` and `maisay` colors in `tailwind.config.js`), the post list from `src/posts.ts`, and a founder section linking to `/portfolio`. Product images are in `public/images/apps/` and come from each app's own store kit or landing page; refresh them from there, do not redraw them.
- **App status is copy**: "Live on iOS and Android" and "Coming soon" are written in `App.tsx`. Update the MaiSay panel (status, button, store links in `src/links.ts`) when it launches.
- **Portfolio.tsx** is a self-contained resume/portfolio page; profile image lives at `public/images/profile.jpg`.
- **Styling** uses Tailwind with `paper`/`ink`/`rule` neutrals and `brand-*` blues. Headings use `font-display` (Bricolage Grotesque), body is Inter.
- **Animations**: the home page has one page-load fade on the hero and nothing else. Portfolio uses Framer Motion `whileInView` reveals.

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
