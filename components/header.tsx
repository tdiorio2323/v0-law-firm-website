"use client"
import Link from "next/link"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/results", label: "Results" },
  { href: "/on-video", label: "On Video" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/60">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          Law Office of Thomas S. Mirigliano
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-white/80 hover:text-white">
              {n.label}
            </Link>
          ))}
          <a
            href="tel:+17185306548"
            className="inline-flex h-9 items-center rounded-lg bg-white px-4 text-black text-sm font-medium hover:opacity-90"
          >
            Call (718) 530-6548
          </a>
        </nav>
        <a
          href="tel:+17185306548"
          className="md:hidden inline-flex h-9 items-center rounded-lg bg-white px-3 text-black text-sm font-medium"
        >
          Call
        </a>
      </div>
    </header>
  )
}
