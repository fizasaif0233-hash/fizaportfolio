'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Review {
  name: string
  role: string
  company: string
  project: string
  content: string
  rating: number
}

const reviews: Review[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder',
    company: 'MyApproved',
    project: 'MyApproved Platform',
    content: 'Working with Fiza was an absolute game-changer for our platform. She understood our vision from day one and delivered a solution that exceeded our expectations. The attention to detail, the way she handled our complex requirements, and her ability to communicate clearly throughout the process made everything seamless. Our platform now serves 50K+ users and it would not have been possible without her expertise.',
    rating: 5,
  },
  {
    name: 'James Thompson',
    role: 'CEO',
    company: 'AdsStarter',
    project: 'AdsStarter Platform',
    content: 'I have worked with many developers over the years, but Fiza stands out. She built our entire ad management platform from scratch, and the quality of work is outstanding. What impressed me most was how she explained technical concepts in a way we could understand, and how she always kept us updated on progress. The platform has been running smoothly since launch, and our team loves working with it.',
    rating: 5,
  },
  {
    name: 'Emma Richardson',
    role: 'Operations Manager',
    company: 'Nelly\'s Logistics',
    project: 'Nelly\'s Logistics Platform',
    content: 'Fiza transformed our logistics operations with the platform she built. We needed something that could handle 2,500+ business clients, and she delivered exactly that. The instant quote system alone has saved us countless hours. She was patient with our feedback, made changes quickly, and the final product is exactly what we needed. Highly recommend working with her.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder',
    company: 'OmniWTMS',
    project: 'OmniWTMS System',
    content: 'The warehouse management system Fiza built for us is incredible. She managed to get it up and running in record time, and the AI-powered features she implemented have made our operations so much more efficient. Her technical skills are top-notch, but what really sets her apart is her professionalism and reliability. She is someone you can count on to deliver quality work on time.',
    rating: 5,
  },
  {
    name: 'David Williams',
    role: 'Marketing Director',
    company: 'IdentiMarketing',
    project: 'IdentiMarketing Website',
    content: 'Fiza created our agency website and it has been instrumental in attracting new clients. The design is clean, professional, and exactly what we needed to showcase our services. She was responsive to our requests, made revisions quickly, and the final result speaks for itself. Our client inquiries have increased significantly since the site went live.',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    role: 'Product Manager',
    company: 'Inboker',
    project: 'Inboker Booking Platform',
    content: 'Building our booking engine with Fiza was a smooth experience from start to finish. She understood our requirements perfectly and built a platform that our users love. The AI features she integrated work flawlessly, and the setup process she designed makes it easy for businesses to get started. She is talented, professional, and I would work with her again in a heartbeat.',
    rating: 5,
  },
  {
    name: 'Robert Martinez',
    role: 'Founder',
    company: 'SEOInForce',
    project: 'SEOInForce Platform',
    content: 'Fiza built our SEO platform and it has been a huge success. The white-label features she implemented have allowed us to serve thousands of agencies, and the AI-powered audit tools work perfectly. She handled complex technical challenges with ease and always kept us informed. The platform is stable, fast, and our users are very happy with it.',
    rating: 5,
  },
  {
    name: 'Jennifer Brown',
    role: 'E-commerce Director',
    company: 'Alkhemmy',
    project: 'Alkhemmy E-commerce Platform',
    content: 'Working with Fiza on our luxury skincare e-commerce platform was a pleasure. She understood our brand aesthetic and created a shopping experience that reflects our premium positioning. The AI-powered assessment feature she built has been a huge hit with our customers. She is detail-oriented, creative, and delivers work that exceeds expectations.',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 lg:py-32 relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
            Client Reviews
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4 sm:mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
            What project owners say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-4 sm:p-6 lg:p-8 bg-background-secondary rounded-xl border border-background-primary hover:border-accent/30 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <motion.div 
                  className="p-2 sm:p-3 bg-accent/10 rounded-lg flex-shrink-0"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                >
                  <Quote className="text-accent" size={20} />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-1">{review.name}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary mb-1">{review.role}, {review.company}</p>
                  <p className="text-[10px] sm:text-xs text-accent">{review.project}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">{review.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
