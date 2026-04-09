'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const { translations } = useLanguage()

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/70">
            {translations.cookieBannerText}{' '}
            <Link href="/privacy" className="underline hover:text-white transition-colors">
              {translations.cookieBannerPrivacy}
            </Link>
            {' '}{translations.cookieBannerAnd}{' '}
            <Link href="/cookie-policy" className="underline hover:text-white transition-colors">
              {translations.cookieBannerCookie}
            </Link>
          </p>
          <button
            onClick={handleAccept}
            className="px-6 py-1.5 bg-white text-black text-xs font-medium hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            {translations.cookieBannerButton}
          </button>
        </div>
      </div>
    </div>
  )
}
