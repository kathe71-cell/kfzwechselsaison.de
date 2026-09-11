# KFZ Wechselsaison

**kfzwechselsaison.de** – Unabhängiges deutsches Verbraucherportal rund um den Kfz-Versicherungswechsel.

## Tech-Stack

- **Framework:** Next.js 16 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel
- **Analytics:** Vercel Analytics (cookieless)

## Lokales Setup

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Production Build
npm run build
npm run start
```

Der Entwicklungsserver läuft standardmäßig auf [http://localhost:3000](http://localhost:3000).

## Vercel Deployment

1. Repository mit Vercel verbinden (über das Vercel Dashboard)
2. Framework Preset: **Next.js** (wird automatisch erkannt)
3. Automatische Deploys bei Push auf den `main`-Branch

### Domains konfigurieren

Folgende Domains in Vercel unter **Settings → Domains** hinzufügen:

- `kfzwechselsaison.de` (primäre Domain)
- `www.kfzwechselsaison.de` (Redirect auf `kfzwechselsaison.de`)
- `kfz-wechselsaison.de` (301-Redirect auf `kfzwechselsaison.de`)
- `www.kfz-wechselsaison.de` (301-Redirect auf `kfzwechselsaison.de`)

Die Redirect-Regeln sind bereits in `vercel.json` und `next.config.ts` hinterlegt.

## Google Search Console Verifizierung

1. In der [Google Search Console](https://search.google.com/search-console/) die Property `https://kfzwechselsaison.de` hinzufügen
2. Die Verifizierungsmethode **HTML-Tag** wählen
3. Den Verifizierungscode kopieren (nur den `content`-Wert)
4. In Vercel unter **Settings → Environment Variables** die Variable anlegen:
   ```
   NEXT_PUBLIC_GSC_VERIFICATION=dein-verifizierungscode
   ```
5. Neu deployen (Push auf `main` oder manueller Redeploy in Vercel)
6. In der Search Console die Verifizierung abschließen
7. Die Sitemap unter `https://kfzwechselsaison.de/sitemap.xml` einreichen

## Cookie-Consent

Das Cookie-Consent-System ist eine eigenständige Implementierung ohne externe Abhängigkeiten:

- **Kategorien:** Notwendig (immer aktiv), Statistik, Marketing
- **Speicherung:** localStorage (`kfzws-cookie-consent`)
- **Widerruf:** Über den Link „Cookie-Einstellungen" im Footer jederzeit möglich
- **Tarifrechner:** Wird erst nach Zustimmung zur Marketing-Kategorie geladen
- **Analytics:** Vercel Analytics ist cookieless und benötigt keine Einwilligung

## Analytics

**Vercel Analytics** wurde gewählt, weil:

- Cookieless – kein separater Consent nötig
- Direkt in Vercel integriert, kein externer Dienst
- Kostenloser Tier für die wichtigsten Metriken
- Vercel Speed Insights für Core Web Vitals

Tracking umfasst:
- Seitenaufrufe nach Quelle
- Meistbesuchte Seiten
- Core Web Vitals (LCP, CLS, INP)

Für Conversion-Tracking (Klicks auf den Tarifrechner) kann später ein Custom-Event über `@vercel/analytics` ergänzt werden:

```ts
import { track } from '@vercel/analytics'
track('tarifrechner_click')
```

## Saisonale Anpassung

Die saisonalen Inhalte (Hero-Headline, Banner, Hinweistexte) sind zentral in `src/content/seasonal.ts` konfigurierbar. Um die Seite für einen anderen Zeitraum anzupassen, einfach die Werte in dieser Datei ändern.

## Content-System

Alle redaktionellen Inhalte sind als TypeScript-Dateien unter `src/content/` organisiert:

| Datei | Inhalt |
|---|---|
| `site.ts` | Site-Metadaten, Kontaktdaten |
| `navigation.ts` | Navigationsstruktur |
| `seasonal.ts` | Saisonale Konfiguration |
| `faq.ts` | FAQ-Einträge |
| `articles.ts` | Ratgeberartikel |

Neue Ratgeberartikel können einfach durch Hinzufügen eines neuen Objekts zum `articles`-Array erstellt werden. Die Seite wird automatisch bei `/ratgeber/[slug]/` verfügbar.

## Projektstruktur

```
src/
├── app/                    # Next.js App Router Seiten
│   ├── page.tsx            # Startseite
│   ├── layout.tsx          # Root Layout
│   ├── globals.css         # Design System
│   ├── sitemap.ts          # XML-Sitemap
│   ├── robots.ts           # robots.txt
│   ├── ratgeber/           # Ratgeber-Übersicht + Artikel
│   └── [pillar-pages]/     # 12 Pillar Pages
├── components/             # React-Komponenten
│   ├── Header.tsx          # Navigation
│   ├── Footer.tsx          # Footer
│   ├── TarifcheckWidget.tsx # Tarifrechner (Cookie-gated)
│   ├── CookieConsent*.tsx  # Cookie-Consent-System
│   └── ...                 # Weitere UI-Komponenten
└── content/                # Redaktionelle Inhalte
```

## Lizenz

Alle Inhalte © KFZ Wechselsaison. Alle Rechte vorbehalten.
