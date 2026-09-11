'use client'

import { useState, useEffect } from 'react'
import { AffiliateDisclosure } from './AffiliateDisclosure'
import { ShieldCheck, Loader2 } from 'lucide-react'

const SCRIPT_URL = 'https://form.partner-versicherung.de/widgets/72057/tcpp-iframe-kfz/kfz-iframe.js'

export function TarifcheckWidget() {
  const [iframeLoaded, setIframeLoaded] = useState(false)

  useEffect(() => {
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
  }, [])

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      {/* Widget Header Badge */}
      <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-amber-500" />
          <span className="font-serif text-base font-semibold text-slate-950">
            Kfz-Versicherungsvergleich *
          </span>
        </div>
        <span className="text-xs text-slate-500">Kostenlos &amp; unverbindlich</span>
      </div>

      {/* Rechner Container */}
      <div className="relative min-h-[460px] w-full">
        {!iframeLoaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-xl bg-slate-50 p-6 text-center">
            <Loader2 className="mb-3 h-8 w-8 animate-spin text-amber-500" />
            <p className="text-sm font-medium text-slate-900">Tarifrechner wird geladen...</p>
            <p className="mt-1 text-xs text-slate-500">Vergleiche Tarife in wenigen Sekunden</p>
          </div>
        )}
        <div style={{ width: '100%' }} id="tcpp-iframe-kfz"></div>
      </div>

      <AffiliateDisclosure className="mt-4 border-t border-slate-100 pt-3" />
    </div>
  )
}
