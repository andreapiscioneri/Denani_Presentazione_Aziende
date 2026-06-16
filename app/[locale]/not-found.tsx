import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl font-black text-accent-gradient mb-4">404</div>
      <h1 className="text-2xl font-bold text-white mb-4">Pagina non trovata</h1>
      <p className="text-white/60 mb-8">La pagina che stai cercando non esiste.</p>
      <Link href="/" className="btn-primary">Torna alla Home</Link>
    </div>
  )
}
