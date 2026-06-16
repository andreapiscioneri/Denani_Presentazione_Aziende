'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Users, FolderOpen, Clock, Star } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

export default function HeroSection() {
  const t = useTranslations('hero')

  const stats = [
    { icon: Users, value: '150+', label: t('stats.clients') },
    { icon: FolderOpen, value: '300+', label: t('stats.projects') },
    { icon: Clock, value: '8', label: t('stats.years') },
    { icon: Star, value: '98%', label: t('stats.satisfaction') },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="absolute inset-0" style={{ backgroundColor: '#000' }} />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(110,240,204,0.12), transparent)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'rgba(110,240,204,0.05)', filter: 'blur(80px)' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.03,
          backgroundImage:
            'linear-gradient(rgba(110,240,204,1) 1px, transparent 1px), linear-gradient(90deg, rgba(110,240,204,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-x relative z-10 text-center py-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <span className="eyebrow">{t('eyebrow')}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="font-black leading-tight tracking-tight mb-6 max-w-5xl mx-auto"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.05 }}
          >
            <span className="text-gradient">{t('title')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            {t('subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#services" className="btn-primary group">
              {t('cta_primary')}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-ghost">
              {t('cta_secondary')}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="glass rounded-2xl p-4 text-center">
                <Icon size={20} className="mx-auto mb-2" style={{ color: '#6EF0CC' }} />
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: 'rgba(255,255,255,0.3)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} style={{ animation: 'scrollHint 1.8s ease-in-out infinite' }} />
        </motion.div>
      </div>
    </section>
  )
}
