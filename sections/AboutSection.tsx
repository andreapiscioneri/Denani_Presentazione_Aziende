'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Lightbulb, Trophy, Shield, Target } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'

const valueIcons = {
  innovation: Lightbulb,
  excellence: Trophy,
  reliability: Shield,
  results: Target,
}

export default function AboutSection() {
  const t = useTranslations('about')

  return (
    <section id="about" className="section-pad relative">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 50%, rgba(110,240,204,0.04), transparent)' }}
      />
      <div className="container-x relative z-10">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {(['mission', 'vision'] as const).map((key) => (
            <motion.div
              key={key}
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="eyebrow mb-4 inline-flex">{t(`${key}_label`)}</div>
              <p className="leading-relaxed text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {t(key)}
              </p>
            </motion.div>
          ))}
        </div>

        <div>
          <h3
            className="text-sm font-medium uppercase tracking-widest text-center mb-8"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            {t('values.title')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(Object.keys(valueIcons) as Array<keyof typeof valueIcons>).map((key, i) => {
              const Icon = valueIcons[key]
              return (
                <motion.div
                  key={key}
                  className="glass rounded-2xl p-6 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ transition: 'transform 0.3s ease' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: 'rgba(110,240,204,0.1)',
                      border: '1px solid rgba(110,240,204,0.2)',
                    }}
                  >
                    <Icon size={20} style={{ color: '#6EF0CC' }} />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{t(`values.${key}.title`)}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {t(`values.${key}.desc`)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
