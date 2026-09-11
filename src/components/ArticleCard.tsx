import Link from 'next/link'

interface ArticleCardProps {
  title: string
  excerpt: string
  href: string
  category: string
  readingTime?: number
  updatedAt?: string
}

const categoryLabels: Record<string, string> = {
  wechsel: 'Wechsel',
  kuendigung: 'Kündigung',
  vergleich: 'Vergleich',
  versicherungsarten: 'Versicherungsarten',
  tipps: 'Tipps',
}

export function ArticleCard({ title, excerpt, href, category }: ArticleCardProps) {
  return (
    <article className="group border-b border-border pb-6 last:border-0">
      <Link href={href} className="block no-underline">
        <div className="mb-2 flex items-center gap-3 text-xs text-text-muted">
          <span className="rounded bg-surface-muted px-2 py-0.5 font-medium text-text-secondary">
            {categoryLabels[category] || category}
          </span>
        </div>
        <h3 className="mb-1.5 font-serif text-lg font-semibold text-text transition-colors group-hover:text-brand">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-text-secondary">{excerpt}</p>
      </Link>
    </article>
  )
}
