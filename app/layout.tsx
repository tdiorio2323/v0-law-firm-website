import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Law Office of Thomas S. Mirigliano",
  description: "NYC/NJ Criminal Defense • Civil Rights • Employment Law • Complex Civil Litigation",
  generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0A0A0A] text-[#F4F4F5] antialiased">
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
