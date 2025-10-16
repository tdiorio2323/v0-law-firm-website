import Link from "next/link"
import { Hero } from "@/components/hero"
import { Section } from "@/components/section"
import { siteConfig } from "@/lib/site"

export const metadata = {
  title: `${siteConfig.name} - ${siteConfig.hero.headline}`,
  description: siteConfig.hero.tagline,
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <div id="practice" className="scroll-mt-20 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Practice Areas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold group-hover:text-gold transition-colors">
                  {area.title}
                </h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div id="contact" className="scroll-mt-20 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Discuss Your Case?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Available 24/7 for urgent matters. Schedule a free consultation to discuss your legal needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-gold px-6 py-3 text-black text-sm font-semibold hover:opacity-90 transition"
            >
              Free Consultation
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
