'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'

const translations = {
  it: {
    eyebrow: 'Errore 404',
    title: 'Pagina non trovata',
    desc: 'La pagina che stai cercando non esiste o è stata spostata.',
    home: 'Torna alla Home',
    back: 'Pagina precedente',
  },
  en: {
    eyebrow: 'Error 404',
    title: 'Page not found',
    desc: "The page you're looking for doesn't exist or has been moved.",
    home: 'Back to Home',
    back: 'Previous page',
  },
}

export default function NotFound() {
  const pathname = usePathname()
  const segment = pathname?.split('/')[1] ?? 'it'
  const locale = segment in translations ? segment : 'it'
  const t = translations[locale as keyof typeof translations]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(110,240,204,0.07), transparent)',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: 400, height: 400, top: '10%', left: '5%',
          background: 'rgba(110,240,204,0.04)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: 300, height: 300, bottom: '10%', right: '5%',
          background: 'rgba(110,240,204,0.03)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />

      <div className="container-x relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex justify-center mb-6">
            <span className="eyebrow">{t.eyebrow}</span>
          </div>

          <div
            className="font-black leading-none mb-6 select-none"
            style={{
              fontSize: 'clamp(7rem, 20vw, 14rem)',
              background: 'linear-gradient(135deg, #6EF0CC 0%, #9FFADF 50%, #4BC9A8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 60px rgba(110,240,204,0.25))',
            }}
          >
            404
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-base max-w-md mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {t.desc}
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/" className="btn-primary">
              <Home size={16} />
              {t.home}
            </Link>
            <button onClick={() => window.history.back()} className="btn-ghost">
              <ArrowLeft size={16} />
              {t.back}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
