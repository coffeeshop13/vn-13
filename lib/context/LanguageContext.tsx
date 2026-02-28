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

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  ru: ruTranslations,
  en: enTranslations,
  it: itTranslations,
  fr: frTranslations,
  de: deTranslations,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ru')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null
    if (saved && ['ru', 'en', 'it', 'fr', 'de'].includes(saved)) {
      setLanguageState(saved)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
