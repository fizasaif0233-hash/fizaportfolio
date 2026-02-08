import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Delivering Your Full Stack Project in Just 5 Days | Fiza Saif',
  description: 'Fiza Saif — AI-Enhanced Full-Stack Engineer delivering production-ready web applications, dashboards, and admin panels in just 5 days. MIT graduate with 10+ deployed projects.',
  keywords: 'remote software engineer, web developer, React, Next.js, full-stack developer, Fiza Saif',
  authors: [{ name: 'Fiza Saif' }],
  openGraph: {
    title: 'Delivering Your Full Stack Project in Just 5 Days | Fiza Saif',
    description: 'Fiza Saif — AI-Enhanced Full-Stack Engineer delivering production-ready web applications in just 5 days for international clients.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
