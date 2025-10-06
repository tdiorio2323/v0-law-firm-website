import Link from "next/link"
import { Hero } from "@/components/hero"

const areas = [
  {
    href: "/practice-areas/criminal-defense",
    title: "Criminal Defense",
    blurb: "Aggressive defense in state and federal courts.",
  },
  {
    href: "/practice-areas/civil-rights",
    title: "Civil Rights",
    blurb: "Accountability for police or prosecutorial misconduct.",
  },
  {
    href: "/practice-areas/employment-law",
    title: "Employment Law",
    blurb: "Discrimination, retaliation, wage & hour, FMLA.",
  },
]

export default function Page() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-6 md:grid-cols-3">
        {areas.map((a) => (
          <Link
            key={a.title}
            href={a.href}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-medium">{a.title}</h3>
            <p className="mt-2 text-white/70">{a.blurb}</p>
          </Link>
        ))}
      </section>
    </>
  )
}
