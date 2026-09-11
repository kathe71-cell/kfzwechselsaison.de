'use client'

import { TarifcheckWidget } from './TarifcheckWidget'

interface ConversionSectionProps {
  headline?: string
  text?: string
  showWidget?: boolean
}

export function ConversionSection({
  headline = 'Jetzt Kfz-Versicherung vergleichen',
  text = 'Du möchtest prüfen, ob sich ein Wechsel deiner Kfz-Versicherung lohnt? Vergleiche jetzt unverbindlich Tarife verschiedener Anbieter.',
  showWidget = true,
}: ConversionSectionProps) {
  const handleScrollToRechner = () => {
    const el = document.getElementById('tarifrechner')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/kfz-versicherung-vergleichen/'
    }
  }

  return (
    <section className="border-t border-border bg-surface-subtle py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <h2 className="mb-3">{headline}</h2>
        <p className="mx-auto mb-8 max-w-xl text-text-secondary">{text}</p>
        {showWidget ? (
          <div className="text-left">
            <TarifcheckWidget />
          </div>
        ) : (
          <div>
            <button
              onClick={handleScrollToRechner}
              className="btn-primary px-8 py-3.5 text-base font-semibold"
            >
              Zum Tarifrechner ↑
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
