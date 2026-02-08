'use client'

import { motion } from 'framer-motion'
import { basePath } from '@/lib/basePath'

export default function VideoIntroduction() {
  return (
    <section id="video-intro" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6 px-4">
              Meet the Developer
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-4 sm:mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-4">
              A brief introduction to who I am and how I approach software engineering
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video bg-background-secondary rounded-xl border border-background-primary overflow-hidden group mx-4 sm:mx-0"
          >
            <video
              className="w-full h-full object-cover"
              src={`${basePath}/videos/fiza-intro-video.mp4`}
              title="Fiza Saif – Meet the Developer"
              controls
              playsInline
              preload="metadata"
              poster={`${basePath}/images/fiza-saif.jpeg`}
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-text-secondary text-xs sm:text-sm mt-4 sm:mt-6 px-4"
          >
            This video provides a personal introduction and helps establish trust and connection with potential clients.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
