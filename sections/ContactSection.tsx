'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Send, MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'

const schema = z.object({
  name: z.string().min(2, 'Minimo 2 caratteri'),
  surname: z.string().min(2, 'Minimo 2 caratteri'),
  company: z.string().optional(),
  email: z.string().email('Email non valida'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Minimo 10 caratteri'),
})

type FormData = z.infer<typeof schema>

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '0.75rem',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'all 0.2s ease',
  fontFamily: 'inherit',
}

const inputErrorStyle: React.CSSProperties = {
  ...inputStyle,
  border: '1px solid rgba(239,68,68,0.5)',
}

export default function ContactSection() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-pad relative">
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(110,240,204,0.05), transparent)' }}
      />
      <div className="container-x relative z-10">
        <SectionTitle eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 space-y-6">
              {[
                { icon: MapPin, label: t('address'), href: undefined },
                { icon: Phone, label: t('phone_label'), href: 'tel:+390212345678' },
                { icon: Mail, label: t('email_label'), href: 'mailto:support@denani.it' },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(110,240,204,0.1)',
                      border: '1px solid rgba(110,240,204,0.2)',
                    }}
                  >
                    <Icon size={18} style={{ color: '#6EF0CC' }} />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-8 space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    {...register('name')}
                    placeholder={t('name')}
                    style={errors.name ? inputErrorStyle : inputStyle}
                  />
                  {errors.name && (
                    <p className="text-xs mt-1" style={{ color: 'rgba(239,68,68,0.9)' }}>
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register('surname')}
                    placeholder={t('surname')}
                    style={errors.surname ? inputErrorStyle : inputStyle}
                  />
                  {errors.surname && (
                    <p className="text-xs mt-1" style={{ color: 'rgba(239,68,68,0.9)' }}>
                      {errors.surname.message}
                    </p>
                  )}
                </div>
              </div>

              <input {...register('company')} placeholder={t('company')} style={inputStyle} />

              <div>
                <input
                  {...register('email')}
                  type="email"
                  placeholder={t('email')}
                  style={errors.email ? inputErrorStyle : inputStyle}
                />
                {errors.email && (
                  <p className="text-xs mt-1" style={{ color: 'rgba(239,68,68,0.9)' }}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <input {...register('phone')} type="tel" placeholder={t('phone')} style={inputStyle} />

              <div>
                <textarea
                  {...register('message')}
                  placeholder={t('message_placeholder')}
                  rows={5}
                  style={{ ...( errors.message ? inputErrorStyle : inputStyle), resize: 'none' }}
                />
                {errors.message && (
                  <p className="text-xs mt-1" style={{ color: 'rgba(239,68,68,0.9)' }}>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {status === 'success' && (
                <div
                  className="flex items-center gap-2 p-4 rounded-xl text-sm"
                  style={{
                    background: 'rgba(110,240,204,0.1)',
                    border: '1px solid rgba(110,240,204,0.2)',
                    color: '#6EF0CC',
                  }}
                >
                  <CheckCircle size={16} />
                  {t('success')}
                </div>
              )}

              {status === 'error' && (
                <div
                  className="flex items-center gap-2 p-4 rounded-xl text-sm"
                  style={{
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.2)',
                    color: 'rgba(239,68,68,0.9)',
                  }}
                >
                  <AlertCircle size={16} />
                  {t('error')}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center"
                style={status === 'loading' ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
              >
                {status === 'loading' ? t('sending') : t('submit')}
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
