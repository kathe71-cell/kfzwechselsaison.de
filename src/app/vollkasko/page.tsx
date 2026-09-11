import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ConversionSection } from '@/components/ConversionSection'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vollkaskoversicherung: Rundumschutz fürs Auto',
  description: 'Wann ist eine Vollkaskoversicherung sinnvoll? Leistungen, Kosten und der Unterschied zur Teilkasko verständlich erklärt.',
  alternates: { canonical: 'https://kfzwechselsaison.de/vollkasko/' },
}

export default function VollkaskoPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Breadcrumbs items={[{label:'Startseite',href:'/'},{label:'Vollkasko'}]} />
        
        <h1>Die Vollkaskoversicherung</h1>
        
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          Die Vollkasko ist der umfangreichste Schutz für Ihr Auto. Sie bündelt die Leistungen der Teilkasko und sichert zusätzlich das Risiko für Schäden ab, die Sie selbst verursacht haben oder die durch Vandalismus entstanden sind.
        </p>

        <AffiliateDisclosure />

        <section className="my-12">
          <h2>Der Unterschied zur Teilkasko</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Die Vollkasko beinhaltet <strong>immer</strong> auch alle Leistungen der <Link href="/teilkasko/" className="underline">Teilkasko</Link> (Diebstahl, Glasbruch, Sturm, Hagel, Wildunfälle). Darüber hinaus deckt sie zwei essenzielle zusätzliche Bereiche ab:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-surface border border-border p-6 rounded">
              <h3>1. Selbstverschuldete Unfälle</h3>
              <p className="text-text-secondary">Sie fahren aus Unachtsamkeit auf ein anderes Auto auf oder rutschen im Winter gegen einen Baum. Die Haftpflicht zahlt den Fremdschaden, Ihre Vollkasko repariert Ihr eigenes Auto.</p>
            </div>
            <div className="bg-surface border border-border p-6 rounded">
              <h3>2. Vandalismus & Fahrerflucht</h3>
              <p className="text-text-secondary">Jemand zerkratzt mutwillig Ihren Lack, bricht den Spiegel ab oder rammt Ihr geparktes Auto und begeht Fahrerflucht. Die Vollkasko springt ein, wenn der Täter nicht ermittelt werden kann.</p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2>Für wen ist die Vollkasko sinnvoll?</h2>
          <ul className="list-disc pl-6 space-y-3 text-text-secondary mb-6">
            <li><strong>Neuwagen:</strong> In den ersten 3 bis 5 Jahren nach Erstzulassung ist eine Vollkasko absolut zu empfehlen, da der Wertverlust hier am höchsten ist.</li>
            <li><strong>Finanzierung & Leasing:</strong> Wenn das Fahrzeug finanziert oder geleast ist, verlangen die Banken oder Leasinggeber ohnehin meist zwingend den Abschluss einer Vollkasko.</li>
            <li><strong>Fahranfänger in teuren Autos:</strong> Wer ein höherwertiges Fahrzeug fährt und das Risiko eines Totalschadens finanziell nicht abfedern kann.</li>
          </ul>
        </section>

        <section className="my-12 bg-surface-subtle p-6 rounded">
          <h2>Schadenfreiheitsklassen (SF-Klassen) in der Vollkasko</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Im Gegensatz zur Teilkasko ist die Vollkasko an ein SF-Klassen-System gekoppelt, ähnlich wie die <Link href="/kfz-haftpflicht/" className="underline">Haftpflichtversicherung</Link>. Je länger Sie schadenfrei fahren, desto höher Ihr Rabatt.
          </p>
          <p className="mb-4 text-text-secondary leading-relaxed">
            <strong>Wichtig:</strong> Wenn Sie einen Vollkasko-Schaden melden (z.B. selbst verschuldeter Unfall), werden Sie im Folgejahr hochgestuft, was die Prämie teurer macht. Melden Sie jedoch einen reinen Teilkasko-Schaden (z.B. Hagel), bleibt Ihr Vollkasko-Rabatt unberührt!
          </p>
        </section>

        <section className="my-12">
          <h2>Die richtige Selbstbeteiligung wählen</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Üblich ist die Kombination <strong>300 Euro SB in der Vollkasko / 150 Euro SB in der Teilkasko</strong> (oft als "300/150" bezeichnet). Das bietet das beste Preis-Leistungs-Verhältnis. Wer auf eine SB komplett verzichtet, zahlt unverhältnismäßig hohe Prämien.
          </p>
        </section>

      </div>
      
      <ConversionSection />
    </>
  )
}
