'use client'

import { useState, useEffect } from 'react'

const STICHTAG = new Date('2026-11-30T23:59:59')

function calcRemaining() {
  const now = new Date()
  const diff = STICHTAG.getTime() - now.getTime()
  if (diff <= 0) return null
  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return { days, hours, minutes, seconds }
}

export default function CountdownBanner() {
  const [remaining, setRemaining] = useState(calcRemaining())

  useEffect(() => {
    const id = setInterval(() => setRemaining(calcRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!remaining) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700 text-white text-xs font-mono font-bold tracking-wider uppercase mb-4 shadow-xs">
        <span>✓ Ordentliche Frist abgelaufen – Sonderkündigungsrecht § 40 VVG prüfen</span>
      </div>
    )
  }

  const isUrgent = remaining.days <= 14

  return (
    <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl text-sm font-mono font-bold mb-4 shadow-sm ${isUrgent ? 'bg-red-600 text-white' : 'bg-amber-500 text-slate-950'}`}>
      <span className={`w-2 h-2 rounded-full animate-ping flex-shrink-0 ${isUrgent ? 'bg-white' : 'bg-slate-900'}`} />
      <span className="hidden sm:inline tracking-wide">
        {isUrgent ? '⚠ Nur noch' : '⏰ Noch'}
      </span>
      <span className="flex items-center gap-1.5">
        <span className="tabular-nums">
          <span className="text-lg font-black">{String(remaining.days).padStart(2, '0')}</span>
          <span className="text-[10px] font-normal ml-0.5 opacity-80">T</span>
        </span>
        <span className="opacity-60">:</span>
        <span className="tabular-nums">
          <span className="text-lg font-black">{String(remaining.hours).padStart(2, '0')}</span>
          <span className="text-[10px] font-normal ml-0.5 opacity-80">Std</span>
        </span>
        <span className="opacity-60">:</span>
        <span className="tabular-nums">
          <span className="text-lg font-black">{String(remaining.minutes).padStart(2, '0')}</span>
          <span className="text-[10px] font-normal ml-0.5 opacity-80">Min</span>
        </span>
        <span className="opacity-60">:</span>
        <span className="tabular-nums">
          <span className="text-lg font-black">{String(remaining.seconds).padStart(2, '0')}</span>
          <span className="text-[10px] font-normal ml-0.5 opacity-80">Sek</span>
        </span>
      </span>
      <span className="hidden md:inline text-[11px] font-semibold opacity-90 tracking-normal">
        bis 30. Nov. 2026
      </span>
    </div>
  )
}
