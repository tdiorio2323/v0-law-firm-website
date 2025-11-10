"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/lib/site"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/results", label: "Results" },
  { href: "/on-video", label: "On Video" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/60">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          TD STUDIOS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-white/80 hover:text-white transition-colors">
              {n.label}
            </Link>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="inline-flex h-9 items-center rounded-lg bg-gold px-4 text-black text-sm font-medium hover:opacity-90 transition"
          >
            Call {siteConfig.phone}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex h-9 items-center rounded-lg bg-gold px-3 text-black text-sm font-medium hover:opacity-90 transition"
          >
            Call
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/5 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
