import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten auf KFZ Wechselsaison.',
  robots: {
    index: false,
    follow: false,
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
          <h2 className="mb-2 text-xl font-semibold text-text">5. Cookies &amp; Speichertechnologien (TDDDG &amp; DSGVO)</h2>
          <p>
            Unsere Website verwendet Cookies und lokale Speicherelemente (localStorage) gemäß § 25 TDDDG (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz) und Art. 6 DSGVO.
          </p>
          <ul className="my-3 space-y-2 pl-5">
            <li className="list-disc">
              <strong className="text-text">Notwendige Speicherungen:</strong> Technisch erforderlich, um Ihre Cookie-Einstellungen im Browser lokal zu speichern (localStorage Key: <code className="bg-surface-subtle px-1 py-0.5 rounded">kfzws-cookie-consent</code>). Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG, Art. 6 Abs. 1 lit. f DSGVO.
            </li>
            <li className="list-disc">
              <strong className="text-text">Marketing &amp; Tarifvergleich:</strong> Die Einbindung des externen Tarifrechners erfordert Ihre ausdrückliche Einwilligung. Rechtsgrundlage: § 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a DSGVO.
            </li>
          </ul>
          <p className="mt-3 rounded bg-surface-subtle p-4 text-sm">
            <strong className="text-text">Widerruf der Einwilligung:</strong> Sie können Ihre erteilten Einwilligungen jederzeit für die Zukunft anpassen oder widerrufen. Klicken Sie dazu im Footer der Seite auf den Link <span className="font-medium text-brand">„Cookie-Einstellungen“</span>.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">6. Vercel Analytics (Cookieless)</h2>
          <p>
            Wir nutzen Vercel Analytics zur anonymisierten statistischen Auswertung von Seitenaufrufen und zur Gewährleistung der Leistungsfähigkeit unserer Website (Speed Insights). Vercel Analytics arbeitet vollständig <strong>cookieless</strong> und ohne Erfassung personenbezogener IP-Adressen oder Identifikatoren.
          </p>
          <p className="mt-2">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der bedarfsgerechten Optimierung unseres Online-Angebots.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold text-text">7. Einbindung des externen Tarifrechners (Tarifcheck)</h2>
          <p>
            Sofern Sie der Kategorie „Marketing / Tarifvergleich“ zugestimmt haben, wird auf unserer Website das Vergleichs-Widget von <strong>partner-versicherung.de</strong> eingebunden. Bei der Nutzung des Rechners übermitteln Sie eingegebene Daten (z. B. Fahrzeugdaten, Zulassungsbezirk, Fahrleistung, Angaben zum Versicherungsschutz) an den Betreiber des Tarifrechners, um Angebote zu berechnen.
          </p>
          <p className="mt-2">
            Die Datenübertragung und Berechnung erfolgt direkt durch den Betreiber des Tarifrechners. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung) bzw. Art. 6 Abs. 1 lit. b DSGVO zur Durchführung vorvertraglicher Anfragen.
          </p>
        </section>
      </div>
    </div>
  )
}
