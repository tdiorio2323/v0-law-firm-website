import { Section } from "@/components/section"
import { results } from "@/lib/results"
import { siteConfig } from "@/lib/site"

export const metadata = {
  title: "Case Results",
  description: `Review notable case results and outcomes achieved by ${siteConfig.name} in criminal defense, civil rights, and employment law matters.`,
}

export default function ResultsPage() {
  return (
    <Section>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-3">Case Results</h1>
        <p className="text-white/70 text-lg mb-10 max-w-3xl">
          A selection of favorable outcomes we've achieved for our clients in criminal defense, civil rights, employment law, and complex civil litigation matters.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {results.map((result) => (
            <div
              key={result.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:border-gold/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gold mb-3">{result.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">{result.description}</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-medium text-white/60">Outcome</p>
                <p className="text-white mt-1">{result.outcome}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
          <p className="text-sm text-white/70 leading-relaxed">
            Past results do not guarantee future outcomes. Every case is unique and depends on its specific facts and circumstances.
          </p>
        </div>
      </div>
    </Section>
  )
}
