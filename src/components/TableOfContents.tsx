'use client'

interface TableOfContentsProps {
  items: { id: string; label: string }[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav aria-label="Inhaltsverzeichnis" className="mb-10 border-l-2 border-brand-100 pl-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
        Inhalt
      </p>
      <ol className="space-y-1.5">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-text-secondary no-underline transition-colors hover:text-brand"
            >
              {index + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
