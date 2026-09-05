'use client'

import { useState } from 'react'
import Link from 'next/link'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const navLinks = [
    { key: 'brand', label: 'Каталог VN-13', href: '/vn-13-brand' },
    { key: 'brands', label: 'Другие бренды', href: '/brands' },
    { key: 'boutiques', label: 'Для бутиков', href: '/zhenskaya-odezhda-dlya-butikov' },
    { key: 'journal', label: 'Новости', href: '/journal' },
    { key: 'contact', label: 'Контакты', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #e3ddd3' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-semibold tracking-[0.2em] uppercase" style={{ color: '#0f0f0f', letterSpacing: '0.25em' }}>
          VN13
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.key}
              href={link.href}
              className="text-base transition-colors duration-200"
              style={{ color: hoveredLink === link.key ? '#8a6b3f' : '#4e4942' }}
              onMouseEnter={() => setHoveredLink(link.key)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a href="tel:+79266022089" className="inline-flex min-h-11 items-center rounded-sm bg-[#1d1b18] px-4 text-base font-medium text-white">
            Позвонить
          </a>
          <LanguageSelector />
        </div>

        <button
          className="xl:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px" style={{ backgroundColor: '#0f0f0f', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none' }} />
          <span className="block w-6 h-px" style={{ backgroundColor: '#0f0f0f', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span className="block w-6 h-px" style={{ backgroundColor: '#0f0f0f', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {menuOpen && (
        <div className="xl:hidden border-t" style={{ borderColor: '#e0ddd8', backgroundColor: '#fafaf8' }}>
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map(link => (
              <a key={link.key} href={link.href} onClick={() => setMenuOpen(false)} className="text-lg" style={{ color: '#1d1b18' }}>
                {link.label}
              </a>
            ))}
            <a href="tel:+79266022089" className="inline-flex min-h-[52px] items-center justify-center rounded-sm bg-[#1d1b18] px-5 text-base font-medium text-white">
              Позвонить: +7 926 602-20-89
            </a>
            <div className="pt-4 border-t" style={{ borderColor: '#e0ddd8' }}>
              <LanguageSelector />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
