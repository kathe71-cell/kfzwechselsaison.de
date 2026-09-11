import Link from 'next/link'

interface InsuranceTypeCardProps {
  title: string
  description: string
  href: string
}

export function InsuranceTypeCard({ title, description, href }: InsuranceTypeCardProps) {
  return (
    <Link
      href={href}
      className="group block border-b border-border py-5 no-underline transition-colors first:pt-0 last:border-0 md:border-b-0 md:border-l md:border-border md:py-0 md:pl-6 md:first:border-l-0 md:first:pl-0"
    >
      <h3 className="mb-1 text-base font-semibold text-text transition-colors group-hover:text-brand">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </Link>
  )
}
