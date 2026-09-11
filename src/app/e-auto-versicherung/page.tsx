import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ConversionSection } from '@/components/ConversionSection'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'E-Auto-Versicherung: Besonderheiten, Akku-Schutz & Kosten',
  description: 'Was bei der Versicherung eines Elektroautos wichtig ist. Infos zur Mitversicherung von Akku, Wallbox, Ladekabel und Tipps für günstige Tarife.',
  alternates: { canonical: 'https://kfzwechselsaison.de/e-auto-versicherung/' },
}

export default function EAutoVersicherungPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Breadcrumbs items={[{label:'Startseite',href:'/'},{label:'E-Auto-Versicherung'}]} />
        
        <h1>E-Auto-Versicherung</h1>
        
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          Elektroautos bringen neue Risiken mit sich, die eine Standard-Kfz-Versicherung für Verbrenner oft nicht ausreichend abdeckt. Die gute Nachricht: Spezielle E-Auto-Tarife bieten den nötigen Schutz – und sind dank Öko-Rabatten oft sogar günstiger.
        </p>

        <AffiliateDisclosure />

        <section className="my-12">
          <h2>Warum eine spezielle EV-Versicherung wichtig ist</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Der Kern eines jeden Elektrofahrzeugs ist die Hochvoltbatterie (der Akku). Sie macht oft einen großen Teil des Fahrzeugwerts aus. Wenn sie durch einen Brand, Kurzschluss oder Bedienfehler zerstört wird, droht schnell ein wirtschaftlicher Totalschaden. Eine gute E-Auto-Versicherung legt den Fokus daher auf die Absicherung der spezifischen Komponenten.
          </p>
        </section>

        <section className="my-12 bg-surface-subtle border border-border p-6 rounded">
          <h2>Wichtige Leistungen für E-Autos</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-text">1. Allgefahrendeckung für den Akku</h3>
              <p className="text-text-secondary">Der Akku sollte gegen nahezu alle Gefahren abgesichert sein. Dazu zählen nicht nur Unfälle und Brände, sondern auch Bedienfehler (z.B. falsches Laden), Überspannung beim Laden oder Tiefenentladung.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-text">2. Folgeschäden nach Tierbiss</h3>
              <p className="text-text-secondary">Wenn ein Marder ein Hochvoltkabel anbeißt, reicht der Tausch des Kabels oft nicht. Manchmal muss das komplette System geprüft oder teure Elektronik getauscht werden. Achten Sie auf hohe Deckungssummen (mindestens 20.000 €) für Folgeschäden durch Tierbisse.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-text">3. Mitversicherung der Ladeinfrastruktur</h3>
              <p className="text-text-secondary">Ladekabel, mobile Ladestationen, Adapter und auch die heimische Wallbox sollten gegen Diebstahl und Vandalismus versichert sein. Bei manchen Tarifen ist die Wallbox sogar gegen Überspannungsschäden aus dem Stromnetz geschützt.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-text">4. Entsorgungskosten & Wasserbecken</h3>
              <p className="text-text-secondary">Wenn ein E-Auto brennt, ist das Löschen sehr aufwendig. Oft muss das Auto tagelang in einem Wasserbecken gekühlt werden. Eine gute Versicherung übernimmt diese speziellen Bergungs- und Entsorgungskosten.</p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2>Sind E-Autos günstiger in der Versicherung?</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            In vielen Fällen: <strong>Ja.</strong> Viele Versicherungsgesellschaften belohnen umweltfreundliches Fahren mit sogenannten Öko-Rabatten. Diese können zwischen 10 % und 25 % auf die Kasko-Prämie ausmachen.
          </p>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Zudem werden E-Autos oft vorsichtiger und vorausschauender bewegt (Stichwort: Reichweitenangst und Rekuperation). Das schlägt sich in günstigeren Typklassen nieder. Bei <Link href="/kfz-versicherung-vergleichen/" className="underline">Tarifvergleichen</Link> schneiden viele Stromer daher oft günstiger ab als vergleichbare Verbrenner-Modelle.
          </p>
        </section>

        <section className="my-12">
          <h2>Fazit: Vollkasko ist Pflicht</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Da der Akku so wertvoll ist, empfiehlt sich für E-Autos fast immer eine <Link href="/vollkasko/" className="underline">Vollkaskoversicherung</Link>. Achten Sie im Kleingedruckten besonders darauf, dass der Akku ohne hohe Abzüge "Neu für Alt" erstattet wird, sollte er in den ersten Jahren ausgetauscht werden müssen.
          </p>
        </section>

      </div>
      
      <ConversionSection />
    </>
  )
}
