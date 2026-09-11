import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { articles } from '@/content/articles'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { TableOfContents } from '@/components/TableOfContents'
import { ConversionSection } from '@/components/ConversionSection'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return { title: 'Artikel nicht gefunden' }
  }

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription,
    alternates: {
      canonical: `https://kfzwechselsaison.de/ratgeber/${article.slug}/`,
    },
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = articles.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  )

  const tocItems = article.content.map((section, index) => ({
    id: `section-${index}`,
    label: section.heading,
  }))

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'KFZ Wechselsaison',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KFZ Wechselsaison',
      url: 'https://kfzwechselsaison.de',
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kfzwechselsaison.de/ratgeber/${article.slug}/`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Breadcrumbs
          items={[
            { label: 'Startseite', href: '/' },
            { label: 'Ratgeber', href: '/ratgeber/' },
            { label: article.title },
          ]}
        />

        <header className="mb-8">
          <h1 className="mb-3">{article.title}</h1>
        </header>

        {/* Pillar page reference */}
        {article.pillarPageLink && (
          <p className="mb-8 text-sm text-text-muted">
            Hauptseite:{' '}
            <Link href={article.pillarPageLink.href}>
              {article.pillarPageLink.label}
            </Link>
          </p>
        )}

        {/* Table of contents */}
        {tocItems.length > 3 && <TableOfContents items={tocItems} />}

        {/* Article content */}
        <div className="article-content">
          {article.content.map((section, index) => (
            <section key={index} id={`section-${index}`}>
              <h2>{section.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />

              {section.subSections?.map((sub, subIndex) => (
                <div key={subIndex}>
                  <h3>{sub.heading}</h3>
                  <div dangerouslySetInnerHTML={{ __html: sub.content }} />
                </div>
              ))}
            </section>
          ))}
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <aside className="mt-12 border-t border-border pt-8">
            <h2 className="mb-4 text-lg">Verwandte Ratgeber</h2>
            <div className="space-y-4">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/ratgeber/${related.slug}/`}
                  className="block text-sm text-text-secondary no-underline hover:text-brand"
                >
                  → {related.title}
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>

      {/* Conversion section for transactional articles */}
      {article.showTarifrechner && (
        <ConversionSection
          headline="Jetzt Kfz-Versicherung vergleichen"
          text="Du möchtest prüfen, ob sich ein Wechsel lohnt? Vergleiche jetzt unverbindlich Tarife verschiedener Anbieter."
        />
      )}
    </>
  )
}
