import Link from "next/link"
import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { siteConfig } from "@/lib/site"

export const metadata = {
  title: `${siteConfig.name} - ${siteConfig.hero.headline}`,
  description: siteConfig.hero.tagline,
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Practice Areas Section */}
      <div className="mx-auto max-w-6xl px-4">
        <div id="practice" className="scroll-mt-20 py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-center mb-4">Practice Areas</h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive legal representation across multiple practice areas
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="group rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 shadow-card hover:shadow-card-hover hover:ring-white/20 transition-all duration-200"
              >
                <h3 className="text-xl font-semibold group-hover:text-gold transition-colors duration-200">
                  {area.title}
                </h3>
                <p className="mt-3 text-neutral-300 text-sm leading-relaxed">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-px bg-white/10" />

        {/* Why Choose Us Section */}
        <div className="py-20">
          <WhyChooseUs />
        </div>

        {/* Section Divider */}
        <div className="h-px bg-white/10" />

        {/* Testimonials Section */}
        <div className="py-20">
          <Testimonials />
        </div>

        {/* Section Divider */}
        <div className="h-px bg-white/10" />
      </div>

      {/* CTA Section with brighter background */}
      <div className="relative mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div id="contact" className="scroll-mt-20 py-20 text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Ready to Discuss Your Case?</h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              Available 24/7 for urgent matters. Schedule a free consultation to discuss your legal needs.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-gold px-6 py-3 text-black text-sm font-semibold hover:opacity-90 transition-opacity duration-200 shadow-card"
              >
                Free Consultation
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center rounded-lg ring-1 ring-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/8 transition-colors duration-200"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
