'use client';

import React, { useState, useMemo } from 'react';
import { 
  Clock, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Info, 
  Scale,
  FileCheck
} from 'lucide-react';

export default function NoticePeriodCalculator() {
  const [contractType, setContractType] = useState<'calendar' | 'custom'>('calendar');
  const [customEndDate, setCustomEndDate] = useState<string>('');
  const [deliveryMethod, setDeliveryMethod] = useState<'registered' | 'fax' | 'portal' | 'letter'>('registered');

  const calculation = useMemo(() => {
    let endDate: Date;
    let endDayFormatted: string;

    if (contractType === 'calendar') {
      const now = new Date();
      let year = now.getFullYear();
      // If we are already past 30. Nov of current year, look to next year
      const nov30 = new Date(year, 10, 30, 23, 59, 59);
      if (now.getTime() > nov30.getTime()) {
        year += 1;
      }
      endDate = new Date(year, 11, 31); // 31. Dez
      endDayFormatted = `31. Dezember ${year}`;
    } else {
      if (!customEndDate) return null;
      const parts = customEndDate.split('-');
      if (parts.length !== 3) return null;
      const y = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10) - 1;
      const d = parseInt(parts[2], 10);
      if (isNaN(y) || isNaN(m) || isNaN(d)) return null;
      endDate = new Date(y, m, d);
      endDayFormatted = endDate.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    // Berechnung: Genau 1 Monat vor Vertragsablauf gem. § 11 Abs. 3 VVG / AKB
    // BGB-konforme Rückwärtsrechnung ohne Date-Overflow-Bug
    let targetYear = endDate.getFullYear();
    let targetMonth = endDate.getMonth() - 1;
    if (targetMonth < 0) {
      targetYear -= 1;
      targetMonth = 11;
    }
    const daysInTargetMonth = new Date(targetYear, targetMonth + 1, 0).getDate();
    const targetDay = Math.min(endDate.getDate(), daysInTargetMonth);
    const deadline = new Date(targetYear, targetMonth, targetDay);

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const deadlineDay = new Date(deadline.getFullYear(), deadline.getMonth(), deadline.getDate());

    const diffDays = Math.ceil((deadlineDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    // Praxishinweis zur Postlaufzeit (reine Empfehlung, keine gesetzliche Frist!)
    let leadDays = 0;
    let methodAdvice = '';
    if (deliveryMethod === 'letter') {
      leadDays = 4;
      methodAdvice = 'Einfacher Standardbrief: Erfahrungsgemäß 3–4 Werktage Postlaufzeit als Vorsichtspuffer einplanen. Beachten Sie: Ein einfacher Brief bietet keinen rechtsverbindlichen Zugangsnachweis!';
    } else if (deliveryMethod === 'registered') {
      leadDays = 3;
      methodAdvice = 'Einwurf-Einschreiben: 2–3 Werktage Vorlaufzeit empfohlen. Der Zusteller dokumentiert den Einwurf in den Briefkasten der Versicherungsgesellschaft (Nachweis des Zugangs gem. § 130 BGB).';
    } else if (deliveryMethod === 'fax') {
      leadDays = 1;
      methodAdvice = 'Qualifiziertes Fax: Schnelle Übermittlung. Sendebericht mit OK-Vermerk und verkleinertem Seitenabdruck sorgfältig für eventuelle Nachfragen aufbewahren.';
    } else {
      leadDays = 1;
      methodAdvice = 'Online-Kundenportal: Unmittelbare Übermittlung. Screenshot der Bestätigungsseite anfertigen und die Bestätigungs-E-Mail mit Zeitstempel archivieren.';
    }

    const latestDispatchDate = new Date(deadline);
    latestDispatchDate.setDate(latestDispatchDate.getDate() - leadDays);

    const dayOfWeek = deadline.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    return {
      endDateFormatted: endDayFormatted,
      deadlineFormatted: deadline.toLocaleDateString('de-DE', {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      latestDispatchFormatted: latestDispatchDate.toLocaleDateString('de-DE', {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      diffDays,
      isExpired: diffDays < 0,
      isWeekend,
      methodAdvice
    };
  }, [contractType, customEndDate, deliveryMethod]);

  return (
    <section id="kuendigungsfrist-rechner" className="my-12 scroll-mt-20">
      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-bold mb-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>FRISTEN-RECHNER &middot; KALENDERJAHR &amp; UNTERJÄHRIG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Kündigungsfrist-Rechner für Kfz-Versicherungen
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Ermitteln Sie aus Ihrem individuellen Vertragsablauf den spätestmöglichen Stichtag, an dem Ihre Kündigung beim Versicherer eingegangen sein muss.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-600 bg-white border border-slate-200 rounded-xl p-3 shrink-0 self-start lg:self-auto">
            <div className="font-bold text-slate-800">Gesetzliche Frist</div>
            <div>1 Monat vor Ablauf (&sect; 11 Abs. 3 VVG)</div>
            <div>Zugangsprinzip (&sect; 130 BGB)</div>
          </div>
        </div>

        {/* Input & Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Controls (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* 1. Vertragsende Typ */}
            <div>
              <label className="text-sm font-bold text-slate-900 block mb-2">
                1. Wann endet Ihr aktuelles Kfz-Versicherungsjahr?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setContractType('calendar')}
                  className={`p-3.5 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    contractType === 'calendar'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="font-bold">Kalenderjahr (31. Dezember)</div>
                  <div className="text-[11px] font-normal opacity-80 mt-0.5">
                    Häufigster Standard &middot; Stichtag 30. November
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setContractType('custom')}
                  className={`p-3.5 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    contractType === 'custom'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="font-bold">Unterjähriger Vertrag</div>
                  <div className="text-[11px] font-normal opacity-80 mt-0.5">
                    Individueller Ablauf (z. B. 30.04., 30.06., 31.08.)
                  </div>
                </button>
              </div>
            </div>

            {/* Custom Date Picker if custom */}
            {contractType === 'custom' && (
              <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2">
                <label htmlFor="custom-end-date" className="text-xs font-bold text-slate-900 block">
                  Genaues Ablaufdatum Ihres Versicherungsjahres laut Police: *
                </label>
                <input
                  id="custom-end-date"
                  type="date"
                  value={customEndDate}
                  onChange={(e) => setCustomEndDate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                />
                <span className="text-[11px] text-slate-500 block">
                  Finden Sie auf Ihrer letzten Beitragsrechnung unter &bdquo;Ablauf der Versicherungsperiode&ldquo;.
                </span>
              </div>
            )}

            {/* 2. Geplante Versandart */}
            <div>
              <label className="text-sm font-bold text-slate-900 block mb-2">
                2. Wie möchten Sie die Kündigung übermitteln?
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'registered', label: 'Einwurf-Einschreiben', note: 'Zustellnachweis per Post' },
                  { id: 'fax', label: 'Qualifiziertes Fax', note: 'Mit Sendebericht' },
                  { id: 'portal', label: 'Online-Kundenportal', note: 'Bestätigung archivieren' },
                  { id: 'letter', label: 'Einfacher Brief', note: 'Kein Nachweis' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setDeliveryMethod(item.id as any)}
                    className={`p-2.5 text-left rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      deliveryMethod === item.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <div className="font-bold">{item.label}</div>
                    <div className="text-[10px] opacity-75">{item.note}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Crucial Legal Tip */}
            <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Rechtlicher Grundsatz zum Zugang (&sect; 130 BGB):</strong> Bei Kündigungen entscheidet nicht der Poststempel des Absendetages, sondern der rechtzeitige Zugang im Machtbereich des Versicherers. Postlaufzeit-Angaben sind unverbindliche Vorsichtsempfehlungen. Bei Rückwärtsfristen zum Ablauf (wie dem 30. November) greift &sect; 193 BGB nach gefestigter BGH-Rechtsprechung nicht fristverlängernd zugunsten des Kündigenden.
              </div>
            </div>
          </div>

          {/* Results Display (6 cols) */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
            {calculation ? (
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                    Berechnungsergebnis
                  </span>
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                    calculation.isExpired 
                      ? 'bg-red-100 text-red-900' 
                      : calculation.diffDays <= 14 
                      ? 'bg-amber-100 text-amber-900' 
                      : 'bg-emerald-100 text-emerald-900'
                  }`}>
                    {calculation.isExpired ? 'Frist verstrichen' : `${calculation.diffDays} Tage verbleibend`}
                  </span>
                </div>

                <div>
                  <div className="text-xs text-slate-500 font-medium">Spätester Zugangstermin beim Versicherer:</div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-950 font-mono mt-0.5">
                    {calculation.deadlineFormatted}
                  </div>
                  <div className="text-xs font-mono text-amber-600 mt-1">Uhrzeit: Spätestens 23:59 Uhr vor Ort</div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5 text-xs text-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Vertragsablauf:</span>
                    <span className="font-bold text-slate-900 font-mono">{calculation.endDateFormatted}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Gesetzlicher Rahmen:</span>
                    <span className="font-bold text-slate-900 font-mono">1 Monat (&sect; 11 Abs. 3 VVG)</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-200/80">
                    <span className="text-slate-900 font-bold">Empfohlener Versandpuffer:</span>
                    <span className="font-bold text-emerald-700 font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Spätestens {calculation.latestDispatchFormatted}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 bg-slate-100/60 p-3 rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-800 mb-0.5 flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5 text-slate-600" />
                    <span>Praxishinweis zur Versandart:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    {calculation.methodAdvice}
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-slate-400">
                <Calendar className="w-10 h-10 mx-auto mb-2 text-slate-300" />
                <p className="text-sm font-semibold">Bitte wählen Sie ein Ablaufdatum aus.</p>
              </div>
            )}

            <div className="pt-4 mt-6 border-t border-slate-100">
              <a
                href="#kuendigung-generator"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95 text-center cursor-pointer"
              >
                <FileCheck className="w-4 h-4 text-amber-400" />
                <span>Kündigungsschreiben mit diesen Fristen erstellen</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
