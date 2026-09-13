'use client'

import { useState } from 'react'
import Link from 'next/link'
import LanguageSelector from './LanguageSelector'

type HeaderNavLink = {
  key: string
  label: string
  href: string
}

export default function MobileMenu({ links }: { links: readonly HeaderNavLink[] }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button
        className="xl:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        <span className="block w-6 h-px" style={{ backgroundColor: '#0f0f0f', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none' }} />
        <span className="block w-6 h-px" style={{ backgroundColor: '#0f0f0f', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
        <span className="block w-6 h-px" style={{ backgroundColor: '#0f0f0f', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none' }} />
      </button>

      {menuOpen && (
        <div id="mobile-navigation" className="xl:hidden border-t" style={{ borderColor: '#e0ddd8', backgroundColor: '#fafaf8' }}>
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map(link => (
              <Link key={link.key} href={link.href} onClick={() => setMenuOpen(false)} className="text-lg" style={{ color: '#1d1b18' }}>
                {link.label}
              </Link>
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
    </>
  )
}
