import type { Metadata } from 'next';
import Link from 'next/link';
import { TarifcheckWidget } from '@/components/TarifcheckWidget';
import PositionZeroBox from '@/components/PositionZeroBox';
import SavingsCalculator from '@/components/SavingsCalculator';
import CancellationGenerator from '@/components/CancellationGenerator';
import GdvMatrix from '@/components/GdvMatrix';
import CitationBox from '@/components/CitationBox';
import { StepProcess } from '@/components/StepProcess';
import { InsuranceTypeCard } from '@/components/InsuranceTypeCard';
import { FAQ } from '@/components/FAQ';
import { ArticleCard } from '@/components/ArticleCard';
import { articles } from '@/content/articles';
import { faqItems } from '@/content/faq';
import { seasonalConfig } from '@/content/seasonal';
import { 
  ShieldCheck, 
  Scale, 
  Calendar, 
  Calculator, 
  FileText, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight,
  TrendingDown,
  Building2,
  Lock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'KFZ Wechselsaison 2026/2027 – Stichtag 30. November, Rechner & Kündigung',
  description:
    'Unabhängiges Verbraucherportal zur Kfz-Wechselsaison: Gesetzliche Kündigungsfrist zum 30. November, Sonderkündigung nach § 40 VVG, Ersparnisrechner, Kündigungs-Generator und GDV-Typklassen.',
  alternates: {
    canonical: 'https://kfzwechselsaison.de/',
  },
};

const wechselSteps = [
  {
    number: 1,
    title: 'Aktuellen Jahresbeitrag & SF-Klasse prüfen',
    description:
      'Prüfen Sie Ihre letzte Beitragsrechnung auf Beitragshöhe, übernommene SF-Klasse sowie eventuelle versteckte Preiserhöhungen.',
  },
  {
    number: 2,
    title: 'Kündigungsstichtag & Vertragsablauf ermitteln',
    description:
      'Bei vielen Verträgen beträgt die vereinbarte Kündigungsfrist einen Monat zum Ablauf (Rahmen § 11 Abs. 3 VVG). Endet der Vertrag am 31. Dezember, ist der 30. November der Stichtag. Maßgeblich sind Ihre AKB.',
  },
  {
    number: 3,
    title: 'Tarife unabhängig vergleichen',
    description:
      'Nutzen Sie den Vergleichsrechner, um identische Leistungen (mind. 100 Mio. € Deckung, Kaskoschutz, Werkstattregelung) gegenüberzustellen.',
  },
  {
    number: 4,
    title: 'Neuen Vertrag verbindlich bestätigen lassen',
    description:
      'Kündigen Sie den Altvertrag erst, wenn Sie die schriftliche Annahmebestätigung der neuen Versicherung mit Vertragsbeginn und dem gewünschten Deckungsumfang vorliegen haben (insb. bei Kaskoschutz).',
  },
  {
    number: 5,
    title: 'Kündigung frist- und formgerecht übermitteln',
    description:
      'Nutzen Sie unsere Muster-Formulierungshilfe. Versenden Sie das Schreiben per Einschreiben mit Rückschein, qualifiziertem Fax oder über das Kundenportal mit Empfangsbestätigung.',
  },
  {
    number: 6,
    title: 'SF-Klassen-Übertrag kontrollieren',
    description:
      'Ihr bisheriger Versicherer meldet die erfahrene Schadenfreiheitsklasse (schadenfreie Jahre) an die neue Versicherungsgesellschaft.',
  },
];

const insuranceTypes = [
  {
    title: 'Kfz-Haftpflicht',
    description: 'Gesetzlich vorgeschrieben nach § 1 PflVG. Deckt Personen-, Sach- und Vermögensschäden Dritter mit bis zu 100 Mio. € ab.',
    href: '/kfz-haftpflicht/',
  },
  {
    title: 'Teilkaskoversicherung',
    description: 'Schutz vor Elementarschäden (Sturm, Hagel, Überschwemmung), Glasbruch, Diebstahl, Marderbiss und Haarwildunfällen.',
    href: '/teilkasko/',
  },
  {
    title: 'Vollkaskoversicherung',
    description: 'Umfasst alle Teilkaskoleistungen plus Absicherung bei selbstverschuldeten Unfallschäden und Vandalismus Dritter.',
    href: '/vollkasko/',
  },
  {
    title: 'Elektroauto-Versicherung',
    description: 'Spezialtarife für BEVs und Plug-in-Hybride mit All-Risk-Akkuschutz, Wallbox-Deckung und Abschleppung bei leerem Akku.',
    href: '/e-auto-versicherung/',
  },
  {
    title: 'Zweitwagen-Einstufung',
    description: 'Sondereinstufung für zusätzliche Familienfahrzeuge – spart durch direkte Einstufung in günstigere SF-Rabattstaffeln.',
    href: '/zweitwagenversicherung/',
  },
];

