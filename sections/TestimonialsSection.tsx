'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'

export default function TestimonialsSection() {
  const t = useTranslations('testimonials')
  const items = t.raw('items') as Array<{ name: string; role: string; text: string }>
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % items.length), 4000)
    return () => clearInterval(timer)
  }, [items.length])

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(110,240,204,0.05), transparent)' }}
      />
      <div className="container-x relative z-10">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="max-w-3xl mx-auto">
          <div className="glass-strong rounded-3xl p-10 sm:p-14 text-center relative">
            <Quote size={48} className="mx-auto mb-6" style={{ color: 'rgba(110,240,204,0.2)' }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p
                  className="text-xl leading-relaxed mb-8 italic"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  &ldquo;{items[current].text}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-white">{items[current].name}</div>
                  <div className="text-sm mt-1" style={{ color: '#6EF0CC' }}>{items[current].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={() => setCurrent((c) => (c - 1 + items.length) % items.length)}
                className="p-2 glass rounded-full transition-all"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? '1.5rem' : '0.5rem',
                      background: i === current ? '#6EF0CC' : 'rgba(255,255,255,0.2)',
                    }}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((c) => (c + 1) % items.length)}
                className="p-2 glass rounded-full transition-all"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
