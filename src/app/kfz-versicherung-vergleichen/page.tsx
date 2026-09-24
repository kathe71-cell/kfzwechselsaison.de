import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ConversionSection } from '@/components/ConversionSection'
import { TarifcheckWidget } from '@/components/TarifcheckWidget'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kfz-Versicherung vergleichen: Tarife & Leistungen im Check',
  description: 'So vergleichen Sie Kfz-Versicherungen richtig. Tipps zu Deckungssumme, Selbstbeteiligung und Zusatzleistungen für den besten Tarif.',
  alternates: { canonical: 'https://kfzwechselsaison.de/kfz-versicherung-vergleichen/' },
}

export default function KfzVersicherungVergleichenPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-5 py-8 md:py-12">
        <Breadcrumbs items={[{label:'Startseite',href:'/'},{label:'Kfz-Versicherung vergleichen'}]} />
        
        <h1>Kfz-Versicherung vergleichen</h1>
        
        <p className="text-xl text-text-secondary mb-6 leading-relaxed">
          Ein Vergleich der Kfz-Versicherungen ist der effektivste Weg, um jährlich bares Geld zu sparen. Doch der günstigste Preis allein ist nicht alles – entscheidend ist, dass die Leistungen zu Ihrem Profil passen. Worauf Sie beim Vergleich achten müssen, erklären wir Ihnen hier.
        </p>

        <AffiliateDisclosure />
      </div>

      <div id="tarifrechner" className="mx-auto max-w-5xl px-5 mb-12">
        <TarifcheckWidget />
      </div>

      <div className="mx-auto max-w-4xl px-5">

        <section className="my-12">
          <h2>Die wichtigsten Kriterien beim Vergleich</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Bevor Sie sich für einen Tarif entscheiden, sollten Sie prüfen, welche Leistungsmerkmale für Sie unverzichtbar sind. Die folgenden Punkte bilden das Fundament einer soliden Absicherung:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-surface border border-border p-6 rounded transition-shadow">
              <h3>Deckungssumme</h3>
              <p className="text-text-secondary">Die gesetzliche Mindestdeckung (7,5 Mio. € für Personenschäden) reicht oft nicht aus. Empfohlen wird eine Deckungssumme von mindestens 100 Mio. € pauschal (max. 15 Mio. € pro verletzter Person). Diese Erhöhung kostet meist nur wenige Euro.</p>
            </div>
            <div className="bg-surface border border-border p-6 rounded transition-shadow">
              <h3>Selbstbeteiligung (SB)</h3>
              <p className="text-text-secondary">Bei Kaskoversicherungen senkt eine Selbstbeteiligung den Beitrag deutlich. Üblich sind 150 € in der <Link href="/teilkasko/" className="underline">Teilkasko</Link> und 300 € in der <Link href="/vollkasko/" className="underline">Vollkasko</Link>. Wählen Sie die SB so, dass Sie diese im Schadenfall problemlos aufbringen können.</p>
            </div>
            <div className="bg-surface border border-border p-6 rounded transition-shadow">
              <h3>Werkstattbindung</h3>
              <p className="text-text-secondary">Tarife mit Werkstattbindung können günstiger sein. Die tatsächliche Beitragsersparnis hängt vom jeweiligen Versicherer und Tarif ab (oft als Rabatt auf den Kaskobeitrag kalkuliert). Im Schadenfall müssen Sie eine Partnerwerkstatt der Versicherung aufsuchen. Bei Neuwagen oder Leasingfahrzeugen sollten Sie vorab die Garantie- und Leasingvorgaben prüfen.</p>
            </div>
            <div className="bg-surface border border-border p-6 rounded transition-shadow">
              <h3>Grobe Fahrlässigkeit</h3>
              <p className="text-text-secondary">Achten Sie darauf, dass der Versicherer auf den "Einwand der groben Fahrlässigkeit" verzichtet. Sonst kann die Leistung gekürzt werden, wenn Sie z.B. eine rote Ampel übersehen und einen Unfall verursachen.</p>
            </div>
          </div>
        </section>

        <section className="my-12 bg-surface-subtle p-8 rounded border-l-4 border-brand">
          <h2>Sinnvolle Zusatzleistungen (Zusatzbausteine)</h2>
          <ul className="space-y-4 text-text-secondary">
            <li>
              <strong>Schutzbrief:</strong> Eine günstige Alternative zum Automobilclub. Sichert Pannen- und Unfallhilfe, Abschleppen sowie ggf. einen Mietwagen ab. Kostet meist zwischen 10 und 20 Euro pro Jahr.
            </li>
            <li>
              <strong>Rabattschutz (Freischuss):</strong> Verhindert die Rückstufung der SF-Klasse nach einem Unfall. Meist ab SF-Klasse 4 abschließbar. Lohnt sich für Fahrer, die eine hohe SF-Klasse schützen möchten.
            </li>
            <li>
              <strong>Neupreisentschädigung:</strong> Besonders bei Neuwagen wichtig. Gute Tarife erstatten bei Totalschaden oder Diebstahl bis zu 24 Monate den Neuwert (statt nur den aktuellen Zeitwert).
            </li>
            <li>
              <strong>Erweiterte Wildschäden:</strong> Die Standard-Teilkasko zahlt nur bei Zusammenstößen mit Haarwild. Gute Tarife decken Unfälle mit "Tieren aller Art" (also auch Hunde, Kühe, Vögel) ab.
            </li>
          </ul>
        </section>

        <section className="my-12">
          <h2>So funktioniert der Vergleich</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Für einen präzisen Vergleich benötigen Sie Ihren Fahrzeugschein (Zulassungsbescheinigung Teil I) für die Schlüsselnummern (HSN/TSN) sowie Ihre letzte Beitragsrechnung, um Ihre aktuelle Schadenfreiheitsklasse abzulesen.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Geben Sie auch Ihre jährliche Fahrleistung realistisch an. Zu niedrig angesetzte Kilometer können im Schadenfall zu Strafzahlungen führen, zu hoch angesetzte verteuern den Tarif unnötig. Oft lassen sich die Kilometer am Ende des Jahres noch nach unten oder oben korrigieren.
          </p>
        </section>

      </div>
      
      <ConversionSection showWidget={false} />
    </>
  )
}
