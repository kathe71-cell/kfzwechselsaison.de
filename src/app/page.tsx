import type { Metadata } from 'next'
import Link from 'next/link'
import { TarifcheckWidget } from '@/components/TarifcheckWidget'
import { HeroScrollButton } from '@/components/HeroScrollButton'
import { StepProcess } from '@/components/StepProcess'
import { InsuranceTypeCard } from '@/components/InsuranceTypeCard'
import { FAQ } from '@/components/FAQ'
import { ConversionSection } from '@/components/ConversionSection'
import { ArticleCard } from '@/components/ArticleCard'
import { articles } from '@/content/articles'
import { faqItems } from '@/content/faq'
import { seasonalConfig } from '@/content/seasonal'

export const metadata: Metadata = {
  title: 'KFZ Wechselsaison – Kfz-Versicherung vergleichen, wechseln und sparen',
  description:
    'Kfz-Versicherung wechseln und vergleichen: Kündigungsfristen, Tarife und Tipps rund um den Versicherungswechsel. Jetzt unverbindlich Tarife vergleichen.',
  alternates: {
    canonical: 'https://kfzwechselsaison.de/',
  },
}

const wechselSteps = [
  {
    number: 1,
    title: 'Aktuellen Beitrag prüfen',
    description:
      'Schau dir an, was du derzeit für deine Kfz-Versicherung zahlst und welche Leistungen enthalten sind.',
  },
  {
    number: 2,
    title: 'Kündigungsfrist prüfen',
    description:
      'Prüfe in deinem Versicherungsvertrag, bis wann du kündigen kannst. Bei vielen Jahresverträgen gilt eine einmonatige Frist vor Vertragsende.',
  },
  {
    number: 3,
    title: 'Tarife vergleichen',
    description:
      'Nutze einen Tarifvergleich, um verschiedene Angebote gegenüberzustellen. Achte nicht nur auf den Preis, sondern auch auf die Leistungen.',
  },
  {
    number: 4,
    title: 'Leistungen vergleichen',
    description:
      'Prüfe Deckungssummen, Selbstbeteiligung, Werkstattbindung, Schutzbrief und weitere Bausteine. Der günstigste Tarif ist nicht immer der beste.',
  },
  {
    number: 5,
    title: 'Neuen Vertrag abschließen',
    description:
      'Hast du ein passendes Angebot gefunden, kannst du den neuen Vertrag abschließen. In vielen Fällen übernimmt der neue Versicherer die Kündigung beim alten Anbieter.',
  },
  {
    number: 6,
    title: 'Alten Vertrag kündigen',
    description:
      'Falls du selbst kündigst: Achte auf die Schriftform und die Einhaltung der Frist. Bewahre die Kündigungsbestätigung auf.',
  },
]

const insuranceTypes = [
  {
    title: 'Kfz-Haftpflicht',
    description: 'Gesetzlich vorgeschrieben. Deckt Schäden ab, die du anderen Verkehrsteilnehmern zufügst.',
    href: '/kfz-haftpflicht/',
  },
  {
    title: 'Teilkasko',
    description: 'Schützt vor Diebstahl, Glasbruch, Wildunfall, Sturm und Hagel am eigenen Fahrzeug.',
    href: '/teilkasko/',
  },
  {
    title: 'Vollkasko',
    description: 'Umfasst Teilkasko-Leistungen plus Schutz bei selbst verschuldeten Unfällen und Vandalismus.',
    href: '/vollkasko/',
  },
  {
    title: 'E-Auto-Versicherung',
    description: 'Spezielle Tarife für Elektroautos mit Akku-Schutz, Wallbox-Absicherung und Ladekabelschutz.',
    href: '/e-auto-versicherung/',
  },
  {
    title: 'Zweitwagenversicherung',
    description: 'Günstigere Einstufung für den Zweitwagen durch Übernahme der Schadenfreiheitsklasse.',
    href: '/zweitwagenversicherung/',
  },
]

