import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { Mail, Phone, MapPin, Share2, ExternalLink } from 'lucide-react'

export default async function Footer() {
  const locale = await getLocale()

  return (
    <footer className="border-t border-white/5" style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#6EF0CC' }}>
                <span className="text-black font-black text-sm">D</span>
              </div>
              <span className="font-bold text-white text-lg">Denani</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Partner strategico per la trasformazione digitale delle aziende che vogliono eccellere nel panorama competitivo moderno.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com/company/denani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-lg transition-all"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                aria-label="LinkedIn"
              >
                <Share2 size={16} />
              </a>
              <a
                href="https://instagram.com/denani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-lg transition-all"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                aria-label="Instagram"
              >
                <ExternalLink size={16} />
              </a>
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
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <MapPin size={14} style={{ color: '#6EF0CC' }} className="flex-shrink-0" />
                Via della Tecnologia 1, Milano
              </li>
              <li>
                <a href="tel:+390212345678" className="flex items-center gap-2 text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  <Phone size={14} style={{ color: '#6EF0CC' }} className="flex-shrink-0" />
                  +39 02 1234567
                </a>
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
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href={`/${locale}/cookie`} className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
