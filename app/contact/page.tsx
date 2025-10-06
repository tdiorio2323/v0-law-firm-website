export const metadata = { title: "Contact" }

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold">Free Consultation</h1>
        <p className="mt-3 text-white/70">Demo only — submission disabled. Please call instead.</p>
        <form className="space-y-4 mt-6">
          <input
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Name"
          />
          <input
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Phone (optional)"
          />
          <input
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Subject"
          />
          <textarea
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            rows={6}
            placeholder="Tell us about your case"
          />
          <button
            className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-black text-sm font-medium opacity-50 cursor-not-allowed"
            disabled
            title="Demo only"
          >
            Submit (Disabled)
          </button>
        </form>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Office</h2>
        <p className="mt-2 text-white/70">40 Wall St, 32nd Fl, New York, NY 10005</p>
        <p className="text-white/70">
          Open 24 Hours •{" "}
          <a className="underline-offset-2 hover:underline" href="tel:+17185306548">
            (718) 530-6548
          </a>
        </p>
      </div>
    </div>
  )
}
