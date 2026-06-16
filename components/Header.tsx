'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#services', label: t('services') },
    { href: '#portfolio', label: t('portfolio') },
    { href: '#contact', label: t('contact') },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 group" aria-label="Denani Home">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center" style={{ backgroundColor: '#6EF0CC' }}>
            <span className="text-black font-black text-sm">D</span>
          </div>
          <span className="font-bold text-white text-lg tracking-tight group-hover:text-accent transition-colors" style={{ '--tw-text-opacity': '1' } as React.CSSProperties}>
            Denani
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-medium"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 glass rounded-full px-2 py-1">
            {(['it', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => switchLocale(lang)}
                className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-all duration-200"
                style={{
                  background: locale === lang ? '#6EF0CC' : 'transparent',
                  color: locale === lang ? '#000' : 'rgba(255,255,255,0.6)',
                }}
                aria-label={lang === 'it' ? 'Italiano' : 'English'}
              >
                <span>{lang === 'it' ? '🇮🇹' : '🇬🇧'}</span>
                <span className="hidden sm:inline">{lang.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <a href="#contact" className="hidden sm:inline-flex btn-primary text-sm py-2 px-4">
            {t('cta')}
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden glass border-t border-white/5 overflow-hidden"
          >
            <nav className="container-x py-6 flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white py-2 font-medium transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-center mt-2" onClick={() => setMobileOpen(false)}>
                {t('cta')}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
