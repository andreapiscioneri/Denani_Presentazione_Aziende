'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, RotateCcw, AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(110,240,204,0.06), transparent)',
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: 400,
          height: 400,
          top: '10%',
          left: '5%',
          background: 'rgba(110,240,204,0.04)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: 300,
          height: 300,
          bottom: '10%',
          right: '5%',
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
          {/* Eyebrow */}
          <div className="flex justify-center mb-6">
            <span className="eyebrow">Errore imprevisto</span>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-24 h-24 rounded-3xl flex items-center justify-center"
              style={{
                background: 'rgba(110,240,204,0.08)',
                border: '1px solid rgba(110,240,204,0.2)',
                boxShadow: '0 0 60px rgba(110,240,204,0.1)',
              }}
            >
              <AlertTriangle size={44} strokeWidth={1.5} style={{ color: '#6EF0CC' }} />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Qualcosa è andato storto
          </h1>
          <p className="text-base max-w-md mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Si è verificato un errore inaspettato. Prova a ricaricare la pagina o torna alla home.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button onClick={reset} className="btn-primary">
              <RotateCcw size={16} />
              Riprova
            </button>
            <a href="/" className="btn-ghost">
              <Home size={16} />
              Torna alla Home
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
