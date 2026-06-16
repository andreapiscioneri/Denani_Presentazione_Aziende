'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, FolderOpen } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'

export default function CTASection() {
  const t = useTranslations('cta')

  return (
    <section id="cta" className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(110,240,204,0.08), transparent)' }}
      />
      <div className="container-x relative z-10">
        <div className="glass-strong rounded-3xl p-12 sm:p-16 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <span className="eyebrow">{t('eyebrow')}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gradient mb-5 leading-tight">
              {t('title')}
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-primary group">
                {t('button')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="btn-ghost flex items-center gap-2">
                <FolderOpen size={18} />
                {t('secondary')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
