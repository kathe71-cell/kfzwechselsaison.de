'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Scale, ArrowRight, Code } from 'lucide-react';

export function Footer() {

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        {/* Brand statement bar */}
        <div className="pb-10 mb-10 border-b border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <Link href="/" className="inline-flex items-baseline gap-1.5 no-underline mb-3">
              <span className="text-2xl font-black tracking-tight text-white">KFZ</span>
              <span className="text-xl font-bold tracking-tight text-amber-400">Wechselsaison</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 ml-2">2026/2027</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Unabhängiges deutsches Fachportal zum Kfz-Versicherungswechsel. Wir informieren sachlich über Kündigungsfristen nach Vertrag und VVG, Sonderkündigung gem. &sect; 40 VVG, Typklassen und Sparpotenziale.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/rechner-embed"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-white hover:border-slate-500 transition-colors"
            >
              <Code className="w-3.5 h-3.5 text-amber-400" />
              <span>Widget für Webmaster</span>
            </Link>
            <Link
              href="/#kuendigung-generator"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-xs font-black text-slate-950 transition-colors"
            >
              <span>Kündigungs-Generator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Navigation columns */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-xs">
          {/* Col 1: Wechselfristen & Recht */}
          <div>
            <p className="mb-3 font-mono font-bold uppercase tracking-wider text-amber-400">
              Fristen &amp; Recht (§ VVG)
            </p>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/30-november-kfz-versicherung/" className="hover:text-white transition-colors">Stichtag 30. November</Link></li>
              <li><Link href="/kuendigungsfrist-kfz-versicherung/" className="hover:text-white transition-colors">Kündigungsfristen nach VVG</Link></li>
              <li><Link href="/sonderkuendigungsrecht-kfz-versicherung/" className="hover:text-white transition-colors">Sonderkündigung (§ 40 VVG)</Link></li>
              <li><Link href="/kfz-versicherung-kuendigen/" className="hover:text-white transition-colors">Kündigung einreichen (Anleitung)</Link></li>
              <li><Link href="/#kuendigung-generator" className="hover:text-white transition-colors font-semibold text-slate-200">Kündigungsschreiben-Generator</Link></li>
            </ul>
          </div>

          {/* Col 2: Wechsel & Vergleich */}
          <div>
            <p className="mb-3 font-mono font-bold uppercase tracking-wider text-amber-400">
              Wechsel &amp; Tarife
            </p>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/kfz-versicherung-wechseln/" className="hover:text-white transition-colors">Kfz-Versicherung wechseln</Link></li>
              <li><Link href="/kfz-versicherung-vergleichen/" className="hover:text-white transition-colors">Tarife objektiv vergleichen</Link></li>
              <li><Link href="/#spar-rechner" className="hover:text-white transition-colors font-semibold text-slate-200">Ersparnis- &amp; Fristenrechner</Link></li>
              <li><Link href="/#gdv-matrix" className="hover:text-white transition-colors">Typklassen verstehen</Link></li>
              <li><Link href="/kfz-versicherung-2027/" className="hover:text-white transition-colors">Ausblick Beitragsjahr 2027</Link></li>
            </ul>
          </div>

          {/* Col 3: Kaskoschutz & Sparten */}
          <div>
            <p className="mb-3 font-mono font-bold uppercase tracking-wider text-amber-400">
              Versicherungsarten
            </p>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/kfz-haftpflicht/" className="hover:text-white transition-colors">Kfz-Haftpflichtversicherung</Link></li>
              <li><Link href="/teilkasko/" className="hover:text-white transition-colors">Teilkasko (Wild, Glas, Sturm)</Link></li>
              <li><Link href="/vollkasko/" className="hover:text-white transition-colors">Vollkasko (Vollkaskoschutz)</Link></li>
              <li><Link href="/e-auto-versicherung/" className="hover:text-white transition-colors">Elektroauto-Versicherung</Link></li>
              <li><Link href="/zweitwagenversicherung/" className="hover:text-white transition-colors">Zweitwagen-Einstufung</Link></li>
            </ul>
          </div>

          {/* Col 4: Transparenz & Rechtliches */}
          <div>
            <p className="mb-3 font-mono font-bold uppercase tracking-wider text-amber-400">
              Transparenz &amp; Portal
            </p>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/ueber-uns/" className="hover:text-white transition-colors">Über das Fachportal</Link></li>
              <li><Link href="/ratgeber/" className="hover:text-white transition-colors">Fachratgeber &amp; Artikel</Link></li>
              <li><Link href="/faq/" className="hover:text-white transition-colors">Häufige Fragen (FAQ)</Link></li>
              <li><Link href="/affiliate-hinweis/" className="hover:text-white transition-colors">Transparenz &amp; Affiliate-Hinweis</Link></li>
              <li><Link href="/impressum/" className="hover:text-white transition-colors font-bold text-slate-200">&rarr; Impressum nach &sect; 5 DDG</Link></li>
              <li><Link href="/datenschutz/" className="hover:text-white transition-colors">Datenschutzerklärung (DSGVO)</Link></li>
              <li><Link href="/nutzungsbedingungen/" className="hover:text-white transition-colors">Nutzungsbedingungen</Link></li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure Notice */}
        <div className="mt-10 pt-6 border-t border-slate-900 text-[11px] text-slate-300 leading-relaxed">
          <p>
            * <strong>Transparenzhinweis &amp; Affiliate-Kennzeichnung:</strong> Bei den mit einem Sternchen (*) gekennzeichneten Links sowie Tarifrechnern handelt es sich um Provisions- / Partnerlinks. Wenn Sie über diese Links einen Vergleich durchführen oder einen Vertrag abschließen, erhält dieses Portal eine Vergütung. Für Sie entstehen hierdurch keinerlei Mehrkosten oder Nachteile. Die redaktionelle Unabhängigkeit bleibt hiervon unberührt. Modellrechnungen stellen unverbindliche Schätzungen dar.
          </p>
        </div>

        {/* Fact Strip at very bottom */}
        <div className="mt-6 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>&sect; 5 DDG &middot; Redaktionelle Sorgfalt nach &sect; 18 Abs. 2 MStV &middot; Zero-CDN System Fonts &middot; Partnerfinanziert*</span>
          </div>

          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} KFZ Wechselsaison</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
