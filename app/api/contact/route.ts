import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'fizasaif0233@gmail.com'
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!GMAIL_APP_PASSWORD) {
      console.error('Contact form: GMAIL_APP_PASSWORD is not set in .env.local')
      return NextResponse.json(
        { error: 'Email is not configured. Please set GMAIL_APP_PASSWORD in .env.local' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: CONTACT_EMAIL,
        pass: GMAIL_APP_PASSWORD.replace(/\s/g, ''),
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${CONTACT_EMAIL}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio: New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c)
}
