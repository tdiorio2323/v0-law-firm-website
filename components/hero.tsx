import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nyc-skyline.jpg"
          alt="New York City Skyline"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs">
          <span className="h-2 w-2 rounded-full bg-green-500" /> Available 24/7
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight drop-shadow-lg">
          Vigilant Litigation. Results-Driven Representation.
        </h1>
        <p className="mt-4 text-lg text-white/90 drop-shadow-md">
          State and Federal Criminal Defense • Civil Rights • Employment Law • Complex Civil Litigation
        </p>
        <div className="mt-8 flex gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-gold px-5 py-3 text-black text-sm font-medium hover:opacity-90 shadow-lg transition"
          >
            Free Consultation
          </Link>
          <a
            href="tel:+17185306548"
            className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-3 text-sm font-medium text-white hover:bg-white/20 shadow-lg transition"
          >
            (718) 530-6548
          </a>
        </div>
      </div>
    </section>
  )
}
