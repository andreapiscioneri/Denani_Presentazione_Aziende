'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
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
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass rounded-2xl overflow-hidden group"
                style={{ cursor: 'pointer' }}
                whileHover={{ y: -4 }}
              >
                {/* Placeholder image area */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(110,240,204,0.1), transparent)' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-black" style={{ fontSize: '6rem', color: 'rgba(110,240,204,0.1)' }}>
                      {item.tag[0]}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: 'rgba(110,240,204,0.2)',
                        border: '1px solid rgba(110,240,204,0.3)',
                        color: '#6EF0CC',
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-white mb-2 flex items-center justify-between">
                    {item.title}
                    <ArrowUpRight size={16} style={{ opacity: 0, transition: 'opacity 0.2s' }} className="group-hover:opacity-100" />
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
