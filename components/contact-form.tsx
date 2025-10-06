"use client"

import type React from "react"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name <span className="text-brand-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address <span className="text-brand-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject <span className="text-brand-gold">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Case inquiry"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-brand-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
          placeholder="Please describe your legal matter..."
          required
        />
      </div>

      <div>
        <button
          type="submit"
          disabled
          className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium bg-white text-black hover:opacity-90 transition w-full md:w-auto opacity-50 cursor-not-allowed"
          title="Demo only - submission disabled"
        >
          Send Message (Demo Only)
        </button>
        <p className="mt-3 text-sm muted">Demo only—use the call button or email to reach us directly.</p>
      </div>
    </form>
  )
}
