import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ConversionSection } from '@/components/ConversionSection'
import { TarifcheckWidget } from '@/components/TarifcheckWidget'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '30. November: Der Stichtag der Kfz-Versicherung',
  description: 'Warum der 30.11. in der Kfz-Versicherung so wichtig ist. Gilt das für jeden? Ausnahmen und Handlungsoptionen.',
  alternates: { canonical: 'https://kfzwechselsaison.de/30-november-kfz-versicherung/' },
}

export default function NovemberStichtagPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Breadcrumbs items={[{label:'Startseite',href:'/'},{label:'30. November Stichtag'}]} />
        
        <h1>30. November und die Kfz-Versicherung</h1>
        
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          Jedes Jahr im Herbst überschlagen sich die Werbeanzeigen: "Jetzt bis zum 30. November wechseln!" Doch warum eigentlich? Und gilt dieser Stichtag wirklich für jeden Autofahrer? Ein differenzierter Blick.
        </p>

        <AffiliateDisclosure />

        <div id="tarifrechner" className="my-12">
          <TarifcheckWidget />
        </div>

        <section className="my-12">
          <h2>Warum ausgerechnet der 30. November?</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Die Erklärung ist recht einfach: Die ordentliche <Link href="/kuendigungsfrist-kfz-versicherung/" className="underline">Kündigungsfrist</Link> bei Kfz-Versicherungen beträgt einen Monat zum Ende des Versicherungsjahres. 
          </p>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Historisch bedingt entspricht das Versicherungsjahr bei der großen Mehrheit der Kfz-Policen in Deutschland exakt dem Kalenderjahr. Der Vertrag läuft also bis zum 31. Dezember. Zieht man davon die einmonatige Frist ab, landet man beim 30. November. Bis zu diesem Tag um 23:59 Uhr muss die Kündigung beim Versicherer eingegangen sein.
          </p>
        </section>

        <section className="my-12 bg-surface-subtle p-6 rounded border-l-4 border-brand">
          <h2>Achtung: Der Stichtag gilt NICHT für jeden!</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Viele Medienberichte erwecken den Eindruck, als müsste jeder Autofahrer bis Ende November kündigen. Das ist <strong>falsch</strong>. Es gibt zwei große Ausnahmen:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-text-secondary">
            <li>
              <strong>Unterjährige Verträge:</strong> Viele moderne Verträge beginnen nicht mehr pauschal am 1. Januar, sondern taggenau bei Zulassung des Fahrzeugs. Haben Sie Ihr Auto am 15. Mai zugelassen und versichert, endet Ihr Versicherungsjahr am 14. Mai des Folgejahres. Ihr persönlicher Stichtag wäre dann der 14. April.
            </li>
            <li>
              <strong>Sonderkündigungsrechte:</strong> Wenn Ihr Versicherer die Beiträge anhebt, erhalten Sie die Rechnung oft erst im November. Sie haben ab Erhalt der Rechnung einen vollen Monat Zeit zu kündigen. Trifft die Beitragsrechnung z.B. erst am 20. November ein, können Sie bis zum 20. Dezember außerordentlich kündigen.
            </li>
          </ul>
        </section>

        <section className="my-12">
          <h2>Frist verpasst – was nun?</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Sie haben den 30. November verpasst, Ihr Vertrag läuft aber zum Jahresende aus? Wenn es keine Beitragserhöhung gab (also kein Sonderkündigungsrecht vorliegt), hat sich Ihr Vertrag automatisch um ein weiteres Jahr verlängert.
          </p>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Folgende Möglichkeiten bleiben Ihnen noch, um doch noch zu wechseln:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary">
            <li><strong>Fahrzeugwechsel:</strong> Wenn Sie sich im Laufe des Jahres ein anderes Auto zulegen, können Sie die Versicherung ohnehin neu wählen.</li>
            <li><strong>Abmeldung:</strong> Melden Sie das Fahrzeug vorübergehend ab, ruht der Vertrag.</li>
            <li><strong>Schadenfall:</strong> Sollten Sie in einen Unfall verwickelt werden, können Sie nach Abschluss der Regulierung kündigen.</li>
          </ul>
        </section>

        <section className="my-12">
          <h2>Tipp: Nicht bis zum letzten Tag warten</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Auch wenn der 30. November für Verträge mit Kalenderjahr der maßgebliche Stichtag ist, empfiehlt es sich, den <Link href="/kfz-versicherung-vergleichen/" className="underline">Tarifvergleich</Link> bereits frühzeitig im November durchzuführen. Das gibt Ihnen ausreichend Zeit, Angebote in Ruhe zu prüfen, eventuelle Rückfragen zu klären und die Kündigung stressfrei und mit nachweisbarem Zugang abzuschicken.
          </p>
        </section>

      </div>
      
      <ConversionSection showWidget={false} />
    </>
  )
}
