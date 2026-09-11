import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ConversionSection } from '@/components/ConversionSection'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kfz-Haftpflichtversicherung: Pflicht, Leistungen & Tipps',
  description: 'Alles zur Kfz-Haftpflicht: Warum sie gesetzlich vorgeschrieben ist, welche Schäden sie abdeckt und worauf Sie bei den Deckungssummen achten müssen.',
  alternates: { canonical: 'https://kfzwechselsaison.de/kfz-haftpflicht/' },
}

export default function HaftpflichtPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Breadcrumbs items={[{label:'Startseite',href:'/'},{label:'Kfz-Haftpflicht'}]} />
        
        <h1>Die Kfz-Haftpflichtversicherung</h1>
        
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          Die Kfz-Haftpflichtversicherung ist das absolute Fundament jeder Autoversicherung. Ohne sie darf in Deutschland kein Kraftfahrzeug auf öffentlichen Straßen bewegt werden. Hier erfahren Sie, was sie leistet und worauf Sie beim Abschluss achten müssen.
        </p>

        <AffiliateDisclosure />

        <section className="my-12">
          <h2>Gesetzliche Pflicht</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Laut Pflichtversicherungsgesetz (PflVG) ist jeder Fahrzeughalter verpflichtet, eine Haftpflichtversicherung abzuschließen. Diese dient dem Schutz der Verkehrsopfer: Wer durch ein Auto geschädigt wird, soll sicher sein, dass sein Schaden reguliert wird – unabhängig von den finanziellen Mitteln des Unfallverursachers.
          </p>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Ein Verstoß gegen diese Pflicht (Fahren ohne Versicherungsschutz) ist eine Straftat und kann mit empfindlichen Geldstrafen oder sogar Freiheitsentzug geahndet werden.
          </p>
        </section>

        <section className="my-12 bg-surface p-6 md:p-8 rounded border border-border">
          <h2>Was deckt die Kfz-Haftpflicht ab?</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Die Haftpflichtversicherung kommt ausschließlich für Schäden auf, die Sie mit Ihrem Fahrzeug anderen Personen, deren Eigentum oder Vermögen zufügen. Schäden am <strong>eigenen</strong> Auto zahlt sie nicht (dafür bräuchten Sie eine <Link href="/vollkasko/" className="underline">Vollkasko</Link>).
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <h3 className="font-bold text-lg text-brand-light mb-2">Personenschäden</h3>
              <p className="text-text-secondary text-sm">Behandlungskosten, Schmerzensgeld, Verdienstausfall oder lebenslange Renten für verletzte Unfallgegner oder Mitfahrer.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-brand-light mb-2">Sachschäden</h3>
              <p className="text-text-secondary text-sm">Reparaturkosten am gegnerischen Auto, kaputte Leitplanken, beschädigte Gebäude oder Ampeln.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-brand-light mb-2">Vermögensschäden</h3>
              <p className="text-text-secondary text-sm">Finanzielle Verluste, die aus einem Personen- oder Sachschaden resultieren (z.B. Nutzungsausfall).</p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2>Die Deckungssumme: Sparen Sie nicht am falschen Ende</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Der Gesetzgeber schreibt Mindestdeckungssummen vor: 7,5 Millionen Euro für Personenschäden, 1,22 Millionen Euro für Sachschäden und 50.000 Euro für Vermögensschäden.
          </p>
          <div className="bg-red-50 p-6 rounded border-l-4 border-red-500 mb-6">
            <h3 className="font-bold text-red-900 text-lg mb-2">Warnung vor den Mindestsummen</h3>
            <p className="text-red-800">
              Bei schweren Unfällen mit mehreren Verletzten oder dauerhafter Pflegebedürftigkeit können 7,5 Mio. Euro schnell nicht ausreichen. Für den Differenzbetrag haften Sie dann mit Ihrem Privatvermögen!
            </p>
          </div>
          <p className="text-text-secondary leading-relaxed">
            <strong>Expertenrat:</strong> Schließen Sie immer eine Pauschaldeckung von 100 Millionen Euro ab (mit einer Begrenzung von meist 15 Millionen Euro pro geschädigter Person). Der Preisunterschied zur gesetzlichen Mindestdeckung beträgt oft nur wenige Euro im Jahr.
          </p>
        </section>

        <section className="my-12">
          <h2>Der Schadenfreiheitsrabatt (SF-Klassen)</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Die Kfz-Haftpflicht ist an das System der Schadenfreiheitsklassen gebunden. Für jedes schadenfreie Jahr steigen Sie eine Klasse auf, wodurch der Beitragssatz (in Prozent) sinkt. Verursachen Sie einen Unfall, den die Versicherung reguliert, werden Sie im Folgejahr zurückgestuft und die Prämie steigt.
          </p>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Tipp: Bei kleinen Blechschäden kann es günstiger sein, den Schaden aus eigener Tasche zu bezahlen (sog. Schadenrückkauf), um die teure Rückstufung zu vermeiden.
          </p>
        </section>

      </div>
      
      <ConversionSection />
    </>
  )
}
