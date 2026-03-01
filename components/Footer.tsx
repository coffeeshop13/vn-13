'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function Footer() {
  const { translations } = useLanguage()

  const footerLinks = [
    { label: translations.navStory, href: '#story' },
    { label: translations.navPortfolio, href: '#portfolio' },
    { label: translations.navContact, href: '#contact' },
  ]

  const partnerLinks = [
    { label: translations.footerRetailers, href: '#contact' },
    { label: translations.footerBrands, href: '#contact' },
  ]

  const socialLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ]

  return (
    <footer style={{ backgroundColor: '#0f0f0f', borderTop: '1px solid #1f1f1f' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#fff' }}>VN13</p>
            <p className="text-sm leading-relaxed" style={{ color: '#6b6b6b' }}>
              {translations.footerAbout}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: '#b8935a' }}>{translations.footerCompany}</p>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors duration-200" style={{ color: '#999' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#999')}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: '#b8935a' }}>{translations.footerPartnership}</p>
            <ul className="space-y-3">
              {partnerLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors duration-200" style={{ color: '#999' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#999')}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: '#b8935a' }}>{translations.footerSocial}</p>
            <ul className="space-y-3">
              {socialLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-colors duration-200" style={{ color: '#999' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#999')}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid #1f1f1f' }}>
          <p className="text-xs" style={{ color: '#555' }}>&copy; {translations.footerCopyright}</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs transition-colors duration-200" style={{ color: '#555' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#999')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555')}>{translations.footerPrivacy}</a>
            <a href="#" className="text-xs transition-colors duration-200" style={{ color: '#555' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#999')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555')}>{translations.footerCookies}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
