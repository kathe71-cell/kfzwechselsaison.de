import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ConversionSection } from '@/components/ConversionSection'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Zweitwagenversicherung: Tarife, SF-Klassen & Spartipps',
  description: 'So versichern Sie Ihren Zweitwagen günstig. Alles zur SF-Klassenübernahme, Partner-Regelungen und speziellen Zweitwagen-Tarifen.',
  alternates: { canonical: 'https://kfzwechselsaison.de/zweitwagenversicherung/' },
}

export default function ZweitwagenversicherungPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Breadcrumbs items={[{label:'Startseite',href:'/'},{label:'Zweitwagenversicherung'}]} />
        
        <h1>Zweitwagenversicherung</h1>
        
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          Ein zweites Auto in der Familie ist oft unverzichtbar, kann aber bei der Versicherung teuer werden. Ohne spezielle Regelungen würde der Zweitwagen in der teuren Schadenfreiheitsklasse 0 (Fahranfänger-Niveau) starten. Mit der richtigen Einstufung können Sie jedoch viel Geld sparen.
        </p>

        <AffiliateDisclosure />

        <section className="my-12">
          <h2>Wie wird ein Zweitwagen eingestuft?</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Jedes Fahrzeug benötigt einen eigenen Versicherungsvertrag und sammelt seine eigenen schadenfreien Jahre (SF-Klassen). Wenn Sie ein zweites Auto anmelden, können Sie dieses nicht einfach auf den hohen Rabatt des Erstwagens mitlaufen lassen.
          </p>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Allerdings bieten die meisten Versicherer eine <strong>Zweitwagenregelung</strong> an. Statt in der teuren Klasse 0 (bis zu 240 % Beitragssatz) startet der Zweitwagen dank dieser Regelung oft in der SF-Klasse 1/2 (meist 70 - 100 %) oder bei guten Anbietern sogar in SF 1 bis SF 4.
          </p>
        </section>

        <section className="my-12 bg-surface-subtle p-6 md:p-8 rounded">
          <h2>Bedingungen für eine günstige Einstufung</h2>
          <p className="mb-4 text-text-secondary">Damit Sie von den günstigeren Zweitwagentarifen profitieren, setzen die Versicherer meist bestimmte Regeln voraus:</p>
          <ul className="list-disc pl-6 space-y-2 text-text">
            <li><strong>Der Erstwagen:</strong> Er muss mindestens in SF-Klasse 1/2 oder besser eingestuft sein.</li>
            <li><strong>Der Fahrer:</strong> Oft dürfen die Fahrzeuge nur vom Versicherungsnehmer und seinem Partner gefahren werden.</li>
            <li><strong>Das Alter:</strong> Besonders streng wird es, wenn Fahranfänger (unter 23 oder 25 Jahren) den Zweitwagen nutzen. Viele günstige Einstufungen fallen dann weg.</li>
          </ul>
        </section>

        <section className="my-12">
          <h2>Tipps für Familien und Fahranfänger</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Oft ist der "Zweitwagen" in Wirklichkeit das Auto für das Kind, das gerade den Führerschein bestanden hat. Würde der Fahranfänger das Auto selbst versichern, wären die Kosten enorm.
          </p>
          <div className="bg-surface border-l-4 border-amber-400 p-6 my-6">
            <h3>Die Lösung: Zulassung über die Eltern</h3>
            <p className="text-text-secondary">
              Ein Elternteil meldet das Auto als Zweitwagen auf sich an. Das Kind wird als Fahrer im Vertrag eingetragen. Das ist zwar teurer als ein Tarif ohne junge Fahrer, aber immer noch viel billiger als ein Erstvertrag auf das Kind.
            </p>
            <p className="text-text-secondary mt-2">
              Später (z.B. nach 3-4 Jahren) kann der erfahrene Nachwuchs den Vertrag übernehmen. Man kann dabei aber maximal so viele SF-Klassen übertragen bekommen, wie man seit Erwerb des Führerscheins selbst hätte erfahren können.
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2>Müssen beide Autos bei der gleichen Versicherung sein?</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            In der Regel erhalten Sie die besten Rabatte (z.B. verbesserte Zweitwageneinstufung in SF 2 oder 3), wenn Sie Erst- und Zweitwagen bei derselben Gesellschaft versichern.
          </p>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Es lohnt sich aber dennoch, zu vergleichen. Manchmal ist ein anderer Versicherer in der Basisprämie so günstig, dass eine Einstufung in SF 1/2 dort insgesamt billiger ist als die Spezial-Regelung beim bisherigen Versicherer. Ein <Link href="/kfz-versicherung-vergleichen/" className="underline">Tarifvergleich</Link> bringt hier schnell Klarheit.
          </p>
        </section>

      </div>
      
      <ConversionSection />
    </>
  )
}
