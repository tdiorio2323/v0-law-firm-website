"use client"
import { testimonials } from "@/lib/testimonials"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-center mb-4">
        Client Testimonials
      </h2>
      <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
        Don't just take our word for it. Here's what our clients have to say about their experience.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 shadow-card hover:shadow-card-hover hover:ring-white/20 transition-all duration-200"
          >
            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-gold/40 mb-4" aria-hidden="true" />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-gold text-gold"
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-neutral-300 leading-relaxed mb-6 flex-grow">
              "{testimonial.text}"
            </p>

            {/* Author Info */}
            <div className="pt-4 border-t border-white/10 mt-auto">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-neutral-400">{testimonial.case}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
