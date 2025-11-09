import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <p className="font-semibold text-lg mb-4">TD STUDIOS</p>
            <p className="text-neutral-400 mt-2">40 Wall St, 32nd Fl</p>
            <p className="text-neutral-400">New York, NY 10005</p>
            <p className="text-neutral-400 mt-3">Open 24 Hours</p>
            <p className="mt-1">
              <a className="text-gold hover:text-gold/80 font-medium transition-colors duration-200" href="tel:+17185306548">
                (718) 530-6548
              </a>
            </p>
            <p className="mt-1">
              <a className="text-neutral-400 hover:text-white transition-colors duration-200" href="mailto:contact@mirigliano-law.com">
                contact@mirigliano-law.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-neutral-400 hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link href="/practice-areas" className="text-neutral-400 hover:text-white transition-colors duration-200">Practice Areas</Link></li>
              <li><Link href="/results" className="text-neutral-400 hover:text-white transition-colors duration-200">Results</Link></li>
              <li><Link href="/faq" className="text-neutral-400 hover:text-white transition-colors duration-200">FAQ</Link></li>
              <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-semibold mb-4">Legal</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="text-neutral-400 hover:text-white transition-colors duration-200">Legal Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-neutral-500 mb-3 leading-relaxed">
            <strong className="text-neutral-400">Disclaimer:</strong> The use of this website does not create an attorney-client relationship. Information on this site is for general purposes only and does not constitute legal advice. Consult with an attorney for advice specific to your situation.
          </p>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} TD STUDIOS. All rights reserved. | Serving New York & New Jersey
          </p>
        </div>
      </div>
    </footer>
  )
}
