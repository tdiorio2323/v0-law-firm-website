import { Scale, Shield, Users, Clock } from "lucide-react"

const reasons = [
  {
    icon: Scale,
    title: "Proven Track Record",
    description: "Decades of successful case outcomes in state and federal courts across New York and New Jersey.",
  },
  {
    icon: Shield,
    title: "Aggressive Representation",
    description: "Fiercely protecting your rights with strategic litigation and unwavering advocacy.",
  },
  {
    icon: Users,
    title: "Personalized Attention",
    description: "Direct access to your attorney, not a paralegal. Every case receives individualized strategy and care.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Legal emergencies don't wait. We're available around the clock for urgent matters.",
  },
]

export function WhyChooseUs() {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-center mb-4">
        Why Choose Our Firm
      </h2>
      <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
        When your freedom, rights, or livelihood are at stake, you need an attorney who combines experience, dedication, and results.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <div key={reason.title} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 ring-1 ring-gold/20 mb-4">
              <reason.icon className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
            <p className="text-neutral-300 leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
