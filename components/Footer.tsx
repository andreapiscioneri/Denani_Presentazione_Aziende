import Link from 'next/link'
import Image from 'next/image'
import { getLocale } from 'next-intl/server'
import { Mail, MapPin } from 'lucide-react'

export default async function Footer() {
  const locale = await getLocale()

  return (
    <footer className="border-t border-white/5" style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="inline-flex mb-4" aria-label="Denani Home">
              <Image
                src="/Denani SRL.webp"
                alt="Denani SRL"
                width={120}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Partner strategico per la trasformazione digitale delle aziende che vogliono eccellere nel panorama competitivo moderno.
            </p>
            <div className="flex items-center gap-2 mt-6 flex-wrap">
              {[
                {
                  href: 'https://www.linkedin.com/company/denanisrl/',
                  label: 'LinkedIn',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.facebook.com/DENANISRL',
                  label: 'Facebook',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.instagram.com/denanisrl/',
                  label: 'Instagram',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.tiktok.com/@denanisrl',
                  label: 'TikTok',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.youtube.com/@denanisrl',
                  label: 'YouTube',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ),
                },
                {
                  href: 'https://www.denani.it/',
                  label: 'Sito web',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  ),
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg transition-all hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Servizi</h3>
            <ul className="space-y-3">
              {['Web & App Development', 'Digital Marketing', 'Artificial Intelligence', 'Cybersecurity', 'Business Intelligence', 'Brand & Design'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contatti</h3>
            <ul className="space-y-4">
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <div className="flex items-start gap-2">
                  <MapPin size={14} style={{ color: '#6EF0CC' }} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Sede legale</p>
                    <p>Via Camozzi 1/C</p>
                    <p>24027 Nembro (BG)</p>
                  </div>
                </div>
              </li>
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <div className="flex items-start gap-2">
                  <MapPin size={14} style={{ color: '#6EF0CC' }} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Sede operativa</p>
                    <p>Via Galimberti 6A</p>
                    <p>24124 Bergamo</p>
                  </div>
                </div>
              </li>
              <li>
                <a href="mailto:support@denani.it" className="flex items-center gap-2 text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <Mail size={14} style={{ color: '#6EF0CC' }} className="flex-shrink-0" />
                  support@denani.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <p>© {new Date().getFullYear()} Denani. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
