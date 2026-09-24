'use client';

import React, { useState, useMemo } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Calendar, 
  Clock, 
  FileText, 
  ArrowRight, 
  Scale, 
  Info,
  Car,
  AlertTriangle
} from 'lucide-react';

export type CancellationReason = 
  | 'price_increase' 
  | 'claim' 
  | 'vehicle_sale' 
  | 'vehicle_deregistration' 
  | 'regular_calendar';

export default function SpecialCancellationChecker() {
  const [reason, setReason] = useState<CancellationReason>('price_increase');
  const [claimType, setClaimType] = useState<'haftpflicht' | 'kasko'>('haftpflicht');
  const [notificationDate, setNotificationDate] = useState<string>('');
  const [coverageChanged, setCoverageChanged] = useState<boolean>(false);
  const [dueToOwnClaim, setDueToOwnClaim] = useState<boolean>(false);

  // Exakte Fristberechnung nach §§ 187 Abs. 1, 188 Abs. 2 & 3 BGB
  const calculation = useMemo(() => {
    if (!notificationDate) return null;

    const parts = notificationDate.split('-');
    if (parts.length !== 3) return null;
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1; // 0-indiziert
    const d = parseInt(parts[2], 10);

    if (isNaN(y) || isNaN(m) || isNaN(d)) return null;

    // Ereignistag (Zugang) zählt nicht mit (§ 187 Abs. 1 BGB).
    // Monatsfrist endet mit Ablauf des Tages des Folgemonats, welcher dem Tag des Ereignisses entspricht (§ 188 Abs. 2 BGB).
    let targetYear = y;
    let targetMonth = m + 1;
    if (targetMonth > 11) {
      targetYear += 1;
      targetMonth = 0;
    }

    // § 188 Abs. 3 BGB: Fehlt der entsprechende Tag im Folgemonat, endet die Frist mit Ablauf des letzten Monatstags.
    const daysInTargetMonth = new Date(targetYear, targetMonth + 1, 0).getDate();
    const targetDay = Math.min(d, daysInTargetMonth);
    const deadline = new Date(targetYear, targetMonth, targetDay);

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const deadlineDay = new Date(deadline.getFullYear(), deadline.getMonth(), deadline.getDate());
    
    const diffTime = deadlineDay.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // § 193 BGB: Fällt das Ende einer Frist zur Abgabe einer einseitigen empfangsbedürftigen Willenserklärung
    // auf einen Samstag, Sonntag oder gesetzlichen Feiertag, tritt der nächste Werktag an seine Stelle.
    const dayOfWeek = deadline.getDay(); // 0 = So, 6 = Sa
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    let adjustedDeadline = new Date(deadline);
    if (dayOfWeek === 6) {
      adjustedDeadline.setDate(adjustedDeadline.getDate() + 2); // Samstag -> Montag
    } else if (dayOfWeek === 0) {
      adjustedDeadline.setDate(adjustedDeadline.getDate() + 1); // Sonntag -> Montag
    }

    const formattedDeadline = deadline.toLocaleDateString('de-DE', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    const formattedAdjustedDeadline = adjustedDeadline.toLocaleDateString('de-DE', {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    return {
      deadline,
      formattedDeadline,
      formattedAdjustedDeadline,
      diffDays,
      isExpired: diffDays < 0,
      isWeekend
    };
  }, [notificationDate]);

  // Juristisch differenzierte Evaluierungslogik
  const evaluation = useMemo(() => {
    if (reason === 'price_increase') {
      if (dueToOwnClaim) {
        return {
          eligible: false,
          statusText: 'Sonderkündigungsrecht nach § 40 Abs. 1 VVG kommt in der Regel nicht in Betracht',
          badgeColor: 'bg-red-50 text-red-800 border-red-200',
          explanation: 'Wurde der Beitrag ausschließlich durch die vertragliche Rückstufung der Schadenfreiheitsklasse (SF-Klasse) nach einem selbst verursachten oder gemeldeten Schaden erhöht, liegt nach gefestigter Rechtsprechung keine beitragserhöhende Tarifanpassung im Sinne von § 40 Abs. 1 VVG vor. Die Beitragserhöhung beruht in diesem Fall auf der vertraglich vereinbarten Rückstufungstabelle.',
          legalBasis: '§ 40 Abs. 1 Satz 1 VVG i.V.m. AKB & BGH-Rechtsprechung',
          action: 'Prüfen Sie stattdessen eine ordentliche Kündigung zum Ablauf des Versicherungsjahres oder verhandeln Sie einen Rabattschutz.'
        };
      }

      if (coverageChanged) {
        return {
          eligible: false,
          statusText: 'Prüfung der Leistungsanpassung nach § 40 Abs. 1 Satz 2 VVG erforderlich',
          badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
          explanation: 'Erhöht der Versicherer den Beitrag und erweitert gleichzeitig den Leistungsumfang proportional im gleichen Verhältnis, kann das Sonderkündigungsrecht nach § 40 Abs. 1 Satz 2 VVG entfallen. Sie können sich jedoch darauf berufen, wenn die Erhöhung unverhältnismäßig höher ausfällt als der Wert der tatsächlichen Mehrleistung.',
          legalBasis: '§ 40 Abs. 1 Satz 2 VVG',
          action: 'Verlangen Sie vom Versicherer eine getrennte Aufschlüsselung der Beitragsänderung nach Tarifanpassung und Leistungsausweitung.'
        };
      }

      return {
        eligible: true,
        statusText: 'Nach den Kriterien kommt typischerweise ein Sonderkündigungsrecht nach § 40 Abs. 1 VVG in Betracht',
        badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        explanation: 'Erhöht der Versicherer den Beitrag (z. B. durch allgemeine Tariferhöhung, neue Typklasse oder geänderte Regionalklasse), ohne dass sich der Leistungsumfang entsprechend verbessert, spricht vieles für das Vorliegen der gesetzlichen Voraussetzungen nach § 40 Abs. 1 VVG. Die Kündigung muss dem Versicherer innerhalb eines Monats nach tatsächlichem Zugang der Mitteilung zugehen.',
        legalBasis: '§ 40 Abs. 1 VVG (Frist: Ein Monat ab Zugang der Mitteilung gem. §§ 187, 188 BGB)',
        action: 'Kündigen Sie innerhalb der Monatsfrist in Textform (§ 126b BGB) oder schriftlich mit ausdrücklichem Verweis auf § 40 Abs. 1 VVG.'
      };
    }

    if (reason === 'claim') {
      const isHaftpflicht = claimType === 'haftpflicht';
      return {
        eligible: true,
        statusText: isHaftpflicht
          ? 'Kündigungsrecht nach Schadenfall in der Haftpflichtversicherung (§ 111 VVG)'
          : 'Kündigungsrecht nach Versicherungsfall in der Kaskoversicherung (§ 92 VVG)',
        badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        explanation: isHaftpflicht
          ? 'Nach dem Eintritt eines Haftpflichtschadens ist jede Vertragspartei nach § 111 Satz 1 VVG zur Kündigung berechtigt, sobald der Versicherer seine Leistungspflicht gegenüber dem geschädigten Dritten anerkannt oder die Leistung verweigert hat bzw. ein Rechtsstreit beendet wurde. Die Kündigung muss dem Versicherer spätestens einen Monat nach diesem Zeitpunkt zugehen.'
          : 'In der Kaskoversicherung (Teilkasko oder Vollkasko als Sachversicherung) richtet sich das Kündigungsrecht nach § 92 Abs. 1 VVG. Das Recht entsteht nach Abschluss der Verhandlungen über die Entschädigungsleistung (Auszahlung oder schriftliche Ablehnung) mit einer Frist von einem Monat.',
        legalBasis: isHaftpflicht ? '§ 111 VVG (Kfz-Haftpflicht) & AKB' : '§ 92 VVG (Kasko) & AKB',
        action: 'Die Kündigung kann mit sofortiger Wirkung oder mit Wirkung zum Schluss der laufenden Versicherungsperiode erklärt werden.'
      };
    }

    if (reason === 'vehicle_sale') {
      return {
        eligible: false,
        statusText: 'Gesetzlicher Vertragsübergang auf den Erwerber (§§ 95, 96 VVG beachten)',
        badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
        explanation: 'Wird das Fahrzeug im angemeldeten Zustand veräußert, geht das Versicherungsverhältnis kraft Gesetzes nach § 95 Abs. 1 VVG auf den Käufer (Erwerber) über. Ein Sonderkündigungsrecht steht in diesem Fall nach § 96 Abs. 1 VVG dem Erwerber zu (oder dem Versicherer gegenüber dem Erwerber), nicht automatisch dem bisherigen Halter. Der Verkäufer zeigt den Verkauf unverzüglich der Zulassungsstelle und dem Versicherer an (§ 97 VVG), damit seine Nachhaftung für den Beitrag endet.',
        legalBasis: '§§ 95, 96, 97 VVG',
        action: 'Reichen Sie Kaufvertrag und Veräußerungsanzeige unverzüglich bei Ihrer Versicherung ein, um die Abrechnung zu veranlassen.'
      };
    }

    if (reason === 'vehicle_deregistration') {
      return {
        eligible: false,
        statusText: 'Fahrzeugabmeldung ist kein Kündigungstatbestand, sondern führt zur Ruheversicherung',
        badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
        explanation: 'Die behördliche Außerbetriebsetzung (Abmeldung) bei der Zulassungsstelle ist sachlich streng vom Kündigungsrecht zu trennen. Durch die Abmeldung (§ 16 FZV) geht der Vertrag gemäß den Versicherungsbedingungen (AKB) automatisch in eine beitragsfreie Ruheversicherung über. Ein gesondertes Kündigungsschreiben ist dafür nicht erforderlich; der Versicherer rechnet das Guthaben nach automatischer Meldung durch die Zulassungsstelle taggenau ab.',
        legalBasis: '§ 16 FZV & A.6 AKB (Ruheversicherung)',
        action: 'Die Zulassungsbehörde meldet die Abmeldung elektronisch an den Versicherer. Eine Kündigung ist hierfür nicht erforderlich.'
      };
    }

    return {
      eligible: true,
      statusText: 'Reguläre Kündigung zum Ablauf der Versicherungsperiode (§ 11 Abs. 3 VVG / AKB)',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      explanation: 'Bei vertragsgemäßem Ablauf des Versicherungsjahres gilt die vereinbarte Kündigungsfrist von einem Monat (im gesetzlichen Rahmen des § 11 Abs. 3 VVG). Bei Verträgen zum 31. Dezember muss die Kündigung spätestens am 30. November beim Versicherer vorliegen.',
      legalBasis: '§ 11 Abs. 3 VVG & A.5 AKB',
      action: 'Übermitteln Sie das Kündigungsschreiben rechtzeitig mit nachweisbarem Zugang.'
    };
  }, [reason, claimType, dueToOwnClaim, coverageChanged]);

  const handleApplyToGenerator = () => {
    const generatorElem = document.getElementById('kuendigung-generator');
    if (generatorElem) {
      generatorElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sonderkuendigungs-checker" className="my-12 scroll-mt-20">
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold mb-2">
              <Scale className="w-3.5 h-3.5 text-amber-700" />
              <span>INTERAKTIVER RECHTS-CHECKER &middot; VVG &amp; BGB</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sonderkündigungs-Checker: Kommt ein Kündigungsrecht in Betracht?
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Prüfen Sie anhand konkreter Sachverhaltskriterien, ob typischerweise ein außerordentliches Kündigungsrecht nach dem Versicherungsvertragsgesetz (VVG) in Betracht kommt und bis wann die Kündigung dem Versicherer zugehen muss.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 bg-slate-50 border border-slate-200 rounded-xl p-3 shrink-0 self-start lg:self-auto">
            <div className="font-bold text-slate-700">Rechtsrahmen VVG &amp; BGB</div>
            <div>&sect; 40 VVG (Beitragserhöhung)</div>
            <div>&sect; 111 VVG (Haftpflicht) &middot; &sect; 92 (Kasko)</div>
            <div>&sect;&sect; 95, 96 (Verkauf) &middot; &sect;&sect; 187, 188 BGB</div>
          </div>
        </div>

        {/* Input Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          <div className="lg:col-span-6 space-y-6">
            {/* Step 1: Anlass auswählen */}
            <div>
              <label className="text-sm font-bold text-slate-900 block mb-2">
                1. Welcher Anlass liegt bei Ihrem Vertrag vor?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setReason('price_increase')}
                  className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    reason === 'price_increase'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="font-bold">Beitragserhöhung</div>
                  <div className="text-[11px] font-normal opacity-80 mt-0.5">Preiserhöhung nach &sect; 40 VVG</div>
                </button>

                <button
                  type="button"
                  onClick={() => setReason('claim')}
                  className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    reason === 'claim'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="font-bold">Schadenfall</div>
                  <div className="text-[11px] font-normal opacity-80 mt-0.5">&sect; 111 VVG (Haftpfl.) / &sect; 92 (Kasko)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setReason('vehicle_sale')}
                  className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    reason === 'vehicle_sale'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="font-bold">Fahrzeugverkauf</div>
                  <div className="text-[11px] font-normal opacity-80 mt-0.5">Käuferübergang &sect;&sect; 95, 96 VVG</div>
                </button>

                <button
                  type="button"
                  onClick={() => setReason('vehicle_deregistration')}
                  className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    reason === 'vehicle_deregistration'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="font-bold">Fahrzeugabmeldung</div>
                  <div className="text-[11px] font-normal opacity-80 mt-0.5">Ruheversicherung nach AKB / FZV</div>
                </button>

                <button
                  type="button"
                  onClick={() => setReason('regular_calendar')}
                  className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer sm:col-span-2 ${
                    reason === 'regular_calendar'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <div className="font-bold">Regulärer Vertragsablauf</div>
                  <div className="text-[11px] font-normal opacity-80 mt-0.5">Ordentliche Kündigung zum Ablauf (&sect; 11 Abs. 3 VVG / 30. November)</div>
                </button>
              </div>
            </div>

            {/* Step 2: Details je nach Grund */}
            {reason === 'price_increase' && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                <div className="font-bold text-xs text-slate-800 uppercase tracking-wider font-mono">
                  Prüfkriterien zur Beitragserhöhung (&sect; 40 VVG)
                </div>

                <div>
                  <label htmlFor="notification-date" className="text-xs font-bold text-slate-900 block mb-1">
                    Wann ist Ihnen die Beitragsrechnung / Erhöhungsmitteilung zugegangen? *
                  </label>
                  <input
                    id="notification-date"
                    type="date"
                    value={notificationDate}
                    onChange={(e) => setNotificationDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none"
                  />
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Maßgeblich ist der tatsächliche Tag des Zugangs im Briefkasten oder E-Mail-Postfach (&sect; 130 BGB), nicht das Druckdatum des Briefs. Die Frist beträgt genau einen Monat ab Zugang.
                  </span>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-200/80">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={dueToOwnClaim}
                      onChange={(e) => setDueToOwnClaim(e.target.checked)}
                      className="w-4 h-4 text-slate-900 rounded border-slate-300 mt-0.5 focus:ring-slate-900"
                    />
                    <span className="text-xs text-slate-700 leading-snug">
                      Der Mehrbeitrag entstand ausschließlich durch die <strong>Rückstufung der SF-Klasse nach einem gemeldeten Schaden</strong>.
                    </span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={coverageChanged}
                      onChange={(e) => setCoverageChanged(e.target.checked)}
                      className="w-4 h-4 text-slate-900 rounded border-slate-300 mt-0.5 focus:ring-slate-900"
                    />
                    <span className="text-xs text-slate-700 leading-snug">
                      Der Versicherer hat zeitgleich den <strong>Leistungsumfang im gleichen Verhältnis erweitert</strong> (&sect; 40 Abs. 1 Satz 2 VVG).
                    </span>
                  </label>
                </div>
              </div>
            )}

            {reason === 'claim' && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                <div className="font-bold text-xs text-slate-800 uppercase tracking-wider font-mono">
                  Sparte &amp; Regulierungsdatum nach Schadenfall
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-900 block mb-1">
                    Um welche Versicherungsart handelte es sich beim Schaden?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setClaimType('haftpflicht')}
                      className={`p-2.5 text-xs font-bold rounded-lg border text-left cursor-pointer ${
                        claimType === 'haftpflicht'
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      <div>Kfz-Haftpflicht</div>
                      <div className="text-[10px] font-normal opacity-80">&sect; 111 VVG (Fremdschaden)</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setClaimType('kasko')}
                      className={`p-2.5 text-xs font-bold rounded-lg border text-left cursor-pointer ${
                        claimType === 'kasko'
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      <div>Kasko (Teil/Voll)</div>
                      <div className="text-[10px] font-normal opacity-80">&sect; 92 VVG (Eigenschaden)</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="claim-date" className="text-xs font-bold text-slate-900 block mb-1">
                    Wann wurden die Verhandlungen über die Entschädigung abgeschlossen bzw. die Leistung anerkannt oder verweigert? *
                  </label>
                  <input
                    id="claim-date"
                    type="date"
                    value={notificationDate}
                    onChange={(e) => setNotificationDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 outline-none"
                  />
                  <span className="text-[11px] text-slate-500 block mt-1">
                    Die Kündigungsfrist beträgt genau einen Monat ab diesem Zeitpunkt.
                  </span>
                </div>
              </div>
            )}

            {reason === 'vehicle_sale' && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="font-bold text-xs text-slate-800 uppercase tracking-wider font-mono">
                  Rechtliche Situation bei Fahrzeugveräußerung
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Haben Sie Ihr Fahrzeug angemeldet übergeben, geht die Versicherung kraft Gesetzes nach <strong>&sect; 95 VVG auf den Käufer</strong> über.
                </p>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900">
                  <strong>Wichtig für Verkäufer:</strong> Sie haben als Veräußerer kein Sonderkündigungsrecht nach &sect; 95 VVG. Das Kündigungsrecht nach <strong>&sect; 96 Abs. 1 VVG steht dem Erwerber</strong> zu. Reichen Sie unverzüglich eine Veräußerungsanzeige bei der Zulassungsstelle und Versicherung ein (&sect; 97 VVG).
                </div>
              </div>
            )}

            {reason === 'vehicle_deregistration' && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="font-bold text-xs text-slate-800 uppercase tracking-wider font-mono">
                  Keine Kündigung bei Außerbetriebsetzung
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Die Außerbetriebsetzung (Abmeldung) ist rechtlich <strong>kein Kündigungstatbestand</strong> und bedarf keines Kündigungsschreibens.
                </p>
                <div className="p-3 bg-slate-100 rounded-lg border border-slate-200 text-xs text-slate-700">
                  Die Zulassungsbehörde meldet die Abmeldung automatisch elektronisch an die Versicherungsgesellschaft. Der Vertrag geht kraft AKB automatisch in eine beitragsfreie <strong>Ruheversicherung</strong> über und erlischt bei endgültiger Außerbetriebsetzung. Zu viel gezahlte Beiträge werden taggenau erstattet.
                </div>
              </div>
            )}

            {reason === 'regular_calendar' && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="font-bold text-xs text-slate-800 uppercase tracking-wider font-mono">
                  Ordentliche Kündigung zum Vertragsablauf
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Bei kalenderjährlich endenden Verträgen (31. Dezember) gilt die einmonatige Kündigungsfrist zum <strong>30. November (23:59 Uhr)</strong>.
                </p>
                <div className="text-xs text-slate-500">
                  Für unterjährige Verträge (z. B. Ablauf zum 30.04. oder 31.08.) nutzen Sie bitte den darunter liegenden Kündigungsfrist-Rechner.
                </div>
              </div>
            )}
          </div>

          {/* Right: Results & Legal Guidance (6 cols) */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${evaluation.badgeColor}`}>
                  {evaluation.eligible ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                  <span>{evaluation.eligible ? 'Kündigungsvoraussetzungen typischerweise erfüllt' : 'Einschränkung / Besonderheit beachten'}</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">&sect; Prüfungsbericht</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                {evaluation.statusText}
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                {evaluation.explanation}
              </p>

              {/* Deadline Box if calculated */}
              {calculation && (reason === 'price_increase' || reason === 'claim') && (
                <div className="my-4 p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                      Fristende gem. &sect;&sect; 187, 188 BGB:
                    </span>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      calculation.isExpired 
                        ? 'bg-red-100 text-red-900' 
                        : calculation.diffDays <= 7 
                        ? 'bg-amber-100 text-amber-900' 
                        : 'bg-emerald-100 text-emerald-900'
                    }`}>
                      {calculation.isExpired ? 'Frist abgelaufen' : `${calculation.diffDays} Tage verbleibend`}
                    </span>
                  </div>

                  <div className="text-lg sm:text-xl font-black text-slate-950 font-mono">
                    {calculation.formattedDeadline}
                  </div>

                  {calculation.isWeekend && (
                    <div className="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200 leading-relaxed flex items-start gap-1.5">
                      <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>
                        Fällt das Fristende auf einen Samstag oder Sonntag, verschiebt sich die Frist nach <strong>&sect; 193 BGB</strong> rechtlich auf den nächsten Werktag ({calculation.formattedAdjustedDeadline}). <em>Praxishinweis:</em> Wir empfehlen dennoch dringend, die Kündigung bereits vor dem Wochenende zuzustellen, um Beweisstreitigkeiten zu vermeiden.
                      </span>
                    </div>
                  )}

                  <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                    * Eingangsprinzip (&sect; 130 BGB): Das Schreiben muss am Stichtag bis spätestens 23:59 Uhr beim Versicherer <em>vorliegen</em> (nicht erst abgesendet werden).
                  </div>
                </div>
              )}

              {/* Legal basis & action */}
              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-800 font-medium">
                  <Scale className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span><strong>Rechtsgrundlage:</strong> {evaluation.legalBasis}</span>
                </div>
                <div className="flex items-start gap-1.5 text-slate-700">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>Empfehlung:</strong> {evaluation.action}</span>
                </div>
              </div>
            </div>

            {/* Bottom action button */}
            <div className="pt-6 mt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={handleApplyToGenerator}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Kündigungsschreiben mit diesen Daten erstellen</span>
              </button>
              <p className="text-[10px] text-slate-500 text-center mt-2">
                * Hinweis: Dieser Vorab-Check stellt eine unverbindliche Orientierungshilfe auf Basis des VVG dar und ersetzt keine Rechtsberatung im Einzelfall. Maßgeblich sind stets Ihre individuellen Vertragsunterlagen und die Allgemeinen Bedingungen für die Kfz-Versicherung (AKB) Ihres Versicherers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
