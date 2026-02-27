'use client'

import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(250,250,248,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #e0ddd8' }}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-[0.2em] uppercase" style={{ color: '#0f0f0f', letterSpacing: '0.25em' }}>
          VN13
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { key: 'story', label: 'Наша история', href: '#story' },
            { key: 'portfolio', label: 'Портфолио', href: '#portfolio' },
            { key: 'contact', label: 'Контакты', href: '#contact' },
          ].map(link => (
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
            <a href="#story" onClick={() => setMenuOpen(false)} className="text-sm tracking-wide" style={{ color: '#0f0f0f' }}>Наша история</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)} className="text-sm tracking-wide" style={{ color: '#0f0f0f' }}>Портфолио</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm tracking-wide" style={{ color: '#0f0f0f' }}>Контакты</a>
          </nav>
        </div>
      )}
    </header>
  )
}
