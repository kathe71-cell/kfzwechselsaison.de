import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ConversionSection } from '@/components/ConversionSection'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kündigungsfrist Kfz-Versicherung: Alle Infos auf einen Blick',
  description: 'Wann können Sie Ihre Kfz-Versicherung kündigen? Erläuterung der regulären Fristen, unterjährigen Verträge und Sonderfälle.',
  alternates: { canonical: 'https://kfzwechselsaison.de/kuendigungsfrist-kfz-versicherung/' },
}

export default function KuendigungsfristKfzVersicherungPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Breadcrumbs items={[{label:'Startseite',href:'/'},{label:'Kündigungsfrist'}]} />
        
        <h1>Kündigungsfrist bei der Kfz-Versicherung</h1>
        
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          Wer seine Autoversicherung wechseln möchte, muss die geltenden Kündigungsfristen strikt einhalten. Wer die Frist auch nur um einen Tag verpasst, ist für ein weiteres Jahr an den Vertrag gebunden. Hier finden Sie eine klare Übersicht.
        </p>

        <AffiliateDisclosure />

        <section className="my-12">
          <h2>Die gesetzliche 1-Monats-Frist</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Laut dem Versicherungsvertragsgesetz (VVG) beträgt die ordentliche Kündigungsfrist für Kfz-Versicherungen genau <strong>einen Monat zum Ablauf des Versicherungsjahres</strong>.
          </p>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Wichtig ist hier der Unterschied zwischen Kalenderjahr und Versicherungsjahr. Bei den meisten Verträgen in Deutschland sind diese identisch: Das Versicherungsjahr läuft vom 1. Januar bis zum 31. Dezember. Daraus ergibt sich der <Link href="/30-november-kfz-versicherung/" className="underline">30. November</Link> als der klassische Stichtag für die Kündigung.
          </p>
        </section>

        <section className="my-12">
          <h2>Unterjährige Verträge beachten</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Immer mehr Versicherer gehen dazu über, Verträge mit sogenannten <em>unterjährigen Laufzeiten</em> anzubieten. Hierbei beginnt das Versicherungsjahr nicht am 1. Januar, sondern exakt an dem Tag, an dem Sie das Auto zugelassen und versichert haben.
          </p>
          <div className="bg-surface border-l-4 border-brand p-6 my-6">
            <h3>Beispiel für einen unterjährigen Vertrag:</h3>
            <p className="text-text-secondary mb-2">Sie melden Ihr Auto am <strong>15. April</strong> an.</p>
            <p className="text-text-secondary mb-2">Das Versicherungsjahr endet somit am <strong>14. April des Folgejahres</strong>.</p>
            <p className="text-text-secondary">Die Kündigung muss spätestens am <strong>14. March</strong> (ein Monat vorher) beim Versicherer eingegangen sein.</p>
          </div>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Ein Blick in den Versicherungsschein (Police) ist also unerlässlich, um das genaue Ablaufdatum zu ermitteln.
          </p>
        </section>

        <section className="my-12">
          <h2>Abweichende Fristen bei Sonderkündigungen</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Wenn ein <Link href="/sonderkuendigungsrecht-kfz-versicherung/" className="underline">Sonderkündigungsrecht</Link> vorliegt, gilt ebenfalls eine Frist von einem Monat. Allerdings beginnt diese Frist erst zu laufen, sobald Sie von dem Kündigungsgrund Kenntnis erlangen.
          </p>
          <ul className="list-disc pl-6 space-y-4 text-text-secondary">
            <li><strong>Nach Beitragserhöhung:</strong> Sie haben ab Erhalt der Mitteilung (Posteingang bzw. E-Mail) genau einen Monat Zeit. Die Kündigung wird zum Zeitpunkt des Inkrafttretens der neuen Beiträge wirksam (meist der 1. Januar).</li>
            <li><strong>Nach Schadenregulierung:</strong> Sobald die Versicherung Ihnen mitteilt, dass die Verhandlungen über die Entschädigung abgeschlossen sind, beginnt die Ein-Monats-Frist.</li>
            <li><strong>Fahrzeugwechsel:</strong> Wenn Sie das Auto abmelden, endet die Versicherung taggenau. Hier gibt es keine Frist im eigentlichen Sinne abzuwarten.</li>
          </ul>
        </section>

        <section className="my-12 bg-surface-subtle p-6 rounded">
          <h2>Wann gilt die Kündigung als zugestellt?</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Es ist ein häufiger Irrglaube, dass der Poststempel für die Fristwahrung zählt. Tatsächlich ist der <strong>Eingang beim Versicherer</strong> entscheidend (Zugangsprinzip). Senden Sie Kündigungen per Post daher rechtzeitig und am besten als Einschreiben. Kündigungen per E-Mail oder über Kundenportale sind sofort zugestellt, sollten aber mit einer Lesebestätigung versehen sein oder als Screenshot gesichert werden.
          </p>
        </section>

      </div>
      
      <ConversionSection />
    </>
  )
}
