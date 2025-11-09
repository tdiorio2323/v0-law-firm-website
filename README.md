# TD STUDIOS

A sleek, conversion-focused frontend website for a NYC/NJ litigation firm built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 14+ App Router, TypeScript, Tailwind CSS v4
- **Frontend Only**: No backend, no API routes, no databases
- **Responsive Design**: Mobile-first approach with accessible UI
- **SEO Optimized**: Metadata, sitemap, and robots.txt included
- **Performance Focused**: Fast loading, minimal dependencies
- **Professional Design**: Black/white with muted gold accents

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

\`\`\`bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

### Site Information

Edit `lib/site.ts` to update:
- Firm name, phone, address, hours
- Practice areas
- Navigation items
- Hero headline and tagline

### Results Data

Edit `lib/results.ts` to update case results with your own examples.

### Styling

- Brand colors and design tokens: `app/globals.css`
- Tailwind utilities: Already configured in globals.css
- Component styles: Inline Tailwind classes

## Project Structure

\`\`\`
├── app/
│   ├── (site)/          # Main site pages
│   ├── layout.tsx       # Root layout
│   ├── robots.ts        # SEO robots file
│   └── sitemap.ts       # SEO sitemap
├── components/          # Reusable components
├── lib/                 # Site constants and data
└── public/              # Static assets
\`\`\`

## Pages

- `/` - Home with hero and practice area cards
- `/about` - Attorney biography and credentials
- `/practice-areas` - Overview of all practice areas
- `/practice-areas/[slug]` - Individual practice area pages
- `/results` - Case results
- `/on-video` - Video content
- `/contact` - Contact form and office information

## Accessibility

- WCAG AA+ color contrast
- Semantic HTML with proper landmarks
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus styles on all interactive elements

## Performance

- Optimized images with Next.js Image component
- Minimal JavaScript bundle
- Static generation where possible
- Fast page loads and smooth interactions

## License

Proprietary - All rights reserved

## Support

For questions or support, contact the development team.
