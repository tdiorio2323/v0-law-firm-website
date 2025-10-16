import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mirigliano-law.vercel.app/sitemap.xml", // TODO: Update to final domain after DNS
  }
}
