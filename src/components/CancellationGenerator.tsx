'use client';

import React, { useState, useMemo } from 'react';
import { FileText, Copy, Check, Printer, AlertCircle, ShieldAlert } from 'lucide-react';

export default function CancellationGenerator() {
  const [cancellationType, setCancellationType] = useState<'regular' | 'special'>('regular');
  const [userName, setUserName] = useState<string>('Max Mustermann');
  const [userAddress, setUserAddress] = useState<string>('Musterstraße 12');
  const [userCity, setUserCity] = useState<string>('12345 Musterstadt');
  const [insuranceName, setInsuranceName] = useState<string>('Muster-Versicherung AG');
  const [policyNumber, setPolicyNumber] = useState<string>('KFZ-12345678');
  const [licensePlate, setLicensePlate] = useState<string>('B-MW 1234');
  const [increaseDate, setIncreaseDate] = useState<string>('15.11.2026');
  const [copied, setCopied] = useState<boolean>(false);

  const letterText = useMemo(() => {
    const today = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });

    if (cancellationType === 'special') {
      return `${userName}
${userAddress}
${userCity}

An die
${insuranceName}
Vertragsabteilung / Kfz-Schaden

Datum: ${today}

KÜNDIGUNG MEINER KFZ-VERSICHERUNG WEGEN BEITRAGSERHÖHUNG
Sonderkündigungsrecht nach § 40 Abs. 1 VVG

Versicherungsschein-Nr.: ${policyNumber}
Amtliches Kennzeichen:   ${licensePlate}

Sehr geehrte Damen und Herren,

mit Schreiben vom ${increaseDate} haben Sie mir eine Erhöhung des Versicherungsbeitrags für das oben genannte Fahrzeug mitgeteilt. 

Hiermit mache ich fristgerecht von meinem außerordentlichen Kündigungsrecht nach § 40 Abs. 1 des Versicherungsvertragsgesetzes (VVG) Gebrauch und kündige den oben genannten Versicherungsvertrag mit Wirkung zum Zeitpunkt des Wirksamwerdens der Beitragserhöhung.

Gleichzeitig widerrufe ich die Ihnen erteilte Einzugsermächtigung bzw. das SEPA-Lastschriftmandat zum Zeitpunkt des Vertragsendes.

Bitte senden Sie mir innerhalb von 14 Tagen eine schriftliche Bestätigung über den Eingang dieser Kündigung sowie das genaue Beendigungsdatum zu. Des Weiteren bitte ich um unverzügliche Übermittlung des aktuellen Schadenverlaufs an meine Folgeversicherung.

Mit freundlichen Grüßen

_______________________________________
(Unterschrift ${userName})`;
    }

    // Regular cancellation zum 30. November
    return `${userName}
${userAddress}
${userCity}

An die
${insuranceName}
Vertragsabteilung / Kfz-Bestand

Datum: ${today}

ORDENTLICHE KÜNDIGUNG MEINER KFZ-VERSICHERUNG ZUM ABLAUF
Kündigung zum Ende des laufenden Versicherungsjahres (Stichtag 30. November)

Versicherungsschein-Nr.: ${policyNumber}
Amtliches Kennzeichen:   ${licensePlate}

Sehr geehrte Damen und Herren,

hiermit kündige ich den oben genannten Versicherungsvertrag für das Fahrzeug mit dem amtlichen Kennzeichen ${licensePlate} fristgerecht zum Ende des laufenden Versicherungsjahres, hilfsweise zum nächstmöglichen Zeitpunkt.

Mit Beendigung des Vertragsverhältnisses erlischt zugleich das Ihnen erteilte SEPA-Lastschriftmandat für die vorgenannte Versicherungsscheinnummer.

Bitte bestätigen Sie mir den Eingang dieser Kündigung sowie das rechtsverbindliche Beendigungsdatum schriftlich oder per E-Mail innerhalb von 14 Tagen. Bitte leiten Sie zudem meinen Schadenfreiheitsrabatt (SF-Klasse) an den künftigen Versicherer weiter.

Mit freundlichen Grüßen

_______________________________________
(Unterschrift ${userName})`;
  }, [cancellationType, userName, userAddress, userCity, insuranceName, policyNumber, licensePlate, increaseDate]);

  const handleCopy = () => {
    navigator.clipboard.writeText(letterText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="kuendigung-generator" className="my-12 scroll-mt-20">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold mb-2">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>KOSTENLOSES RECHTSKONFORMES ONLINE-TOOL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Kfz-Kündigungsschreiben-Generator
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Erstellen Sie in 60 Sekunden ein juristisch geprüftes Kündigungsschreiben für Ihre Autoversicherung.
            </p>
          </div>

          {/* Type selector pill */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0">
            <button
              type="button"
              onClick={() => setCancellationType('regular')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                cancellationType === 'regular'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Ordentlich (zum 30.11.)
            </button>
            <button
              type="button"
              onClick={() => setCancellationType('special')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                cancellationType === 'special'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Sonderkündigung (§ 40 VVG)
            </button>
          </div>
        </div>

        {/* Form & Live Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Left: Form inputs (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Rechtlicher Hinweis:</strong> Ihre Daten werden ausschließlich lokal in Ihrem Browser verarbeitet und zu keinem Zeitpunkt an externe Server übertragen.
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 block mb-1">Ihr Vor- und Nachname</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                placeholder="z. B. Max Mustermann"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-1">Straße &amp; Hausnr.</label>
                <input
                  type="text"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-1">PLZ &amp; Wohnort</label>
                <input
                  type="text"
                  value={userCity}
                  onChange={(e) => setUserCity(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 block mb-1">Bisherige Versicherung</label>
              <input
                type="text"
                value={insuranceName}
                onChange={(e) => setInsuranceName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                placeholder="z. B. HUK-Coburg, Allianz, Verti"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-1">Versicherungs-Nr. / Police</label>
                <input
                  type="text"
                  value={policyNumber}
                  onChange={(e) => setPolicyNumber(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-mono text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-1">Amtliches Kennzeichen</label>
                <input
                  type="text"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-mono text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                />
              </div>
            </div>

            {cancellationType === 'special' && (
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-1">
                  Datum der Beitragserhöhung / Rechnungsdatum
                </label>
                <input
                  type="text"
                  value={increaseDate}
                  onChange={(e) => setIncreaseDate(e.target.value)}
                  className="w-full px-3 py-2 bg-amber-50/60 border border-amber-300 rounded-lg text-sm font-mono text-slate-900 focus:bg-white focus:ring-2 focus:ring-amber-500 outline-none"
                  placeholder="TT.MM.JJJJ"
                />
                <span className="text-[11px] text-amber-800 mt-1 block">
                  Frist: Sie haben ab Zugang dieses Schreibens genau 1 Monat Zeit für die Sonderkündigung.
                </span>
              </div>
            )}

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div className="font-semibold text-slate-700">Tipp zum Versand:</div>
              <p>&bull; Versenden Sie per <strong>Einschreiben mit Rückschein</strong> oder per <strong>Fax mit qualifiziertem Sendebericht</strong>.</p>
              <p>&bull; Kündigung muss bis spätestens 30.11. (23:59 Uhr) beim Versicherer <em>zugegangen</em> sein.</p>
            </div>
          </div>

          {/* Right: Live Document Preview (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Live-Vorschau des Kündigungsschreibens
                </span>
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Rechtsgeprüft nach VVG
                </span>
              </div>

              {/* Document Paper Look */}
              <div className="bg-slate-50 rounded-xl border border-slate-300 p-5 font-mono text-xs text-slate-800 leading-relaxed whitespace-pre-wrap max-h-[460px] overflow-y-auto shadow-inner select-text">
                {letterText}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'In Zwischenablage kopiert!' : 'Schreiben kopieren'}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold border border-slate-300 transition-all active:scale-95 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-slate-700" />
                <span>Drucken / PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
