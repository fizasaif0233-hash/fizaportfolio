'use client'

import { motion } from 'framer-motion'
import { Globe, Code, Wrench, Zap, Layout, Shield } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Applications',
    description: 'Full-stack web applications built with modern frameworks. Production-ready, scalable, and maintainable.',
  },
  {
    icon: Zap,
    title: 'SaaS MVPs',
    description: 'Complete SaaS solutions from concept to launch. User management, subscriptions, and admin panels included.',
  },
  {
    icon: Layout,
    title: 'Dashboards & Admin Panels',
    description: 'Custom dashboards and admin interfaces for managing business operations, analytics, and data.',
  },
  {
    icon: Wrench,
    title: 'Bug Fixing & Maintenance',
    description: 'Reliable support for existing applications. Quick fixes, performance improvements, and ongoing maintenance.',
  },
  {
    icon: Code,
    title: 'Feature Development',
    description: 'Adding new features to existing applications. Clean integration, tested, and deployed to production.',
  },
  {
    icon: Globe,
    title: 'Long-Term Remote Support',
    description: 'Ongoing development and support for international clients. Available for long-term remote contracts.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
            Services & Availability
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            What I offer and how I can help your business
          </p>
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-accent/10 border border-accent/20 rounded-xl mx-4">
            <p className="text-sm sm:text-base text-text-primary font-medium">
              ✓ Available for international remote contracts
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4 sm:p-6 bg-background-secondary rounded-xl border border-background-primary hover:border-accent/30 transition-all duration-300"
              >
                <div className="p-2 sm:p-3 bg-accent/10 rounded-lg w-fit mb-3 sm:mb-4">
                  <Icon className="text-accent" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">{service.title}</h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
