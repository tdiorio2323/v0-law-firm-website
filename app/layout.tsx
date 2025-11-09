import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/site"
import { generateLawFirmSchema, generateAttorneySchema, renderJsonLd } from "@/lib/seo"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
}

// TODO: Update TEMP_BASE to final domain (e.g., https://mirigliano-law.com) after DNS configuration
const TEMP_BASE = "https://v0-law-firm-website-f16qm1d87-td-studioss-projects.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(TEMP_BASE),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.hero.tagline,
  keywords: [
    "criminal defense lawyer",
    "NYC criminal attorney",
    "New Jersey criminal defense",
    "civil rights lawyer",
    "employment law attorney",
    "federal criminal defense",
    "complex litigation",
    "police misconduct lawyer",
    "wrongful termination attorney",
    "TD STUDIOS",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: TEMP_BASE,
    title: siteConfig.name,
    description: siteConfig.hero.tagline,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.hero.tagline,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lawFirmSchema = generateLawFirmSchema()
  const attorneySchema = generateAttorneySchema()

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={renderJsonLd(lawFirmSchema)}
          key="law-firm-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={renderJsonLd(attorneySchema)}
          key="attorney-jsonld"
        />
      </head>
      <body className="min-h-screen bg-[#0A0A0A] text-[#F4F4F5] antialiased">
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
