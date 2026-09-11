export function AffiliateDisclosure({ className = '' }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-text-muted ${className}`}>
      Hinweis: Über den eingebundenen Tarifvergleich können wir eine Vergütung erhalten.
      Für dich entstehen dadurch keine zusätzlichen Kosten.{' '}
      <a href="/affiliate-hinweis/" className="underline">
        Mehr erfahren
      </a>
    </p>
  )
}
