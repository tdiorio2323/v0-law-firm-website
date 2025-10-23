import Link from "next/link"
import { Section } from "@/components/section"
import { siteConfig } from "@/lib/site"
import { Award, GraduationCap, Scale, Users, Clock, Shield } from "lucide-react"

export const metadata = {
  title: "About Thomas S. Mirigliano | Experienced Trial Attorney | NYC & NJ",
  description: "Meet Thomas S. Mirigliano, an experienced trial lawyer with over a decade of success in criminal defense, civil rights, employment law, and complex civil litigation across New York and New Jersey courts.",
}

export default function AboutPage() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Legal Education",
      details: [
        "Juris Doctor (J.D.)",
        "Trained in trial advocacy and litigation strategy",
        "Focus on constitutional law and criminal procedure"
      ]
    },
    {
      icon: Scale,
      title: "Bar Admissions",
      details: [
        "New York State Courts",
        "New Jersey State Courts",
        "U.S. District Court, Southern District of New York",
        "U.S. District Court, Eastern District of New York",
        "U.S. District Court, District of New Jersey"
      ]
    },
    {
      icon: Award,
      title: "Experience",
      details: [
        "Over 10 years of litigation experience",
        "Extensive trial experience in state and federal courts",
        "Successfully handled hundreds of cases from arraignment to verdict",
        "Strong track record of favorable outcomes for clients"
      ]
    }
  ]

  const practiceHighlights = [
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Defending individuals facing state and federal criminal charges, from white-collar crimes to complex felonies."
    },
    {
      icon: Users,
      title: "Civil Rights",
      description: "Holding government officials accountable for constitutional violations, police misconduct, and civil liberties abuses."
    },
    {
      icon: Scale,
      title: "Employment Law",
      description: "Protecting employees from discrimination, retaliation, wrongful termination, and workplace violations."
    },
    {
      icon: Clock,
      title: "Complex Litigation",
      description: "Strategic representation in high-stakes civil disputes requiring sophisticated legal analysis and trial preparation."
    }
  ]

  return (
    <Section>
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Thomas S. Mirigliano</h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Experienced trial attorney providing strategic, results-driven representation in criminal defense, civil rights, employment law, and complex civil litigation.
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg prose-invert max-w-none mb-12">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-white/90 leading-relaxed mb-4">
              Thomas S. Mirigliano is a dedicated trial attorney with over a decade of experience representing clients in some of the most challenging legal matters. Whether defending individuals facing criminal charges, fighting for civil rights, advocating for employees, or litigating complex civil disputes, Thomas brings a strategic, client-focused approach to every case.
            </p>
            <p className="text-white/90 leading-relaxed mb-4">
              With extensive experience in both state and federal courts across New York and New Jersey, Thomas has built a reputation for thorough preparation, aggressive advocacy, and achieving favorable outcomes for his clients. He understands that every case involves real people facing serious consequences, and he treats each matter with the attention and dedication it deserves.
            </p>
            <p className="text-white/90 leading-relaxed">
              Thomas believes in early case investigation, strategic motion practice, and trial-ready preparation. This approach not only positions cases for success at trial but also creates leverage for favorable settlements when appropriate. Available 24/7 for urgent legal matters, Thomas is committed to protecting your rights and fighting for the best possible outcome in your case.
            </p>
          </div>
        </div>

        {/* Credentials */}
        <h2 className="text-3xl font-bold mb-8 text-center">Credentials & Qualifications</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {credentials.map((cred) => (
            <div key={cred.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <cred.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gold">{cred.title}</h3>
              <ul className="space-y-2 text-white/80">
                {cred.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-gold mt-1.5">•</span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Practice Areas */}
        <h2 className="text-3xl font-bold mb-8 text-center">Areas of Practice</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {practiceHighlights.map((practice) => (
            <div key={practice.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-gold/30 transition-all">
              <practice.icon className="w-8 h-8 text-gold mb-3" />
              <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
              <p className="text-white/70 leading-relaxed">{practice.description}</p>
            </div>
          ))}
        </div>

        {/* Legal Approach */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gold">Legal Philosophy & Approach</h2>
          <div className="space-y-6 text-white/80">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Client-Centered Advocacy</h3>
              <p className="leading-relaxed">
                Every client receives personalized attention and direct communication with the attorney handling their case. Your legal matter is not delegated to paralegals or junior associates—you work directly with Thomas from start to finish.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Strategic Preparation</h3>
              <p className="leading-relaxed">
                Effective legal representation begins with thorough investigation and strategic planning. By identifying weaknesses in the opposing case early through motion practice and discovery, we create opportunities for favorable outcomes whether through settlement or trial.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Trial-Ready Mindset</h3>
              <p className="leading-relaxed">
                While many cases settle, preparing every case as if it will go to trial ensures maximum leverage in negotiations and readiness to fight in court when necessary. This trial-ready approach has resulted in successful outcomes across hundreds of cases.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Available When You Need It</h3>
              <p className="leading-relaxed">
                Legal emergencies don't wait for business hours. Available 24/7 for urgent matters including arrests, police questioning, and time-sensitive legal issues, Thomas ensures clients receive immediate guidance when they need it most.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Commitment */}
        <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gold">Commitment to Excellence</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            Thomas S. Mirigliano is committed to providing the highest level of legal representation to every client. Whether you're facing criminal charges, fighting for your civil rights, dealing with employment discrimination, or involved in complex civil litigation, you deserve an attorney who will fight tirelessly for your rights and interests.
          </p>
          <p className="text-white/90 leading-relaxed">
            With over a decade of courtroom experience, extensive knowledge of New York and New Jersey law, and a proven track record of favorable outcomes, Thomas has the skills and dedication needed to handle your case effectively. Your future is too important to trust to anyone less committed.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Schedule Your Free Consultation</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Every case begins with a conversation. Contact us today for a free, confidential consultation to discuss your legal matter. Available 24/7 for urgent matters.
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
    </Section>
  )
}
