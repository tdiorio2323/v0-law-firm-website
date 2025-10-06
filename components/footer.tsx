export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <p className="font-semibold">Law Office of Thomas S. Mirigliano</p>
          <p className="text-white/70 mt-2">40 Wall St, 32nd Fl, New York, NY 10005</p>
          <p className="text-white/70">Open 24 Hours</p>
          <p className="mt-1">
            <a className="text-white/80 hover:text-white" href="tel:+17185306548">
              (718) 530-6548
            </a>
          </p>
        </div>
        <div className="md:col-span-2 text-sm text-white/70">
          <p>Disclaimer: Demo only. No attorney–client relationship is formed.</p>
          <p className="mt-2">© {new Date().getFullYear()} Law Office of Thomas S. Mirigliano</p>
        </div>
      </div>
    </footer>
  )
}
