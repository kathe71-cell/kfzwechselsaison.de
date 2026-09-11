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
    'Die Wechselsaison für Kfz-Versicherungen: Kündigungsfristen, Tarife und wichtige Tipps rund um den Versicherungswechsel.',
  seasonalNotice:
    '30. November im Blick? Prüfe jetzt deine Kfz-Versicherung und vergleiche rechtzeitig mögliche Alternativen.',
  seasonalBanner:
    'Die Kfz-Wechselsaison ist gestartet – prüfe jetzt deinen aktuellen Beitrag und vergleiche mögliche Alternativen.',
}
