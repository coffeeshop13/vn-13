'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  const { translations } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const navLinks = [
    { key: 'story', label: translations.navStory, href: '/#story' },
    { key: 'brand', label: 'VN-13 / Каталог', href: '/vn-13-brand' },
    { key: 'journal', label: 'Журнал', href: '/journal' },
    { key: 'brands', label: translations.navBrands, href: '/brands' },
    { key: 'portfolio', label: translations.navPortfolio, href: '/#portfolio' },
    { key: 'sustainability', label: translations.navSustainability, href: '/sustainability' },
    { key: 'preorder', label: translations.navPreorder, href: '/preorder' },
    { key: 'manufacturing', label: translations.navManufacturing, href: '/manufacturing' },
    { key: 'contact', label: translations.navContact, href: '/#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(250,250,248,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #e0ddd8' }}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-[0.2em] uppercase" style={{ color: '#0f0f0f', letterSpacing: '0.25em' }}>
          VN13
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm tracking-wide transition-colors duration-200"
              style={{ color: hoveredLink === link.key ? '#b8935a' : '#6b6b6b' }}
              onMouseEnter={() => setHoveredLink(link.key)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector />
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px" style={{ backgroundColor: '#0f0f0f', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none' }} />
          <span className="block w-6 h-px" style={{ backgroundColor: '#0f0f0f', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span className="block w-6 h-px" style={{ backgroundColor: '#0f0f0f', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t" style={{ borderColor: '#e0ddd8', backgroundColor: '#fafaf8' }}>
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map(link => (
              <a key={link.key} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm tracking-wide" style={{ color: '#0f0f0f' }}>
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t" style={{ borderColor: '#e0ddd8' }}>
              <LanguageSelector />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
