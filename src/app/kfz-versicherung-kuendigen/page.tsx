import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ConversionSection } from '@/components/ConversionSection'
import { TarifcheckWidget } from '@/components/TarifcheckWidget'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { FAQ } from '@/components/FAQ'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kfz-Versicherung kündigen: Fristen, Vorlagen & Sonderkündigungsrecht',
  description: 'So kündigen Sie Ihre Kfz-Versicherung richtig. Infos zu Fristen, Formvorschriften und dem Sonderkündigungsrecht.',
  alternates: { canonical: 'https://kfzwechselsaison.de/kfz-versicherung-kuendigen/' },
}

export default function KfzVersicherungKuendigenPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Breadcrumbs items={[{label:'Startseite',href:'/'},{label:'Kfz-Versicherung kündigen'}]} />
        
        <h1>Kfz-Versicherung kündigen</h1>
        
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          Sie möchten Ihre Autoversicherung wechseln oder Ihr Fahrzeug abmelden? Hier erfahren Sie, welche Fristen Sie beachten müssen, wann ein Sonderkündigungsrecht greift und in welcher Form Sie kündigen sollten.
        </p>

        <AffiliateDisclosure />

        <section className="my-12">
          <h2>Reguläre Kündigung: Die Ein-Monats-Frist</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Eine reguläre Kündigung ist immer zum Ende des laufenden Versicherungsjahres möglich. Die Kündigungsfrist beträgt in der Regel einen Monat. Bei den meisten Verträgen entspricht das Versicherungsjahr dem Kalenderjahr.
          </p>
          <div className="bg-red-50 text-red-900 p-6 rounded border-l-4 border-red-500 my-6">
            <h3>Wichtiger Stichtag</h3>
            <p>
              Läuft Ihr Vertrag bis zum 31. Dezember, muss Ihre Kündigung spätestens am <Link href="/30-november-kfz-versicherung/" className="font-bold underline">30. November</Link> beim Versicherer vorliegen. Achtung: Es zählt der Eingang beim Versicherer, nicht der Poststempel!
            </p>
          </div>
          <p className="text-text-secondary leading-relaxed">
            Haben Sie einen Vertrag mit unterjähriger Laufzeit (z.B. Beginn am 1. Mai), so endet Ihr Versicherungsjahr am 30. April des Folgejahres. Kündigungsstichtag wäre in diesem Fall der 31. März.
          </p>
        </section>

        <section className="my-12">
          <h2>Außerordentliche Kündigung (Sonderkündigungsrecht)</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            In bestimmten Situationen können Sie Ihren Vertrag auch außerhalb der regulären Frist kündigen. In diesen Fällen gilt das <Link href="/sonderkuendigungsrecht-kfz-versicherung/" className="underline">Sonderkündigungsrecht</Link>:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-text-secondary">
            <li><strong>Beitragserhöhung:</strong> Wenn die Versicherung teurer wird, ohne dass sich die Leistungen verbessern. Sie haben nach Erhalt der Mitteilung einen Monat Zeit zur Kündigung.</li>
            <li><strong>Nach einem Schadenfall:</strong> Sobald die Versicherung die Regulierung abschließt (egal ob sie zahlt oder ablehnt), können Sie innerhalb eines Monats kündigen.</li>
            <li><strong>Fahrzeugwechsel:</strong> Wenn Sie Ihr altes Auto verkaufen oder abmelden, endet die Versicherung ohnehin. Für das neue Auto können Sie den Versicherer frei wählen.</li>
          </ul>
        </section>

        <section className="my-12">
          <h2>Form der Kündigung: Schriftlich oder per E-Mail?</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Seit dem 1. Oktober 2016 abgeschlossene Verträge bedürfen für die Kündigung nur noch der "Textform" – eine Kündigung per E-Mail, Fax oder über das Kundenportal des Versicherers ist also rechtsgültig. Für ältere Verträge (Abschluss vor dem 01.10.2016) gilt häufig noch die "Schriftform", welche eine eigenhändige Unterschrift erfordert (Brief oder Fax).
          </p>
          <p className="font-semibold text-text mt-6 mb-2">Folgende Angaben müssen im Kündigungsschreiben stehen:</p>
          <ul className="bg-surface-subtle p-6 rounded text-text-secondary list-disc pl-10 space-y-2">
            <li>Ihr vollständiger Name und Adresse</li>
            <li>Das amtliche Kennzeichen Ihres Fahrzeugs</li>
            <li>Ihre Versicherungsscheinnummer (Policennummer)</li>
            <li>Das gewünschte Kündigungsdatum ("zum nächstmöglichen Zeitpunkt")</li>
            <li>Der Grund (bei Sonderkündigung zwingend angeben!)</li>
            <li>Die Bitte um eine Kündigungsbestätigung</li>
          </ul>
        </section>

        <div id="tarifrechner" className="my-12">
          <h2>Neuen Tarif finden, bevor Sie kündigen</h2>
          <p className="mb-6 text-text-secondary">Vergleichen Sie jetzt die aktuellen Tarife und schließen Sie Ihren neuen Vertrag ab, bevor Sie den alten kündigen.</p>
          <TarifcheckWidget />
        </div>

      </div>
    </>
  )
}
