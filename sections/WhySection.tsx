'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'

export default function WhySection() {
  const t = useTranslations('why')
  const items = t.raw('items') as Array<{ title: string; desc: string }>

  return (
    <section id="why" className="section-pad relative">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(110,240,204,0.05), transparent)' }}
      />
      <div className="container-x relative z-10">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass rounded-2xl p-6 flex gap-4"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <CheckCircle2 size={22} className="flex-shrink-0 mt-0.5" style={{ color: '#6EF0CC' }} />
              <div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
