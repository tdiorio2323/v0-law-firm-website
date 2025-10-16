import { Section } from "@/components/section"
import { siteConfig } from "@/lib/site"

export const metadata = {
  title: "About Thomas S. Mirigliano",
  description: "Experienced trial lawyer focused on criminal defense, civil rights, and complex civil litigation in New York and New Jersey state and federal courts.",
}

export default function AboutPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">About Thomas S. Mirigliano</h1>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-white/90 leading-relaxed">
            Trial lawyer focused on criminal defense, civil rights, and complex civil litigation in New York and New Jersey.
          </p>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gold">Approach</h2>
            <ul className="space-y-4 text-white/80">
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Early investigation and motion practice to identify weaknesses in the opposing case</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Trial-ready strategy that pressures the other side to achieve favorable settlements or verdicts</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Clear communication and decisive advocacy focused on protecting your rights and interests</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gold">Admissions</h2>
            <div className="grid md:grid-cols-2 gap-6 text-white/80">
              <div>
                <h3 className="font-semibold text-white mb-2">State Courts</h3>
                <ul className="space-y-2">
                  <li>• New York</li>
                  <li>• New Jersey</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Federal Courts</h3>
                <ul className="space-y-2">
                  <li>• Southern District of New York</li>
                  <li>• Eastern District of New York</li>
                  <li>• District of New Jersey</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <p className="text-lg font-medium text-gold mb-2">Ready to Discuss Your Case?</p>
            <p className="text-white/70 mb-4">Available 24/7 for urgent matters</p>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center rounded-lg bg-gold px-6 py-3 text-black text-sm font-semibold hover:opacity-90 transition"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
