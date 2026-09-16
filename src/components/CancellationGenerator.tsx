'use client';

import React, { useState, useMemo } from 'react';
import { FileText, Copy, Check, Printer, AlertCircle, Info, ShieldAlert } from 'lucide-react';

export default function CancellationGenerator() {
  const [cancellationType, setCancellationType] = useState<'regular' | 'special'>('regular');
  const [userName, setUserName] = useState<string>('');
  const [userAddress, setUserAddress] = useState<string>('');
  const [userCity, setUserCity] = useState<string>('');
  const [insuranceName, setInsuranceName] = useState<string>('');
  const [policyNumber, setPolicyNumber] = useState<string>('');
  const [licensePlate, setLicensePlate] = useState<string>('');
  
  // Separate date capture for special cancellation (§ 40 VVG)
  const [invoiceDate, setInvoiceDate] = useState<string>(''); // Datum des Schreibens
  const [receivedDate, setReceivedDate] = useState<string>(''); // Tatsächlicher Zugang
  const [effectiveDate, setEffectiveDate] = useState<string>(''); // Wirksamwerden der Erhöhung
  
  // Optional date for regular cancellation if contract does not end on 31.12.
  const [contractEndDate, setContractEndDate] = useState<string>('');

  const [copied, setCopied] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const isFormIncomplete = useMemo(() => {
    if (!userName.trim() || !userAddress.trim() || !userCity.trim() || !insuranceName.trim() || !policyNumber.trim() || !licensePlate.trim()) {
      return true;
    }
    if (cancellationType === 'special' && (!invoiceDate.trim() || !receivedDate.trim())) {
      return true;
    }
    return false;
  }, [userName, userAddress, userCity, insuranceName, policyNumber, licensePlate, cancellationType, invoiceDate, receivedDate]);

  const letterText = useMemo(() => {
    const today = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const displayName = userName.trim() || '[Vor- und Nachname]';
    const displayAddress = userAddress.trim() || '[Straße und Hausnummer]';
    const displayCity = userCity.trim() || '[PLZ und Wohnort]';
    const displayInsurance = insuranceName.trim() || '[Name der Versicherungsgesellschaft]';
    const displayPolicy = policyNumber.trim() || '[Versicherungsscheinnummer]';
    const displayPlate = licensePlate.trim() || '[Amtliches Kennzeichen]';

    if (cancellationType === 'special') {
      const displayInvoice = invoiceDate.trim() || '[Datum des Schreibens]';
      const displayReceived = receivedDate.trim() || '[Datum des Zugangs]';
      const displayEffective = effectiveDate.trim() ? `zum ${effectiveDate.trim()}` : 'zum Zeitpunkt des Wirksamwerdens der Beitragserhöhung';

      return `${displayName}
${displayAddress}
${displayCity}

An die
${displayInsurance}
Vertragsabteilung / Kfz-Bestand

Datum: ${today}

KÜNDIGUNG MEINER KFZ-VERSICHERUNG WEGEN BEITRAGSERHÖHUNG
Sonderkündigungsrecht nach § 40 Abs. 1 VVG

Versicherungsschein-Nr.: ${displayPolicy}
Amtliches Kennzeichen:   ${displayPlate}

Sehr geehrte Damen und Herren,

mit Schreiben vom ${displayInvoice}, mir zugegangen am ${displayReceived}, haben Sie mir eine Erhöhung des Versicherungsbeitrags für das oben genannte Fahrzeug mitgeteilt.

Hiermit mache ich fristgerecht innerhalb eines Monats ab Zugang dieser Mitteilung von meinem außerordentlichen Kündigungsrecht nach § 40 Abs. 1 des Versicherungsvertragsgesetzes (VVG) Gebrauch. Ich kündige den oben genannten Versicherungsvertrag mit Wirkung ${displayEffective}.

Gleichzeitig widerrufe ich die Ihnen erteilte Einzugsermächtigung bzw. das SEPA-Lastschriftmandat zum Zeitpunkt des wirksamen Vertragsendes.

Bitte senden Sie mir innerhalb von 14 Tagen eine schriftliche Bestätigung über den Eingang dieser Kündigung sowie das genaue Beendigungsdatum zu. Des Weiteren bitte ich um unverzügliche Bestätigung und Übermittlung des aktuellen Schadenverlaufs (SF-Klasse) an meinen Folgeversicherer.

Mit freundlichen Grüßen

_______________________________________
(Unterschrift ${displayName})`;
    }

    // Regular cancellation
    const displayEnd = contractEndDate.trim() 
      ? `zum ${contractEndDate.trim()}` 
      : 'zum Ablauf des laufenden Versicherungsjahres (bei kalenderjährlichem Ablauf: 31. Dezember)';

    return `${displayName}
${displayAddress}
${displayCity}

An die
${displayInsurance}
Vertragsabteilung / Kfz-Bestand

Datum: ${today}

ORDENTLICHE KÜNDIGUNG MEINER KFZ-VERSICHERUNG ZUM ABLAUF
Kündigung gem. Versicherungsvertrag / AKB (Rahmen § 11 Abs. 3 VVG)

Versicherungsschein-Nr.: ${displayPolicy}
Amtliches Kennzeichen:   ${displayPlate}

Sehr geehrte Damen und Herren,

hiermit kündige ich den oben genannten Versicherungsvertrag für das Fahrzeug mit dem amtlichen Kennzeichen ${displayPlate} fristgerecht mit einer Kündigungsfrist von einem Monat ${displayEnd}, hilfsweise zum nächstmöglichen Zeitpunkt.

Mit wirksamer Beendigung des Vertragsverhältnisses erlischt zugleich das Ihnen erteilte SEPA-Lastschriftmandat für die vorgenannte Versicherungsscheinnummer.

Bitte bestätigen Sie mir den Eingang dieser Kündigung sowie das rechtsverbindliche Beendigungsdatum schriftlich oder in Textform innerhalb von 14 Tagen. Bitte leiten Sie zudem die Bestätigung meines bisherigen Schadenverlaufs (SF-Klasse) an den künftigen Versicherer weiter.

Mit freundlichen Grüßen

_______________________________________
(Unterschrift ${displayName})`;
  }, [cancellationType, userName, userAddress, userCity, insuranceName, policyNumber, licensePlate, invoiceDate, receivedDate, effectiveDate, contractEndDate]);

  const handleCopy = () => {
    if (isFormIncomplete) {
      setValidationError('Hinweis: Einige Pflichtfelder sind noch nicht ausgefüllt. Das Schreiben enthält noch Platzhalter in eckigen Klammern.');
    } else {
      setValidationError(null);
    }
    navigator.clipboard.writeText(letterText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handlePrint = () => {
    if (isFormIncomplete) {
      setValidationError('Hinweis: Bitte füllen Sie vor dem Ausdrucken alle persönlichen Angaben aus, um ein vollständiges Dokument zu erhalten.');
    } else {
      setValidationError(null);
    }
    window.print();
  };

  return (
    <section id="kuendigung-generator" className="my-12 scroll-mt-20">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold mb-2">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>MUSTER-FORMULIERUNGSHILFE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Kfz-Kündigungsschreiben-Generator
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Erstellen Sie in wenigen Schritten ein unverbindliches Musterschreiben für die ordentliche Kündigung oder Sonderkündigung nach § 40 VVG.
            </p>
          </div>

          {/* Type selector pill */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0">
            <button
              type="button"
              onClick={() => {
                setCancellationType('regular');
                setValidationError(null);
              }}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                cancellationType === 'regular'
                  ? 'bg-white text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Ordentlich (Vertragsablauf)
            </button>
            <button
              type="button"
              onClick={() => {
                setCancellationType('special');
                setValidationError(null);
              }}
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
                <strong>Lokale Verarbeitung:</strong> Ihre eingegebenen Daten verbleiben ausschließlich lokal in Ihrem Browser und werden auf keinen Server übertragen.
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 block mb-1">Ihr Vor- und Nachname *</label>
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
                <label className="text-xs font-bold text-slate-900 block mb-1">Straße &amp; Hausnr. *</label>
                <input
                  type="text"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                  placeholder="Musterstraße 12"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-1">PLZ &amp; Wohnort *</label>
                <input
                  type="text"
                  value={userCity}
                  onChange={(e) => setUserCity(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                  placeholder="12345 Musterstadt"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 block mb-1">Bisherige Versicherung (Name der Gesellschaft) *</label>
              <input
                type="text"
                value={insuranceName}
                onChange={(e) => setInsuranceName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                placeholder="z. B. HUK-Coburg, Allianz, VHV"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-1">Versicherungs-Nr. / Police *</label>
                <input
                  type="text"
                  value={policyNumber}
                  onChange={(e) => setPolicyNumber(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-mono text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                  placeholder="z. B. 123456789"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-1">Amtliches Kennzeichen *</label>
                <input
                  type="text"
                  value={licensePlate}
                  onChange={(e) => setLicensePlate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm font-mono text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                  placeholder="z. B. B-MW 1234"
                />
              </div>
            </div>

            {/* Special cancellation fields */}
            {cancellationType === 'special' ? (
              <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-3">
                <div className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-amber-700" />
                  <span>Angaben zur Beitragserhöhung (§ 40 VVG)</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-900 block mb-1">
                      Datum des Schreibens *
                    </label>
                    <input
                      type="text"
                      value={invoiceDate}
                      onChange={(e) => setInvoiceDate(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-mono text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none"
                      placeholder="z. B. 10.11."
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-900 block mb-1">
                      Tatsächlicher Zugang *
                    </label>
                    <input
                      type="text"
                      value={receivedDate}
                      onChange={(e) => setReceivedDate(e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-mono text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none"
                      placeholder="z. B. 12.11."
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-900 block mb-1">
                    Wirksamwerden der Erhöhung (optional)
                  </label>
                  <input
                    type="text"
                    value={effectiveDate}
                    onChange={(e) => setEffectiveDate(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-mono text-slate-900 focus:ring-2 focus:ring-amber-500 outline-none"
                    placeholder="z. B. 01.01. (oder leer lassen)"
                  />
                </div>

                <p className="text-[11px] text-amber-900 leading-normal">
                  <strong>Gesetzliche Frist:</strong> Nach § 40 Abs. 1 VVG beträgt die Kündigungsfrist genau <strong>einen Monat ab tatsächlichem Zugang</strong> der Mitteilung bei Ihnen. Die Kündigung wird frühestens zu dem Zeitpunkt wirksam, zu dem auch die Beitragserhöhung wirksam werden sollte.
                </p>
              </div>
            ) : (
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-1">
                  Vertragsablaufdatum (optional, falls unterjährig)
                </label>
                <input
                  type="text"
                  value={contractEndDate}
                  onChange={(e) => setContractEndDate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                  placeholder="z. B. 31. Dezember oder 30. April"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Standard bei Kalenderjahr: 31. Dezember (Zugang der Kündigung bis 30. November erforderlich).
                </span>
              </div>
            )}

            {/* Mode-specific shipping tips */}
            <div className="pt-2 text-xs text-slate-500 space-y-1 border-t border-slate-200">
              <div className="font-semibold text-slate-700">Tipps zur Übermittlung:</div>
              {cancellationType === 'special' ? (
                <>
                  <p>&bull; Senden Sie die Kündigung per <strong>Einschreiben mit Rückschein</strong> oder <strong>Fax mit qualifiziertem Sendebericht</strong>, um den rechtzeitigen Zugang nachzuweisen.</p>
                  <p>&bull; Die Sonderkündigung muss dem Versicherer innerhalb <strong>eines Monats ab Zugang</strong> der Erhöhungsmitteilung vorliegen.</p>
                </>
              ) : (
                <>
                  <p>&bull; Senden Sie die Kündigung per <strong>Einschreiben mit Rückschein</strong> oder <strong>Fax mit qualifiziertem Sendebericht</strong>.</p>
                  <p>&bull; Bei Ablauf zum 31. Dezember muss das Schreiben spätestens am <strong>30. November (23:59 Uhr)</strong> beim Versicherer <em>zugegangen</em> sein (Zugangsprinzip gem. § 130 BGB).</p>
                </>
              )}
            </div>
          </div>

          {/* Right: Live Document Preview (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                  {isFormIncomplete ? 'Musteransicht (enthält noch Platzhalter)' : 'Dokumentenvorschau'}
                </span>
                <span className="text-xs text-slate-600 font-mono flex items-center gap-1">
                  Muster gem. {cancellationType === 'special' ? '§ 40 VVG' : 'Vertragsablauf / AKB'}
                </span>
              </div>

              {/* Document Paper Look */}
              <div className="bg-slate-50 rounded-xl border border-slate-300 p-5 font-mono text-xs text-slate-800 leading-relaxed whitespace-pre-wrap max-h-[460px] overflow-y-auto shadow-inner select-text">
                {letterText}
              </div>

              {validationError && (
                <div className="mt-3 p-3 bg-amber-50 border border-amber-300 rounded-lg flex items-start gap-2 text-xs text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{validationError}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'In Zwischenablage kopiert!' : 'Mustertext kopieren'}</span>
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
