'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function Footer() {
  const { translations } = useLanguage()

  return (
    <footer style={{ backgroundColor: '#0f0f0f', borderTop: '1px solid #1f1f1f' }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-2xl font-semibold tracking-[0.16em] uppercase" style={{ color: '#fff' }}>VN13</p>
            <p className="mt-3 max-w-sm text-base leading-relaxed" style={{ color: '#cbc4ba' }}>Дизайнерская женская одежда, европейские бренды и сотрудничество с бутиками.</p>
          </div>
          <div>
            <p className="text-base font-medium" style={{ color: '#d7b982' }}>Разделы</p>
            <div className="mt-3 grid gap-2 text-base" style={{ color: '#e7e1d8' }}>
              <Link href="/vn-13-brand">Каталог VN-13</Link>
              <Link href="/brands">Другие бренды</Link>
              <Link href="/zhenskaya-odezhda-dlya-butikov">Для бутиков</Link>
              <Link href="/journal">Новости</Link>
            </div>
          </div>
          <div>
            <p className="text-base font-medium" style={{ color: '#d7b982' }}>Связь</p>
            <div className="mt-3 grid gap-2 text-base" style={{ color: '#e7e1d8' }}>
              <a href="tel:+79266022089">+7 926 602-20-89</a>
              <a href="mailto:info@vn-13.com">info@vn-13.com</a>
              <a href="https://t.me/vn13agency">Telegram @vn13agency</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-5" style={{ borderTop: '1px solid #403b34' }}>
          <p className="text-base" style={{ color: '#a8a096' }}>&copy; {translations.footerCopyright}</p>
        </div>
      </div>
    </footer>
  )
}
