'use client'

export function HeroScrollButton() {
  const handleClick = () => {
    const el = document.getElementById('tarifrechner')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button onClick={handleClick} className="btn-primary px-8 py-3 text-base font-medium">
      Jetzt Tarife vergleichen ↓
    </button>
  )
}
