'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  HelpCircle, 
  CheckCircle2, 
  Info, 
  Car, 
  ExternalLink,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

const COMMON_HSN = [
  { hsn: '0603', make: 'Volkswagen (VW)', examples: 'Golf, Passat, Polo, Tiguan' },
  { hsn: '0005', make: 'BMW', examples: '1er, 3er, 5er, X1, X3, X5' },
  { hsn: '2222', make: 'Mercedes-Benz (neuer)', examples: 'A-Klasse, C-Klasse, E-Klasse, GLC' },
  { hsn: '0710', make: 'Mercedes-Benz (älter)', examples: 'C-Klasse, E-Klasse ältere Generationen' },
  { hsn: '0588', make: 'Audi', examples: 'A3, A4, A6, Q3, Q5' },
  { hsn: '1889', make: 'Opel (Stellantis)', examples: 'Corsa F, Astra L, Mokka' },
  { hsn: '0035', make: 'Opel (historisch GM)', examples: 'Corsa D/E, Astra J/K, Insignia' },
  { hsn: '8566', make: 'Ford', examples: 'Fiesta, Focus, Kuga, Puma' },
  { hsn: '1480', make: 'Tesla', examples: 'Model 3, Model Y, Model S' },
  { hsn: '8004', make: 'Škoda', examples: 'Octavia, Fabia, Superb, Kodiaq' },
  { hsn: '7593', make: 'SEAT / Cupra', examples: 'Leon, Ibiza, Formentor, Ateca' },
  { hsn: '1349', make: 'Hyundai', examples: 'i30, Tucson, Kona, Ioniq 5' },
  { hsn: '5013', make: 'Toyota', examples: 'Yaris, Corolla, RAV4, C-HR' },
];

