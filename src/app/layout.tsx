import type { Metadata } from 'next'
import { Source_Serif_4, IBM_Plex_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { CookieConsentProvider } from '@/components/CookieConsentProvider'
import { CookieConsent } from '@/components/CookieConsent'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif',
  weight: ['400', '600', '700'],
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-plex',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kfzwechselsaison.de'),
  title: {
    default: 'KFZ Wechselsaison – Kfz-Versicherung vergleichen, wechseln und sparen',
    template: '%s | KFZ Wechselsaison',
  },
  description:
    'Unabhängiges Verbraucherportal rund um den Kfz-Versicherungswechsel: Tarife vergleichen, Kündigungsfristen prüfen, Tipps zum Wechsel. Jetzt informieren.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'KFZ Wechselsaison',
  },
  twitter: {
    card: 'summary',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://kfzwechselsaison.de',
  },
  icons: {
    icon: [
      { url: '/icon.svg?v=3', type: 'image/svg+xml' },
      { url: '/icon.png?v=3', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico?v=3', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico?v=3'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KFZ Wechselsaison',
  url: 'https://kfzwechselsaison.de',
  description:
    'Unabhängiges Verbraucherportal rund um den Kfz-Versicherungswechsel in Deutschland.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'domain@kathe.org',
    contactType: 'customer service',
    availableLanguage: 'German',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KFZ Wechselsaison',
  url: 'https://kfzwechselsaison.de',
  description:
    'Kfz-Versicherung vergleichen, wechseln und sparen – das unabhängige Verbraucherportal.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${sourceSerif.variable} ${ibmPlexSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <CookieConsentProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </CookieConsentProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
