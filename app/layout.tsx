import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { getLocale } from 'next-intl/server'
import './globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  icons: { icon: '/cropped-LOGO-VERDE.png.webp', shortcut: '/cropped-LOGO-VERDE.png.webp' },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()

  return (
    <html lang={locale} className={roboto.variable}>
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className="bg-black text-white antialiased overflow-x-hidden"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {children}
      </body>
    </html>
  )
}
