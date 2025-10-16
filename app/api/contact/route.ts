import { NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

/**
 * POST /api/contact
 *
 * Handle contact form submissions.
 *
 * Options:
 * 1. Log to console (current implementation for demo)
 * 2. Send email via Resend (uncomment Resend code below)
 * 3. Save to database (add your database logic)
 *
 * To use Resend:
 * 1. Install: pnpm add resend
 * 2. Add RESEND_API_KEY to .env.local
 * 3. Uncomment the Resend code below
 */
export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Log submission (for demo purposes)
    console.log("=== New Contact Form Submission ===")
    console.log("Name:", data.name)
    console.log("Email:", data.email)
    console.log("Phone:", data.phone || "Not provided")
    console.log("Subject:", data.subject)
    console.log("Message:", data.message)
    console.log("Timestamp:", new Date().toISOString())
    console.log("===================================")

    // OPTION 1: Send email via Resend (uncomment to use)
    /*
    const { Resend } = require("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "Law Office <noreply@mirigliano-law.com>",
      to: "contact@mirigliano-law.com", // Replace with your email
      subject: `New Contact Form: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Submitted: ${new Date().toISOString()}</small></p>
      `,
    })
    */

    // OPTION 2: Save to database (add your database logic here)
    /*
    await db.contactSubmissions.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
        submittedAt: new Date(),
      },
    })
    */

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll be in touch soon.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    )
  }
}
