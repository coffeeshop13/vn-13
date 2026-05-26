'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import ruTranslations from '@/lib/translations/ru.json'
import enTranslations from '@/lib/translations/en.json'
import itTranslations from '@/lib/translations/it.json'
import frTranslations from '@/lib/translations/fr.json'
import deTranslations from '@/lib/translations/de.json'

type Language = 'ru' | 'en' | 'it' | 'fr' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  translations: Record<string, string>
}

const translations: Record<Language, Record<string, string>> = {
  ru: ruTranslations,
  en: enTranslations,
  it: itTranslations,
  fr: frTranslations,
  de: deTranslations,
}

const defaultContextValue: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  translations: enTranslations,
}

const LanguageContext = createContext<LanguageContextType>(defaultContextValue)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ru')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved && ['ru', 'en', 'it', 'fr', 'de'].includes(saved)) {
      // Hydrate persisted language after localStorage is available.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    translations: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context
}
