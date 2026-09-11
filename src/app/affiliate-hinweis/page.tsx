import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Affiliate-Hinweis & Transparenz',
};

export default function AffiliateHinweisPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1>Affiliate-Hinweis & Transparenz</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Transparenz ist uns wichtig. Deshalb möchten wir Ihnen offen darlegen, wie sich unser Verbraucherportal finanziert.
        </p>

        <h2>Kommerzielle Partnerlinks (Affiliate-Links)</h2>
        <p>
          Auf KFZ Wechselsaison finden Sie Verweise und Links zu verschiedenen Versicherungsanbietern und Tarifrechnern. Einige dieser Links sind sogenannte Affiliate-Links (kommerzielle Partnerlinks). Das bedeutet, dass wir eine Provision erhalten können, wenn Sie auf einen solchen Link klicken und anschließend einen Vertrag über den jeweiligen Anbieter abschließen.
        </p>

        <h2>Keine zusätzlichen Kosten für Sie</h2>
        <p>
          Wichtig für Sie: Wenn Sie über einen unserer Partnerlinks einen Versicherungsvertrag abschließen, entstehen Ihnen <strong>keinerlei zusätzliche Kosten</strong>. Der Beitrag, den Sie für Ihre Kfz-Versicherung zahlen, bleibt exakt derselbe, als wenn Sie direkt über die Website des Anbieters abschließen würden. Die Provision wird allein vom Versicherer oder vom Betreiber des Tarifrechners aus deren Marge bezahlt.
        </p>

        <h2>Redaktionelle Unabhängigkeit</h2>
        <p>
          Unsere redaktionelle Arbeit und unsere Empfehlungen bleiben von dieser Art der Monetarisierung unabhängig. Wir bemühen uns stets um objektive Vergleiche und umfassende Informationen. Die Integration von Partnerlinks ermöglicht es uns, KFZ Wechselsaison für Sie als Nutzer dauerhaft kostenlos und auf hohem qualitativen Niveau zu betreiben.
        </p>

        <p className="mt-8">
          Vielen Dank, dass Sie unser Portal nutzen und unsere Arbeit durch die Nutzung der Partnerlinks unterstützen!
        </p>
      </div>
    </div>
  );
}
