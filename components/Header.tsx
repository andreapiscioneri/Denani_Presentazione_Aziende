'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const LANGUAGES = [
  { code: 'it', label: 'Italiano', flag: '/flag-it.svg' },
  { code: 'en', label: 'English', flag: '/flag-en.svg' },
] as const

export default function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
    setLangOpen(false)
  }

  const currentLang = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0]

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
          <Image
            src="/Denani SRL.webp"
            alt="Denani SRL"
            width={120}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
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
          {/* Language Switcher Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1.5 glass rounded-full px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white transition-all duration-200 group"
              aria-label="Select language"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
            >
              <Image src={currentLang.flag} alt={currentLang.label} width={16} height={12} className="rounded-[2px] object-cover" />
              <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
              <ChevronDown
                size={11}
                className={`opacity-50 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute right-0 mt-2 w-36 glass border border-white/10 rounded-xl shadow-xl overflow-hidden"
                  role="listbox"
                  aria-label="Language options"
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      role="option"
                      aria-selected={locale === lang.code}
                      onClick={() => switchLocale(lang.code)}
                      className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-medium transition-all duration-150"
                      style={{
                        background: locale === lang.code ? 'rgba(110,240,204,0.12)' : 'transparent',
                        color: locale === lang.code ? '#6EF0CC' : 'rgba(255,255,255,0.65)',
                      }}
                    >
                      <Image src={lang.flag} alt={lang.label} width={18} height={13} className="rounded-[2px] object-cover flex-shrink-0" />
                      <span>{lang.label}</span>
                      {locale === lang.code && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: '#6EF0CC' }} />
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
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
