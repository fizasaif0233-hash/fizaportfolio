'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, TestTube, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
    description: 'Building modern, performant user interfaces with React and Next.js. Focus on clean code, accessibility, and smooth user experiences.',
  },
  {
    icon: Database,
    title: 'Backend & Databases',
    skills: ['Supabase', 'PostgreSQL', 'Authentication', 'Role-Based Access Control', 'REST APIs'],
    description: 'Full-stack development with Supabase for authentication, database management, and API development. Secure, scalable backend solutions.',
  },
  {
    icon: TestTube,
    title: 'Testing',
    skills: ['Unit Testing', 'End-to-End Testing', 'Test-Driven Development'],
    description: 'Writing reliable tests to ensure code quality and prevent regressions. Both unit tests and basic E2E testing practices.',
  },
  {
    icon: Cloud,
    title: 'Deployment',
    skills: ['Vercel', 'Cloud Deployment', 'CI/CD', 'Performance Optimization'],
    description: 'Deploying applications to production with Vercel or similar platforms. Optimized for speed, SEO, and reliability.',
  },
  {
    icon: Sparkles,
    title: 'AI-Assisted Development',
    skills: ['Cursor', 'Code Quality', 'Maintainability', 'Rapid Development'],
    description: 'Using Cursor and AI tools to accelerate development while maintaining production-quality, readable, and maintainable code. This enables faster delivery without sacrificing code standards.',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
            Skills & Stack
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Modern tools and practices for building production-ready applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4 sm:p-6 lg:p-8 bg-background-secondary rounded-xl border border-background-primary hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={20} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary">{category.title}</h3>
                </div>
                <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-background-primary text-text-secondary text-[10px] sm:text-xs rounded-lg border border-background-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
