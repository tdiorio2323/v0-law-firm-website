"use client"

import type React from "react"
import { useState } from "react"

interface FormState {
  status: "idle" | "submitting" | "success" | "error"
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormState({ status: "submitting", message: "" })

    try {
      // Try to submit to API endpoint if it exists
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormState({
          status: "success",
          message: "Thank you for your inquiry. We'll be in touch soon.",
        })
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      // If API doesn't exist or fails, show demo message
      setFormState({
        status: "error",
        message: "Demo mode: Form submission is disabled. Please call (718) 530-6548 to reach us directly.",
      })
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-gold/40 transition"
            placeholder="John Doe"
            required
            disabled={formState.status === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-gold/40 transition"
            placeholder="john@example.com"
            required
            disabled={formState.status === "submitting"}
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
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-gold/40 transition"
            placeholder="(555) 123-4567"
            disabled={formState.status === "submitting"}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-gold/40 transition"
            placeholder="Case inquiry"
            required
            disabled={formState.status === "submitting"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-gold/40 transition resize-none"
          placeholder="Please describe your legal matter..."
          required
          disabled={formState.status === "submitting"}
        />
      </div>

      {formState.message && (
        <div
          className={`rounded-lg p-4 text-sm ${
            formState.status === "success"
              ? "bg-green-500/10 border border-green-500/20 text-green-400"
              : "bg-gold/10 border border-gold/20 text-gold"
          }`}
        >
          {formState.message}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={formState.status === "submitting"}
          className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold bg-gold text-black hover:opacity-90 transition w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState.status === "submitting" ? "Sending..." : "Send Message"}
        </button>
        <p className="mt-3 text-sm text-white/60">
          Or call us directly at{" "}
          <a href="tel:+17185306548" className="text-gold hover:underline">
            (718) 530-6548
          </a>
        </p>
      </div>
    </form>
  )
}
