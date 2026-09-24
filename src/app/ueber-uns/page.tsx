import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Über uns – Redaktionelle Transparenz & Leitbild',
  description: 'Erfahren Sie mehr über KFZ Wechselsaison: Unabhängige Verbraucherinformationen, Redaktionsgrundsätze und Transparenz.',
  alternates: {
    canonical: 'https://kfzwechselsaison.de/ueber-uns/',
  },
};

export default function UeberUnsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1>Über KFZ Wechselsaison</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Willkommen bei KFZ Wechselsaison, Ihrem unabhängigen Verbraucherportal rund um das Thema Kfz-Versicherungswechsel.
        </p>

        <h2>Unser Ziel</h2>
        <p>
          Unser Ziel ist es, Ihnen verständliche, aktuelle und transparente Informationen zur Verfügung zu stellen, damit Sie beim Wechsel Ihrer Kfz-Versicherung die bestmögliche Entscheidung treffen können. Der Markt für Kfz-Versicherungen ist oft unübersichtlich. Wir möchten Licht ins Dunkel bringen und Ihnen helfen, durch Vergleiche und fundierte Ratgeber Zeit und Geld zu sparen.
        </p>

        <h2>Transparenz und Unabhängigkeit</h2>
        <p>
          Wir legen großen Wert auf Transparenz. KFZ Wechselsaison arbeitet nicht mit erfundenen Redakteuren oder fiktiven Experten-Personas. Unsere Inhalte werden von echten Menschen recherchiert und zusammengestellt. 
        </p>
        <p>
          Um diesen Service kostenlos anbieten zu können, nutzen wir kommerzielle Partnerlinks (Affiliate-Links). Wenn Sie über einen solchen Link eine Versicherung abschließen, erhalten wir möglicherweise eine Provision vom Anbieter. Für Sie entstehen dadurch selbstverständlich keine zusätzlichen Kosten. Unsere redaktionelle Unabhängigkeit bleibt davon unberührt – wir empfehlen nur Angebote, von denen wir selbst überzeugt sind.
        </p>
        <p>
          Weitere Informationen dazu finden Sie auf unserer Seite <Link href="/affiliate-hinweis/" className="hover:underline">Affiliate-Hinweis & Transparenz</Link>.
        </p>

        <h2>Kontakt</h2>
        <p>
          Haben Sie Fragen, Anregungen oder Feedback? Wir freuen uns, von Ihnen zu hören. Sie erreichen uns am besten per E-Mail.
        </p>
        <p>
          E-Mail: domain@kathe.org
        </p>
        <p>
          Weitere Kontaktinformationen finden Sie in unserem <Link href="/impressum/" className="hover:underline">Impressum</Link>.
        </p>
      </div>
    </div>
  );
}
