import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Impressum – Gesetzliche Anbieterkennzeichnung',
  description: 'Rechtliche Angaben und Impressum nach § 5 DDG von KFZ Wechselsaison.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      <Breadcrumbs items={[{ label: 'Startseite', href: '/' }, { label: 'Impressum' }]} />

      <h1 className="mb-6 mt-4 text-3xl font-extrabold text-slate-900 tracking-tight">Impressum</h1>

      <div className="space-y-6 text-slate-700 leading-relaxed text-sm">
        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="mb-3 text-lg font-bold text-slate-900">Angaben gemäß § 5 DDG</h2>
          <p>
            Jens Kathe<br />
            Hansastraße 6<br />
            34119 Kassel<br />
            Deutschland
          </p>
        </section>

        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="mb-3 text-lg font-bold text-slate-900">Kontakt</h2>
          <p>
            E-Mail:{' '}
            <a href="mailto:jens@kathe.org" className="font-semibold text-slate-900 underline hover:text-amber-600">
              jens@kathe.org
            </a>
            <br />
            Telefon:{' '}
            <a href="tel:+491786652623" className="font-semibold text-slate-900 underline hover:text-amber-600">
              +49 178 6652623
            </a>
          </p>
        </section>

        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="mb-3 text-lg font-bold text-slate-900">Umsatzsteuer &amp; Kleinunternehmerstatus</h2>
          <p>
            Als Kleinunternehmer im Sinne von <strong>§ 19 Abs. 1 UStG</strong> wird keine Umsatzsteuer berechnet und ausgewiesen.
          </p>
        </section>

        <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="mb-3 text-lg font-bold text-slate-900">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Jens Kathe<br />
            Hansastraße 6<br />
            34119 Kassel
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-bold text-slate-900">Wichtiger rechtlicher Hinweis / Unabhängiges Portal</h2>
          <p className="text-slate-600 text-xs">
            KFZ Wechselsaison (kfzwechselsaison.de) ist ein unabhängiges Verbraucher- und Informationsportal. Wir erbringen keine Rechts-, Steuer- oder individuelle Versicherungsberatung und treten nicht als Versicherungsvermittler oder Makler auf. Die Inhalte dienen der allgemeinen Verbraucheraufklärung. Ein Versicherungsvertrag kommt ausschließlich direkt zwischen dem Nutzer und dem jeweiligen Versicherungsunternehmen zustande.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-bold text-slate-900">EU-Streitschlichtung</h2>
          <p className="text-slate-600 text-xs">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-slate-900"
            >
              https://ec.europa.eu/consumers/odr/
            </a>.
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
