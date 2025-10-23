# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a law firm website for the Law Office of Thomas S. Mirigliano, built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. The site includes a contact form API route that currently logs to console (ready to integrate Resend for email).

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

### Data Configuration

- **Site Content**: `/lib/site.ts` - Centralized configuration (see above)
- **Case Results**: `/lib/results.ts` - Array of `Result` objects with id, title, description, and outcome fields
- **SEO Metadata**: `/lib/seo.ts` - SEO utilities and JSON-LD schema generators
  - Contains `TEMP_BASE` constant for base URL (update to final domain after DNS)
  - Functions: `generateMetadata()`, `generateLawFirmSchema()`, `generateAttorneySchema()`, `generateBreadcrumbSchema()`, `generateServiceSchema()`

### Routing Structure

```
/                              # Home page with hero and practice area cards
/about                         # Attorney bio and credentials
/practice-areas                # Practice areas overview
/practice-areas/criminal-defense      # Static practice area pages
/practice-areas/civil-rights          # (not dynamic routes - each is a
/practice-areas/employment-law        # separate file in app/practice-areas/)
/practice-areas/complex-civil-litigation
/results                       # Case results showcase
/on-video                      # Video content
/contact                       # Contact form and office info
```

Note: Practice area pages are static files, not dynamic `[slug]` routes. Each practice area has its own directory with a `page.tsx` file.

### Layout

- Root layout (`app/layout.tsx`) wraps all pages with `<Header>` and `<Footer>`
- Dark theme with black background (#0A0A0A) and light text (#F4F4F5)
- Gold accent color (#C2A676) defined in `tailwind.config.ts`

### Styling Approach

- Tailwind CSS v4 with `@import "tailwindcss"` in `globals.css`
- Dark-first design with minimal custom CSS
- All component styling uses Tailwind utility classes
- Custom gold color (#C2A676) defined in both:
  - `globals.css` using Tailwind v4's `@theme` directive (`--color-gold`)
  - `tailwind.config.ts` for compatibility (extended colors)
  - Available as `text-gold` or `bg-gold` utility classes

### Components

Located in `/components/`:
- `header.tsx` - Site navigation with mobile menu
- `footer.tsx` - Contact info and site links
- `hero.tsx` - Homepage hero section
- `contact-form.tsx` - Contact form with client-side validation, submits to `/api/contact`
- `video-rail.tsx` - Video content rail component
- `section.tsx` - Reusable section wrapper
- `theme-provider.tsx` - Dark theme provider

## Build Configuration

### Next.js Config (`next.config.mjs`)

- `reactStrictMode: true`
- TypeScript and ESLint errors ignored during builds
- Images set to `unoptimized: true` for static export compatibility

### API Routes

- **Contact Form**: `app/api/contact/route.ts`
  - POST endpoint that validates and processes contact form submissions
  - Currently logs submissions to console for demo purposes
  - Ready to integrate with Resend for email (commented code included)
  - Validates required fields (name, email, subject, message) and email format
  - Returns JSON responses with success/error messages

### Deployment Notes

- **Base URL**: Update `TEMP_BASE` in `/lib/seo.ts` when final domain is configured
- **Email Integration**: To enable email via Resend:
  1. Install: `pnpm add resend`
  2. Add `RESEND_API_KEY` to environment variables
  3. Uncomment Resend code in `app/api/contact/route.ts`
- **Images**: Set to `unoptimized: true` for static export compatibility
- **Build Errors**: TypeScript and ESLint errors are ignored during builds (see `next.config.mjs`)
