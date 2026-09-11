export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const mainNavigation: NavItem[] = [
  { label: 'Startseite', href: '/' },
  { label: 'Kfz-Versicherung wechseln', href: '/kfz-versicherung-wechseln/' },
  { label: 'Kfz-Versicherung vergleichen', href: '/kfz-versicherung-vergleichen/' },
  {
    label: 'Kündigung & Fristen',
    href: '/kfz-versicherung-kuendigen/',
    children: [
      { label: 'Kfz-Versicherung kündigen', href: '/kfz-versicherung-kuendigen/' },
      { label: 'Kündigungsfrist', href: '/kuendigungsfrist-kfz-versicherung/' },
      { label: '30. November', href: '/30-november-kfz-versicherung/' },
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
  { label: 'FAQ', href: '/faq/' },
]
