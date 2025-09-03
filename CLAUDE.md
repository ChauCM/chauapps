# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application for ChauApps, a company landing page that showcases app development services. It's a pure frontend application with no backend dependencies.

## Core Technologies

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **UI Components**: Lucide React icons, React Hot Toast for notifications

## Essential Commands

```bash
# Development
npm run dev          # Start development server with hot reload

# Build & Production
npm run build        # TypeScript check + Vite production build
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint checks
```

## Architecture & Structure

### Main Application Flow
1. **Landing Page** (`src/App.tsx`): Single-page application with multiple sections
   - Hero section with animated gradients
   - Services showcase
   - Project portfolio
   - Contact form (client-side only, logs to console)
   
2. **Key Features**:
   - Responsive design with mobile menu
   - Smooth scroll navigation
   - Form submission simulation with toast notifications
   - Animation effects using Framer Motion
   - Progress bar showing scroll position

### Development Guidelines

#### Component Patterns
- Uses functional components with hooks
- State management via useState for local state
- Animations implemented with Framer Motion's motion components
- Form handling includes validation and loading states

#### Styling Approach
- Tailwind CSS for utility-first styling
- Custom gradient animations defined inline
- Responsive design using Tailwind's breakpoint system
- Hover and interaction states using Tailwind modifiers

## Deployment

The application can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.). Simply run `npm run build` and deploy the `dist` directory.