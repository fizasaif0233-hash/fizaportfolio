'use client'

import { motion } from 'framer-motion'

interface SparkleProps {
  x: number
  y: number
  delay?: number
}

export default function Sparkle({ x, y, delay = 0 }: SparkleProps) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: 'easeInOut',
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-accent rounded-full blur-sm" />
        <div className="relative w-2 h-2 bg-accent rounded-full" />
      </div>
    </motion.div>
  )
}
