import Link from "next/link"
import { Section } from "@/components/section"
import { Shield, Scale, FileText, Gavel } from "lucide-react"

export const metadata = {
  title: "Criminal Defense Attorney | State & Federal | NYC & NJ",
  description: "Experienced criminal defense attorney handling state and federal prosecutions. From arraignment through trial and appeal. Available 24/7 for emergencies."
}

export default function CriminalDefense() {
  const services = [
    {
      icon: Shield,
      title: "State Criminal Defense",
      description: "Comprehensive representation in state court matters including felonies, misdemeanors, and violations across New York and New Jersey."
    },
    {
      icon: Scale,
      title: "Federal Criminal Defense",
      description: "Strategic defense in federal prosecutions including white-collar crimes, fraud, drug conspiracies, and constitutional violations."
    },
    {
      icon: FileText,
      title: "Pre-Trial Practice",
      description: "Aggressive motion practice to suppress evidence, dismiss charges, and secure favorable plea agreements before trial."
    },
    {
      icon: Gavel,
      title: "Trial & Appeals",
      description: "Experienced courtroom advocacy through trial and comprehensive appellate representation to protect your rights at every stage."
    }
  ]

  const caseTypes = [
    "White-Collar Crimes (fraud, embezzlement, money laundering)",
    "Drug Crimes (possession, distribution, trafficking)",
    "Violent Crimes (assault, robbery, homicide)",
    "Sex Crimes and Registry Matters",
    "Weapons Offenses (CPW, federal firearms charges)",
    "DUI/DWI and Traffic Crimes",
    "Theft and Property Crimes",
    "Domestic Violence",
    "Grand Jury Investigations",
    "Post-Conviction Relief and Appeals"
  ]

  return (
    <Section>
      <div className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Criminal Defense</h1>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            When you're facing criminal charges, your freedom, reputation, and future are at stake. You need an experienced criminal defense attorney who will fight aggressively to protect your rights and pursue the best possible outcome.
          </p>

          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-white/70 leading-relaxed mb-4">
              With extensive experience in both state and federal criminal courts, we provide strategic, results-driven defense representation. From the moment of arrest through trial and appeal, we meticulously prepare every case, challenge the prosecution's evidence, and fight tirelessly for our clients.
            </p>
            <p className="text-white/70 leading-relaxed">
              Whether you're under investigation, have been arrested, or are facing charges, immediate legal representation is critical. Contact us 24/7 for emergency consultations—early intervention can make a decisive difference in your case.
            </p>
          </div>

          {/* Services Grid */}
          <h2 className="text-3xl font-bold mb-6">Our Criminal Defense Services</h2>
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
          <h2 className="text-3xl font-bold mb-6">Types of Criminal Cases We Handle</h2>
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
          <h2 className="text-3xl font-bold mb-6">Our Defense Process</h2>
          <div className="space-y-6 mb-12">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">1. Immediate Response & Investigation</h3>
              <p className="text-white/70 leading-relaxed">
                We begin by thoroughly investigating the charges, reviewing police reports, interviewing witnesses, and identifying weaknesses in the prosecution's case. If you've been arrested, we work to secure bail and protect your rights from day one.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">2. Strategic Motion Practice</h3>
              <p className="text-white/70 leading-relaxed">
                We file motions to suppress illegally obtained evidence, dismiss charges lacking probable cause, and challenge constitutional violations. Effective pre-trial motions can result in reduced charges or complete dismissal.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">3. Negotiation & Plea Bargaining</h3>
              <p className="text-white/70 leading-relaxed">
                When appropriate, we negotiate aggressively with prosecutors to secure favorable plea agreements, reduced charges, or alternative sentencing options that minimize the impact on your life.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">4. Trial Advocacy</h3>
              <p className="text-white/70 leading-relaxed">
                If your case goes to trial, you'll have an experienced litigator fighting for you in court. We prepare meticulously, cross-examine witnesses effectively, and present compelling defenses to juries and judges.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2 text-gold">5. Sentencing & Appeals</h3>
              <p className="text-white/70 leading-relaxed">
                If convicted, we advocate aggressively at sentencing to minimize penalties. We also handle appeals and post-conviction relief, continuing to fight for your rights even after trial.
              </p>
            </div>
          </div>

          {/* Why Choose Section */}
          <h2 className="text-3xl font-bold mb-6">Why Choose Us for Criminal Defense</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 mb-12">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Extensive Court Experience:</strong> Decades of practice in state and federal criminal courts throughout New York and New Jersey</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Proven Results:</strong> Track record of dismissed charges, acquittals, and favorable plea agreements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">24/7 Availability:</strong> Immediate response for arrests and emergencies—we're available when you need us most</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Personalized Strategy:</strong> Every case receives individualized attention and a customized defense strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold text-xl">✓</span>
                <span className="text-white/80"><strong className="text-white">Aggressive Advocacy:</strong> We fight tirelessly to protect your constitutional rights and freedom</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gold/10 border border-gold/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Facing Criminal Charges? Get Help Now.</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Time is critical in criminal cases. Contact us immediately for a free, confidential consultation. We're available 24/7 for emergencies.
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
