import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten auf KFZ Wechselsaison.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://kfzwechselsaison.de/datenschutz/',
  },
}

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      <Breadcrumbs items={[{ label: 'Startseite', href: '/' }, { label: 'Datenschutzerklärung' }]} />

      <h1 className="mb-6 mt-4">Datenschutzerklärung</h1>

      <div className="space-y-6 text-text-secondary">
        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">1. Datenschutz auf einen Blick</h2>
          <h3 className="mb-1 font-semibold text-text">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">2. Hinweis zur verantwortlichen Stelle</h2>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="my-2 rounded bg-slate-50 p-4 text-sm text-slate-800 border border-slate-200">
            Verantwortliche Stelle: Jens Kathe<br />
            Vollständige Kontaktdaten sowie ladungsfähige Anschrift siehe{' '}
            <a href="/impressum/" className="font-semibold text-slate-900 underline hover:text-amber-600">
              Impressum
            </a>.<br />
            E-Mail: <a href="mailto:jens@kathe.org" className="underline">jens@kathe.org</a>
          </p>
          <p>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">3. Hosting und Content Delivery Networks (CDN)</h2>
          <h3 className="mb-1 font-semibold text-text">Externes Hosting (Vercel)</h3>
          <p>
            Diese Website wird bei dem externen Dienstleister <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden (z. B. IP-Adressen, technische Zugriffsdaten, Logfiles), werden auf den Servern des Hosters verarbeitet.
          </p>
          <p className="mt-2">
            Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Nutzern (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Wir haben mit Vercel die Standardvertragsklauseln der EU-Kommission (Data Processing Addendum) vereinbart.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">4. Ihre Rechte (Betroffenenrechte)</h2>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit folgende Rechte bezüglich Ihrer personenbezogenen Daten:
          </p>
          <ul className="my-3 space-y-1.5 pl-5">
            <li className="list-disc"><strong className="text-text">Auskunftsrecht (Art. 15 DSGVO):</strong> Recht auf Auskunft über Ihre von uns verarbeiteten Daten.</li>
            <li className="list-disc"><strong className="text-text">Berichtigungsrecht (Art. 16 DSGVO):</strong> Recht auf unverzügliche Berichtigung unrichtiger Daten.</li>
            <li className="list-disc"><strong className="text-text">Löschungsrecht (Art. 17 DSGVO):</strong> Recht auf Löschung Ihrer bei uns gespeicherten Daten.</li>
            <li className="list-disc"><strong className="text-text">Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Recht, die Einschränkung der Datenverarbeitung zu verlangen.</li>
            <li className="list-disc"><strong className="text-text">Datenübertragbarkeit (Art. 20 DSGVO):</strong> Recht auf Erhalt Ihrer Daten in einem strukturierten, gängigen Format.</li>
            <li className="list-disc"><strong className="text-text">Widerrufsrecht (Art. 7 Abs. 3 DSGVO):</strong> Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</li>
            <li className="list-disc"><strong className="text-text">Beschwerderecht (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">5. Verzicht auf einwilligungspflichtige Tracking-Cookies</h2>
          <p>
            Unsere Website verzichtet bewusst auf Tracking-Cookies, Werbenetzwerk-Pixel (wie z. B. Meta Pixel oder Google Ads) und externe Schriftarten-CDNs. Beim reinen Besuch unserer redaktionellen Seiten werden keine Cookies auf Ihrem Endgerät gespeichert.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">6. Vercel Web Analytics &amp; Speed Insights (Cookieless)</h2>
          <p>
            Wir nutzen Vercel Analytics zur anonymisierten statistischen Auswertung von Seitenaufrufen und zur Gewährleistung der Leistungsfähigkeit unserer Website. Vercel Analytics arbeitet vollständig <strong>cookieless</strong> und ohne Erfassung personenbezogener IP-Adressen oder persistenter Nutzer-Profile.
          </p>
          <p className="mt-2">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der bedarfsgerechten Optimierung und Systemsicherheit unseres Online-Angebots).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">7. Einbindung des Kfz-Tarifrechners (Tarifcheck / partner-versicherung.de)</h2>
          <p>
            Zur Bereitstellung des kostenlosen Tarifvergleichs ist auf ausgewählten Unterseiten das Kfz-Vergleichsmodul von <strong>partner-versicherung.de</strong> (Tarifcheck) eingebunden.
          </p>
          <p className="mt-2">
            Wenn Sie den Rechner nutzen und Fahrzeug- oder Tarifdaten eingeben, werden diese zwecks Berechnung von Vergleichsangeboten an den Betreiber des Vergleichsrechners übermittelt. Rechtsgrundlage für die Bereitstellung des Vergleichsdienstes und die Verarbeitung der von Ihnen eingegebenen Daten ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen auf Anfrage des Nutzers) sowie Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>
      </div>
    </div>
  )
}
