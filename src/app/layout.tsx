import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { CookieConsentProvider } from '@/components/CookieConsentProvider';
import { CookieConsent } from '@/components/CookieConsent';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SpeculationRules from '@/components/SpeculationRules';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kfzwechselsaison.de'),
  title: {
    default: 'KFZ Wechselsaison 2026/2027 – Fristen nach § 40 VVG, Sparrechner & Kündigung',
    template: '%s | KFZ Wechselsaison',
  },
  description:
    'Unabhängiges deutsches Fachportal zum Kfz-Versicherungswechsel: Stichtag 30. November, Kündigungsfristen nach § 40 VVG, Ersparnisrechner, GDV-Typklassen und rechtssicherer Kündigungs-Generator.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://kfzwechselsaison.de',
    siteName: 'KFZ Wechselsaison',
    title: 'KFZ Wechselsaison 2026/2027 – Stichtag 30. November & Sparpotenziale',
    description: 'Unabhängiges Verbraucherportal zum Autoversicherungs-Wechsel. Gesetzliche Fristen, Ersparnisrechner und Kündigungsvorlagen.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'KFZ Wechselsaison 2026/2027',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KFZ Wechselsaison 2026/2027 – Wechselfristen & Ersparnisrechner',
    description: 'Unabhängiges Verbraucherportal rund um den Kfz-Versicherungswechsel, Fristen nach VVG und GDV-Typklassen.',
    images: ['/og-image.svg'],
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
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'google-site-verification-kfzwechselsaison',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://kfzwechselsaison.de/#org',
  name: 'KFZ Wechselsaison',
  url: 'https://kfzwechselsaison.de',
  logo: 'https://kfzwechselsaison.de/icon.png',
  description:
    'Unabhängiges deutsches Verbraucher- und Fachportal rund um den Kfz-Versicherungswechsel, Fristen nach VVG und Tarifoptimierung.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'jens@kathe.org',
    contactType: 'customer service',
    availableLanguage: 'German',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://kfzwechselsaison.de/#website',
  name: 'KFZ Wechselsaison',
  url: 'https://kfzwechselsaison.de',
  inLanguage: 'de-DE',
  publisher: { '@id': 'https://kfzwechselsaison.de/#org' },
  description:
    'Unabhängiges Portal zum Kfz-Versicherungswechsel: Fristen nach § 40 VVG, Ersparnisrechner und Kündigung.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://kfzwechselsaison.de/ratgeber?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="alternate" type="application/rss+xml" title="KFZ Wechselsaison RSS Feed" href="/feed.xml" />
        <SpeculationRules />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-950">
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
  );
}
