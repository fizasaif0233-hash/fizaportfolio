'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { basePath } from '@/lib/basePath'

interface Project {
  title: string
  description: string
  problem: string
  solution: string
  impact: string
  features: string[]
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  image?: string
}

const projects: Project[] = [
  {
    title: 'MyApproved',
    description: 'UK\'s #1 trusted tradespeople platform connecting customers with verified professionals',
    problem: 'Customers struggled to find reliable, verified tradespeople. The platform needed to build trust through verification, ratings, and transparent reviews.',
    solution: 'Built a comprehensive marketplace platform with verified tradesperson profiles, instant quote system, job posting functionality, and a robust review system. Implemented trust indicators including verification badges, insurance status, and 24/7 support.',
    impact: 'Platform serves 50K+ customers and 5K+ verified tradespeople with a 4.9/5 rating, becoming the UK\'s leading tradesperson platform.',
    features: ['Verified Tradespeople', 'Instant Quotes', 'Job Posting', 'Review System', '24/7 Support'],
    tags: ['Next.js', 'React', 'Supabase', 'TypeScript'],
    demoUrl: 'https://myapproved.com',
    image: '/images/myapproved.com',
  },
  {
    title: 'UpgradeRoofs',
    description: 'Professional roofing company website for Cheshire & Staffordshire with service management',
    problem: 'Roofing company needed a professional online presence to showcase services, gallery, reviews, and enable customer inquiries.',
    solution: 'Developed a modern, responsive website with service pages, project gallery, customer reviews, blog functionality, and integrated contact forms for free quotes.',
    impact: 'Improved online visibility and streamlined customer inquiries, enabling efficient lead generation.',
    features: ['Service Pages', 'Project Gallery', 'Customer Reviews', 'Blog System', 'Quote Requests'],
    tags: ['Next.js', 'React', 'TypeScript', 'Responsive Design'],
    demoUrl: 'https://www.upgraderoofs.co.uk',
    image: '/images/www.upgraderoofs.co.uk.png',
  },
  {
    title: 'AdsStarter',
    description: 'High-converting ad campaign platform with funnel strategy and automation',
    problem: 'Businesses needed performance-first paid ads, funnel strategy, and automation to scale their brands without managing complex ad systems.',
    solution: 'Built a comprehensive ad management platform with multi-channel campaigns (Facebook, Instagram, Google), funnel building, email retargeting, A/B testing, and performance dashboards.',
    impact: 'Enabled businesses to scale on autopilot with performance-optimized campaigns and automated funnels.',
    features: ['Multi-Channel Ads', 'Funnel Builder', 'Email Retargeting', 'A/B Testing', 'Performance Dashboard'],
    tags: ['Next.js', 'React', 'TypeScript', 'Analytics'],
    demoUrl: 'https://adsstarter.com',
    image: '/images/adsstarter.com',
  },
  {
    title: 'IdentiMarketing',
    description: 'AI-powered SEO & digital marketing agency platform for UK & US markets',
    problem: 'Marketing agency needed a platform to showcase AI-powered SEO services, testimonials, and case studies to attract international clients.',
    solution: 'Created a professional agency website with service pages, client testimonials, blog system, and contact forms. Implemented AI-powered SEO tools and case study presentations.',
    impact: 'Established strong online presence for the agency, attracting UK and US clients with clear service offerings.',
    features: ['Service Showcase', 'Client Testimonials', 'Blog System', 'Contact Forms', 'Case Studies'],
    tags: ['Next.js', 'React', 'TypeScript', 'AI Integration'],
    demoUrl: 'https://www.identimarketing.com',
    image: '/images/www.identimarketing.com',
  },
  {
    title: 'OmniWTMS',
    description: 'AI-powered warehouse & transport management system with 48-hour setup',
    problem: 'Logistics companies needed a comprehensive warehouse and transport management system that could be set up quickly without complex implementations.',
    solution: 'Developed a full-featured WMS/TMS platform with AI-powered features, real-time tracking, inventory management, route optimization, and white-label capabilities. Designed for rapid 48-hour deployment.',
    impact: 'Enabled logistics companies to streamline operations with fast implementation and comprehensive management tools.',
    features: ['Warehouse Management', 'Transport Tracking', 'AI Optimization', 'Real-time Updates', 'White-Label'],
    tags: ['Next.js', 'React', 'AI', 'TypeScript', 'Real-time'],
    demoUrl: 'https://omniwtms.com',
    image: '/images/omniwtms.com',
  },
  {
    title: 'Nelly\'s Logistics',
    description: '24/7 same-day & next-day courier service platform for West Midlands, UK',
    problem: 'Family-owned logistics company needed an online platform to manage 2,500+ business clients with instant quotes, service booking, and 24/7 support.',
    solution: 'Built a comprehensive logistics platform with instant quote system, service booking, real-time tracking, customer reviews, and 24/7 emergency support integration.',
    impact: 'Streamlined operations for 2,500+ businesses across West Midlands, UK, and Europe, improving customer service efficiency.',
    features: ['Instant Quotes', 'Service Booking', 'Real-time Tracking', '24/7 Support', 'Customer Portal'],
    tags: ['Next.js', 'React', 'TypeScript', 'Real-time'],
    demoUrl: 'https://www.nellyslogistics.com',
    image: '/images/www.nellyslogistics.com',
  },
  {
    title: 'Leverage Academy',
    description: 'Exclusive education platform for elite builders designing AI systems and digital assets',
    problem: 'Entrepreneurs needed a comprehensive education platform to learn about building AI systems, business infrastructure, and digital assets that compound exponentially.',
    solution: 'Created an exclusive learning platform with curriculum management, course delivery, case studies, and student dashboards. Focused on systems that work while you sleep.',
    impact: 'Enabled entrepreneurs to build leverage through systematic education and practical case studies.',
    features: ['Curriculum System', 'Course Delivery', 'Case Studies', 'Student Dashboard', 'Progress Tracking'],
    tags: ['Next.js', 'React', 'TypeScript', 'Education Tech'],
    demoUrl: 'https://leverageacademy.vercel.app',
    image: '/images/leverageacademy.vercel.app.png',
  },
  {
    title: 'Leverage Journal',
    description: '90-day transformation system for goal setting and life planning',
    problem: 'People needed a structured system for goal setting, life planning, and personal transformation with accountability and tracking.',
    solution: 'Built a comprehensive journaling and planning platform with 90-day transformation system, goal tracking, progress monitoring, and e-commerce integration for physical journal sales.',
    impact: 'Helped 10,000+ customers start their transformation journey with a 4.9/5 rating.',
    features: ['Goal Setting', 'Progress Tracking', '90-Day System', 'E-commerce Integration', 'User Dashboard'],
    tags: ['Next.js', 'React', 'E-commerce', 'TypeScript'],
    demoUrl: 'https://www.leveragejournal.com',
    image: '/images/www.leveragejournal.com',
  },
  {
    title: 'Inboker',
    description: 'AI-powered booking engine for appointment-based businesses',
    problem: 'Appointment-based businesses needed a flexible booking system that could be set up quickly without code, with calendar integration and branding options.',
    solution: 'Developed an AI-powered booking platform with customizable templates, calendar integration, industry-specific solutions, and white-label capabilities. Designed for 5-minute setup.',
    impact: 'Enabled businesses to start taking bookings in minutes without technical expertise, improving operational efficiency.',
    features: ['AI Booking Engine', 'Calendar Integration', 'Custom Templates', 'Industry Solutions', 'White-Label'],
    tags: ['Next.js', 'React', 'AI', 'TypeScript', 'Calendar API'],
    demoUrl: 'https://inboker.com',
    image: '/images/nboker.com',
  },
  {
    title: 'Alkhemmy',
    description: 'Luxury herbal skincare e-commerce platform with botanical formulations',
    problem: 'Luxury skincare brand needed an elegant e-commerce platform to showcase botanical formulations with premium user experience and AI-powered personalized assessments.',
    solution: 'Built a premium e-commerce platform with product catalog, collection management, AI-powered private formulation assessment, shopping cart, and seamless checkout experience.',
    impact: 'Created a premium online shopping experience that reflects the brand\'s luxury positioning and enables personalized product recommendations.',
    features: ['E-commerce Platform', 'Product Catalog', 'AI Assessments', 'Shopping Cart', 'Checkout System'],
    tags: ['Next.js', 'React', 'E-commerce', 'AI', 'TypeScript'],
    demoUrl: 'https://alkhemmy-com.vercel.app',
    image: '/images/alkhemmy-com.vercel.app.png',
  },
  {
    title: 'SEOInForce',
    description: 'SEO audit tool & white-label SEO services platform for agencies',
    problem: 'Agencies and businesses needed AI-powered SEO audits, competitor analysis, and white-label reporting capabilities without building custom tools.',
    solution: 'Developed a comprehensive SEO platform with AI-powered audits, keyword tracking, competitor analysis, white-label reports, and done-for-you SEO services. Trusted by 10,000+ businesses.',
    impact: 'Enabled agencies to offer professional SEO services with white-label capabilities, serving 10,000+ businesses.',
    features: ['AI SEO Audits', 'Keyword Tracking', 'Competitor Analysis', 'White-Label Reports', 'Agency Tools'],
    tags: ['Next.js', 'React', 'AI', 'SEO Tools', 'TypeScript'],
    demoUrl: 'https://seoinforce.com',
    image: '/images/seoinforce.com',
  },
  {
    title: 'FlipRepublic',
    description: 'Private marketplace for elite resale with authentication system',
    problem: 'Collectors needed a trusted platform for buying and selling authenticated luxury items with secure transactions and verification.',
    solution: 'Built a private marketplace platform with authentication system, seller dashboard, buyer portal, secure transactions, and exclusive access management for elite resale market.',
    impact: 'Created a trusted platform for collectors worldwide to buy and sell authenticated luxury items safely.',
    features: ['Marketplace Platform', 'Authentication System', 'Seller Dashboard', 'Secure Transactions', 'Access Control'],
    tags: ['Next.js', 'React', 'E-commerce', 'TypeScript', 'Authentication'],
    demoUrl: 'https://flip-republic-com.vercel.app',
    image: '/images/flip-republic-com.vercel.app.png',
  },
  {
    title: 'Khamare Clarke',
    description: 'AI automation, web development & digital marketing agency website',
    problem: 'Leading AI business growth architect needed a professional website to showcase services, case studies, and enable client consultations.',
    solution: 'Developed a premium agency website with service pages, case studies, blog system, business bundle offerings, and integrated consultation booking system.',
    impact: 'Established strong online presence for the UK\'s leading AI business growth architect, enabling efficient client acquisition.',
    features: ['Service Showcase', 'Case Studies', 'Blog System', 'Consultation Booking', 'Business Bundles'],
    tags: ['Next.js', 'React', 'TypeScript', 'Agency Website'],
    demoUrl: 'https://www.khamareclarke.com',
    image: '/images/khamareclarke.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
            Projects
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            Real projects solving real business problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="h-full p-4 sm:p-6 lg:p-8 bg-background-secondary rounded-xl border border-background-primary hover:border-accent/30 transition-all duration-300 flex flex-col"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {project.image && (
                  <motion.div 
                    className="mb-4 sm:mb-6 -mx-4 sm:-mx-6 lg:-mx-8 -mt-4 sm:-mt-6 lg:-mt-8 rounded-t-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative w-full h-40 sm:h-48 lg:h-56 bg-background-primary">
                      <Image
                        src={`${basePath}${project.image}`}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                  </motion.div>
                )}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-text-secondary mb-4">{project.description}</p>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 flex-grow">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-1">Problem</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{project.problem}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-1">Solution</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{project.solution}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-1">Impact</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{project.impact}</p>
                  </motion.div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-2 sm:mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                    {project.features.map((feature, idx) => (
                      <motion.li 
                        key={feature} 
                        className="text-xs sm:text-sm text-text-secondary flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5 text-accent flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-background-primary text-text-secondary text-[10px] sm:text-xs rounded-lg border border-background-primary"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(79, 124, 255, 0.1)' }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-background-primary">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
