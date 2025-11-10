import Link from "next/link"
import { Section } from "@/components/section"
import { siteConfig } from "@/lib/site"
import { Scale, Shield, Users, FileText, Gavel, AlertCircle } from "lucide-react"

export const metadata = {
  title: "Civil Rights Attorney | Section 1983 | Police Misconduct | NYC & NJ",
  description: "Experienced civil rights attorney fighting police misconduct, false arrest, excessive force, and constitutional violations. Section 1983 litigation in federal and state courts."
}

export default function CivilRights() {
  const services = [
    {
      icon: Shield,
      title: "Police Misconduct",
      description: "Holding law enforcement accountable for excessive force, false arrest, unlawful searches, and violations of constitutional rights under 42 U.S.C. Section 1983."
    },
    {
      icon: Scale,
      title: "Prosecutorial Misconduct",
      description: "Challenging Brady violations, fabricated evidence, witness coercion, and other forms of misconduct that violate due process rights."
    },
    {
      icon: Users,
      title: "Discrimination Claims",
      description: "Fighting discrimination based on race, religion, national origin, gender, or disability in policing, incarceration, and government services."
    },
    {
      icon: Gavel,
      title: "Prison Rights & Conditions",
      description: "Protecting the constitutional rights of incarcerated individuals including medical care, safety, and freedom from cruel and unusual punishment."
    }
  ]

  const caseTypes = [
    "False Arrest and Malicious Prosecution",
    "Excessive Force and Police Brutality",
    "Unlawful Search and Seizure (Fourth Amendment)",
    "Failure to Intervene and Supervisor Liability",
    "Brady Violations and Suppressed Evidence",
    "Wrongful Conviction and Post-Conviction Relief",
    "First Amendment Retaliation",
    "Qualified Immunity Challenges",
    "Monell Claims Against Municipalities",
    "Prison Conditions and Deliberate Indifference",
    "Strip Search and Privacy Violations",
    "Racial Profiling and Discriminatory Policing"
  ]

  return (
    <Section>
      <div className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Civil Rights</h1>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            When government officials violate your constitutional rights, you have the power to fight back. We hold police, prosecutors, and government agencies accountable for misconduct through aggressive civil rights litigation.
          </p>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-white/70 leading-relaxed mb-4">
              Civil rights violations—including police brutality, false arrest, prosecutorial misconduct, and wrongful conviction—demand experienced legal representation. With extensive experience litigating Section 1983 claims in federal and state courts, we pursue justice and compensation for individuals whose rights have been trampled by those in power.
            </p>
            <p className="text-white/70 leading-relaxed">
              Our practice combines thorough investigation, aggressive discovery, expert witness collaboration, and skilled trial advocacy. We take cases from initial consultation through verdict and appeal, fighting to vindicate constitutional rights and secure meaningful accountability.
            </p>
          </div>

          {/* Services Grid */}
          <h2 className="text-3xl font-bold mb-6">Our Civil Rights Practice Areas</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <service.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Case Types */}
          <h2 className="text-3xl font-bold mb-6">Types of Civil Rights Cases We Handle</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 mb-12">
            <ul className="grid md:grid-cols-2 gap-3">
              {caseTypes.map((type) => (
                <li key={type} className="flex items-start gap-2 text-white/80">
                  <span className="text-gold mt-1">•</span>
                  <span>{type}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process Section */}
          <h2 className="text-3xl font-bold mb-6">Our Civil Rights Litigation Process</h2>
          <div className="space-y-6 mb-12">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">1. Comprehensive Case Investigation</h3>
              <p className="text-white/70 leading-relaxed">
                We begin by thoroughly investigating the incident, obtaining police reports, body camera footage, witness statements, and medical records. We identify all responsible parties and legal theories to build the strongest possible case.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">2. Strategic Pleadings and Motion Practice</h3>
              <p className="text-white/70 leading-relaxed">
                We draft detailed complaints that survive qualified immunity defenses and overcome government dismissal motions. Our motion practice establishes liability early and positions cases favorably for settlement or trial.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">3. Aggressive Discovery and Depositions</h3>
              <p className="text-white/70 leading-relaxed">
                We use discovery to expose patterns of misconduct, inadequate training, and policy failures. Through depositions and document requests, we build evidence of individual liability and institutional responsibility under Monell.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">4. Expert Development and Trial Preparation</h3>
              <p className="text-white/70 leading-relaxed">
                We work with leading experts in use of force, police practices, medical causation, and damages to strengthen your case. Our thorough trial preparation ensures we're ready to present compelling evidence to a jury.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">5. Settlement Negotiation and Trial</h3>
              <p className="text-white/70 leading-relaxed">
                We negotiate aggressively to secure substantial settlements that reflect the full value of your claim. When settlement isn't adequate, we're prepared to take your case to trial and pursue maximum accountability through a verdict.
              </p>
            </div>
          </div>

          {/* Why Choose Section */}
          <h2 className="text-3xl font-bold mb-6">Why Choose Us for Civil Rights Litigation</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 mb-12">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Section 1983 Expertise:</strong> Deep experience litigating constitutional claims in federal district courts and courts of appeals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Proven Results:</strong> Track record of significant settlements and verdicts against police departments and government agencies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Qualified Immunity Defense:</strong> Skilled at overcoming qualified immunity through clearly established law and factual development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Comprehensive Approach:</strong> We pursue both individual officers and municipalities under Monell to maximize accountability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Client-Centered Advocacy:</strong> We fight not just for compensation, but for justice, vindication, and systemic change</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gold/10 border border-gold/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Rights Were Violated. We Can Help.</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Don't let police misconduct or government abuse go unchallenged. Contact us for a free, confidential consultation to discuss your civil rights case.
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
        </div>
      </div>
    </Section>
  )
}
