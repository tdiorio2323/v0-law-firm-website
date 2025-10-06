import Link from "next/link"

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs">
          <span className="h-2 w-2 rounded-full bg-green-500" /> Available 24/7
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
          Vigilant Litigation. Results-Driven Representation.
        </h1>
        <p className="mt-4 text-lg text-white/70">
          State and Federal Criminal Defense • Civil Rights • Employment Law • Complex Civil Litigation
        </p>
        <div className="mt-8 flex gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-black text-sm font-medium hover:opacity-90"
          >
            Free Consultation
          </Link>
          <a
            href="tel:+17185306548"
            className="inline-flex items-center rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/5"
          >
            (718) 530-6548
          </a>
        </div>
      </div>
    </section>
  )
}
