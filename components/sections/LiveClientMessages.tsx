'use client'

import { motion } from 'framer-motion'
import { MessageCircle, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

const FLAGS = [
  { code: 'GB', emoji: '🇬🇧', label: 'UK' },
  { code: 'US', emoji: '🇺🇸', label: 'US' },
  { code: 'CA', emoji: '🇨🇦', label: 'Canada' },
  { code: 'AU', emoji: '🇦🇺', label: 'Australia' },
  { code: 'AE', emoji: '🇦🇪', label: 'UAE' },
  { code: 'DE', emoji: '🇩🇪', label: 'Germany' },
  { code: 'IN', emoji: '🇮🇳', label: 'India' },
  { code: 'PK', emoji: '🇵🇰', label: 'Pakistan' },
  { code: 'NL', emoji: '🇳🇱', label: 'Netherlands' },
  { code: 'SG', emoji: '🇸🇬', label: 'Singapore' },
]

interface LiveMessage {
  id: string
  name: string
  country: string
  flag: string
  role: string
  message: string
  timeAgo: string
  delay: number
}

const liveMessages: LiveMessage[] = [
  {
    id: '1',
    name: 'Alex T.',
    country: 'United Kingdom',
    flag: '🇬🇧',
    role: 'Business Owner',
    message: 'Hi, can you see my requirements? I need a quote for a small business website.',
    timeAgo: 'Just now',
    delay: 0,
  },
  {
    id: '2',
    name: 'Morgan L.',
    country: 'United States',
    flag: '🇺🇸',
    role: 'Startup Founder',
    message: 'Can you fix my website? It\'s broken on mobile and I need it working by next week.',
    timeAgo: '2m ago',
    delay: 0.2,
  },
  {
    id: '3',
    name: 'Jordan P.',
    country: 'Canada',
    flag: '🇨🇦',
    role: 'Marketing Manager',
    message: 'We need someone to build a landing page like the ones in your portfolio. Can you help?',
    timeAgo: '5m ago',
    delay: 0.4,
  },
  {
    id: '4',
    name: 'Casey R.',
    country: 'Australia',
    flag: '🇦🇺',
    role: 'Entrepreneur',
    message: 'I have a project brief ready. Can you look at my requirements and let me know if you can do this?',
    timeAgo: '8m ago',
    delay: 0.6,
  },
  {
    id: '5',
    name: 'Riley N.',
    country: 'UAE',
    flag: '🇦🇪',
    role: 'E-commerce Owner',
    message: 'Do you build online stores? I need a new website for my business. Can you fix or rebuild?',
    timeAgo: '12m ago',
    delay: 0.8,
  },
  {
    id: '6',
    name: 'Sam K.',
    country: 'Germany',
    flag: '🇩🇪',
    role: 'Freelancer',
    message: 'Hi, can you fix my website and add a few new features? I\'ll share the details.',
    timeAgo: '15m ago',
    delay: 1,
  },
  {
    id: '7',
    name: 'Taylor M.',
    country: 'India',
    flag: '🇮🇳',
    role: 'Product Owner',
    message: 'Looking for a full-stack developer for a 2-month project. Are you available?',
    timeAgo: '18m ago',
    delay: 1.2,
  },
  {
    id: '8',
    name: 'Jamie F.',
    country: 'Singapore',
    flag: '🇸🇬',
    role: 'Director',
    message: 'Can you build something like the dashboards in your portfolio for our team? Need a quote.',
    timeAgo: '22m ago',
    delay: 1.4,
  },
]

const INITIAL_VISIBLE = 6 // Show 6 messages immediately so section is never empty (flags + cards visible on first paint)

export default function LiveClientMessages() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

  useEffect(() => {
    const total = liveMessages.length
    if (visibleCount >= total) return
    const t = setInterval(() => {
      setVisibleCount((c) => (c >= total ? c : c + 1))
    }, 400)
    return () => clearInterval(t)
  }, [visibleCount])

  return (
    <section
      id="live-messages"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-background-primary"
    >
      {/* Country flags strip - scrolling */}
      <div className="mb-12 sm:mb-16 overflow-hidden border-y border-background-primary/50">
        <motion.div
          className="flex items-center gap-8 sm:gap-12 py-4"
          animate={{ x: [0, -960] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...FLAGS, ...FLAGS].map((f, i) => (
            <span
              key={`${f.code}-${i}`}
              className="flex items-center gap-2 flex-shrink-0 text-2xl sm:text-3xl md:text-4xl opacity-90 hover:opacity-100 transition-opacity"
              title={f.label}
            >
              <span className="rounded-lg shadow-sm" aria-hidden>{f.emoji}</span>
              <span className="text-sm sm:text-base font-medium text-text-secondary hidden sm:inline">{f.label}</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div id="live-messages-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-sm font-semibold text-accent">LIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
            Incoming inquiries
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            New contacts from around the world asking for quotes, fixes, and projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {liveMessages.slice(0, visibleCount).map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: msg.delay * 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative"
            >
              <motion.div
                className="h-full p-4 sm:p-5 bg-background-secondary rounded-xl border border-background-primary hover:border-accent/30 transition-all duration-300 flex flex-col"
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(79, 124, 255, 0.08)' }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xl sm:text-2xl flex-shrink-0" aria-hidden>{msg.flag}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-text-primary truncate">{msg.name}</p>
                      <p className="text-xs text-text-secondary flex items-center gap-1">
                        <MapPin size={10} className="flex-shrink-0" />
                        {msg.country}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-text-secondary/80 flex-shrink-0 tabular-nums">
                    {msg.timeAgo}
                  </span>
                </div>
                <p className="text-xs text-accent/90 mb-2">{msg.role}</p>
                <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                  &ldquo;{msg.message}&rdquo;
                </p>
                <div className="mt-3 pt-3 border-t border-background-primary/50 flex items-center gap-1.5 text-accent/70">
                  <MessageCircle size={14} />
                  <span className="text-xs">Inquiry</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {visibleCount < liveMessages.length && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-text-secondary mt-6"
          >
            More inquiries coming in...
          </motion.p>
        )}
      </div>
    </section>
  )
}
