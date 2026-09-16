import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { ConversionSection } from '@/components/ConversionSection'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sonderkündigungsrecht Kfz-Versicherung: Wann & Wie?',
  description: 'Wann können Sie Ihre Kfz-Versicherung außerordentlich kündigen? Infos zu Beitragserhöhungen, Schadenfall und Fahrzeugwechsel.',
  alternates: { canonical: 'https://kfzwechselsaison.de/sonderkuendigungsrecht-kfz-versicherung/' },
}

export default function SonderkuendigungKfzVersicherungPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Breadcrumbs items={[{label:'Startseite',href:'/'},{label:'Sonderkündigungsrecht'}]} />
        
        <h1>Sonderkündigungsrecht bei der Kfz-Versicherung</h1>
        
        <p className="text-xl text-text-secondary mb-8 leading-relaxed">
          Die reguläre Kündigungsfrist ist verstrichen? Kein Grund zur Panik. Das Versicherungsvertragsgesetz (VVG) räumt Versicherten in bestimmten Situationen ein Sonderkündigungsrecht ein. Damit können Sie Ihren Vertrag außerordentlich beenden und den Anbieter wechseln.
        </p>

        <AffiliateDisclosure />

        <section className="my-12">
          <h2>Wann greift das Sonderkündigungsrecht?</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Ein außerordentliches Kündigungsrecht besteht vor allem dann, wenn sich an den vertraglichen Bedingungen etwas zu Ihren Ungunsten ändert, oder wenn ein besonderes Ereignis eintritt. Die drei häufigsten Fälle sind:
          </p>

          <div className="space-y-8 mt-8">
            <div className="bg-surface p-6 md:p-8 rounded border border-border">
              <h3>1. Bei einer Beitragserhöhung</h3>
              <p className="text-text-secondary leading-relaxed">
                Erhöht die Versicherung den Beitrag, ohne dass sich die vertraglichen Leistungen verbessern, haben Sie das Recht zu kündigen. Das gilt auch für versteckte Erhöhungen: Wenn Ihr Beitrag zwar sinkt, er aber durch eine bessere <Link href="/kfz-versicherung-vergleichen/" className="underline">Schadenfreiheitsklasse (SF-Klasse)</Link> eigentlich noch stärker hätte sinken müssen.
              </p>
              <div className="bg-surface-subtle p-4 mt-4 rounded">
                <p className="text-sm font-semibold text-text">Frist nach § 40 Abs. 1 VVG:</p>
                <p className="text-sm text-text-secondary">Genau ein Monat ab tatsächlichem Zugang der Mitteilung über die Erhöhung. Die Kündigung wird frühestens zu dem Zeitpunkt wirksam, zu dem die Erhöhung in Kraft getreten wäre.</p>
              </div>
            </div>

            <div className="bg-surface p-6 md:p-8 rounded border border-border">
              <h3>2. Nach einem Schadenfall</h3>
              <p className="text-text-secondary leading-relaxed">
                Haben Sie einen Schaden an die Versicherung gemeldet, können sowohl Sie als auch der Versicherer kündigen. Dabei ist es völlig unerheblich, ob die Versicherung den Schaden bezahlt oder die Übernahme ablehnt.
              </p>
              <div className="bg-surface-subtle p-4 mt-4 rounded">
                <p className="text-sm font-semibold text-text">Frist:</p>
                <p className="text-sm text-text-secondary">Ein Monat nach Abschluss der Schadenregulierung bzw. nach Erhalt der Mitteilung über die Ablehnung.</p>
              </div>
            </div>

            <div className="bg-surface p-6 md:p-8 rounded border border-border">
              <h3>3. Bei Fahrzeugwechsel oder Abmeldung</h3>
              <p className="text-text-secondary leading-relaxed">
                Wenn Sie Ihr Fahrzeug verkaufen oder stilllegen, endet die Versicherungspflicht für dieses Auto. Der Vertrag wird taggenau abgerechnet und das restliche Geld erstattet. Bei einem Neukauf können Sie den Versicherer für das neue Auto völlig frei wählen.
              </p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2>Sonderkündigung wegen geänderter Typ- oder Regionalklassen</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Ein häufiger Grund für Beitragserhöhungen ist die jährliche Neueinstufung der Regionalklassen und Typklassen durch den Gesamtverband der Deutschen Versicherungswirtschaft (GDV). 
          </p>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Wird Ihr Wohnort oder Ihr Fahrzeugmodell höher eingestuft und dadurch Ihr Beitrag teurer, gilt dies als Beitragserhöhung. Sie haben somit ein Sonderkündigungsrecht. <strong>Ausnahme:</strong> Ziehen Sie selbst in eine Region mit höherer Regionalklasse um, löst dies <em>kein</em> Sonderkündigungsrecht aus.
          </p>
        </section>

        <section className="my-12 bg-surface-subtle p-6 rounded border-l-4 border-border">
          <h2>Formalitäten: Das Kündigungsschreiben</h2>
          <p className="mb-4 text-text-secondary leading-relaxed">
            Es ist wichtig, dass Sie in Ihrem Kündigungsschreiben ausdrücklich auf das Sonderkündigungsrecht hinweisen und den Grund benennen (z.B. "Hiermit mache ich von meinem Sonderkündigungsrecht aufgrund der angekündigten Beitragserhöhung Gebrauch."). Fehlt diese Begründung, wird der Versicherer die Kündigung als reguläre Kündigung werten, was oft zur Ablehnung wegen Verpassen der Frist führt.
          </p>
        </section>

      </div>
      
      <ConversionSection />
    </>
  )
}
