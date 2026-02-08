'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function MobileCTA() {
  const [showCTA, setShowCTA] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Show CTA when scrolled past hero section
      setShowCTA(scrollPosition > windowHeight * 0.5)

      // Show scroll to top when near bottom
      setShowScrollTop(scrollPosition > windowHeight && scrollPosition < documentHeight - windowHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Sticky Hire Me Button - Mobile Only */}
      {showCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 sm:p-4 bg-background-secondary/95 backdrop-blur-md border-t border-background-primary">
          <button
            onClick={scrollToContact}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent-hover transition-colors shadow-soft-lg text-sm sm:text-base"
          >
            Hire Me
          </button>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 sm:bottom-20 right-4 sm:right-6 z-30 md:hidden p-2.5 sm:p-3 bg-background-secondary border border-background-primary rounded-full text-text-primary hover:text-accent transition-colors shadow-soft"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} className="sm:w-5 sm:h-5" />
        </button>
      )}
    </>
  )
}
