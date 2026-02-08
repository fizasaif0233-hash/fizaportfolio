'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Linkedin, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-background-secondary border-t border-background-primary py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Profile Section */}
          <motion.div 
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 rounded-full overflow-hidden border-2 border-accent/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src="/images/fiza-saif.jpeg"
                alt="Fiza Saif"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1 sm:mb-2">Fiza Saif</h3>
            <p className="text-xs sm:text-sm text-text-secondary text-center md:text-left">
              AI-Enhanced Full-Stack Engineer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-3 sm:mb-4">Quick Links</h4>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link, idx) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xs sm:text-sm text-text-secondary hover:text-accent transition-colors relative"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs sm:text-sm font-semibold text-text-primary mb-3 sm:mb-4">Get In Touch</h4>
            <div className="flex flex-col gap-2 sm:gap-3">
              <motion.a
                href="mailto:fizasaif0233@gmail.com"
                className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary hover:text-accent transition-colors"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <Mail size={14} className="sm:w-4 sm:h-4" />
                <span className="break-all">fizasaif0233@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/fiza-saif-3855642a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary hover:text-accent transition-colors"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <Linkedin size={14} className="sm:w-4 sm:h-4" />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://wa.me/923303923361"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary hover:text-accent transition-colors"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                +92 330 3923361 (Pakistan)
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-background-primary text-center">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Fiza Saif. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
