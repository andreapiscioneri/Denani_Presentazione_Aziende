import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import HeroSection from '@/sections/HeroSection'
import AboutSection from '@/sections/AboutSection'
import ServicesSection from '@/sections/ServicesSection'
import WhySection from '@/sections/WhySection'
import KPISection from '@/sections/KPISection'
import PortfolioSection from '@/sections/PortfolioSection'
import TestimonialsSection from '@/sections/TestimonialsSection'
import FAQSection from '@/sections/FAQSection'
import CTASection from '@/sections/CTASection'
import ContactSection from '@/sections/ContactSection'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'hero' })
  return {
    title: t('title'),
    description: t('subtitle'),
  }
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhySection />
      <KPISection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </>
  )
}
