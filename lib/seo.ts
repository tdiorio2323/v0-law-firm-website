import { siteConfig } from "./site"

// TODO: Update TEMP_BASE to final domain (e.g., https://mirigliano-law.com) after DNS configuration
const TEMP_BASE = "https://v0-law-firm-website-f16qm1d87-td-studioss-projects.vercel.app"

export interface SEOMetadata {
  title: string
  description: string
  url?: string
  image?: string
  type?: "website" | "article"
}

/**
 * Generate comprehensive metadata for Next.js pages
 */
export function generateMetadata({ title, description, url, image, type = "website" }: SEOMetadata) {
  const siteName = siteConfig.name
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
  const baseUrl = TEMP_BASE
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const ogImage = image || `${baseUrl}/og-image.jpg`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

/**
 * Generate JSON-LD schema for law firm organization
 */
export function generateLawFirmSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.name,
    description: siteConfig.hero.tagline,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "40 Wall St, 32nd Fl",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10005",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7074,
      longitude: -74.0113,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    url: TEMP_BASE,
    areaServed: [
      {
        "@type": "State",
        name: "New York",
      },
      {
        "@type": "State",
        name: "New Jersey",
      },
    ],
    priceRange: "$$",
    serviceType: [
      "Criminal Defense",
      "Civil Rights Law",
      "Employment Law",
      "Complex Civil Litigation",
    ],
  }
}

/**
 * Generate JSON-LD schema for attorney
 */
export function generateAttorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thomas S. Mirigliano",
    jobTitle: "Attorney at Law",
    worksFor: {
      "@type": "LegalService",
      name: siteConfig.name,
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "40 Wall St, 32nd Fl",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10005",
      addressCountry: "US",
    },
    knowsAbout: [
      "Criminal Defense",
      "Civil Rights Law",
      "Employment Law",
      "Federal Criminal Defense",
      "Complex Civil Litigation",
    ],
  }
}

/**
 * Generate JSON-LD schema for breadcrumbs
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${TEMP_BASE}${item.url}`,
    })),
  }
}

/**
 * Generate JSON-LD schema for practice area service
 */
export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    description: service.description,
    provider: {
      "@type": "LegalService",
      name: siteConfig.name,
      telephone: siteConfig.phone,
    },
    areaServed: [
      {
        "@type": "State",
        name: "New York",
      },
      {
        "@type": "State",
        name: "New Jersey",
      },
    ],
    url: `${TEMP_BASE}${service.url}`,
  }
}

/**
 * Render JSON-LD script tag
 */
export function renderJsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  }
}
