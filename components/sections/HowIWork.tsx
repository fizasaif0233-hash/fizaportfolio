'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Clock, MessageSquare, Code2, Shield } from 'lucide-react'

const workflowSteps = [
  {
    icon: MessageSquare,
    title: 'Clear Scoping',
    description: 'We start with a detailed discussion of requirements, timelines, and expectations. No surprises, no scope creep.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Using modern tools and AI-assisted development, I deliver quickly without compromising on quality or maintainability.',
  },
  {
    icon: MessageSquare,
    title: 'Regular Updates',
    description: 'You will receive consistent updates on progress. Communication is transparent, especially when priorities need to shift.',
  },
  {
    icon: Code2,
    title: 'Maintainable Code',
    description: 'Every system is built with scalability and long-term maintenance in mind. Clean, readable, and well-documented code.',
  },
  {
    icon: Shield,
    title: 'Reliable Systems',
    description: 'Production-ready applications with proper testing, error handling, and deployment practices. Built to last.',
  },
]

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-16 sm:py-24 lg:py-32 relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
            How I Work
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            A professional workflow designed for serious clients who value reliability and long-term partnerships
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-4 sm:p-6 bg-background-secondary rounded-xl border border-background-primary hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-accent/10 rounded-lg flex-shrink-0">
                      <Icon className="text-accent" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">{step.title}</h3>
                      <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-4 sm:p-6 lg:p-8 bg-background-secondary rounded-xl border border-accent/20"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3 sm:mb-4 text-center px-4">
              What This Means for You
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                <p className="text-xs sm:text-sm text-text-secondary">
                  <span className="text-text-primary font-medium">Predictable timelines</span> — You know what to expect and when to expect it.
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                <p className="text-xs sm:text-sm text-text-secondary">
                  <span className="text-text-primary font-medium">Quality assurance</span> — Every deliverable is production-ready, not a prototype.
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                <p className="text-xs sm:text-sm text-text-secondary">
                  <span className="text-text-primary font-medium">Long-term support</span> — Systems built to last, with code that is easy to maintain and extend.
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={18} />
                <p className="text-xs sm:text-sm text-text-secondary">
                  <span className="text-text-primary font-medium">Transparent communication</span> — No hidden issues, no surprises. If something changes, you will know immediately.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
