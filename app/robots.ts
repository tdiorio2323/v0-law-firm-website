import type { MetadataRoute } from "next"

// TODO: Update TEMP_BASE to final domain (e.g., https://mirigliano-law.com) after DNS configuration
const TEMP_BASE = "https://v0-law-firm-website-f16qm1d87-td-studioss-projects.vercel.app"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${TEMP_BASE}/sitemap.xml`,
  }
}
