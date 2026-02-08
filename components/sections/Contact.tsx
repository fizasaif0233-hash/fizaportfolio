'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, MessageCircle, Send } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { basePath } from '@/lib/basePath'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4 sm:mb-6">
              Let's Work Together
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-4 sm:mb-6 rounded-full" />
            <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-2xl mx-auto mb-3 sm:mb-4">
              Let's build something reliable and scalable together.
            </p>
            <p className="text-xs sm:text-sm text-text-secondary/80 px-4">
              Have a project in mind? Get in touch and let's discuss how I can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-background-primary rounded-xl text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background-secondary border border-background-primary rounded-xl text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background-secondary border border-background-primary rounded-xl text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-accent/10 border border-accent/20 rounded-xl text-text-primary text-sm"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
                  >
                    Something went wrong. Please try again or contact me directly via email.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="p-4 sm:p-6 lg:p-8 bg-background-secondary rounded-xl border border-background-primary">
                <div className="flex flex-col items-center mb-4 sm:mb-6">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3 sm:mb-4 rounded-full overflow-hidden border-2 border-accent/20">
                    <Image
                      src={`${basePath}/images/fiza-saif.jpeg`}
                      alt="Fiza Saif"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-1 sm:mb-2">
                    Get in Touch
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary text-center">
                    Let's build something together
                  </p>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <a
                    href="mailto:fizasaif0233@gmail.com"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background-primary rounded-xl hover:bg-background-secondary transition-colors group"
                  >
                    <div className="p-2 sm:p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Mail className="text-accent" size={18} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-text-secondary mb-1">Email</div>
                      <div className="text-xs sm:text-sm text-text-primary font-medium break-all">fizasaif0233@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/fiza-saif-3855642a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background-primary rounded-xl hover:bg-background-secondary transition-colors group"
                  >
                    <div className="p-2 sm:p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Linkedin className="text-accent" size={18} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-text-secondary mb-1">LinkedIn</div>
                      <div className="text-xs sm:text-sm text-text-primary font-medium">Connect on LinkedIn</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/923303923361"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background-primary rounded-xl hover:bg-background-secondary transition-colors group"
                  >
                    <div className="p-2 sm:p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <MessageCircle className="text-accent" size={18} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-text-secondary mb-1">WhatsApp / Phone</div>
                      <div className="text-xs sm:text-sm text-text-primary font-medium">+92 330 3923361 (Pakistan)</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-background-secondary rounded-xl border border-accent/20">
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                  <span className="text-text-primary font-medium">Response Time:</span> I typically respond within 24 hours. For urgent matters, please use WhatsApp or email directly.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
