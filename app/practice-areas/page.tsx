import Link from "next/link"
import { Section } from "@/components/section"
import { siteConfig } from "@/lib/site"

export const metadata = {
  title: "Practice Areas",
  description: `${siteConfig.name} provides experienced legal representation in criminal defense, civil rights, employment law, and complex civil litigation.`,
}

export default function PracticeAreasPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">Practice Areas</h1>
        <p className="text-white/70 text-lg mb-12 max-w-3xl">
          Comprehensive legal representation in state and federal courts across New York and New Jersey.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-gold transition-colors">
                {area.title}
              </h2>
              <p className="text-white/70 leading-relaxed">{area.description}</p>
              <div className="mt-4 inline-flex items-center text-gold text-sm font-medium">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
}