export default function HomePage() {
  const featuredArticles = articles.slice(0, 4);
  const selectedFaqs = faqItems.slice(0, 8);

  return (
    <div className="bg-white">
      {/* ==================== HERO SECTION (LIGHT & EDITORIAL) ==================== */}
      <header className="border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 md:py-18 relative overflow-hidden">
        {/* Subtle geometric pattern decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

        <div className="mx-auto max-w-5xl px-5 text-center relative z-10">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-mono font-semibold tracking-wider uppercase mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>&sect; 40 VVG &middot; WECHSELSAISON 2026 / 2027</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.08] mb-6">
            Kfz-Versicherung wechseln:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 underline decoration-amber-300 decoration-wavy decoration-2">
              Stichtag 30. November
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-xl text-slate-700 leading-relaxed font-normal mb-8">
            Das unabhängige Fachportal für Verbraucher: Gesetzliche Kündigungsfristen nach dem Versicherungsvertragsgesetz (VVG), interaktiver Ersparnisrechner, GDV-Typklassen und Muster-Kündigungsvorlagen.
          </p>

          {/* Quick CTA Pill Group */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="#spar-rechner"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Ersparnis berechnen</span>
            </a>
            <a
              href="#vergleichsrechner"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Tarife vergleichen*</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#kuendigung-generator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-sm sm:text-base transition-all active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Kündigungs-Generator</span>
            </a>
          </div>

          {/* Editorial Key Facts Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6 border-t border-slate-200/80 text-left">
            <div className="bg-white/80 p-3 rounded-xl border border-slate-200">
              <div className="text-[11px] font-mono text-slate-400 uppercase">Ordentliche Frist</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">30. November*</div>
              <div className="text-[11px] text-slate-500">Vertrag &middot; &sect; 11 Abs. 3 VVG</div>
            </div>
            <div className="bg-white/80 p-3 rounded-xl border border-slate-200">
              <div className="text-[11px] font-mono text-slate-400 uppercase">Sonderkündigung</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">1 Monat Frist</div>
              <div className="text-[11px] text-slate-500">&sect; 40 Abs. 1 VVG</div>
            </div>
            <div className="bg-white/80 p-3 rounded-xl border border-slate-200">
              <div className="text-[11px] font-mono text-slate-400 uppercase">Typklassen</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">Typklassen verstehen</div>
              <div className="text-[11px] text-slate-500">KH, TK &amp; VK Systematik</div>
            </div>
            <div className="bg-white/80 p-3 rounded-xl border border-slate-200">
              <div className="text-[11px] font-mono text-slate-400 uppercase">Portal-Status</div>
              <div className="text-base font-extrabold text-slate-900 mt-0.5">Unabhängig</div>
              <div className="text-[11px] text-slate-500">Transparenz &middot; Partnerlinks</div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5">
        {/* ==================== 1. POSITION 0 DEFINITIONS-BOX ==================== */}
        <PositionZeroBox />

        {/* ==================== 2. INTERAKTIVER SPAR- & FRISTENRECHNER ==================== */}
        <div id="spar-rechner" className="scroll-mt-20">
          <SavingsCalculator />
        </div>

        {/* ==================== 3. TARIFVERGLEICH (TARIFCHECK WIDGET) ==================== */}
        <section id="vergleichsrechner" className="my-14 scroll-mt-20">
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-mono font-bold mb-2">
                <Building2 className="w-3.5 h-3.5 text-slate-700" />
                <span>ONLINE-TARIFVERGLEICH*</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Kfz-Versicherungstarife teilnehmender Anbieter vergleichen
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Vergleichen Sie Angebote teilnehmender Versicherer und Gesellschaften im Tarifnetzwerk für Haftpflicht, Teilkasko und Vollkasko.
              </p>
            </div>

            <TarifcheckWidget />

            <div className="mt-4 text-center">
              <p className="text-[11px] text-slate-500">
                * Werbelink / Partnerlink. Bei Tarifabschluss über dieses Portal erhalten wir eine Vergütung. Für Sie entstehen keinerlei Mehrkosten.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== 4. KÜNDIGUNGSSCHREIBEN-GENERATOR ==================== */}
        <CancellationGenerator />

        {/* ==================== 5. GDV TYPKLASSEN MATRIX ==================== */}
        <GdvMatrix />

        {/* ==================== 6. DER WECHSEL IN 6 SCHRITTEN ==================== */}
        <section className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Kfz-Versicherungswechsel Schritt für Schritt
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              So gelingt der Wechsel reibungslos und ohne Unterbrechung Ihres gesetzlichen Versicherungsschutzes.
            </p>
          </div>
          <StepProcess steps={wechselSteps} />
        </section>

        {/* ==================== 7. VERSICHERUNGSARTEN GRID ==================== */}
        <section className="my-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Versicherungsarten im Überblick
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Wählen Sie den passenden Leistungsumfang für Ihr Fahrzeug und Nutzungsverhalten.
              </p>
            </div>
            <Link
              href="/kfz-versicherung-vergleichen/"
              className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 shrink-0"
            >
              <span>Alle Sparten vergleichen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insuranceTypes.map((type) => (
              <InsuranceTypeCard
                key={type.href}
                title={type.title}
                description={type.description}
                href={type.href}
              />
            ))}
          </div>
        </section>

        {/* ==================== 8. E-E-A-T REDAKTIONS- & QUELLEN-BOX ==================== */}
        <section className="my-16">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>REDAKTIONELLE GRUNDSÄTZE &middot; QUELLENNACHWEIS</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Fachredaktion &amp; Primärquellen
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  Alle rechtlichen Erläuterungen, Modellrechnungen und Kündigungshinweise orientieren sich an den gesetzlichen Bestimmungen des Versicherungsvertragsgesetzes (VVG) sowie den Veröffentlichungen des Branchenverbands GDV und der BaFin.
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 bg-slate-800/80 p-3 rounded-xl border border-slate-700 shrink-0">
                <div>Bezugszeitraum: Wechselsaison 2026/2027</div>
                <div className="text-slate-300 font-semibold mt-0.5">Sorgfalt nach &sect; 18 Abs. 2 MStV</div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-6 text-xs text-slate-300">
              <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                    <Scale className="w-3.5 h-3.5 text-amber-400" />
                    <span>&sect; 11 &amp; &sect; 40 VVG</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Gesetzlicher Rahmen für vertragliche Kündigungsfristen (&sect; 11 Abs. 3 VVG) und das Sonderkündigungsrecht bei Beitragserhöhungen (&sect; 40 Abs. 1 VVG).
                  </p>
                </div>
                <a
                  href="https://www.gesetze-im-internet.de/vvg_2008/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-mono text-[11px] mt-3 hover:underline"
                >
                  <span>Gesetzestext VVG (BfJ)</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>GDV e.V. (Branchenverband)</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Veröffentlichungen und unverbindliche Typklassenstatistiken des privatrechtlichen Gesamtverbands der Deutschen Versicherungswirtschaft e.V.
                  </p>
                </div>
                <a
                  href="https://www.dieversicherer.de/versicherer/auto/typklassenabfrage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-mono text-[11px] mt-3 hover:underline"
                >
                  <span>Typklassenabfrage (Die Versicherer)</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>BaFin Finanzaufsicht</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Aufsichtsgrundsätze und Marktbeobachtung der Bundesanstalt für Finanzdienstleistungsaufsicht zu den Rechten von Versicherungsnehmern.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-500 mt-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  <span>Behördliche Aufsicht (bafin.de)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 9. ZITATIONS-BOX (APA/HARVARD) ==================== */}
        <CitationBox
          title="Kfz-Wechselsaison 2026/2027: Fristen nach § 40 VVG, Sparrechner und Kündigung"
          url="https://kfzwechselsaison.de/"
        />

        {/* ==================== 10. RATGEBER-ARTIKEL ==================== */}
        <section className="my-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Aktuelle Fachratgeber &amp; Fristen-Guides
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Vertiefende Fachartikel aus der Redaktion zur Optimierung Ihrer Kfz-Versicherung.
              </p>
            </div>
            <Link
              href="/ratgeber/"
              className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1 shrink-0"
            >
              <span>Alle Ratgeber anzeigen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        </section>

        {/* ==================== 11. FAQ ACCORDION ==================== */}
        <section className="my-16 border-t border-slate-200/80 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Häufig gestellte Fragen (FAQ)
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Die wichtigsten rechtlichen und praktischen Antworten rund um Stichtag, Kündigung und Wechsel.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQ items={selectedFaqs} />
          </div>
        </section>
      </div>
    </div>
  );
}
