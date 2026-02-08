'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Globe, Briefcase } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 text-center px-4">
            About
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-8 sm:mb-12 rounded-full" />

          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-text-secondary leading-relaxed px-4">
            <p>
              I&apos;m an AI-Enhanced Full-Stack Engineer with a foundation from MIT (2019) and extensive experience in long-term remote work. Over the years, I&apos;ve delivered 10–15 real, deployed projects that solve actual business problems for international clients.
            </p>
            <p>
              My approach is built on reliability, accountability, and clear communication. I handle complex workloads independently, from initial planning through deployment and ongoing maintenance. When priorities shift or challenges arise, I communicate transparently and adjust course without compromising quality.
            </p>
            <p className="text-text-primary font-medium">
              I build systems that work, scale, and maintain themselves—not prototypes or demos.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-4 sm:p-6 bg-background-secondary rounded-xl border border-background-primary"
            >
              <GraduationCap className="text-accent mb-3 sm:mb-4" size={28} />
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">MIT Graduate</h3>
              <p className="text-text-secondary text-xs sm:text-sm">Class of 2019. Strong foundation in computer science and software engineering principles.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 sm:p-6 bg-background-secondary rounded-xl border border-background-primary"
            >
              <Globe className="text-accent mb-3 sm:mb-4" size={28} />
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">International Experience</h3>
              <p className="text-text-secondary text-xs sm:text-sm">Worked with clients across time zones, delivering reliable solutions remotely.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 sm:p-6 bg-background-secondary rounded-xl border border-background-primary"
            >
              <Briefcase className="text-accent mb-3 sm:mb-4" size={28} />
              <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">Production Systems</h3>
              <p className="text-text-secondary text-xs sm:text-sm">10–15 deployed projects serving real users with real business needs.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
