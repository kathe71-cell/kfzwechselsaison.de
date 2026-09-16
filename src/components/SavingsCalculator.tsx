'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Calculator, Share2, Check, Clock, TrendingDown, ArrowRight, Code } from 'lucide-react';
import Link from 'next/link';

interface SavingsCalculatorProps {
  isEmbed?: boolean;
}

export default function SavingsCalculator({ isEmbed = false }: SavingsCalculatorProps) {
  // Calculator inputs
  const [currentPremium, setCurrentPremium] = useState<number>(680);
  const [sfClass, setSfClass] = useState<number>(10);
  const [kmPerYear, setKmPerYear] = useState<number>(15000);
  const [coverageType, setCoverageType] = useState<'haftpflicht' | 'teilkasko' | 'vollkasko'>('vollkasko');
  const [workshopBinding, setWorkshopBinding] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [embedModalOpen, setEmbedModalOpen] = useState<boolean>(false);

  // Time calculation until November 30 23:59:59
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Read URL params on initial mount
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const p = params.get('premium');
      const sf = params.get('sf');
      const km = params.get('km');
      const cov = params.get('cov');
      if (p) setCurrentPremium(Math.max(200, Math.min(2500, Number(p))));
      if (sf) setSfClass(Math.max(0, Math.min(35, Number(sf))));
      if (km) setKmPerYear(Math.max(5000, Math.min(40000, Number(km))));
      if (cov === 'haftpflicht' || cov === 'teilkasko' || cov === 'vollkasko') setCoverageType(cov);
    }
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      let targetYear = now.getFullYear();
      let deadline = new Date(targetYear, 10, 30, 23, 59, 59); // 30. Nov
      if (now.getTime() > deadline.getTime()) {
        targetYear += 1;
        deadline = new Date(targetYear, 10, 30, 23, 59, 59);
      }
      const diff = Math.max(0, deadline.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Mathematically consistent model calculation
  // Explanatory note: SF-Klasse applies to Haftpflicht & Vollkasko, not Teilkasko.
  // Workshop binding only applies to Kasko portions (Teilkasko & Vollkasko), never to pure Haftpflicht.
  const { estimatedNewPremium, totalSavings, savingsPercent, levers } = useMemo(() => {
    // 1. Basic market price spread through tariff comparison (typical benchmark ~18% across providers)
    let tarifDiffPct = 0.18;

    // 2. Mileage deviation effect (if driving less, lower risk tier)
    let kmDiffPct = 0;
    if (kmPerYear <= 10000) kmDiffPct = 0.04;
    else if (kmPerYear >= 25000) kmDiffPct = -0.03;

    // 3. Workshop binding (only for Kasko; exactly 0 for pure Haftpflicht)
    // On average Kasko represents ~40-60% of premium, saving 15-20% on that portion equates to ~8% overall for Vollkasko and ~5% for Teilkasko.
    let werkstattDiffPct = 0;
    if (coverageType !== 'haftpflicht' && workshopBinding) {
      werkstattDiffPct = coverageType === 'vollkasko' ? 0.08 : 0.05;
    }

    // 4. SF class effect (only for Haftpflicht & Vollkasko; Teilkasko has no SF class)
    let sfDiffPct = 0;
    if (coverageType !== 'teilkasko' && sfClass >= 15) {
      sfDiffPct = 0.03; // Additional carrier-specific discount bracket
    }

    const totalPct = Math.max(0.08, Math.min(0.38, tarifDiffPct + kmDiffPct + werkstattDiffPct + sfDiffPct));
    
    // Calculate discrete components that add up EXACTLY to totalSavings
    const savings = Math.round(currentPremium * totalPct);
    const newPrice = currentPremium - savings;
    const percent = Math.round((savings / currentPremium) * 100);

    // Attribute exact shares to components
    const sumPct = tarifDiffPct + Math.max(0, kmDiffPct) + werkstattDiffPct + sfDiffPct;
    const werkstattSaving = werkstattDiffPct > 0 ? Math.round(savings * (werkstattDiffPct / sumPct)) : 0;
    const sfSaving = sfDiffPct > 0 ? Math.round(savings * (sfDiffPct / sumPct)) : 0;
    const tarifwechselSaving = savings - werkstattSaving - sfSaving;

    return {
      estimatedNewPremium: newPrice,
      totalSavings: savings,
      savingsPercent: percent,
      levers: {
        tarifwechsel: tarifwechselSaving,
        werkstatt: werkstattSaving,
        sfOptimierung: sfSaving,
      }
    };
  }, [currentPremium, sfClass, kmPerYear, coverageType, workshopBinding]);

  // Share current configuration
  const handleShare = () => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('premium', currentPremium.toString());
      url.searchParams.set('sf', sfClass.toString());
      url.searchParams.set('km', kmPerYear.toString());
      url.searchParams.set('cov', coverageType);
      window.history.replaceState({}, '', url.toString());

      navigator.clipboard.writeText(url.toString()).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const embedCode = `<iframe src="https://kfzwechselsaison.de/rechner-embed" width="100%" height="680" style="border:none; border-radius:12px; max-width:640px; margin:0 auto; display:block;" title="Kfz-Ersparnisrechner"></iframe><p style="font-size:12px; text-align:center; color:#64748b; margin-top:6px;">Quelle: <a href="https://kfzwechselsaison.de/" target="_blank" rel="noopener" style="color:#0f172a; font-weight:600;">kfzwechselsaison.de</a></p>`;

  return (
    <div className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden ${isEmbed ? 'p-4 sm:p-6' : 'p-6 sm:p-8 my-10'}`}>
      {/* Header & Fristen-Countdown */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            <span>INTERAKTIVER WECHSELSAISON-RECHNER 2026/2027</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kfz-Ersparnis- &amp; Fristen-Rechner
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Beispielhafte Modellrechnung Ihres Sparpotenzials und Stichtags-Countdown für kalenderjährlich endende Verträge (31. Dezember).
          </p>
        </div>

        {/* Live Stichtag Countdown Box */}
        <div className="bg-slate-900 text-white rounded-xl p-3.5 sm:p-4 shrink-0 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
            <Clock className="w-4 h-4 animate-pulse" />
            <span>STICHTAG BEI ABLAUF ZUM 31. DEZEMBER</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-slate-800/80 px-2 py-1.5 rounded">
              <div className="text-xl sm:text-2xl font-black font-mono text-white">{timeLeft.days}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Tage</div>
            </div>
            <div className="bg-slate-800/80 px-2 py-1.5 rounded">
              <div className="text-xl sm:text-2xl font-black font-mono text-white">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Std</div>
            </div>
            <div className="bg-slate-800/80 px-2 py-1.5 rounded">
              <div className="text-xl sm:text-2xl font-black font-mono text-white">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Min</div>
            </div>
            <div className="bg-slate-800/80 px-2 py-1.5 rounded">
              <div className="text-xl sm:text-2xl font-black font-mono text-amber-400">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider">Sek</div>
            </div>
          </div>
          <div className="text-[11px] text-slate-400 text-center mt-2 font-mono">
            Frist bei Ablauf zum 31.12. (1 Monat gem. AKB): 30.11., 23:59 Uhr
          </div>
        </div>
      </div>

      {/* Main Grid: Controls & Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left: Interactive Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Aktueller Jahresbeitrag */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="premium-slider" className="text-sm font-bold text-slate-900">
                Ihr aktueller Jahresbeitrag:
              </label>
              <span className="text-lg font-black text-slate-950 font-mono bg-slate-100 px-3 py-0.5 rounded-md border border-slate-200">
                {currentPremium} &euro;
              </span>
            </div>
            <input
              id="premium-slider"
              type="range"
              min="200"
              max="2200"
              step="20"
              value={currentPremium}
              onChange={(e) => setCurrentPremium(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
              <span>200 &euro;</span>
              <span>1.200 &euro;</span>
              <span>2.200 &euro;</span>
            </div>
          </div>

          {/* Slider 2: Schadenfreiheitsklasse (SF-Klasse) */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="sf-slider" className="text-sm font-bold text-slate-900">
                Schadenfreiheitsklasse (SF-Klasse):
              </label>
              <span className="text-base font-black text-slate-950 font-mono bg-slate-100 px-3 py-0.5 rounded-md border border-slate-200">
                SF {sfClass} (ca. {Math.max(20, Math.round(100 - sfClass * 2.2))} %*)
              </span>
            </div>
            <input
              id="sf-slider"
              type="range"
              min="0"
              max="35"
              step="1"
              value={sfClass}
              onChange={(e) => setSfClass(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
              <span>SF 0 (Anfänger)</span>
              <span>SF 15</span>
              <span>SF 35+ (Maximalrabatt)</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              * Richtwert. Beitragssätze in Prozent variieren je nach Versicherer. Gilt für Haftpflicht und Vollkasko (in der Teilkasko gibt es keine SF-Klassen).
            </p>
          </div>

          {/* Slider 3: Jährliche Fahrleistung */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="km-slider" className="text-sm font-bold text-slate-900">
                Jährliche Fahrleistung:
              </label>
              <span className="text-base font-black text-slate-950 font-mono bg-slate-100 px-3 py-0.5 rounded-md border border-slate-200">
                {kmPerYear.toLocaleString('de-DE')} km / Jahr
              </span>
            </div>
            <input
              id="km-slider"
              type="range"
              min="5000"
              max="35000"
              step="1000"
              value={kmPerYear}
              onChange={(e) => setKmPerYear(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1 font-mono">
              <span>5.000 km</span>
              <span>15.000 km</span>
              <span>35.000 km</span>
            </div>
          </div>

          {/* Kasko-Auswahl Buttons */}
          <div>
            <label className="text-sm font-bold text-slate-900 block mb-2">
              Gewünschter Versicherungsumfang:
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {(['haftpflicht', 'teilkasko', 'vollkasko'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setCoverageType(type)}
                  className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-150 capitalize cursor-pointer ${
                    coverageType === type
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {type === 'haftpflicht' ? 'Haftpflicht' : type === 'teilkasko' ? 'Teilkasko' : 'Vollkasko'}
                </button>
              ))}
            </div>
          </div>

          {/* Option: Werkstattbindung */}
          {(coverageType === 'teilkasko' || coverageType === 'vollkasko') && (
            <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200/80 flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-bold text-emerald-950">Werkstattbindung aktivieren?</div>
                <div className="text-xs text-emerald-800">Spart durchschnittlich 15–20 % auf den Kaskobeitrag.</div>
              </div>
              <input
                type="checkbox"
                id="workshop-binding"
                checked={workshopBinding}
                onChange={(e) => setWorkshopBinding(e.target.checked)}
                className="w-5 h-5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 cursor-pointer"
              />
            </div>
          )}
        </div>

        {/* Right: Results Card (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 flex flex-col justify-between shadow-md relative overflow-hidden">
          {/* Subtle gold decoration */}
          <div className="absolute -right-12 -top-12 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl" />

          <div>
            <div className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
              Berechnetes Sparpotenzial
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                {totalSavings} &euro;
              </span>
              <span className="text-lg sm:text-xl font-bold text-amber-400 font-mono">
                / Jahr
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold mt-2">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>Bis zu {savingsPercent} % Ersparnis möglich*</span>
            </div>

            {/* Breakdown table */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Aktueller Jahresbeitrag:</span>
                <span className="font-mono font-bold text-white">{currentPremium} &euro;</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Geschätzter Neutarif-Beitrag:</span>
                <span className="font-mono font-bold text-emerald-400">{estimatedNewPremium} &euro;</span>
              </div>
              <div className="flex justify-between text-slate-300 pt-2 border-t border-slate-800/50">
                <span>Davon Tarifwechsel-Effekt:</span>
                <span className="font-mono text-slate-200">ca. {levers.tarifwechsel} &euro;</span>
              </div>
              {levers.werkstatt > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span>Davon Werkstattbindung (Kasko):</span>
                  <span className="font-mono text-slate-200">ca. {levers.werkstatt} &euro;</span>
                </div>
              )}
              {levers.sfOptimierung > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span>Davon SF- &amp; Fahrleistungseffekt:</span>
                  <span className="font-mono text-slate-200">ca. {levers.sfOptimierung} &euro;</span>
                </div>
              )}
            </div>
          </div>

          {/* Actions & Disclaimer */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-3">
            <a
              href="#vergleichsrechner"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all duration-150 shadow-md active:scale-95 text-center"
            >
              <span>Jetzt Tarife vergleichen*</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between gap-2 pt-1">
              <button
                type="button"
                onClick={handleShare}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link kopiert!' : 'Berechnung teilen'}</span>
              </button>

              {!isEmbed && (
                <button
                  type="button"
                  onClick={() => setEmbedModalOpen(true)}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Widget einbetten</span>
                </button>
              )}
            </div>

            <p className="text-[10px] text-slate-400 leading-normal pt-1">
              * Beispielhafte Modellrechnung. Die tatsächliche Beitragshöhe und individuelle Ersparnis hängen vom konkreten Fahrzeugtyp (Typklasse), Wohnort (Regionalklasse), individuellem Schadenverlauf sowie den Tarifkonditionen und Annahmerichtlinien der jeweiligen Versicherungsgesellschaft ab. Werkstattbindung wirkt sich ausschließlich auf Kaskobausteine aus.
            </p>
          </div>
        </div>
      </div>

      {/* Embed Modal for Webmasters */}
      {embedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 text-slate-900">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold">Kfz-Ersparnisrechner als Widget einbinden</h3>
              <button
                type="button"
                onClick={() => setEmbedModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-xl font-bold p-1"
              >
                &times;
              </button>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              Kopieren Sie diesen iFrame-Code in Ihre Website, Ihren Blog oder Ihren redaktionellen Artikel:
            </p>
            <textarea
              readOnly
              rows={4}
              value={embedCode}
              className="w-full p-2.5 font-mono text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-800 select-all"
            />
            <div className="mt-4 flex justify-between items-center">
              <Link
                href="/rechner-embed"
                target="_blank"
                className="text-xs text-slate-600 hover:text-slate-950 underline"
              >
                Vollbild-Vorschau &rarr;
              </Link>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(embedCode);
                  alert('Einbettungscode in die Zwischenablage kopiert!');
                  setEmbedModalOpen(false);
                }}
                className="py-2 px-4 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800"
              >
                Code kopieren
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
