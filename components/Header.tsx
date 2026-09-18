import Link from 'next/link'
import LanguageSelector from './LanguageSelector'
import MobileMenu from './MobileMenu'

export default function Header() {
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
            <Link
              key={link.key}
              href={link.href}
              className="text-base text-[#4e4942] transition-colors duration-200 hover:text-[#8a6b3f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a href="tel:+79266022089" className="inline-flex min-h-11 items-center rounded-sm bg-[#1d1b18] px-4 text-base font-medium text-white" style={{ color: '#fff' }}>
            Позвонить
          </a>
          <LanguageSelector />
        </div>

        <MobileMenu links={navLinks} />
      </div>
    </header>
  )
}
