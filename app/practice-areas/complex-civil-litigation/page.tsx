import Link from "next/link"
import { Section } from "@/components/section"
import { Gavel, FileText, Scale, Users, CheckCircle, Clock } from "lucide-react"

export const metadata = {
  title: "Complex Civil Litigation Attorney | High-Stakes Disputes | NYC & NJ",
  description: "Experienced civil litigation attorney handling complex commercial disputes, multi-party litigation, and high-stakes cases in state and federal courts across New York and New Jersey."
}

export default function ComplexCivilLitigation() {
  const services = [
    {
      icon: Gavel,
      title: "Commercial Litigation",
      description: "Representing businesses and individuals in breach of contract, partnership disputes, fraud claims, and business torts requiring sophisticated litigation strategies."
    },
    {
      icon: Scale,
      title: "Multi-Party & Class Actions",
      description: "Managing complex cases involving multiple parties, consolidated proceedings, and class action litigation with extensive discovery and coordination demands."
    },
    {
      icon: FileText,
      title: "Discovery Management",
      description: "Handling voluminous document production, e-discovery, expert depositions, and motion practice in cases requiring meticulous attention to detail."
    },
    {
      icon: Users,
      title: "Alternative Dispute Resolution",
      description: "Strategic mediation and arbitration representation to resolve disputes efficiently while protecting your interests and leverage at the negotiating table."
    }
  ]

  const caseTypes = [
    "Breach of Contract and Commercial Disputes",
    "Partnership and Shareholder Disputes",
    "Fraud and Misrepresentation Claims",
    "Business Torts and Unfair Competition",
    "Real Estate and Construction Litigation",
    "Professional Malpractice (Legal, Medical, Accounting)",
    "Insurance Coverage Disputes",
    "Breach of Fiduciary Duty",
    "Declaratory Judgment Actions",
    "Injunctive Relief and Emergency Proceedings",
    "Multi-District Litigation (MDL)",
    "Class Action Defense and Prosecution"
  ]

  return (
    <Section>
      <div className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Complex Civil Litigation</h1>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            High-stakes civil disputes demand strategic thinking, meticulous preparation, and aggressive advocacy. We handle complex litigation from inception through trial and appeal in state and federal courts.
          </p>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-white/70 leading-relaxed mb-4">
              Complex civil litigation involves cases with sophisticated legal issues, multiple parties, voluminous discovery, expert testimony, and significant financial stakes. Whether you're a business facing a breach of contract claim, an individual pursuing fraud damages, or a party in multi-district litigation, we provide the experience and resources necessary to navigate these demanding cases.
            </p>
            <p className="text-white/70 leading-relaxed">
              Our practice combines thorough legal research, strategic motion practice, aggressive discovery, expert witness development, and persuasive trial advocacy. We represent clients in state and federal courts throughout New York and New Jersey, handling cases that require precision, creativity, and relentless pursuit of favorable outcomes.
            </p>
          </div>

          {/* Services Grid */}
          <h2 className="text-3xl font-bold mb-6">Our Complex Litigation Services</h2>
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
          <h2 className="text-3xl font-bold mb-6">Types of Complex Civil Cases We Handle</h2>
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
          <h2 className="text-3xl font-bold mb-6">Our Complex Litigation Process</h2>
          <div className="space-y-6 mb-12">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">1. Case Assessment and Strategy Development</h3>
              <p className="text-white/70 leading-relaxed">
                We begin with comprehensive case analysis, reviewing contracts, correspondence, financial records, and other key evidence. We identify legal theories, potential defenses, and develop a strategic litigation plan tailored to your objectives.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">2. Pleadings and Early Motion Practice</h3>
              <p className="text-white/70 leading-relaxed">
                We draft detailed complaints and answers that establish strong legal foundations. Our early motion practice—including motions to dismiss, for summary judgment, and for preliminary injunctions—shapes the litigation landscape and positions your case for success.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">3. Discovery and E-Discovery Management</h3>
              <p className="text-white/70 leading-relaxed">
                We manage extensive document production, e-discovery protocols, interrogatories, and depositions. In cases involving millions of documents, we employ technology-assisted review and sophisticated discovery strategies to build your case efficiently.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">4. Expert Witness Retention and Development</h3>
              <p className="text-white/70 leading-relaxed">
                Complex cases often require expert testimony on damages, industry standards, causation, or technical issues. We identify and work with leading experts to strengthen your case and counter opposing experts effectively.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">5. Trial Preparation and Advocacy</h3>
              <p className="text-white/70 leading-relaxed">
                We prepare meticulously for trial with jury research, witness preparation, demonstrative exhibits, and persuasive opening and closing arguments. Our trial experience in complex civil matters ensures powerful courtroom advocacy on your behalf.
              </p>
            </div>
          </div>

          {/* Why Choose Section */}
          <h2 className="text-3xl font-bold mb-6">Why Choose Us for Complex Civil Litigation</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 mb-12">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Sophisticated Legal Analysis:</strong> Expertise handling complex legal issues, multi-party disputes, and intricate procedural matters in state and federal courts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Trial-Tested Experience:</strong> Proven track record taking high-stakes cases to verdict when settlement isn't in your best interest</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Strategic Motion Practice:</strong> Aggressive and creative motion practice to narrow issues, exclude evidence, and position cases favorably for resolution or trial</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Resource Management:</strong> Efficient handling of voluminous discovery and complex procedural requirements without sacrificing thoroughness</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Client Communication:</strong> Clear, regular communication about case strategy, developments, and options throughout the litigation process</span>
              </li>
            </ul>
          </div>

          {/* Related Practice Areas */}
          <h2 className="text-3xl font-bold mb-6">Related Practice Areas</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <Link
              href="/practice-areas/civil-rights"
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gold">Civil Rights Litigation</h3>
              <p className="text-white/70 text-sm">Section 1983 claims, police misconduct, and constitutional violations in federal court</p>
            </Link>
            <Link
              href="/practice-areas/employment-law"
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gold">Employment Law</h3>
              <p className="text-white/70 text-sm">Discrimination, retaliation, wage disputes, and wrongful termination litigation</p>
            </Link>
          </div>

          {/* CTA */}
          <div className="bg-gold/10 border border-gold/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Facing a Complex Civil Dispute?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              High-stakes litigation requires experienced counsel. Contact us for a consultation to discuss your complex civil case and develop a winning strategy.
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
