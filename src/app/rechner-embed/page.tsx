import React from 'react';
import type { Metadata } from 'next';
import SavingsCalculator from '@/components/SavingsCalculator';

export const metadata: Metadata = {
  title: 'Kfz-Ersparnisrechner & Wechselfristen-Timer – Widget Embed',
  description: 'Interaktiver Rechner zur Ermittlung des Sparpotenzials beim Kfz-Versicherungswechsel sowie Stichtags-Countdown zum 30. November.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RechnerEmbedPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-2 sm:p-4 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <SavingsCalculator isEmbed={true} />
        <div className="text-center mt-3 text-xs text-slate-500 font-mono">
          Bereitgestellt von{' '}
          <a
            href="https://kfzwechselsaison.de/"
            target="_blank"
            rel="noopener"
            className="text-slate-900 font-bold hover:underline"
          >
            kfzwechselsaison.de
          </a>{' '}
          &middot; Wechselsaison 2026/2027
        </div>
      </div>
    </main>
  );
}