export default function HsnTsnExplainer() {
  const [activeTab, setActiveTab] = useState<'visual' | 'table' | 'faq'>('visual');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredHsn = COMMON_HSN.filter(item => 
    item.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.hsn.includes(searchTerm) ||
    item.examples.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="hsn-tsn-guide" className="my-14 scroll-mt-20">
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono font-bold mb-2">
              <Car className="w-3.5 h-3.5 text-amber-400" />
              <span>FAHRZEUGDATEN-UTILITY &middot; ZULASSUNGSBESCHEINIGUNG TEIL I</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              HSN &amp; TSN: Wo finde ich sie und was bedeuten sie?
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Für einen exakten Kfz-Versicherungsvergleich ohne Schätzfehler benötigen Sie die 4-stellige HSN und die 3-stellige TSN aus Ihrem Fahrzeugschein.
            </p>
          </div>

          {/* Navigation Pill Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start lg:self-auto border border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab('visual')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'visual' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Fahrzeugschein-Finder
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('table')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'table' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Gängige HSN-Codes
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('faq')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === 'faq' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              TSN 000 &amp; Praxistipps
            </button>
          </div>
        </div>

        {/* Tab 1: Visual Fahrzeugschein */}
        {activeTab === 'visual' && (
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Card imitating Fahrzeugschein */}
            <div className="lg:col-span-7 bg-emerald-50/70 border-2 border-emerald-300 rounded-2xl p-6 font-mono relative overflow-hidden shadow-inner">
              <div className="absolute top-2 right-3 text-[10px] text-emerald-800 font-sans uppercase font-bold tracking-widest bg-emerald-200/60 px-2 py-0.5 rounded">
                Muster: Zulassungsbescheinigung Teil I
              </div>

              <div className="text-xs text-emerald-950 font-sans font-bold pb-4 border-b border-emerald-200 mb-4">
                BUNDESREPUBLIK DEUTSCHLAND &middot; FAHRZEUGSCHEIN
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                {/* Feld 2.1 HSN Highlight */}
                <div className="bg-white p-3.5 rounded-xl border-2 border-amber-500 shadow-sm relative">
                  <div className="flex items-center justify-between text-[11px] font-sans font-bold text-slate-700 pb-1 mb-1 border-b border-slate-200">
                    <span>Feld 2.1: Code zu (2)</span>
                    <span className="bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-mono text-[10px]">HSN</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-700 tracking-wider">
                    0603
                  </div>
                  <div className="text-[10px] font-sans text-slate-500 mt-1">
                    Exakt 4 Ziffern &middot; steht für Hersteller (z. B. Volkswagen)
                  </div>
                </div>

                {/* Feld 2.2 TSN Highlight */}
                <div className="bg-white p-3.5 rounded-xl border-2 border-emerald-600 shadow-sm relative">
                  <div className="flex items-center justify-between text-[11px] font-sans font-bold text-slate-700 pb-1 mb-1 border-b border-slate-200">
                    <span>Feld 2.2: Code zu D.2 mit Prüfziffer</span>
                    <span className="bg-emerald-100 text-emerald-900 px-1.5 py-0.2 rounded font-mono text-[10px]">TSN</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-700 tracking-wider">
                    CLS<span className="text-slate-300 text-base">000458</span>
                  </div>
                  <div className="text-[10px] font-sans text-slate-500 mt-1">
                    <strong>Erste 3 Stellen</strong> relevant (Buchstaben oder Zahlen)
                  </div>
                </div>
              </div>

              {/* Surrounding mock fields */}
              <div className="grid grid-cols-3 gap-2 text-[10px] text-emerald-900/70 pt-4 mt-4 border-t border-emerald-200/80">
                <div>
                  <span className="block font-bold">B: Erstzulassung</span>
                  <span>14.05.2021</span>
                </div>
                <div>
                  <span className="block font-bold">2.2 Restziffern</span>
                  <span>Varianten-Code</span>
                </div>
                <div>
                  <span className="block font-bold">P.1 / P.2 Hubraum &amp; kW</span>
                  <span>1498 cm³ &middot; 96 kW</span>
                </div>
              </div>

              <div className="text-[11px] font-sans text-emerald-900 mt-4 bg-emerald-100/60 p-2.5 rounded-lg border border-emerald-200">
                <strong>Alte Fahrzeugscheine (ausgestellt vor dem 01.10.2005):</strong> Die HSN stand im Feld <strong>&bdquo;zu 2&ldquo;</strong> (4 Ziffern) und die TSN im Feld <strong>&bdquo;zu 3&ldquo;</strong> (erste 3 Stellen).
              </div>
            </div>

            {/* Explanation Column */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Warum verlangt jeder Vergleichsrechner HSN und TSN?
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automodelle existieren oft in dutzenden Motorisierungs- und Ausstattungsvarianten. Ein VW Golf VIII mit 90 PS hat beispielsweise eine völlig andere Schadenstatistik und Typklasse als ein Golf R mit 320 PS.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">HSN (Herstellerschlüssel):</strong> Vierstelliger numerischer Code des Kraftfahrt-Bundesamtes (KBA) für die Automarke.
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">TSN (Typschlüssel):</strong> Drei Stellen (oft alphanumerisch) für Karosserieform, Motorleistung und Treibstoffart.
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Verhinderung von Nachberechnungen:</strong> Bei manueller Modellauswahl nach Marke/PS-Zahl wählen viele versehentlich eine abweichende Variante. Mit HSN/TSN ist das Angebot bindend.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#vergleichsrechner"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 underline"
                >
                  <span>Direkt mit HSN/TSN im Tarifrechner eingeben</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: HSN Table */}
        {activeTab === 'table' && (
          <div className="pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs text-slate-600">
                Auszug häufiger Herstellerschlüssel (HSN) als Beispiele zur Orientierung (Quelle: KBA-Systematik):
              </p>
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Marke oder HSN suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100 text-slate-700 font-mono text-[11px] uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-4">HSN (KBA-Beispiel)</th>
                    <th className="py-2.5 px-4">Hersteller / Marke</th>
                    <th className="py-2.5 px-4">Beispielhafte Modellreihen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredHsn.map((item) => (
                    <tr key={item.hsn} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-4 font-mono font-bold text-amber-700 bg-amber-50/50 w-28">
                        {item.hsn}
                      </td>
                      <td className="py-2.5 px-4 font-bold text-slate-900">
                        {item.make}
                      </td>
                      <td className="py-2.5 px-4 text-slate-600 text-xs">
                        {item.examples}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-[11px] text-slate-500 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
              * <strong>Hinweis zur Herstellerzuordnung:</strong> Die Tabelle zeigt ausgewählte Beispiele zur Veranschaulichung. Automobilhersteller verfügen beim Kraftfahrt-Bundesamt (KBA) häufig über mehrere unterschiedliche HSN für verschiedene Werke, Produktionszeiträume oder Konzernmarken. Maßgeblich für Ihr konkretes Fahrzeug ist ausschließlich der Eintrag in Feld 2.1 Ihrer Zulassungsbescheinigung Teil I (bzw. Feld &bdquo;zu 2&ldquo; bei Fahrzeugscheinen vor Oktober 2005).
            </div>
          </div>
        )}

        {/* Tab 3: FAQ / TSN 000 */}
        {activeTab === 'faq' && (
          <div className="pt-6 grid sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Was tun, wenn im Feld 2.2 nur &bdquo;000&ldquo; steht?</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Steht im Feld 2.2 die Zahlenfolge <strong>&bdquo;00000000&ldquo;</strong> (sogenannte genullte TSN), handelt es sich meist um ein <strong>EU-Reimportfahrzeug</strong> oder ein Fahrzeug mit Einzelbetriebserlaubnis (§ 21 StVZO). Vergleichsportale können das Modell dann nicht vollautomatisch matchen.
              </p>
              <div className="font-semibold text-slate-800 pt-1">
                Lösung: Wählen Sie im Vergleichsrechner die Option &bdquo;Fahrzeug über Marke, Modell und kW/PS manuell suchen&ldquo;. Der Versicherer ordnet das Fahrzeug dann der passenden Referenz-Typklasse zu.
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-slate-700" />
                <span>Wo finde ich HSN/TSN vor dem Autokauf?</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Wenn Sie ein neues oder gebrauchtes Auto kaufen möchten und die Versicherungskosten <em>vorab kalkulieren</em> wollen, fragen Sie den Verkäufer oder Händler nach HSN und TSN aus dem Fahrzeugbrief (Zulassungsbescheinigung Teil II) oder suchen Sie das identische Modell im Online-Inserat.
              </p>
              <div className="font-semibold text-slate-800 pt-1">
                Tipp: Auch im CoC-Dokument (Certificate of Conformity) finden sich die technischen Schlüsseldaten.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
