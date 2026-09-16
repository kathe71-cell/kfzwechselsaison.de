import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Nutzungsbedingungen & Haftungsausschluss',
  description: 'Nutzungsbedingungen, rechtliche Hinweise und Haftungsausschluss für KFZ Wechselsaison.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://kfzwechselsaison.de/nutzungsbedingungen/',
  },
}

export default function NutzungsbedingungenPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      <Breadcrumbs items={[{ label: 'Startseite', href: '/' }, { label: 'Nutzungsbedingungen' }]} />

      <h1 className="mb-6 mt-4">Nutzungsbedingungen &amp; Haftungsausschluss</h1>

      <div className="space-y-6 text-text-secondary">
        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">1. Geltungsbereich und Gegenstand</h2>
          <p>
            Diese Nutzungsbedingungen gelten für die Inanspruchnahme des kostenlosen Online-Angebots auf <strong>KFZ Wechselsaison</strong> (kfzwechselsaison.de). Das Portal bietet unabhängige Informationen, Ratgeberartikel und den Zugriff auf Vergleichs-Tools rund um das Thema Kfz-Versicherungen.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">2. Keine Versicherungsvermittlung und keine Beratung</h2>
          <p>
            KFZ Wechselsaison ist ein Informationsportal und kein Versicherungsvermittler, Makler oder Versicherungsunternehmen. Wir führen keine persönliche Versicherungs- oder Rechtsberatung durch. Die Inhalte dienen ausschließlich der allgemeinen Erstinformation des Nutzers.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">3. Zustandekommen von Verträgen</h2>
          <p>
            Über KFZ Wechselsaison selbst können keine Versicherungsverträge abgeschlossen werden. Wenn Sie über einen auf unserer Seite eingebundenen Tarifrechner oder Link ein Angebot anfordern oder einen Vertrag abschließen, kommt der Versicherungsvertrag ausschließlich direkt zwischen Ihnen und dem jeweiligen Versicherungsunternehmen zustande.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">4. Gewährleistung und Haftungsausschluss für Tarifangaben</h2>
          <p>
            Die auf unserer Website bereitgestellten Inhalte werden mit größtmöglicher Sorgfalt erstellt. Dennoch übernehmen wir keine Gewähr für die Richtigkeit, Vollständigkeit, Genauigkeit und Aktualität der angezeigten Tarife, Beitragsberechnungen oder Versicherungsbedingungen. Sämtliche Tarifberechnungen basieren auf den Angaben der jeweiligen Partner und Versicherungsgesellschaften.
          </p>
          <p className="mt-2">
            Maßgeblich für einen Vertragsschluss sind stets allein die im individuellen Versicherungsschein und den Allgemeinen Versicherungsbedingungen (AVB) des jeweiligen Anbieters genannten Angaben.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">5. Verweise auf externe Partnerlinks (Affiliate-Links)</h2>
          <p>
            Das Angebot auf KFZ Wechselsaison ist für den Nutzer vollständig kostenlos. Zur Finanzierung des Portals nutzen wir kommerzielle Partnerlinks. Durch das Klicken auf einen Partnerlink oder den Abschluss einer Versicherung entstehen dem Nutzer keinerlei Zusatzkosten.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">6. Anwendbares Recht</h2>
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland.
          </p>
        </section>
      </div>
    </div>
  )
}
