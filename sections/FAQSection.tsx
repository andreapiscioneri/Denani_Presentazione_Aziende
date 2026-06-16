'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'

export default function FAQSection() {
  const t = useTranslations('faq')
  const items = t.raw('items') as Array<{ q: string; a: string }>
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-pad relative">
      <div className="container-x relative z-10">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <button
                className="w-full text-left p-6 flex items-center justify-between gap-4 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium text-white pr-4">{item.q}</span>
                <ChevronDown
                  size={18}
                  style={{
                    color: '#6EF0CC',
                    flexShrink: 0,
                    transition: 'transform 0.3s ease',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-6 text-sm leading-relaxed"
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        paddingTop: '1rem',
                      }}
                    >
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* FAQ Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: items.map((item) => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
