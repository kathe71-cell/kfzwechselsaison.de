import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ConversionSection } from '@/components/ConversionSection'
import { TarifcheckWidget } from '@/components/TarifcheckWidget'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import { FAQ } from '@/components/FAQ'
import { StepProcess } from '@/components/StepProcess'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kfz-Versicherung wechseln – Anleitung und Tipps',
  description:
    'So wechseln Sie Ihre Kfz-Versicherung: Schritt-für-Schritt-Anleitung, Kündigungsfristen und wichtige Tipps für den Versicherungswechsel.',
  alternates: { canonical: 'https://kfzwechselsaison.de/kfz-versicherung-wechseln/' },
}

export default function KfzVersicherungWechselnPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Breadcrumbs items={[{ label: 'Startseite', href: '/' }, { label: 'Kfz-Versicherung wechseln' }]} />

        <h1 className="mb-4 mt-2">Kfz-Versicherung wechseln</h1>

        <p className="mb-6 text-lg text-text-secondary">
          Ein Wechsel der Kfz-Versicherung kann sich finanziell lohnen – vorausgesetzt,
          du beachtest die Fristen und vergleichst die Angebote sorgfältig. Dieser Ratgeber
          erklärt dir Schritt für Schritt, wie der Wechsel funktioniert.
        </p>

        <AffiliateDisclosure />

        <div id="tarifrechner" className="my-10">
          <TarifcheckWidget />
        </div>

        {/* Warum wechseln */}
        <section className="mb-12">
          <h2>Warum sich ein Versicherungswechsel lohnen kann</h2>
          <p className="mb-4 text-text-secondary">
            Die Tarife für Kfz-Versicherungen ändern sich jedes Jahr. Neue Typ- und
            Regionalklassen, veränderte Schadenbilanzen und der Wettbewerb unter den
            Versicherern führen dazu, dass sich die Beiträge teils deutlich unterscheiden –
            auch bei vergleichbaren Leistungen.
          </p>
          <p className="mb-4 text-text-secondary">
            Ein Wechsel kann sich in verschiedenen Situationen lohnen:
          </p>
          <ul className="mb-6 space-y-2 pl-5 text-text-secondary">
            <li className="list-disc"><strong className="text-text">Beitrag prüfen:</strong> Wenn du seit mehreren Jahren beim selben Versicherer bist, lohnt sich ein Vergleich der aktuellen Tarife.</li>
            <li className="list-disc"><strong className="text-text">Bessere Leistungen:</strong> Neue Tarife bieten oft bessere Konditionen, etwa bei der Neupreisentschädigung oder bei erweiterten Wildschäden.</li>
            <li className="list-disc"><strong className="text-text">Veränderte Lebensumstände:</strong> Ein Umzug, weniger gefahrene Kilometer oder ein neuer Fahrerkreis können den Beitrag beeinflussen.</li>
          </ul>
        </section>

        {/* Schritt für Schritt */}
        <section className="mb-12">
          <h2 className="mb-6">Wie wechsle ich meine Kfz-Versicherung?</h2>
          <StepProcess
            steps={[
              { number: 1, title: 'Bedarf ermitteln', description: 'Überlege, welchen Versicherungsschutz du brauchst: Haftpflicht, Teilkasko oder Vollkasko? Welche Zusatzbausteine sind dir wichtig?' },
              { number: 2, title: 'Tarife vergleichen', description: 'Nutze einen Vergleichsrechner, um verschiedene Angebote gegenüberzustellen. Achte auf Leistungen und Beitrag.' },
              { number: 3, title: 'Neuen Vertrag abschließen', description: 'Schließe zuerst den neuen Vertrag ab, bevor du den alten kündigst. So bist du zu keinem Zeitpunkt ohne Versicherungsschutz.' },
              { number: 4, title: 'Alten Vertrag kündigen', description: 'Kündige fristgerecht. In vielen Fällen übernimmt der neue Versicherer die Kündigung für dich.' },
            ]}
          />
        </section>

        {/* Kündigungsfristen */}
        <section className="mb-12">
          <h2>Kündigungsfristen im Blick behalten</h2>
          <p className="mb-4 text-text-secondary">
            Die reguläre{' '}
            <Link href="/kuendigungsfrist-kfz-versicherung/">Kündigungsfrist</Link>{' '}
            beträgt bei den meisten Kfz-Versicherungen einen Monat zum Ende des
            Versicherungsjahres. Bei Verträgen, die mit dem Kalenderjahr enden,
            ist der{' '}
            <Link href="/30-november-kfz-versicherung/">30. November</Link>{' '}
            ein häufig genannter Stichtag.
          </p>
          <p className="mb-4 text-text-secondary">
            Es gibt jedoch auch Verträge mit unterjähriger Laufzeit oder abweichendem
            Versicherungsjahr. Prüfe daher immer die konkreten Angaben in deinem
            Versicherungsvertrag.
          </p>

          <h3 className="mt-6">Sonderkündigungsrecht nutzen</h3>
          <p className="mb-4 text-text-secondary">
            Erhöht dein Versicherer den Beitrag, ohne die Leistung zu verbessern,
            hast du in der Regel ein{' '}
            <Link href="/sonderkuendigungsrecht-kfz-versicherung/">Sonderkündigungsrecht</Link>.
            Nach Erhalt der Beitragserhöhung hast du typischerweise einen Monat Zeit,
            den Vertrag zu kündigen. Auch nach einem regulierten Schadenfall oder bei
            einem Fahrzeugwechsel kann ein Sonderkündigungsrecht bestehen.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="mb-4">Häufige Fragen zum Versicherungswechsel</h2>
          <FAQ
            items={[
              {
                question: 'Muss ich erst kündigen oder erst neu abschließen?',
                answer:
                  'Empfehlenswert ist, zuerst den neuen Vertrag abzuschließen und dann den alten zu kündigen. So bist du zu keinem Zeitpunkt ohne Versicherungsschutz.',
              },
              {
                question: 'Wird mein Schadenfreiheitsrabatt übernommen?',
                answer:
                  'Ja, die Schadenfreiheitsklasse wird zwischen den Versicherern übertragen. Du musst dafür in der Regel nichts veranlassen.',
              },
              {
                question: 'Was passiert mit zu viel gezahlten Beiträgen?',
                answer:
                  'Bei einem unterjährigen Wechsel rechnet der alte Versicherer taggenau ab und erstattet dir zu viel gezahlte Beiträge.',
              },
            ]}
          />
        </section>
      </div>

      <ConversionSection showWidget={false} />
    </>
  )
}
