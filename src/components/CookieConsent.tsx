'use client'

import { useState } from 'react'
import { useCookieConsent, type ConsentState } from './CookieConsentProvider'

export function CookieConsent() {
  const { showBanner, acceptAll, acceptNecessary, savePreferences } = useCookieConsent()
  const [showDetails, setShowDetails] = useState(false)
  const [prefs, setPrefs] = useState<ConsentState>({
    necessary: true,
    statistics: false,
    marketing: false,
  })

  if (!showBanner) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface p-4 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] md:p-6"
    >
      <div className="mx-auto max-w-4xl">
        {!showDetails ? (
          <>
            <p className="mb-4 text-sm leading-relaxed text-text-secondary">
              Wir verwenden Cookies und ähnliche Technologien, um die Funktion der Website
              sicherzustellen und mit deiner Einwilligung auch für Statistik und den eingebundenen
              Tarifvergleich. Du kannst deine Einwilligung jederzeit über den Link
              „Cookie-Einstellungen" im Footer widerrufen oder anpassen.{' '}
              <a href="/datenschutz/" className="underline">
                Datenschutzerklärung
              </a>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={acceptAll}
                className="btn-primary px-5 py-2.5"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={acceptNecessary}
                className="btn-secondary px-5 py-2.5"
              >
                Nur notwendige
              </button>
              <button
                onClick={() => setShowDetails(true)}
                className="px-3 py-2.5 text-sm text-text-muted underline underline-offset-2 transition-colors hover:text-text"
              >
                Einstellungen
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-4 text-sm text-text-secondary">
              Wähle aus, welche Cookie-Kategorien du zulassen möchtest:
            </p>
            <div className="mb-5 space-y-3">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-0.5 h-4 w-4 accent-brand"
                />
                <span className="text-sm">
                  <strong className="text-text">Notwendig</strong>
                  <br />
                  <span className="text-text-muted">
                    Erforderlich für die Grundfunktionen der Website.
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={prefs.statistics}
                  onChange={(e) => setPrefs((p) => ({ ...p, statistics: e.target.checked }))}
                  className="mt-0.5 h-4 w-4 accent-brand"
                />
                <span className="text-sm">
                  <strong className="text-text">Statistik</strong>
                  <br />
                  <span className="text-text-muted">
                    Anonymisierte Nutzungsstatistiken zur Verbesserung der Website.
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs((p) => ({ ...p, marketing: e.target.checked }))}
                  className="mt-0.5 h-4 w-4 accent-brand"
                />
                <span className="text-sm">
                  <strong className="text-text">Marketing / Tarifvergleich</strong>
                  <br />
                  <span className="text-text-muted">
                    Ermöglicht die Einbindung des externen Tarifvergleichs-Tools.
                  </span>
                </span>
              </label>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => savePreferences(prefs)}
                className="btn-primary px-5 py-2.5"
              >
                Auswahl speichern
              </button>
              <button
                onClick={acceptAll}
                className="btn-secondary px-5 py-2.5"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={() => setShowDetails(false)}
                className="px-3 py-2.5 text-sm text-text-muted underline underline-offset-2 transition-colors hover:text-text"
              >
                Zurück
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
