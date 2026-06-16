import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['it', 'en'],
  defaultLocale: 'it',
  pathnames: {
    '/': '/',
    '/servizi': { it: '/servizi', en: '/services' },
    '/portfolio': '/portfolio',
    '/contatti': { it: '/contatti', en: '/contact' },
  },
})
