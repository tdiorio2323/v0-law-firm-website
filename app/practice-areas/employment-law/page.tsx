import Link from "next/link"
import { Section } from "@/components/section"
import { Users, Shield, FileText, DollarSign, Heart, AlertCircle } from "lucide-react"

export const metadata = {
  title: "Employment Law Attorney | Discrimination, Retaliation, Wrongful Termination | NYC & NJ",
  description: "Experienced employment attorney representing employees in discrimination, harassment, retaliation, wage disputes, and wrongful termination cases in New York and New Jersey."
}

export default function EmploymentLaw() {
  const services = [
    {
      icon: Users,
      title: "Discrimination & Harassment",
      description: "Fighting workplace discrimination and harassment based on race, gender, age, disability, religion, national origin, pregnancy, and sexual orientation under federal and state law."
    },
    {
      icon: Shield,
      title: "Retaliation & Whistleblower Protection",
      description: "Protecting employees who report illegal conduct, safety violations, discrimination, or other protected activities from retaliation, demotion, or termination."
    },
    {
      icon: DollarSign,
      title: "Wage & Hour Violations",
      description: "Recovering unpaid wages, overtime, minimum wage violations, misclassification claims, and unlawful deductions under FLSA and state labor laws."
    },
    {
      icon: FileText,
      title: "Wrongful Termination & Contracts",
      description: "Challenging unlawful terminations, negotiating severance agreements, and enforcing employment contracts, non-competes, and executive compensation agreements."
    }
  ]

  const caseTypes = [
    "Discrimination (Title VII, NYSHRL, NJLAD)",
    "Sexual Harassment and Hostile Work Environment",
    "Retaliation for Protected Activity",
    "Whistleblower and Qui Tam Actions",
    "Wrongful Termination and Constructive Discharge",
    "Wage and Hour Violations (FLSA, NYLL)",
    "Family and Medical Leave Act (FMLA) Violations",
    "Americans with Disabilities Act (ADA) Claims",
    "Age Discrimination (ADEA)",
    "Pregnancy Discrimination and Reasonable Accommodations",
    "Executive Employment Agreements",
    "Severance Negotiation and Non-Compete Review"
  ]

  return (
    <Section>
      <div className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Employment Law</h1>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Your workplace should be fair, safe, and free from discrimination. When employers violate your rights, we fight to hold them accountable and secure the justice and compensation you deserve.
          </p>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-white/70 leading-relaxed mb-4">
              Employment law protects workers from discrimination, harassment, retaliation, wage theft, and wrongful termination. With extensive experience representing employees and executives in state and federal courts, we handle sensitive workplace disputes with skill, discretion, and unwavering advocacy.
            </p>
            <p className="text-white/70 leading-relaxed">
              Whether you're facing illegal discrimination, retaliation for whistleblowing, unpaid wages, or wrongful termination, we provide strategic counsel from investigation through litigation. We also advise executives on employment contracts, severance negotiations, and protecting your professional interests.
            </p>
          </div>

          {/* Services Grid */}
          <h2 className="text-3xl font-bold mb-6">Our Employment Law Services</h2>
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
          <h2 className="text-3xl font-bold mb-6">Types of Employment Cases We Handle</h2>
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
          <h2 className="text-3xl font-bold mb-6">Our Employment Law Process</h2>
          <div className="space-y-6 mb-12">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">1. Confidential Case Evaluation</h3>
              <p className="text-white/70 leading-relaxed">
                We begin with a confidential consultation to understand your situation, review documentation (emails, personnel files, pay stubs), and assess your legal options. We identify all viable claims under federal, New York, and New Jersey employment laws.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">2. Administrative Agency Filings</h3>
              <p className="text-white/70 leading-relaxed">
                For discrimination and retaliation claims, we file charges with the EEOC, New York State Division of Human Rights, or New Jersey Division on Civil Rights. We navigate administrative procedures to preserve your right to sue in court.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">3. Investigation and Evidence Gathering</h3>
              <p className="text-white/70 leading-relaxed">
                We conduct thorough investigations, preserve electronic evidence, interview witnesses, and build a comprehensive factual record. Strong documentation is critical to proving discrimination, retaliation, or wrongful conduct.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">4. Negotiation and Settlement</h3>
              <p className="text-white/70 leading-relaxed">
                Many employment disputes resolve through negotiation. We pursue favorable settlements that include monetary compensation, reinstatement, policy changes, and confidentiality protections when appropriate.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">5. Litigation and Trial</h3>
              <p className="text-white/70 leading-relaxed">
                When settlement isn't adequate, we file lawsuits in state or federal court and litigate aggressively. We handle discovery, depositions, motions, and trial to pursue full accountability and maximum recovery for our clients.
              </p>
            </div>
          </div>

          {/* Why Choose Section */}
          <h2 className="text-3xl font-bold mb-6">Why Choose Us for Employment Law</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 mb-12">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Employee-Focused Representation:</strong> We exclusively represent employees and executives—never employers—ensuring undivided loyalty to your interests</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Federal and State Expertise:</strong> Deep knowledge of Title VII, ADA, FLSA, FMLA, NYSHRL, NJLAD, and other employment statutes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Proven Results:</strong> Track record of substantial settlements, verdicts, and favorable outcomes in discrimination, retaliation, and wage cases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Discretion and Sensitivity:</strong> We handle sensitive workplace matters with confidentiality and professionalism</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Strategic Counsel:</strong> Whether you need aggressive litigation or strategic negotiation, we tailor our approach to achieve your goals</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gold/10 border border-gold/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Facing Workplace Discrimination or Retaliation?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Don't face your employer alone. Contact us for a confidential consultation to discuss your employment law matter and explore your legal options.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-gold px-6 py-3 text-black text-sm font-semibold hover:opacity-90 transition"
              >
                Free Consultation
              </Link>
              <a
                href="tel:+17185306548"
                className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition"
              >
                Call (718) 530-6548
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
