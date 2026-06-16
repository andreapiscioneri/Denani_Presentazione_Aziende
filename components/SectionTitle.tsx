'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }: SectionTitleProps) {
  return (
    <motion.div
      className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && (
        <div className={`mb-4 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
