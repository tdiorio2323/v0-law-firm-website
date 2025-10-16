import { ContactForm } from "@/components/contact-form"
import { Section } from "@/components/section"
import { siteConfig } from "@/lib/site"

export const metadata = {
  title: `Contact - ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} for a free consultation. Available 24/7 for urgent matters.`,
}

export default function ContactPage() {
  return (
    <Section>
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">Free Consultation</h1>
          <p className="text-white/70 text-lg mb-8">
            Contact us today to discuss your legal matter. We respond to all inquiries promptly.
          </p>
          <ContactForm />
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gold">Office Location</h2>
            <div className="space-y-3 text-white/80">
              <p className="leading-relaxed">{siteConfig.address}</p>
              <p className="text-sm text-white/60">{siteConfig.hours}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gold">Direct Contact</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-white/60 mb-1">Phone</p>
                <a
                  href={siteConfig.phoneHref}
                  className="text-lg font-medium text-white hover:text-gold transition"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-sm text-white/60 mb-1">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white/80 hover:text-gold transition break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-gold">Available 24/7</h3>
            <p className="text-sm text-white/70">
              We understand legal emergencies don't wait for business hours. Call us anytime for urgent matters.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
