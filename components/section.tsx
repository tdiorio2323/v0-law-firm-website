import type { ReactNode } from "react"

interface SectionProps {
  children: ReactNode
  className?: string
}

export function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
