import React from 'react';
import { ShieldCheck, Scale } from 'lucide-react';

export default function PositionZeroBox() {
  return (
    <section aria-labelledby="pos0-heading" className="my-8">
      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        {/* Subtle accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-slate-900" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wide">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>BEGRIFFSBESTIMMUNG &middot; KÜNDIGUNGSFRIST &amp; § 40 VVG</span>
          </div>
          <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Vorgaben nach VVG &amp; AKB</span>
          </div>
        </div>

        <h2 id="pos0-heading" className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
          Was ist die Kfz-Wechselsaison und wann endet die Kündigungsfrist?
        </h2>

        {/* 40-60 words concise definition for Featured Snippet */}
        <div className="p-4 bg-white rounded-xl border border-slate-200/80 text-slate-800 text-base sm:text-lg leading-relaxed font-normal shadow-xs">
          <p>
            Die <strong>Kfz-Wechselsaison</strong> bezeichnet den Zeitraum im Herbst, in dem viele Fahrzeughalter ihre Autoversicherung überprüfen und vergleichen. Bei vielen Kfz-Versicherungen beträgt die <strong>vertraglich vereinbarte Kündigungsfrist einen Monat zum Vertragsablauf</strong> (gesetzlicher Rahmen nach § 11 Abs. 3 VVG). Maßgeblich sind Ihre Versicherungsbedingungen. Bei Verträgen mit Ablauf zum 31. Dezember ist dies der <strong>30. November (23:59 Uhr)</strong>. Bei einer Beitragserhöhung besteht ein <strong>Sonderkündigungsrecht nach § 40 VVG</strong> mit einer Frist von genau <strong>einem Monat ab Zugang</strong> der Mitteilung.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-white/80 p-2.5 rounded-lg border border-slate-200/60">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Kündigungsfrist</div>
            <div className="text-sm font-extrabold text-slate-950 mt-0.5">1 Monat (AKB)</div>
          </div>
          <div className="bg-white/80 p-2.5 rounded-lg border border-slate-200/60">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Typischer Stichtag</div>
            <div className="text-sm font-extrabold text-slate-950 mt-0.5">30. November*</div>
          </div>
          <div className="bg-white/80 p-2.5 rounded-lg border border-slate-200/60">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Sonderkündigung</div>
            <div className="text-sm font-extrabold text-slate-950 mt-0.5">1 Monat ab Zugang</div>
          </div>
          <div className="bg-white/80 p-2.5 rounded-lg border border-slate-200/60">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">Rechtsgrundlagen</div>
            <div className="text-sm font-extrabold text-slate-900 mt-0.5">&sect; 11 &amp; &sect; 40 VVG</div>
          </div>
        </div>
      </div>
    </section>
  );
}
