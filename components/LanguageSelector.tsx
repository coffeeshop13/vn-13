'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/context/LanguageContext'

type Language = 'ru' | 'en' | 'it' | 'fr' | 'de'

const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
]

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find(l => l.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-2 px-4 py-2 text-sm tracking-wide transition-colors duration-200 ${isOpen ? '' : 'hover:bg-[#f0e9dc]'}`}
        style={{
          backgroundColor: isOpen ? '#f0e9dc' : undefined,
          color: '#0f0f0f',
          border: '1px solid #e0ddd8',
        }}
      >
        <span>{currentLang?.nativeName}</span>
        <span style={{ fontSize: '10px', opacity: 0.6 }}>▼</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 bg-white rounded shadow-lg z-50"
          style={{ border: '1px solid #e0ddd8', minWidth: '140px' }}
        >
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-2.5 text-sm hover:bg-accent-light transition-colors"
              style={{
                backgroundColor: language === lang.code ? '#f0e9dc' : undefined,
                color: '#0f0f0f',
              }}
            >
              {lang.nativeName}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
