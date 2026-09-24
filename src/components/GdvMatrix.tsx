'use client';

import React, { useState } from 'react';
import { Database, Search, Info, ShieldCheck, ExternalLink, MapPin, TrendingUp, Sliders } from 'lucide-react';

interface CarTypeEntry {
  model: string;
  hsnTsn: string;
  category: string;
  kh: number; // Kraftfahrt-Haftpflicht (10 bis 25)
  tk: number; // Teilkasko (10 bis 33)
  vk: number; // Vollkasko (10 bis 34)
}

const CAR_DATA: CarTypeEntry[] = [
  { model: 'VW Golf VIII 1.5 TSI (130 PS)', hsnTsn: '0603 / CLS', category: 'Kompaktklasse', kh: 15, tk: 20, vk: 19 },
  { model: 'Tesla Model Y Long Range AWD', hsnTsn: '1480 / AAR', category: 'E-Auto / SUV', kh: 19, tk: 24, vk: 26 },
  { model: 'BMW 320d Touring (190 PS)', hsnTsn: '0005 / CUX', category: 'Mittelklasse', kh: 18, tk: 23, vk: 24 },
  { model: 'Opel Corsa 1.2 (75 PS)', hsnTsn: '1889 / AAR', category: 'Kleinwagen', kh: 13, tk: 16, vk: 15 },
  { model: 'Audi A4 Avant 2.0 TDI (150 PS)', hsnTsn: '0588 / BKB', category: 'Mittelklasse', kh: 17, tk: 22, vk: 23 },
  { model: 'Fiat 500 1.0 Hybrid (70 PS)', hsnTsn: '4136 / AXG', category: 'Kleinstwagen', kh: 12, tk: 15, vk: 14 },
  { model: 'Mercedes-Benz C 200 Limousine', hsnTsn: '2222 / ALH', category: 'Mittelklasse', kh: 18, tk: 23, vk: 23 },
  { model: 'Hyundai Ioniq 5 (217 PS)', hsnTsn: '1349 / AET', category: 'E-Auto / SUV', kh: 17, tk: 22, vk: 23 },
  { model: 'Porsche Macan 2.0 (265 PS)', hsnTsn: '0583 / AMP', category: 'Oberklasse / SUV', kh: 21, tk: 28, vk: 29 },
  { model: 'Skoda Octavia Combi 2.0 TDI', hsnTsn: '8004 / ATB', category: 'Kompaktklasse', kh: 16, tk: 21, vk: 20 },
];

