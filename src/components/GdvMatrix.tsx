'use client';

import React, { useState } from 'react';
import { Database, Search, Info, ShieldCheck, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface CarTypeEntry {
  model: string;
  hsnTsn: string;
  category: string;
  kh: number; // Kraftfahrt-Haftpflicht
  tk: number; // Teilkasko
  vk: number; // Vollkasko
  trend: 'up' | 'down' | 'neutral';
  comment: string;
}

const CAR_DATA: CarTypeEntry[] = [
  { model: 'VW Golf VIII 1.5 TSI (130 PS)', hsnTsn: '0603 / CLS', category: 'Kompaktklasse', kh: 15, tk: 20, vk: 19, trend: 'neutral', comment: 'Kompakt-Benchmark, stabile Einstufung' },
  { model: 'Tesla Model Y Long Range AWD', hsnTsn: '1480 / AAR', category: 'E-Auto / SUV', kh: 19, tk: 24, vk: 26, trend: 'up', comment: 'Höherer Reparaturaufwand bei Batteriemodulen' },
  { model: 'BMW 320d Touring (190 PS)', hsnTsn: '0005 / CUX', category: 'Mittelklasse', kh: 18, tk: 23, vk: 24, trend: 'neutral', comment: 'Typischer Langstrecken-Kombi' },
  { model: 'Opel Corsa 1.2 (75 PS)', hsnTsn: '1889 / AAR', category: 'Kleinwagen', kh: 13, tk: 16, vk: 15, trend: 'down', comment: 'Günstiges Einsteigerfahrzeug' },
  { model: 'Audi A4 Avant 2.0 TDI (150 PS)', hsnTsn: '0588 / BKB', category: 'Mittelklasse', kh: 17, tk: 22, vk: 23, trend: 'neutral', comment: 'Beliebter Dienst- und Familienwagen' },
  { model: 'Fiat 500 1.0 Hybrid (70 PS)', hsnTsn: '4136 / AXG', category: 'Kleinstwagen', kh: 12, tk: 15, vk: 14, trend: 'down', comment: 'Geringe Schadenfrequenz im Stadtverkehr' },
  { model: 'Mercedes-Benz C 200 Limousine', hsnTsn: '2222 / ALH', category: 'Mittelklasse', kh: 18, tk: 23, vk: 23, trend: 'neutral', comment: 'Ausgewogenes Schadenprofil' },
  { model: 'Hyundai Ioniq 5 (217 PS)', hsnTsn: '1349 / AET', category: 'E-Auto / SUV', kh: 17, tk: 22, vk: 23, trend: 'neutral', comment: 'Moderne Fahrassistenz senkt Haftpflichtschäden' },
  { model: 'Porsche Macan 2.0 (265 PS)', hsnTsn: '0583 / AMP', category: 'Oberklasse / SUV', kh: 21, tk: 28, vk: 29, trend: 'up', comment: 'Hohe Teilediebstahl- und Kaskokosten' },
  { model: 'Skoda Octavia Combi 2.0 TDI', hsnTsn: '8004 / ATB', category: 'Kompaktklasse', kh: 16, tk: 21, vk: 20, trend: 'down', comment: 'Wirtschaftliche Typklasseneinstufung' },
];

export default function GdvMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCars = CAR_DATA.filter((car) => {
    const matchesCat = selectedCategory === 'Alle' || car.category.includes(selectedCategory);
    const matchesQuery = car.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
      car.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.hsnTsn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="gdv-matrix" className="my-12 scroll-mt-20">
      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold mb-2">
              <Database className="w-3.5 h-3.5 text-amber-400" />
              <span>GDV-STATISTIK &middot; BEZUGSJAHR 2026/2027</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Typklassen-Explorer für ausgewählte Referenzmodelle
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Die Typklasse bestimmt maßgeblich den Grundbeitrag: Je niedriger der Wert, desto günstiger die Einstufung.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-600 flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Klassen: KH 10–25 &middot; TK 10–33 &middot; VK 10–34</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 pb-4">
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {['Alle', 'Kleinwagen', 'Kompaktklasse', 'Mittelklasse', 'E-Auto', 'SUV'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Modell oder HSN/TSN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100/80 text-slate-700 font-mono text-[11px] uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Fahrzeugtyp &amp; HSN/TSN</th>
                <th className="py-3 px-3">Segment</th>
                <th className="py-3 px-3 text-center" title="Kraftfahrt-Haftpflicht (10 bis 25)">Haftpflicht (KH)</th>
                <th className="py-3 px-3 text-center" title="Teilkasko (10 bis 33)">Teilkasko (TK)</th>
                <th className="py-3 px-3 text-center" title="Vollkasko (10 bis 34)">Vollkasko (VK)</th>
                <th className="py-3 px-4">Beobachtete Tendenz</th>
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
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1.5">
                      {car.trend === 'up' && (
                        <span className="inline-flex items-center text-xs font-semibold text-rose-700">
                          <ArrowUpRight className="w-3.5 h-3.5" /> Steigend
                        </span>
                      )}
                      {car.trend === 'down' && (
                        <span className="inline-flex items-center text-xs font-semibold text-emerald-700">
                          <ArrowDownRight className="w-3.5 h-3.5" /> Günstiger
                        </span>
                      )}
                      {car.trend === 'neutral' && (
                        <span className="inline-flex items-center text-xs font-semibold text-slate-500">
                          <Minus className="w-3.5 h-3.5" /> Unverändert
                        </span>
                      )}
                      <span className="text-[11px] text-slate-400 hidden lg:inline">&middot; {car.comment}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote */}
        <div className="mt-4 flex items-start gap-2 text-xs text-slate-600 bg-white p-3.5 rounded-xl border border-slate-200">
          <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Methodischer und institutioneller Hinweis:</strong> Der Gesamtverband der Deutschen Versicherungswirtschaft e.V. (GDV) ist ein privatrechtlicher Branchenverband und <em>keine staatliche Behörde</em>. Der GDV ermittelt jährlich auf Basis des gemeldeten Schadenaufwands unverbindliche Typklassenstatistiken (Bezugsjahr 2026/2027). Die hier gelisteten Werte dienen als illustrative Referenzbeispiele für gängige Fahrzeugmodelle. Für konkrete Prämien ist stets die Tarifierung des jeweiligen Versicherers maßgeblich.
          </p>
        </div>
      </div>
    </section>
  );
}
