interface Step {
  number: number
  title: string
  description: string
}

export function StepProcess({ steps }: { steps: Step[] }) {
  return (
    <div className="space-y-0">
      {steps.map((step, index) => (
        <div key={step.number} className="relative flex gap-5 pb-8 last:pb-0">
          {/* Vertical line */}
          {index < steps.length - 1 && (
            <div className="absolute left-[17px] top-10 h-[calc(100%-24px)] w-px bg-border" />
          )}
          {/* Step number */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand text-sm font-semibold text-brand">
            {step.number}
          </div>
          {/* Content */}
          <div className="pt-1">
            <h3 className="mb-1 text-base font-semibold text-text">{step.title}</h3>
            <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
