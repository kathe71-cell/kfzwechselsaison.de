export type Season = 'fruehling' | 'sommer' | 'herbst' | 'winter'

export interface SeasonalConfig {
  season: Season
  isWechselsaison: boolean
  heroHeadline: string
  heroSubheadline: string
  seasonalNotice: string
  seasonalBanner: string
}

export const seasonalConfig: SeasonalConfig = {
  season: 'herbst',
  isWechselsaison: true,
  heroHeadline: 'Kfz-Versicherung wechseln: Jetzt Tarife vergleichen',
  heroSubheadline:
    'Wechselsaison läuft: Kündigungsfrist endet am 30. November 2026. Jetzt Tarife vergleichen, kündigen und bis zu mehrere Hundert Euro sparen.',
  seasonalNotice:
    'Achtung: Kündigung bis 30. November 2026 (23:59 Uhr) beim Versicherer einreichen. Jetzt Tarife prüfen und Sonderkündigungsrecht (§ 40 VVG) checken.',
  seasonalBanner:
    'Kfz-Wechselsaison 2026: Stichtag 30. November – jetzt Beitrag vergleichen und rechtzeitig kündigen.',
}
