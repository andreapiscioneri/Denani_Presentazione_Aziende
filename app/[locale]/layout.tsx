import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'hero' })

  return {
    metadataBase: new URL('https://denani.it'),
    title: {
      default: 'Denani — Partner Strategico per la Trasformazione Digitale',
      template: '%s | Denani',
    },
    description: t('subtitle'),
    keywords: ['digital transformation', 'web development', 'marketing digitale', 'AI', 'Denani'],
    authors: [{ name: 'Denani' }],
    creator: 'Denani',
    publisher: 'Denani',
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: 'website',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      url: 'https://denani.it',
      siteName: 'Denani',
      title: 'Denani — Partner Strategico per la Trasformazione Digitale',
      description: t('subtitle'),
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Denani' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Denani — Partner Strategico per la Trasformazione Digitale',
      description: t('subtitle'),
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `https://denani.it/${locale}`,
      languages: { 'it': 'https://denani.it/it', 'en': 'https://denani.it/en' },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as 'it' | 'en')) notFound()

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Denani',
            url: 'https://denani.it',
            logo: 'https://denani.it/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+39-02-1234567',
              contactType: 'customer service',
              availableLanguage: ['Italian', 'English'],
            },
            sameAs: ['https://www.linkedin.com/company/denani'],
          }),
        }}
      />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  )
}
