'use client'

import { useState } from 'react'
import Script from 'next/script'
import { useLanguage } from '@/lib/context/LanguageContext'

const CONSENT_KEY = 'cookie-consent-v1'

type ConsentState = 'accepted' | 'rejected' | null

const copy = {
  ru: {
    text: 'Мы используем cookie-файлы для аналитики и улучшения сайта.',
    accept: 'Принять',
    reject: 'Не принимать',
  },
  en: {
    text: 'We use cookies for analytics and to improve the site.',
    accept: 'Accept',
    reject: 'Reject',
  },
} as const

export default function CookieConsentBar() {
  const { language } = useLanguage()
  const [consent, setConsent] = useState<ConsentState>(() => {
    if (typeof window === 'undefined') {
      return null
    }

    const saved = localStorage.getItem(CONSENT_KEY)
    return saved === 'accepted' || saved === 'rejected' ? saved : null
  })

  const setChoice = (choice: Exclude<ConsentState, null>) => {
    localStorage.setItem(CONSENT_KEY, choice)
    setConsent(choice)
  }

  const c = language === 'ru' ? copy.ru : copy.en

  return (
    <>
      {consent === 'accepted' ? (
        <Script id="yandex-metrika-consent" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(70368979, 'init', {
              webvisor:true,
              clickmap:true,
              referrer: document.referrer,
              url: location.href,
              accurateTrackBounce:true,
              trackLinks:true
            });
          `}
        </Script>
      ) : null}

      {consent === null ? (
        <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-6 sm:pb-4">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 border border-[#e0ddd8] bg-white/95 px-4 py-3 shadow-[0_-12px_30px_rgba(15,15,15,0.08)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-sm leading-5 text-[#0f0f0f]">{c.text}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => setChoice('rejected')}
                className="inline-flex items-center justify-center border border-[#e0ddd8] px-4 py-2 text-sm font-medium text-[#0f0f0f] transition-colors hover:bg-[#faf7f2]"
              >
                {c.reject}
              </button>
              <button
                type="button"
                onClick={() => setChoice('accepted')}
                className="inline-flex items-center justify-center bg-[#b8935a] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#a07e4a]"
              >
                {c.accept}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
