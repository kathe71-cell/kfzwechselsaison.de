import { Metadata } from 'next';
import React from 'react';
import { faqItems } from '@/content/faq';
import { FAQ } from '@/components/FAQ';
import { ConversionSection } from '@/components/ConversionSection';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Häufige Fragen zur Kfz-Versicherung (FAQ)',
  description: 'Antworten auf die am häufigsten gestellten Fragen zum Thema Kfz-Versicherung, Wechsel, Kündigung und Tarife.',
  alternates: {
    canonical: 'https://kfzwechselsaison.de/faq/',
  },
};

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Breadcrumbs 
        items={[
          { label: 'Startseite', href: '/' },
          { label: 'FAQ', href: '/faq' },
        ]} 
      />
      
      <h1>
        Häufige Fragen (FAQ) zur Kfz-Versicherung
      </h1>
      
      <div className="mb-12">
        <p className="text-lg text-text-secondary mb-8">
          Hier finden Sie Antworten auf die wichtigsten Fragen rund um den Wechsel der Kfz-Versicherung, Kündigungsfristen und Sparpotenziale.
        </p>
        
        <FAQ items={faqItems} withSchema={true} />
      </div>
      
      <ConversionSection />
    </div>
  );
}
