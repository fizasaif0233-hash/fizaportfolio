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
    name: 'James K.',
    country: 'United Kingdom',
    flag: '🇬🇧',
    role: 'Founder, MyApproved',
    message: 'Our platform went live in 5 days. Fiza is incredibly responsive and delivered beyond our expectations.',
    timeAgo: 'Just now',
    delay: 0,
  },
  {
    id: '2',
    name: 'Sarah M.',
    country: 'United States',
    flag: '🇺🇸',
    role: 'CEO, AdsStarter',
    message: 'Best developer we\'ve worked with. Clear communication and the ad platform runs flawlessly.',
    timeAgo: '2m ago',
    delay: 0.2,
  },
  {
    id: '3',
    name: 'Michael C.',
    country: 'Canada',
    flag: '🇨🇦',
    role: 'Ops, OmniWTMS',
    message: '48-hour setup was real. The WMS she built is powering our entire logistics operation.',
    timeAgo: '5m ago',
    delay: 0.4,
  },
  {
    id: '4',
    name: 'Emma R.',
    country: 'United Kingdom',
    flag: '🇬🇧',
    role: 'Manager, Nelly\'s Logistics',
    message: '2,500+ clients on the platform. Instant quotes and 24/7 support—everything we asked for.',
    timeAgo: '8m ago',
    delay: 0.6,
  },
  {
    id: '5',
    name: 'David W.',
    country: 'United States',
    flag: '🇺🇸',
    role: 'Director, IdentiMarketing',
    message: 'Our agency site attracts UK & US clients. Professional, fast, and she understood our brand.',
    timeAgo: '12m ago',
    delay: 0.8,
  },
  {
    id: '6',
    name: 'Lisa A.',
    country: 'Australia',
    flag: '🇦🇺',
    role: 'Product, Inboker',
    message: 'Booking engine live in days. Our users love it. Would hire Fiza again without hesitation.',
    timeAgo: '15m ago',
    delay: 1,
  },
  {
    id: '7',
    name: 'Robert M.',
    country: 'Germany',
    flag: '🇩🇪',
    role: 'Founder, SEOInForce',
    message: '10K+ agencies use our SEO platform. White-label and AI tools—all built to spec. Outstanding.',
    timeAgo: '18m ago',
    delay: 1.2,
  },
  {
    id: '8',
    name: 'Jennifer B.',
    country: 'UAE',
    flag: '🇦🇪',
    role: 'E-commerce, Alkhemmy',
    message: 'Luxury skincare site is live. AI assessments are a hit. She gets premium brands.',
    timeAgo: '22m ago',
    delay: 1.4,
  },
]

export default function LiveClientMessages() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )
    const el = document.getElementById('live-messages-section')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return
    const total = liveMessages.length
    if (visibleCount >= total) return
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 400)
    return () => clearTimeout(t)
  }, [isInView, visibleCount])

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
            Messages from clients
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Real feedback from international clients—delivered on time, every time
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
                  <span className="text-xs">Client message</span>
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
            More messages coming in...
          </motion.p>
        )}
      </div>
    </section>
  )
}
