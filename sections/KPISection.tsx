'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/SectionTitle'
import { useCounter } from '@/hooks/useCounter'

function KPICard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, value: animated } = useCounter({ to: value, duration: 2 })

  return (
    <motion.div
      className="glass-strong rounded-2xl p-8 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay, duration: 0.5 }}
    >
      <div
        className="text-5xl font-black mb-2 text-accent-gradient"
        ref={ref as React.RefObject<HTMLDivElement>}
      >
        {Math.round(animated)}{suffix}
      </div>
      <div className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</div>
    </motion.div>
  )
}

export default function KPISection() {
  const t = useTranslations('kpi')
  const items = t.raw('items') as Array<{ value: number; suffix: string; label: string }>

  return (
    <section id="kpi" className="section-pad relative">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 50%, rgba(110,240,204,0.06), transparent)' }}
      />
      <div className="container-x relative z-10">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <KPICard key={item.label} {...item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
