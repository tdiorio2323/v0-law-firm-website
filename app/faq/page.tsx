"use client"
import { useState } from "react"
import Link from "next/link"
import { Section } from "@/components/section"
import { faqs } from "@/lib/faq"
import { ChevronDown } from "lucide-react"

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("all")

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "criminal", label: "Criminal Defense" },
    { id: "civil-rights", label: "Civil Rights" },
    { id: "employment", label: "Employment Law" },
    { id: "litigation", label: "Litigation" },
  ]

  const filteredFaqs = filter === "all" ? faqs : faqs.filter(faq => faq.category === filter)

  return (
    <Section>
      <div className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our legal services. Can't find what you're looking for? Contact us for a free consultation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === category.id
                  ? "bg-gold text-black"
                  : "bg-white/5 text-white/80 hover:bg-white/10 border border-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-start justify-between gap-4 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-4 text-white/80 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Every case is unique. Schedule a free consultation to discuss your specific situation.
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
    </Section>
  )
}
