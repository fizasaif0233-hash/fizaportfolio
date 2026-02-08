'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Code, Zap } from 'lucide-react'
import Image from 'next/image'
import GlitterEffect from '@/components/GlitterEffect'
import { useState, useEffect } from 'react'

const headings = [
  'Delivering Your Full Stack Project in Just 5 Days',
  'Building Production-Ready Web Applications Fast',
  'AI-Enhanced Full-Stack Engineer at Your Service',
  'From Concept to Deployment in Record Time',
]

export default function Hero() {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentHeading = headings[currentHeadingIndex]
    
    if (!isDeleting && displayText.length < currentHeading.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayText(currentHeading.substring(0, displayText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else if (!isDeleting && displayText.length === currentHeading.length) {
      // Finished typing, wait then start deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true)
        setTypingSpeed(50)
      }, 2000)
      return () => clearTimeout(timeout)
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayText(currentHeading.substring(0, displayText.length - 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else if (isDeleting && displayText.length === 0) {
      // Finished deleting, move to next heading
      setIsDeleting(false)
      setTypingSpeed(100)
      setCurrentHeadingIndex((prev) => (prev + 1) % headings.length)
    }
  }, [displayText, isDeleting, currentHeadingIndex, typingSpeed])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-background-secondary/50 to-background-primary" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Glitter Effect */}
      <GlitterEffect />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div 
              className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden border-4 border-accent/20 shadow-soft-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image
                src="/images/fiza-saif.jpeg"
                alt="Fiza Saif"
                fill
                className="object-cover"
                priority
                unoptimized
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(79, 124, 255, 0.2) 0%, transparent 70%)',
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 sm:mb-6 leading-tight px-4 min-h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeadingIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <span className="bg-gradient-to-r from-text-primary via-accent to-text-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
                    {displayText}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                      className="inline-block w-0.5 sm:w-1 h-[0.9em] bg-accent ml-1 sm:ml-2 align-middle"
                    />
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              One of the leading names in the world of software—building production-ready web applications, dashboards, and admin panels for real businesses.
            </motion.p>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              End-to-end ownership: planning, building, testing, deploying, and maintaining real-world systems for international clients.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              onClick={() => scrollToSection('#projects')}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent-hover transition-all duration-300 shadow-soft-lg flex items-center gap-2 w-full sm:w-auto justify-center relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent via-accent-hover to-accent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-background-secondary border border-background-primary text-text-primary rounded-xl font-semibold hover:bg-background-primary transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <motion.div 
              className="flex flex-col items-center p-4 sm:p-6 bg-background-secondary/50 rounded-xl border border-background-primary hover:border-accent/30 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Code className="text-accent mb-2 sm:mb-3" size={28} />
              </motion.div>
              <div className="text-xl sm:text-2xl font-bold text-text-primary mb-1">10+</div>
              <div className="text-xs sm:text-sm text-text-secondary text-center">Deployed Projects</div>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center p-4 sm:p-6 bg-background-secondary/50 rounded-xl border border-background-primary hover:border-accent/30 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Zap className="text-accent mb-2 sm:mb-3" size={28} />
              </motion.div>
              <div className="text-xl sm:text-2xl font-bold text-text-primary mb-1">100%</div>
              <div className="text-xs sm:text-sm text-text-secondary text-center">Remote Ready</div>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center p-4 sm:p-6 bg-background-secondary/50 rounded-xl border border-background-primary hover:border-accent/30 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Code className="text-accent mb-2 sm:mb-3" size={28} />
              </motion.div>
              <div className="text-xl sm:text-2xl font-bold text-text-primary mb-1">MIT</div>
              <div className="text-xs sm:text-sm text-text-secondary text-center">Graduate 2019</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-text-secondary/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