const wechselAnlaesse = [
  {
    title: 'Reguläre Kündigung',
    text: 'Die meisten Kfz-Versicherungsverträge haben eine Laufzeit von einem Jahr und verlängern sich automatisch. Die Kündigung muss in der Regel einen Monat vor Vertragsende eingehen.',
  },
  {
    title: 'Beitragserhöhung',
    text: 'Erhöht dein Versicherer den Beitrag, ohne dass sich deine Leistungen verbessern, hast du in vielen Fällen ein Sonderkündigungsrecht. Prüfe die genauen Bedingungen in deinem Vertrag.',
  },
  {
    title: 'Fahrzeugwechsel',
    text: 'Kaufst du ein neues Fahrzeug, kannst du eine neue Versicherung wählen. Die alte Versicherung des vorherigen Fahrzeugs endet mit der Abmeldung.',
  },
  {
    title: 'Halterwechsel',
    text: 'Bei einem Halterwechsel, zum Beispiel bei Kauf oder Verkauf eines Gebrauchtwagens, besteht ebenfalls die Möglichkeit, den Versicherer zu wechseln.',
  },
  {
    title: 'Sonderkündigungsrecht',
    text: 'Neben Beitragserhöhungen kann ein Sonderkündigungsrecht auch nach einem Schadenfall entstehen. Die konkreten Voraussetzungen regelt der Versicherungsvertrag.',
  },
]

const vergleichskriterien = [
  { label: 'Beitragshöhe', desc: 'Der jährliche oder monatliche Versicherungsbeitrag.' },
  { label: 'Deckungssumme', desc: 'Maximale Erstattung im Schadensfall – bei Haftpflicht mindestens 100 Mio. Euro empfohlen.' },
  { label: 'Selbstbeteiligung', desc: 'Der Betrag, den du im Schadensfall selbst trägst. Höhere SB = niedrigerer Beitrag.' },
  { label: 'Werkstattbindung', desc: 'Reparatur nur in Partnerwerkstätten – senkt den Beitrag, schränkt aber die Werkstattwahl ein.' },
  { label: 'Schutzbrief', desc: 'Pannenhilfe, Abschleppdienst, Mietwagen bei Ausfall – oft als Zusatzbaustein buchbar.' },
  { label: 'Rabattschutz', desc: 'Schützt die Schadenfreiheitsklasse bei einem Schaden – verhindert Hochstufung.' },
  { label: 'Auslandsschutz', desc: 'Erweiterter Versicherungsschutz im europäischen und außereuropäischen Ausland.' },
  { label: 'Fahrerkreis', desc: 'Je enger der Fahrerkreis definiert ist, desto günstiger wird der Beitrag in der Regel.' },
]

