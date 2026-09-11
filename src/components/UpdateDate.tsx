export function UpdateDate({ date }: { date: string }) {
  const formatted = new Date(date).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <time dateTime={date} className="text-sm text-text-muted">
      Zuletzt aktualisiert: {formatted}
    </time>
  )
}
