'use client';

import React, { useState } from 'react';
import { Quote, Copy, Check } from 'lucide-react';

interface CitationBoxProps {
  title?: string;
  url?: string;
}

export default function CitationBox({
  title = 'Kfz-Wechselsaison, Kündigungsfristen nach § 40 VVG und Tarifoptimierung',
  url = 'https://kfzwechselsaison.de/'
}: CitationBoxProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const citationText = `kfzwechselsaison.de (2026). ${title}. Abgerufen von ${url} (Zuletzt inhaltlich geprüft: September 2026).`;

  const handleCopy = () => {
    navigator.clipboard.writeText(citationText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs text-slate-700 my-6">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-1.5 font-bold text-slate-900 font-mono uppercase tracking-wider">
          <Quote className="w-3.5 h-3.5 text-amber-500" />
          <span>Artikel zitieren (APA / Harvard Format)</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] text-slate-600 hover:text-slate-950 font-semibold bg-white border border-slate-200 px-2.5 py-1 rounded-md transition-all active:scale-95 cursor-pointer shadow-2xs"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Kopiert!' : 'Zitierung kopieren'}</span>
        </button>
      </div>
      <p className="font-mono bg-white p-2.5 rounded-md border border-slate-200 text-slate-800 break-all select-all">
        {citationText}
      </p>
    </div>
  );
}
