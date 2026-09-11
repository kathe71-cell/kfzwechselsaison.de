'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  withSchema?: boolean
}

export function FAQ({ items, withSchema = false }: FAQProps) {
  const jsonLd = withSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <div className="divide-y divide-border">
        {items.map((item, index) => (
          <FAQAccordionItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </>
  )
}

function FAQAccordionItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-text">{question}</span>
        <ChevronDown
          className={`mt-1 h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 text-sm leading-relaxed text-text-secondary">
          {answer}
        </div>
      )}
    </div>
  )
}
