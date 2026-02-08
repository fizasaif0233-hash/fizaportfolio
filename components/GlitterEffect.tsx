'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GlitterParticle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function GlitterEffect() {
  const [particles, setParticles] = useState<GlitterParticle[]>([])

  useEffect(() => {
    const particleCount = 15
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'radial-gradient(circle, rgba(79, 124, 255, 0.8) 0%, rgba(79, 124, 255, 0) 70%)',
            boxShadow: `0 0 ${particle.size * 3}px rgba(79, 124, 255, 0.6)`,
          }}
          animate={{
            opacity: [0, 1, 0.8, 0],
            scale: [0, 1.2, 1, 0],
            y: [0, -20, -40],
            x: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 2 + 1,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}
