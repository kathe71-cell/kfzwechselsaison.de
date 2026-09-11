import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Rechtliche Angaben und Impressum von KFZ Wechselsaison.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      <Breadcrumbs items={[{ label: 'Startseite', href: '/' }, { label: 'Impressum' }]} />

      <h1 className="mb-6 mt-4">Impressum</h1>

      <div className="space-y-6 text-text-secondary">
        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">Angaben gemäß § 5 DDG</h2>
          <p>
            Jens Kathe<br />
            Hansastraße 6<br />
            34119 Kassel<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">Kontakt</h2>
          <p>
            E-Mail: domain@kathe.org
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Jens Kathe<br />
            Hansastraße 6<br />
            34119 Kassel
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">Wichtiger rechtlicher Hinweis / Beratungsausschluss</h2>
          <p>
            KFZ Wechselsaison ist ein unabhängiges Informations- und Verbraucherportal. Wir bieten keine individuelle Versicherungsvermittlung, Rechts- oder Steuerberatung an. Die bereitgestellten Informationen dienen ausschließlich der allgemeinen Orientierung. Ein Versicherungsvertrag kommt erst durch den Abschluss bei dem jeweiligen Versicherungsunternehmen zustande.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="mt-2">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p className="mt-2">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>.
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  )
}
