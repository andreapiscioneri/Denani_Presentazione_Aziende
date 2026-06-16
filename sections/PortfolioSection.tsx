'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Globe, Smartphone, TrendingUp, Brain, Code, type LucideIcon } from 'lucide-react'

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Web: Globe,
  App: Smartphone,
  Marketing: TrendingUp,
  AI: Brain,
}

const CATEGORY_COLORS: Record<string, string> = {
  Web: 'rgba(110,240,204,0.15)',
  App: 'rgba(99,179,237,0.15)',
  Marketing: 'rgba(246,173,85,0.15)',
  AI: 'rgba(183,148,244,0.15)',
}

const CATEGORY_ICON_COLORS: Record<string, string> = {
  Web: '#6EF0CC',
  App: '#63B3ED',
  Marketing: '#F6AD55',
  AI: '#B794F4',
}
import SectionTitle from '@/components/SectionTitle'

export default function PortfolioSection() {
  const t = useTranslations('portfolio')
  const items = t.raw('items') as Array<{ category: string; title: string; desc: string; tag: string }>
  const filters = t.raw('filters') as string[]
  const [activeFilter, setActiveFilter] = useState(filters[0])

  const filtered = activeFilter === filters[0] ? items : items.filter((i) => i.category === activeFilter)

  return (
    <section id="portfolio" className="section-pad relative">
      <div className="container-x relative z-10">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              style={
                activeFilter === filter
                  ? { background: '#6EF0CC', color: '#000' }
                  : {
                      background: 'rgba(255,255,255,0.05)',
                      color: 'rgba(255,255,255,0.6)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(8px)',
                    }
              }
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.a
                key={item.title}
                layout
                href="https://www.denani.it"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass rounded-2xl overflow-hidden group block"
                whileHover={{ y: -4 }}
              >
                {/* Icon area */}
                {(() => {
                  const Icon = CATEGORY_ICONS[item.tag] ?? Code
                  const bg = CATEGORY_COLORS[item.tag] ?? 'rgba(110,240,204,0.1)'
                  const iconColor = CATEGORY_ICON_COLORS[item.tag] ?? '#6EF0CC'
                  return (
                    <div
                      className="h-44 relative overflow-hidden flex items-center justify-center"
                      style={{ background: bg }}
                    >
                      <Icon
                        size={64}
                        strokeWidth={1}
                        style={{ color: iconColor, opacity: 0.7 }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: `${iconColor}22`,
                            border: `1px solid ${iconColor}44`,
                            color: iconColor,
                          }}
                        >
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  )
                })()}
                <div className="p-6">
                  <h3 className="font-bold text-white mb-2 flex items-center justify-between">
                    {item.title}
                    <ArrowUpRight size={16} style={{ opacity: 0, transition: 'opacity 0.2s' }} className="group-hover:opacity-100" />
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
