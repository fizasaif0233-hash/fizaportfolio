'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Rocket, Crown } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Starter',
    icon: Zap,
    price: 50,
    period: 'hour',
    description: 'Perfect for small projects and quick fixes',
    features: [
      'Bug fixes & small updates',
      'Code reviews',
      'Email support',
      'Basic consultation',
      'Quick turnaround',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    icon: Rocket,
    price: 75,
    period: 'hour',
    description: 'Ideal for medium-sized projects and features',
    features: [
      'Full feature development',
      'API integration',
      'Database design',
      'Priority support',
      'Code documentation',
      'Testing & deployment',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 100,
    period: 'hour',
    description: 'Complete solutions for large-scale projects',
    features: [
      'Full-stack applications',
      'SaaS MVP development',
      'Custom dashboards',
      '24/7 priority support',
      'Dedicated project manager',
      'Long-term maintenance',
      'Performance optimization',
    ],
    popular: false,
  },
]

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
            Transparent Pricing
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            Flexible pricing options to fit your project needs. Starting at just $50/hour.
          </p>
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-accent/10 border border-accent/20 rounded-xl mx-4">
            <p className="text-sm sm:text-base text-text-primary font-medium">
              All prices in USD | Custom project quotes available
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-6 sm:p-8 bg-background-secondary rounded-xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-accent shadow-soft-lg scale-105 sm:scale-110'
                    : 'border-background-primary hover:border-accent/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-xl mb-4">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl sm:text-5xl font-bold text-text-primary">${plan.price}</span>
                    <span className="text-base sm:text-lg text-text-secondary">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-xs sm:text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={scrollToContact}
                  className={`w-full py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-accent text-white hover:bg-accent-hover'
                      : 'bg-background-primary text-text-primary border border-background-primary hover:border-accent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="p-6 sm:p-8 bg-background-secondary rounded-xl border border-accent/20 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6">
              For fixed-price projects, retainer agreements, or custom packages, let's discuss your specific needs.
              I offer flexible pricing based on project scope and requirements.
            </p>
            <motion.button
              onClick={scrollToContact}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent-hover transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact for Custom Pricing
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
