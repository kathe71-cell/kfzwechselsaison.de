'use client'

import { useState, useEffect } from 'react'
import { AffiliateDisclosure } from './AffiliateDisclosure'
import { ShieldCheck, Loader2, ExternalLink, AlertCircle } from 'lucide-react'

const SCRIPT_URL = 'https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-kfz/kfz-iframe.js'
const DIRECT_PARTNER_URL = 'https://a.partner-versicherung.de/click.php?partner_id=72057&app_id=2'

export function TarifcheckWidget() {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    setIframeLoaded(false)
    setLoadError(false)

    const container = document.getElementById('tcpp-iframe-kfz')
    if (!container) return

    // Clear old container content
    container.innerHTML = ''

    // Remove any existing script elements for this widget to allow clean execution
    const oldScripts = document.querySelectorAll(`script[src="${SCRIPT_URL}"]`)
    oldScripts.forEach((s) => s.remove())

    // Create fresh script tag
    const script = document.createElement('script')
    script.src = SCRIPT_URL
    script.async = true
    script.type = 'text/javascript'

    script.onerror = () => {
      setLoadError(true)
      setIframeLoaded(true)
    }

    // Append script to container
    container.appendChild(script)

    // Check for iframe presence periodically and set accessibility title
    const interval = setInterval(() => {
      const currentContainer = document.getElementById('tcpp-iframe-kfz')
      if (currentContainer) {
        const iframe = currentContainer.querySelector('iframe')
        if (iframe) {
          if (!iframe.getAttribute('title')) {
            iframe.setAttribute(
              'title',
              'Kfz-Versicherungsvergleichsrechner für Kfz-Haftpflicht, Teilkasko und Vollkasko'
            )
          }
          setIframeLoaded(true)
          clearInterval(interval)
        }
      }
    }, 150)

    // Timeout fallback after 6s: if no iframe is detected, display fallback with external partner link
    const timeout = setTimeout(() => {
      const currentContainer = document.getElementById('tcpp-iframe-kfz')
      const hasIframe = currentContainer && currentContainer.querySelector('iframe')
      if (!hasIframe) {
        setLoadError(true)
      }
      setIframeLoaded(true)
      clearInterval(interval)
    }, 6000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      {/* Widget Header Badge */}
      <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-amber-500" />
          <span className="font-serif text-base font-semibold text-slate-950">
            Kfz-Versicherungsvergleich teilnehmender Anbieter *
          </span>
        </div>
        <span className="text-xs text-slate-500">Kostenlos &amp; unverbindlich</span>
      </div>

      {/* Rechner Container */}
      <div className="relative min-h-[460px] w-full">
        {!iframeLoaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-xl bg-slate-50 p-6 text-center">
            <Loader2 className="mb-3 h-8 w-8 animate-spin text-amber-500" />
            <p className="text-sm font-medium text-slate-900">Tarifrechner wird initialisiert...</p>
            <p className="mt-1 text-xs text-slate-500">Vergleichen Sie Tarife in wenigen Sekunden</p>
          </div>
        )}

        {loadError && (
          <div className="my-6 rounded-xl border border-amber-200 bg-amber-50/70 p-6 text-center">
            <AlertCircle className="mx-auto mb-2 h-8 w-8 text-amber-600" />
            <h3 className="text-base font-bold text-slate-900">
              Hinweis zur Einbindung des Vergleichsrechners
            </h3>
            <p className="mx-auto mt-1 max-w-md text-xs text-slate-600 leading-relaxed">
              Das Vergleichsmodul konnte im Browserfenster nicht direkt geladen werden (z. B. durch einen aktivierten Skript- oder Werbeblocker). Sie können den Vergleich direkt auf der geschützten Partnerseite aufrufen.
            </p>
            <a
              href={DIRECT_PARTNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors"
            >
              <span>Kfz-Tarifrechner im neuen Fenster öffnen *</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}

        <div style={{ width: '100%' }} id="tcpp-iframe-kfz"></div>
      </div>

      <AffiliateDisclosure className="mt-4 border-t border-slate-100 pt-3" />
    </div>
  )
}
