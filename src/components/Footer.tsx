'use client'

import Link from 'next/link'
import { useCookieConsent } from './CookieConsentProvider'

export function Footer() {
  const { openSettings } = useCookieConsent()

  return (
    <footer className="border-t border-border bg-surface-subtle">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        {/* Top section */}
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-3 inline-flex items-baseline gap-1 no-underline">
              <span className="text-lg font-bold tracking-tight text-brand">KFZ</span>
              <span className="text-base font-medium tracking-tight text-text">Wechselsaison</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-text-muted">
              Unabhängiges Verbraucherportal rund um den Kfz-Versicherungswechsel.
              Tarife vergleichen, Kündigungsfristen prüfen, Tipps zum Wechsel.
            </p>
          </div>

          {/* Versicherungswechsel */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Versicherungswechsel
            </p>
            <ul className="space-y-2">
              <li><Link href="/kfz-versicherung-wechseln/" className="text-sm text-text-secondary no-underline hover:text-text">Versicherung wechseln</Link></li>
              <li><Link href="/kfz-versicherung-vergleichen/" className="text-sm text-text-secondary no-underline hover:text-text">Tarife vergleichen</Link></li>
              <li><Link href="/kfz-versicherung-kuendigen/" className="text-sm text-text-secondary no-underline hover:text-text">Versicherung kündigen</Link></li>
              <li><Link href="/kuendigungsfrist-kfz-versicherung/" className="text-sm text-text-secondary no-underline hover:text-text">Kündigungsfrist</Link></li>
              <li><Link href="/30-november-kfz-versicherung/" className="text-sm text-text-secondary no-underline hover:text-text">30. November</Link></li>
            </ul>
          </div>

          {/* Versicherungsarten */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Versicherungsarten
            </p>
            <ul className="space-y-2">
              <li><Link href="/kfz-haftpflicht/" className="text-sm text-text-secondary no-underline hover:text-text">Kfz-Haftpflicht</Link></li>
              <li><Link href="/teilkasko/" className="text-sm text-text-secondary no-underline hover:text-text">Teilkasko</Link></li>
              <li><Link href="/vollkasko/" className="text-sm text-text-secondary no-underline hover:text-text">Vollkasko</Link></li>
              <li><Link href="/e-auto-versicherung/" className="text-sm text-text-secondary no-underline hover:text-text">E-Auto-Versicherung</Link></li>
              <li><Link href="/zweitwagenversicherung/" className="text-sm text-text-secondary no-underline hover:text-text">Zweitwagenversicherung</Link></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Service
            </p>
            <ul className="space-y-2">
              <li><Link href="/ratgeber/" className="text-sm text-text-secondary no-underline hover:text-text">Ratgeber</Link></li>
              <li><Link href="/faq/" className="text-sm text-text-secondary no-underline hover:text-text">Häufige Fragen</Link></li>
              <li><Link href="/ueber-uns/" className="text-sm text-text-secondary no-underline hover:text-text">Über uns</Link></li>
              <li><Link href="/impressum/" className="text-sm text-text-secondary no-underline hover:text-text">Impressum</Link></li>
              <li><Link href="/datenschutz/" className="text-sm text-text-secondary no-underline hover:text-text">Datenschutz</Link></li>
              <li><Link href="/nutzungsbedingungen/" className="text-sm text-text-secondary no-underline hover:text-text">Nutzungsbedingungen</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} KFZ Wechselsaison. Alle Angaben ohne Gewähr.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted">
            <Link href="/affiliate-hinweis/" className="no-underline hover:text-text">
              Affiliate-Hinweis &amp; Transparenz
            </Link>
            <Link href="/nutzungsbedingungen/" className="no-underline hover:text-text">
              Nutzungsbedingungen
            </Link>
            <button
              onClick={openSettings}
              className="underline underline-offset-2 hover:text-text"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
