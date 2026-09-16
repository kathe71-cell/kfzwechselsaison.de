'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

const navigation: NavItem[] = [
  { label: 'Versicherung wechseln', href: '/kfz-versicherung-wechseln/' },
  { label: 'Spar- & Fristenrechner', href: '/#spar-rechner' },
  {
    label: 'Kündigung & Fristen',
    href: '/kfz-versicherung-kuendigen/',
    children: [
      { label: 'Kfz-Versicherung kündigen', href: '/kfz-versicherung-kuendigen/' },
      { label: 'Kündigungsfrist', href: '/kuendigungsfrist-kfz-versicherung/' },
      { label: '30. November Stichtag', href: '/30-november-kfz-versicherung/' },
      { label: 'Sonderkündigungsrecht', href: '/sonderkuendigungsrecht-kfz-versicherung/' },
    ],
  },
  {
    label: 'Versicherungsarten',
    href: '/kfz-haftpflicht/',
    children: [
      { label: 'Kfz-Haftpflicht', href: '/kfz-haftpflicht/' },
      { label: 'Teilkasko', href: '/teilkasko/' },
      { label: 'Vollkasko', href: '/vollkasko/' },
      { label: 'E-Auto-Versicherung', href: '/e-auto-versicherung/' },
      { label: 'Zweitwagenversicherung', href: '/zweitwagenversicherung/' },
    ],
  },
  { label: 'Ratgeber', href: '/ratgeber/' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1 no-underline" aria-label="KFZ Wechselsaison – Startseite">
          <span className="text-lg font-bold tracking-tight text-brand">KFZ</span>
          <span className="text-base font-medium tracking-tight text-text">Wechselsaison</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <NavItemDesktop key={item.href} item={item} />
          ))}
          <Link
            href="/kfz-versicherung-vergleichen/"
            className="btn-primary ml-3"
          >
            Tarife vergleichen
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-text"
          aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="border-t border-border bg-surface px-5 pb-6 pt-4 lg:hidden"
          aria-label="Mobile Navigation"
        >
          {navigation.map((item) => (
            <MobileNavItem key={item.href} item={item} onNavigate={() => setMobileOpen(false)} />
          ))}
          <Link
            href="/kfz-versicherung-vergleichen/"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4 block w-full text-center"
          >
            Tarife vergleichen
          </Link>
        </nav>
      )}
    </header>
  )
}

function NavItemDesktop({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="rounded px-3 py-2 text-sm text-text-secondary no-underline transition-colors hover:bg-surface-muted hover:text-text"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-surface-muted hover:text-text"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-0.5 min-w-[220px] rounded border border-border bg-surface py-2 shadow-sm">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2 text-sm text-text-secondary no-underline transition-colors hover:bg-surface-muted hover:text-text"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileNavItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block border-b border-border-subtle py-3 text-sm text-text no-underline"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3 text-sm text-text"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 text-text-muted transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-2 pl-4">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className="block py-2 text-sm text-text-secondary no-underline"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
