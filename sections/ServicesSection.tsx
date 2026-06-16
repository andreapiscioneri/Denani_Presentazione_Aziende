'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Globe, TrendingUp, Cpu, Shield, BarChart3, Palette } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'

const iconMap: Record<string, LucideIcon> = { Globe, TrendingUp, Cpu, Shield, BarChart3, Palette }

export default function ServicesSection() {
  const t = useTranslations('services')
  const items = t.raw('items') as Array<{ icon: string; title: string; desc: string }>

  return (
    <section id="services" className="section-pad relative">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(110,240,204,0.04), transparent)' }}
      />
      <div className="container-x relative z-10">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Globe
            return (
              <motion.article
                key={item.title}
                className="glass rounded-2xl p-7 group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}
                style={{ cursor: 'default' }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: 'rgba(110,240,204,0.1)',
                    border: '1px solid rgba(110,240,204,0.15)',
                  }}
                >
                  <Icon size={22} style={{ color: '#6EF0CC' }} />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {item.desc}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
