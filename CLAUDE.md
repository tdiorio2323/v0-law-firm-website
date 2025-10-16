# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a frontend-only law firm website for the Law Office of Thomas S. Mirigliano, built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. The site is focused on conversions with no backend, no API routes, and no databases.

## Tech Stack

- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **UI**: Lucide React icons, next-themes for theme support
- **Package Manager**: pnpm 10.18.0 (required)

## Common Commands

```bash
# Development
pnpm dev           # Start dev server at http://localhost:3000

# Build & Production
pnpm build         # Build for production
pnpm start         # Start production server
pnpm lint          # Run Next.js linter
```

## Architecture

### Site Configuration

All site-wide configuration is centralized in `/lib/site.ts`:
- Firm name, contact info (phone, address, hours, email)
- Hero headline and tagline
- Practice areas with titles, slugs, and descriptions
- Navigation structure

Edit this file to update site-wide content without touching components.

### Case Results

Case results data is stored in `/lib/results.ts` as an array of `Result` objects with id, title, description, and outcome fields.

### Routing Structure

```
/                              # Home page with hero and practice area cards
/about                         # Attorney bio and credentials
/practice-areas                # Practice areas overview
/practice-areas/[slug]         # Dynamic practice area detail pages
/results                       # Case results showcase
/on-video                      # Video content
/contact                       # Contact form and office info
```

### Layout

- Root layout (`app/layout.tsx`) wraps all pages with `<Header>` and `<Footer>`
- Dark theme with black background (#0A0A0A) and light text (#F4F4F5)
- Gold accent color (#C2A676) defined in `tailwind.config.ts`

### Styling Approach

- Tailwind CSS v4 with `@import "tailwindcss"` in `globals.css`
- Dark-first design with minimal custom CSS
- All component styling uses Tailwind utility classes
- Custom gold color available as `text-gold` or `bg-gold`

### Components

Located in `/components/`:
- `header.tsx` - Site navigation with mobile menu
- `footer.tsx` - Contact info and site links
- `hero.tsx` - Homepage hero section
- `contact-form.tsx` - Contact form (frontend only, no submission)
- `section.tsx` - Reusable section wrapper
- `theme-provider.tsx` - Dark theme provider

## Build Configuration

### Next.js Config (`next.config.mjs`)

- `reactStrictMode: true`
- TypeScript and ESLint errors ignored during builds
- Images set to `unoptimized: true` for static export compatibility

### Important Notes

- No backend/API routes - this is a static frontend site
- No environment variables required
- No database or external services
- Images are unoptimized for flexibility in deployment
