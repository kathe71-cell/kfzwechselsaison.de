'use client';

import React, { useState } from 'react';
import { Database, Search, Info, ShieldCheck, ExternalLink } from 'lucide-react';

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-bold mb-2">
              <Database className="w-3.5 h-3.5 text-amber-400" />
              <span>ILLUSTRATIVE BEISPIELE &middot; TYPKLASSENSYSTEM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Typklassen-Explorer: Modellhafte Referenzwerte
            </h2>
            <div className="text-xs sm:text-sm font-medium text-slate-700 bg-amber-50/80 border border-amber-200/70 rounded-lg p-3 mt-2 leading-relaxed">
              <strong>Hinweis zur Datenbasis:</strong> Illustrative Beispiele – keine verifizierte GDV-Jahresstatistik. Die untenstehenden Werte veranschaulichen die Funktionsweise der Typklassen-Systematik (KH 10–25, TK 10–33, VK 10–34). Die verbindliche Einstufung Ihres Fahrzeugs ermittelt der GDV bzw. Ihr Versicherer anhand der vollständigen HSN/TSN.
            </div>
          </div>

          <div className="text-xs font-mono text-slate-600 flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg border border-slate-200 shrink-0 self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Skalen: KH 10–25 &middot; TK 10–33 &middot; VK 10–34</span>
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
                <th className="py-3 px-3 text-center" title="Kraftfahrt-Haftpflicht (Skala 10 bis 25)">Haftpflicht (KH)</th>
                <th className="py-3 px-3 text-center" title="Teilkasko (Skala 10 bis 33)">Teilkasko (TK)</th>
                <th className="py-3 px-3 text-center" title="Vollkasko (Skala 10 bis 34)">Vollkasko (VK)</th>
                <th className="py-3 px-4">Einstufungs-Systematik</th>
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
                    <span className="bg-slate-100 px-2.5 py-0.5 rounded text-xs">{car.kh}</span>
                  </td>
                  <td className="py-3 px-3 text-center font-mono font-bold text-slate-800">
                    <span className="bg-slate-100 px-2.5 py-0.5 rounded text-xs">{car.tk}</span>
                  </td>
                  <td className="py-3 px-3 text-center font-mono font-bold text-slate-800">
                    <span className="bg-slate-100 px-2.5 py-0.5 rounded text-xs">{car.vk}</span>
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-500">
                    {car.kh <= 14 ? (
                      <span className="text-emerald-700 font-medium">Geringerer KH-Schadenaufwand</span>
                    ) : car.kh >= 19 ? (
                      <span className="text-slate-700 font-medium">Höherer KH-Schadenaufwand</span>
                    ) : (
                      <span className="text-slate-600 font-medium">Mittlerer KH-Bereich</span>
                    )}
                    <span className="text-slate-400 text-[11px] block">KH 10–25 &middot; TK 10–33 &middot; VK 10–34</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnote with direct link */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 bg-white p-4 rounded-xl border border-slate-200">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Methodischer und institutioneller Hinweis:</strong> Illustrative Beispiele – keine verifizierte GDV-Jahresstatistik. Der Gesamtverband der Deutschen Versicherungswirtschaft e.V. (GDV) ist ein privatrechtlicher Branchenverband und <em>keine staatliche Behörde</em>. Für die verbindliche und aktuelle Einstufung Ihres Fahrzeugs nutzen Sie bitte die offizielle Verbandsabfrage:
            </p>
          </div>
          <a
            href="https://www.gdv.de/gdv/themen/schaden-unfall/typklassenabfrage-104938"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition-colors"
          >
            <span>GDV-Typklassenabfrage</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
