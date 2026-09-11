import type { Metadata } from 'next'
import { articles } from '@/content/articles'
import { ArticleCard } from '@/components/ArticleCard'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Ratgeber rund um die Kfz-Versicherung',
  description:
    'Ratgeber und Tipps rund um die Kfz-Versicherung: Wechsel, Kündigung, Tarifvergleich, Versicherungsarten und häufige Fehler.',
  alternates: {
    canonical: 'https://kfzwechselsaison.de/ratgeber/',
  },
}

export default function RatgeberPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: 'Startseite', href: '/' },
          { label: 'Ratgeber' },
        ]}
      />

      <h1 className="mb-3">Ratgeber rund um die Kfz-Versicherung</h1>
      <p className="mb-10 max-w-2xl text-text-secondary">
        Verständliche Informationen zu den wichtigsten Themen rund um die
        Kfz-Versicherung: Wechsel, Kündigung, Fristen, Versicherungsarten und
        Tipps für einen guten Versicherungsschutz.
      </p>

      <div className="space-y-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            title={article.title}
            excerpt={article.excerpt}
            href={`/ratgeber/${article.slug}/`}
            category={article.category}
            readingTime={article.readingTime}
            updatedAt={article.updatedAt}
          />
        ))}
      </div>
    </div>
  )
}
