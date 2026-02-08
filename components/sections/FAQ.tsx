'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What services do you offer?',
    answer: 'I offer full-stack web development services including web applications, SaaS MVPs, dashboards and admin panels, bug fixing, maintenance, feature development, and long-term remote support. I work with modern technologies like React, Next.js, Supabase, and TypeScript to build production-ready systems.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a full SaaS platform could take 8-12 weeks. I provide clear timelines during the initial scoping phase and keep you updated throughout the project. Fast delivery is important, but quality and maintainability come first.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes, I specialize in working with international clients remotely. I have experience working across different time zones and am available for long-term remote contracts. Communication is key, and I ensure regular updates regardless of location.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'I primarily work with React and Next.js for frontend development, Supabase for backend and databases (including authentication and APIs), TypeScript for type safety, and modern deployment platforms like Vercel. I also use AI-assisted development tools like Cursor to accelerate development while maintaining production-quality code.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'I believe in transparent and regular communication. You will receive consistent updates on progress, and I will communicate immediately if priorities need to shift or challenges arise. I use clear, non-technical language when explaining technical concepts and am always available to answer questions.',
  },
  {
    question: 'Can you work on existing projects?',
    answer: 'Absolutely. I can help with bug fixing, maintenance, adding new features to existing applications, or taking over ongoing projects. I ensure clean integration with existing codebases and maintain code quality standards throughout.',
  },
  {
    question: 'What is your development process?',
    answer: 'My process starts with clear scoping and timeline discussions. I then build using modern tools and AI-assisted development for speed, while maintaining quality. Throughout the project, I provide regular updates and focus on creating maintainable, scalable systems. Every deliverable is production-ready, not a prototype.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, I offer long-term remote support for all projects. This includes bug fixes, maintenance, feature additions, and system updates. I build systems with long-term maintenance in mind, making ongoing support efficient and cost-effective.',
  },
  {
    question: 'What makes your approach different?',
    answer: 'I focus on building systems that work, scale, and maintain themselves. I use AI-assisted development to deliver faster without compromising quality. My code is clean, readable, and well-documented. I take end-to-end ownership from planning through deployment and maintenance, ensuring reliable, production-ready solutions.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out through the contact form, email, LinkedIn, or WhatsApp. I typically respond within 24 hours. We can schedule a call to discuss your project requirements, timeline, and how I can help bring your vision to life.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Common questions about my services and working process
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background-secondary rounded-xl border border-background-primary overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 lg:py-5 flex items-center justify-between text-left hover:bg-background-primary/50 transition-colors"
              >
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-text-primary pr-3 sm:pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-accent" size={18} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-3 sm:pb-4 lg:pb-5">
                      <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Export FAQ data for use in chatbot
export { faqData }
