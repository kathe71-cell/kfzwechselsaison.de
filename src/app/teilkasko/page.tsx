import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ConversionSection } from '@/components/ConversionSection'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Teilkaskoversicherung: Leistungen, Kosten & Sinnhaftigkeit',
  description: 'Was deckt die Teilkasko ab? Infos zu Glasschäden, Diebstahl, Wildunfälle und für wen sich diese Absicherung lohnt.',
  alternates: { canonical: 'https://kfzwechselsaison.de/teilkasko/' },
}

export default function TeilkaskoPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Breadcrumbs items={[{label:'Startseite',href:'/'},{label:'Teilkasko'}]} />
        
        <h1>Die Teilkaskoversicherung</h1>
        
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          Während die Haftpflichtversicherung Schäden an anderen bezahlt, sichert eine Kaskoversicherung das eigene Auto ab. Die Teilkasko übernimmt Kosten für Schäden, auf die Sie als Fahrer keinen direkten Einfluss haben – von Diebstahl bis Hagel.
        </p>

        <AffiliateDisclosure />

        <section className="my-12">
          <h2>Was zahlt die Teilkasko?</h2>
          <p className="mb-6 text-text-secondary leading-relaxed">
            Die Teilkaskoversicherung ist ein freiwilliger Zusatz zur gesetzlichen Haftpflicht. Sie deckt folgende Gefahren ab:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-brand font-bold mr-2">✓</span>
              <div>
                <strong className="block text-text">Diebstahl & Raub</strong>
                <span className="text-text-secondary">Erstattet den Wert des Fahrzeugs, wenn es gestohlen wird. Auch fest verbaute Teile (z.B. das Infotainment-System) sind abgedeckt.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brand font-bold mr-2">✓</span>
              <div>
                <strong className="block text-text">Glasbruch</strong>
                <span className="text-text-secondary">Der häufigste Kaskoschaden. Steinschlag in der Windschutzscheibe, kaputte Scheinwerfer oder Rückspiegelgläser.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brand font-bold mr-2">✓</span>
              <div>
                <strong className="block text-text">Elementarschäden</strong>
                <span className="text-text-secondary">Schäden durch Sturm (meist ab Windstärke 8), Hagel, Blitzschlag oder Überschwemmung.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brand font-bold mr-2">✓</span>
              <div>
                <strong className="block text-text">Wildunfälle & Tierbiss</strong>
                <span className="text-text-secondary">Kollisionen mit Haarwild. Gute Tarife erweitern dies auf "Tiere aller Art". Auch Marderbisse an Kabeln und Schläuchen (inkl. Folgeschäden) sind oft abgedeckt.</span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-brand font-bold mr-2">✓</span>
              <div>
                <strong className="block text-text">Brand & Explosion</strong>
                <span className="text-text-secondary">Schmorbrände in der Elektrik oder ein komplettes Ausbrennen des Fahrzeugs.</span>
              </div>
            </li>
          </ul>
        </section>

        <section className="my-12 bg-surface-subtle p-6 md:p-8 rounded">
          <h2>Was die Teilkasko NICHT zahlt</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Die Teilkasko leistet keinen Ersatz bei selbst verschuldeten Unfällen (wenn Sie beispielsweise gegen einen Baum fahren) oder bei mutwilliger Beschädigung durch Unbekannte (Vandalismus, z.B. ein zerkratzter Lack oder ein abgetretener Außenspiegel). Für diese Fälle benötigen Sie zwingend eine <Link href="/vollkasko/" className="font-bold underline">Vollkaskoversicherung</Link>.
          </p>
        </section>

        <section className="my-12">
          <h2>Für wen lohnt sich die Teilkasko?</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Als Faustregel gilt: Für Fahrzeuge, die älter als 3 bis 5 Jahre sind, aber noch einen nennenswerten Restwert (ca. ab 4.000 Euro) besitzen. Bei sehr alten Gebrauchtwagen ("Schrottwert") reicht oft die reine Haftpflicht. Bei Neuwagen oder teuren Fahrzeugen in den ersten Lebensjahren ist die Vollkasko die bessere Wahl.
          </p>
        </section>

        <section className="my-12">
          <h2>Kosten senken mit Selbstbeteiligung</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            In der Teilkasko gibt es keine Schadenfreiheitsklassen. Der Beitrag bleibt nach einem Schaden gleich, Sie werden nicht hochgestuft. 
          </p>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Um die Prämie zu reduzieren, wird meist eine <strong>Selbstbeteiligung (SB)</strong> vereinbart. Der Standard liegt hier bei 150 Euro. Das bedeutet: Bei einem Glasschaden von 600 Euro zahlen Sie 150 Euro selbst, die Versicherung übernimmt die restlichen 450 Euro. Repariert Carglass z.B. nur den Steinschlag (statt die Scheibe zu tauschen), verzichten viele Versicherer sogar auf die SB.
          </p>
        </section>

      </div>
      
      <ConversionSection />
    </>
  )
}
