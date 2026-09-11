'use client'

import { useState, useEffect } from 'react'
import { useCookieConsent } from './CookieConsentProvider'
import { AffiliateDisclosure } from './AffiliateDisclosure'
import { ShieldCheck, Loader2 } from 'lucide-react'

const SCRIPT_URL = 'https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-kfz/kfz-iframe.js'

export function TarifcheckWidget() {
  const { consent, openSettings } = useCookieConsent()
  const [iframeLoaded, setIframeLoaded] = useState(false)

  const hasMarketingConsent = consent?.marketing === true

  useEffect(() => {
    if (!hasMarketingConsent) return

    setIframeLoaded(false)

    const container = document.getElementById('tcpp-iframe-kfz')
    if (!container) return

    // Clear old container content
    container.innerHTML = ''

    // Remove any existing script elements for this widget to allow re-execution on route change
    const oldScripts = document.querySelectorAll(`script[src="${SCRIPT_URL}"]`)
    oldScripts.forEach((s) => s.remove())

    // Create fresh script tag
    const script = document.createElement('script')
    script.src = SCRIPT_URL
    script.async = true
    script.type = 'text/javascript'

    // Append script to container
    container.appendChild(script)

    // Check for iframe presence periodically
    const interval = setInterval(() => {
      const currentContainer = document.getElementById('tcpp-iframe-kfz')
      if (currentContainer && currentContainer.querySelector('iframe')) {
        setIframeLoaded(true)
        clearInterval(interval)
      }
    }, 100)

    // Timeout fallback after 5s to ensure loading screen doesn't get stuck forever if script is blocked
    const timeout = setTimeout(() => {
      setIframeLoaded(true)
      clearInterval(interval)
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [hasMarketingConsent])

  if (!hasMarketingConsent) {
    return <TarifcheckPlaceholder onRequestConsent={openSettings} />
  }

  return (
    <div className="rounded-lg border border-border bg-surface p-4 shadow-sm md:p-6">
      {/* Widget Header Badge */}
      <div className="mb-4 flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-brand" />
          <span className="font-serif text-base font-semibold text-text">
            Kfz-Versicherungsvergleich
          </span>
        </div>
        <span className="text-xs text-text-muted">Kostenlos &amp; unverbindlich</span>
      </div>

      {/* Rechner Container */}
      <div className="relative min-h-[460px] w-full">
        {!iframeLoaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded bg-surface-subtle p-6 text-center">
            <Loader2 className="mb-3 h-8 w-8 animate-spin text-brand" />
            <p className="text-sm font-medium text-text">Tarifrechner wird geladen...</p>
            <p className="mt-1 text-xs text-text-muted">Vergleiche Tarife in wenigen Sekunden</p>
          </div>
        )}
        <div style={{ width: '100%' }} id="tcpp-iframe-kfz"></div>
      </div>

      <AffiliateDisclosure className="mt-4 border-t border-border-subtle pt-3" />
    </div>
  )
}

function TarifcheckPlaceholder({ onRequestConsent }: { onRequestConsent: () => void }) {
  return (
    <div className="flex min-h-[460px] flex-col justify-between rounded-lg border border-border bg-surface p-6 text-center shadow-sm md:p-8">
      <div className="my-auto">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <p className="mb-2 font-serif text-xl font-semibold text-text">
          Kfz-Versicherung vergleichen
        </p>
        <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-text-secondary">
          Um den kostenlosen Tarifvergleich direkt auf unserer Seite zu laden, aktiviere bitte die
          Cookie-Kategorie <strong>„Marketing / Tarifvergleich"</strong>.
        </p>
        <button onClick={onRequestConsent} className="btn-primary px-6 py-3">
          Cookie-Einstellungen öffnen
        </button>
      </div>
      <AffiliateDisclosure className="border-t border-border-subtle pt-3" />
    </div>
  )
}
