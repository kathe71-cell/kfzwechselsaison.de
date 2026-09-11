'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export interface ConsentState {
  necessary: boolean
  statistics: boolean
  marketing: boolean
}

interface CookieConsentContextType {
  consent: ConsentState | null
  showBanner: boolean
  acceptAll: () => void
  acceptNecessary: () => void
  savePreferences: (prefs: ConsentState) => void
  openSettings: () => void
  resetConsent: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(null)

const CONSENT_KEY = 'kfzws-cookie-consent'
const CONSENT_TIMESTAMP_KEY = 'kfzws-cookie-consent-ts'

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider')
  return ctx
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY)
      if (stored) {
        setConsent(JSON.parse(stored))
        setShowBanner(false)
      } else {
        setShowBanner(true)
      }
    } catch {
      setShowBanner(true)
    }
    setInitialized(true)
  }, [])

  const persistConsent = useCallback((state: ConsentState) => {
    setConsent(state)
    setShowBanner(false)
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(state))
      localStorage.setItem(CONSENT_TIMESTAMP_KEY, new Date().toISOString())
    } catch {
      // localStorage unavailable
    }
  }, [])

  const acceptAll = useCallback(() => {
    persistConsent({ necessary: true, statistics: true, marketing: true })
  }, [persistConsent])

  const acceptNecessary = useCallback(() => {
    persistConsent({ necessary: true, statistics: false, marketing: false })
  }, [persistConsent])

  const savePreferences = useCallback((prefs: ConsentState) => {
    persistConsent({ ...prefs, necessary: true })
  }, [persistConsent])

  const openSettings = useCallback(() => {
    setShowBanner(true)
  }, [])

  const resetConsent = useCallback(() => {
    try {
      localStorage.removeItem(CONSENT_KEY)
      localStorage.removeItem(CONSENT_TIMESTAMP_KEY)
    } catch {
      // ignore
    }
    setConsent(null)
    setShowBanner(true)
  }, [])

  return (
    <CookieConsentContext.Provider
      value={{ consent, showBanner, acceptAll, acceptNecessary, savePreferences, openSettings, resetConsent }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}
