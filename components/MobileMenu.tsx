'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSelector from './LanguageSelector'

type HeaderNavLink = {
  key: string
  label: string
  href: string
}

/**
 * Pins the page while the menu is open. `overflow: hidden` alone does not stop
 * touch scrolling in iOS Safari, so the body is fixed at its offset and the
 * offset is restored on close (unless a menu link changed the page).
 */
function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return
    const { body, documentElement } = document
    const y = window.scrollY
    const path = window.location.pathname
    const prev = { position: body.style.position, top: body.style.top, left: body.style.left, right: body.style.right, overflow: body.style.overflow }
    const prevBehavior = documentElement.style.scrollBehavior
    body.style.position = 'fixed'
    body.style.top = `-${y}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.overflow = 'hidden'
    return () => {
      Object.assign(body.style, prev)
      // Restore instantly, not with the site's smooth scrolling
      documentElement.style.scrollBehavior = 'auto'
      window.scrollTo(0, window.location.pathname === path ? y : 0)
      documentElement.style.scrollBehavior = prevBehavior
    }
  }, [active])
}

export default function MobileMenu({ links }: { links: readonly HeaderNavLink[] }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const button = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLDivElement>(null)

  useScrollLock(menuOpen)
  // Close on navigation and when the viewport reaches the desktop layout (xl)
  useEffect(() => setMenuOpen(false), [pathname])
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)')
    const onChange = () => mq.matches && setMenuOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  // Escape closes; Tab stays inside the menu; focus returns to the menu button
  useEffect(() => {
    if (!menuOpen) return
    const path = window.location.pathname
    const trigger = button.current
    panel.current?.querySelector<HTMLElement>('button')?.focus({ preventScroll: true })
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return setMenuOpen(false)
      if (e.key !== 'Tab' || !panel.current) return
      const items = panel.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      // Focus can drop out of the panel when an element inside it unmounts (e.g. the
      // language dropdown closing); bring it back instead of letting Tab reach the page.
      if (!panel.current.contains(document.activeElement)) {
        e.preventDefault()
        ;(e.shiftKey ? last : first).focus()
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      if (window.location.pathname === path) trigger?.focus({ preventScroll: true })
    }
  }, [menuOpen])

  return (
    <>
      <button
        ref={button}
        type="button"
        className="xl:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(true)}
        aria-label="Открыть меню"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        <span className="block w-6 h-px bg-[#0f0f0f]" />
        <span className="block w-6 h-px bg-[#0f0f0f]" />
        <span className="block w-6 h-px bg-[#0f0f0f]" />
      </button>

      {/* Portalled to <body>: the header uses backdrop-filter, which would make it
          the containing block of this fixed overlay and squeeze it into the header row. */}
      {menuOpen &&
        createPortal(
          <div
            ref={panel}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Меню"
            className="xl:hidden fixed inset-0 z-[60] flex flex-col overflow-y-auto overscroll-contain bg-[#fafaf8]"
          >
            <div className="flex items-center justify-between border-b border-[#e0ddd8] px-6 py-4">
              <Link href="/" className="text-xl font-semibold uppercase tracking-[0.25em] text-[#0f0f0f]" onClick={() => setMenuOpen(false)}>
                VN13
              </Link>
              <button
                type="button"
                className="relative h-10 w-10"
                onClick={() => setMenuOpen(false)}
                aria-label="Закрыть меню"
              >
                <span className="absolute left-2 top-1/2 block h-px w-6 rotate-45 bg-[#0f0f0f]" />
                <span className="absolute left-2 top-1/2 block h-px w-6 -rotate-45 bg-[#0f0f0f]" />
              </button>
            </div>
            <nav className="flex flex-col gap-5 px-6 py-8">
              {links.map(link => (
                <Link key={link.key} href={link.href} onClick={() => setMenuOpen(false)} className="text-2xl text-[#1d1b18]">
                  {link.label}
                </Link>
              ))}
              <a href="tel:+79266022089" className="mt-2 inline-flex min-h-[52px] items-center justify-center rounded-sm bg-[#1d1b18] px-5 text-base font-medium text-white" style={{ color: '#fff' }}>
                Позвонить: +7 926 602-20-89
              </a>
              <div className="border-t border-[#e0ddd8] pt-5">
                <LanguageSelector />
              </div>
            </nav>
          </div>,
          document.body,
        )}
    </>
  )
}