export default function HomePage() {
  const featuredArticles = articles.slice(0, 4)
  const selectedFaqs = faqItems.slice(0, 8)

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="border-b border-border bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-5 text-center">
          {/* Seasonal banner */}
          {seasonalConfig.isWechselsaison && (
            <p className="mb-6 inline-block rounded bg-brand-50 px-4 py-2 text-sm font-medium text-brand">
              {seasonalConfig.seasonalBanner}
            </p>
          )}

          <h1 className="mb-4">{seasonalConfig.heroHeadline}</h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            {seasonalConfig.heroSubheadline}
          </p>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-text-muted">
            {seasonalConfig.seasonalNotice}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <HeroScrollButton />
            <Link href="/kfz-versicherung-wechseln/" className="btn-secondary px-6 py-3 text-base">
              So funktioniert der Wechsel
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== FULL-WIDTH TARIFRECHNER SECTION ==================== */}
      <section id="tarifrechner" className="border-b border-border bg-surface-subtle py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-6 text-center">
            <h2 className="mb-2">Kfz-Versicherung online vergleichen</h2>
            <p className="mx-auto max-w-xl text-sm text-text-secondary">
              Prüfe unverbindlich und kostenlos aktuelle Tarife für Haftpflicht, Teilkasko und Vollkasko.
            </p>
          </div>
          <TarifcheckWidget />
        </div>
      </section>

      {/* ==================== SECTION 1: Warum lohnt sich ein Vergleich? ==================== */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="mb-6">Warum lohnt sich ein Kfz-Versicherungsvergleich?</h2>
          <div className="space-y-4 text-text-secondary">
            <p>
              Die Beiträge für Kfz-Versicherungen unterscheiden sich je nach Anbieter teils erheblich –
              bei vergleichbaren Leistungen. Ein Vergleich kann sich daher auch dann lohnen, wenn du mit
              deinem aktuellen Versicherer grundsätzlich zufrieden bist.
            </p>
            <p>
              Gründe für einen Vergleich gibt es viele: Du hast eine Beitragserhöhung erhalten,
              deine Schadenfreiheitsklasse hat sich verbessert, du fährst inzwischen weniger Kilometer
              pro Jahr oder du möchtest einfach prüfen, ob dein aktueller Tarif noch zum besten
              Preis-Leistungs-Verhältnis gehört.
            </p>
            <p>
              Dabei geht es nicht nur um den Preis. Auch die Leistungen sollten zu deiner persönlichen
              Situation passen: Brauchst du einen Schutzbrief? Ist dir freie Werkstattwahl wichtig?
              Möchtest du eine niedrige oder hohe Selbstbeteiligung?
            </p>
          </div>

          <div className="mt-8 border-l-2 border-brand-100 pl-5">
            <p className="text-sm font-medium text-text">Fünf Gründe für einen Vergleich:</p>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              <li>Beitrag prüfen – zahlst du für deine Leistungen einen marktüblichen Preis?</li>
              <li>Leistungen vergleichen – passen die Konditionen zu deiner Situation?</li>
              <li>Kündigungsfrist prüfen – wann kannst du überhaupt wechseln?</li>
              <li>Alternativen vergleichen – welche anderen Tarife kommen infrage?</li>
              <li>Mögliche Einsparungen prüfen – lohnt sich ein Wechsel finanziell?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: So geht's ==================== */}
      <section className="border-t border-border py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="mb-3">Kfz-Versicherung wechseln – so geht&apos;s</h2>
              <p className="text-text-secondary">
                Der Wechsel deiner Kfz-Versicherung ist in wenigen Schritten möglich.
                Wichtig ist, dass du die Kündigungsfrist deines aktuellen Vertrags kennst
                und rechtzeitig handelst.
              </p>
              <p className="mt-4 text-sm text-text-muted">
                Mehr dazu:{' '}
                <Link href="/kfz-versicherung-wechseln/">
                  Kfz-Versicherung wechseln – vollständige Anleitung
                </Link>
              </p>
            </div>
            <StepProcess steps={wechselSteps} />
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: 30. November ==================== */}
      <section className="border-t border-border bg-surface-subtle py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="mb-6">Der 30. November – warum ist dieser Termin wichtig?</h2>
          <div className="space-y-4 text-text-secondary">
            <p>
              Viele Kfz-Versicherungsverträge in Deutschland laufen als Jahresverträge, die sich
              automatisch verlängern. In diesen Fällen endet das Versicherungsjahr häufig am
              31. Dezember. Da bei vielen Verträgen eine Kündigungsfrist von einem Monat gilt,
              ergibt sich der 30. November als letzter Termin für eine fristgerechte Kündigung.
            </p>
            <p>
              <strong>Wichtig:</strong> Nicht jeder Kfz-Versicherungsvertrag hat den 31. Dezember
              als Stichtag. Es gibt auch Verträge mit unterjährigem Beginn, bei denen das
              Versicherungsjahr zu einem anderen Zeitpunkt endet. Entscheidend ist immer dein
              konkreter Versicherungsvertrag.
            </p>
            <p>
              Prüfe deshalb deine Vertragsunterlagen oder frage bei deinem Versicherer nach,
              wann dein Versicherungsjahr endet und welche Kündigungsfrist gilt. So verpasst du
              keine Frist und kannst rechtzeitig vergleichen.
            </p>
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Ausführliche Informationen:{' '}
            <Link href="/30-november-kfz-versicherung/">
              30. November und die Kfz-Versicherung
            </Link>
            {' · '}
            <Link href="/kuendigungsfrist-kfz-versicherung/">
              Kündigungsfrist bei der Kfz-Versicherung
            </Link>
          </p>
        </div>
      </section>

      {/* ==================== SECTION 4: Versicherungsarten ==================== */}
      <section className="border-t border-border py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-2">Welche Kfz-Versicherung brauchst du?</h2>
          <p className="mb-8 max-w-2xl text-text-secondary">
            Je nach Fahrzeug, Nutzung und persönlicher Situation kommen unterschiedliche
            Versicherungsarten infrage.
          </p>
          <div className="grid gap-0 md:grid-cols-3 lg:grid-cols-5">
            {insuranceTypes.map((type) => (
              <InsuranceTypeCard
                key={type.href}
                title={type.title}
                description={type.description}
                href={type.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: Wann wechseln? ==================== */}
      <section className="border-t border-border bg-surface-subtle py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-8">Wann kannst du deine Kfz-Versicherung wechseln?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {wechselAnlaesse.map((anlass, i) => (
              <div key={i}>
                <h3 className="mb-2 text-base font-semibold">{anlass.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{anlass.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-text-muted">
            Mehr dazu:{' '}
            <Link href="/sonderkuendigungsrecht-kfz-versicherung/">
              Sonderkündigungsrecht bei der Kfz-Versicherung
            </Link>
          </p>
        </div>
      </section>

      {/* ==================== SECTION 6: Vergleichskriterien ==================== */}
      <section className="border-t border-border py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="mb-6">Kfz-Versicherung vergleichen – worauf achten?</h2>
          <p className="mb-8 text-text-secondary">
            Beim Vergleich von Kfz-Versicherungen geht es nicht nur um den Beitrag.
            Diese Kriterien solltest du berücksichtigen:
          </p>
          <div className="space-y-0">
            {vergleichskriterien.map((k) => (
              <div key={k.label} className="border-b border-border py-4 last:border-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="w-44 shrink-0 text-sm font-semibold text-text">{k.label}</span>
                  <span className="text-sm text-text-secondary">{k.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Ausführlicher Vergleich:{' '}
            <Link href="/kfz-versicherung-vergleichen/">
              Kfz-Versicherung vergleichen – darauf kommt es an
            </Link>
          </p>
        </div>
      </section>

      {/* ==================== SECTION 7: Aktuelle Ratgeber ==================== */}
      <section className="border-t border-border bg-surface-subtle py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="mb-0">Aktuelle Ratgeber</h2>
            <Link href="/ratgeber/" className="text-sm text-text-muted no-underline hover:text-text">
              Alle Ratgeber →
            </Link>
          </div>
          <div className="space-y-6">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                href={`/ratgeber/${article.slug}/`}
                category={article.category}
                readingTime={article.readingTime}
                updatedAt={article.updatedAt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: FAQ ==================== */}
      <section className="border-t border-border py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="mb-6">Häufige Fragen zur Kfz-Versicherung</h2>
          <FAQ items={selectedFaqs} withSchema={true} />
          <p className="mt-6 text-sm text-text-muted">
            <Link href="/faq/">Alle häufigen Fragen ansehen →</Link>
          </p>
        </div>
      </section>

      {/* ==================== SECTION 9: Conversion ==================== */}
      <ConversionSection
        headline="Jetzt Kfz-Versicherung vergleichen"
        text="Prüfe unverbindlich, ob sich ein Wechsel deiner Kfz-Versicherung lohnt. Vergleiche Tarife verschiedener Anbieter und finde einen passenden Schutz für dein Fahrzeug."
        showWidget={false}
      />
    </>
  )
}