export default function GdvMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Interactive Effect Simulator State
  const [basePremium, setBasePremium] = useState<number>(600);
  const [typklasseShift, setTypklasseShift] = useState<number>(1);
  const [regionalShift, setRegionalShift] = useState<number>(0);

  const simulatedChange = Math.round(basePremium * ((typklasseShift * 0.07) + (regionalShift * 0.04)));
  const simulatedNewPremium = basePremium + simulatedChange;

  const filteredCars = CAR_DATA.filter((car) => {
    const matchesCat = selectedCategory === 'Alle' || car.category.includes(selectedCategory);
    const matchesQuery = car.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
      car.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.hsnTsn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="gdv-matrix" className="my-14 scroll-mt-20">
      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-bold mb-2">
              <Database className="w-3.5 h-3.5 text-amber-400" />
              <span>DATEN- &amp; EINSTUFUNGS-UTILITY &middot; GDV-SYSTEMATIK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Typklassen &amp; Regionalklassen: Wie sie Ihren Beitrag bestimmen
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              Der Gesamtverband der Deutschen Versicherungswirtschaft (GDV) ermittelt jährlich die Schadenindizes für alle Fahrzeugmodelle und Zulassungsbezirke.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-600 flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg border border-slate-200 shrink-0 self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Skalen: KH 10–25 &middot; TK 10–33 &middot; VK 10–34</span>
          </div>
        </div>

        {/* 1. Official Scales Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <Database className="w-4 h-4 text-amber-600" />
                <span>Typklassen-Systematik (Modellabhängig)</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">Bundesweit</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Die Typklasse spiegelt die <strong>Schaden- und Unfallbilanz eines Fahrzeugtyps</strong> der letzten drei Jahre wider. Werden Modelle einer Baureihe statistisch oft in Unfälle verwickelt oder teuer repariert, steigen sie in eine höhere Typklasse.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center pt-1 font-mono">
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <div className="text-[10px] text-slate-400 uppercase">Haftpflicht</div>
                <div className="text-sm font-extrabold text-slate-900">10 – 25</div>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <div className="text-[10px] text-slate-400 uppercase">Teilkasko</div>
                <div className="text-sm font-extrabold text-slate-900">10 – 33</div>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <div className="text-[10px] text-slate-400 uppercase">Vollkasko</div>
                <div className="text-sm font-extrabold text-slate-900">10 – 34</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Regionalklassen-Systematik (Wohnortabhängig)</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">410 Zulassungsbezirke</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Die Regionalklasse richtet sich nach dem <strong>Wohnort des Fahrzeughalters</strong> (Hauptwohnsitz im Zulassungsbezirk). Sie erfasst Schadenhäufigkeit, Witterungseinflüsse (z. B. Hagel in Bayern/BW) und regionale Diebstahlquoten.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center pt-1 font-mono">
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <div className="text-[10px] text-slate-400 uppercase">Haftpflicht</div>
                <div className="text-sm font-extrabold text-slate-900">1 – 12</div>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <div className="text-[10px] text-slate-400 uppercase">Teilkasko</div>
                <div className="text-sm font-extrabold text-slate-900">1 – 16</div>
              </div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100">
                <div className="text-[10px] text-slate-400 uppercase">Vollkasko</div>
                <div className="text-sm font-extrabold text-slate-900">1 – 9</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Interactive Typklassen- & Regionalklassen-Effekt-Simulator */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 font-mono mb-1">
                <Sliders className="w-3.5 h-3.5" />
                <span>INTERAKTIVER EFFEKT-SIMULATOR (BEISPIELHAFTE MODELLRECHNUNG)</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Was bedeutet eine Umstufung in Typ- oder Regionalklasse rechnerisch?
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded">Modellannahme (Tarife variieren individuell)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div>
              <label htmlFor="base-premium-input" className="text-xs font-bold text-slate-900 block mb-1">
                Aktueller Jahresbeitrag:
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="base-premium-input"
                  type="number"
                  min="200"
                  max="2500"
                  step="50"
                  value={basePremium}
                  onChange={(e) => setBasePremium(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-mono font-bold"
                />
                <span className="text-sm font-bold text-slate-600">&euro;</span>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">Ihr bisheriger Jahresbetrag</span>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 block mb-1">
                Typklassen-Änderung:
              </label>
              <select
                value={typklasseShift}
                onChange={(e) => setTypklasseShift(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-bold"
              >
                <option value="-2">-2 Typklassen (Entlastung)</option>
                <option value="-1">-1 Typklasse (besser eingestuft)</option>
                <option value="0">0 (Keine Änderung)</option>
                <option value="1">+1 Typklasse (typische Erhöhung)</option>
                <option value="2">+2 Typklassen (deutliche Erhöhung)</option>
                <option value="3">+3 Typklassen (starke Erhöhung)</option>
              </select>
              <span className="text-[10px] text-slate-500 mt-1 block">Modellannahme: ca. &plusmn;7 % Richtwert (nicht verbindlich)</span>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 block mb-1">
                Regionalklassen-Änderung (oder Umzug):
              </label>
              <select
                value={regionalShift}
                onChange={(e) => setRegionalShift(Number(e.target.value))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-bold"
              >
                <option value="-2">-2 Regionalklassen (günstigerer Bezirk)</option>
                <option value="-1">-1 Regionalklasse (günstiger)</option>
                <option value="0">0 (Unverändert)</option>
                <option value="1">+1 Regionalklasse (teurerer Bezirk)</option>
                <option value="2">+2 Regionalklassen (z. B. Großstadt)</option>
              </select>
              <span className="text-[10px] text-slate-500 mt-1 block">Modellannahme: ca. &plusmn;4 % Richtwert (nicht verbindlich)</span>
            </div>
          </div>

          <div className="p-4 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
            <div>
              <div className="text-xs font-mono text-slate-400">Rechnerische Modellwirkung (unverbindlicher Richtwert):</div>
              <div className="text-2xl sm:text-3xl font-black font-mono mt-0.5 flex items-baseline gap-2">
                <span className={simulatedChange > 0 ? 'text-amber-400' : simulatedChange < 0 ? 'text-emerald-400' : 'text-white'}>
                  {simulatedChange > 0 ? `+${simulatedChange}` : simulatedChange} &euro; / Jahr
                </span>
                <span className="text-xs font-normal text-slate-400">
                  (geschätzter Modellbeitrag: ca. {simulatedNewPremium} &euro;)
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-300 max-w-sm leading-relaxed border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-4">
              <strong>Sonderkündigungs-Tipp:</strong> Führt eine GDV-Umstufung bei Ihrem Versicherer zu einer Erhöhung Ihres Beitrags, haben Sie nach &sect; 40 Abs. 1 VVG 1 Monat Zeit für eine Sonderkündigung.
            </div>
          </div>
        </div>

        {/* 3. Exemplary Model Matrix */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Illustrative Modell-Einstufungen beliebter Fahrzeuge
              </h3>
              <p className="text-xs text-slate-500">
                Beispielhafte Veranschaulichung der GDV-Systematik (keine Echtzeit-Datenbank). Verbindliche Einstufungen für Ihr Fahrzeug erfragen Sie direkt beim Versicherer oder über die GDV-Abfrage.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {['Alle', 'Kleinwagen', 'Kompaktklasse', 'Mittelklasse', 'E-Auto', 'SUV'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/80 text-slate-700 font-mono text-[11px] uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Fahrzeugtyp &amp; HSN/TSN</th>
                  <th className="py-3 px-3">Segment</th>
                  <th className="py-3 px-3 text-center" title="Kraftfahrt-Haftpflicht (Skala 10 bis 25)">Haftpflicht (KH 10–25)</th>
                  <th className="py-3 px-3 text-center" title="Teilkasko (Skala 10 bis 33)">Teilkasko (TK 10–33)</th>
                  <th className="py-3 px-3 text-center" title="Vollkasko (Skala 10 bis 34)">Vollkasko (VK 10–34)</th>
                  <th className="py-3 px-4">Risikoprofil</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCars.map((car, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900">{car.model}</div>
                      <div className="text-[11px] font-mono text-slate-400">HSN/TSN: {car.hsnTsn}</div>
                    </td>
                    <td className="py-3 px-3 text-slate-500 text-xs">{car.category}</td>
                    <td className="py-3 px-3 text-center font-mono font-bold text-slate-800">
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-xs">{car.kh}</span>
                    </td>
                    <td className="py-3 px-3 text-center font-mono font-bold text-slate-800">
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-xs">{car.tk}</span>
                    </td>
                    <td className="py-3 px-3 text-center font-mono font-bold text-slate-800">
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-xs">{car.vk}</span>
                    </td>
                    <td className="py-3 px-4 text-xs text-slate-500">
                      {car.kh <= 14 ? (
                        <span className="text-emerald-700 font-medium">Niedrige KH-Schadenquote</span>
                      ) : car.kh >= 19 ? (
                        <span className="text-amber-800 font-medium">Erhöhte Schadenquote</span>
                      ) : (
                        <span className="text-slate-600 font-medium">Durchschnittlicher Bereich</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote with direct link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 bg-white p-4 rounded-xl border border-slate-200">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Methodischer Hinweis:</strong> Illustrative Modellwerte. Der GDV (Gesamtverband der Deutschen Versicherungswirtschaft e.V.) ist der privatrechtliche Fachverband der Versicherer. Die Typklassen sind für die Versicherer gesetzlich unverbindlich, werden in der Praxis aber von fast allen Gesellschaften als Berechnungsbasis genutzt.
            </p>
          </div>
          <a
            href="https://www.dieversicherer.de/versicherer/auto/typklassenabfrage"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition-colors"
          >
            <span>Offizielle Typklassenabfrage (GDV)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
