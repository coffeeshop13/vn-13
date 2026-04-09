'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { translations } = useLanguage()
  
  return (
    <nav aria-label="Breadcrumb" className="py-6 border-t" style={{ borderColor: '#e0ddd8' }}>
      <ol className="flex items-center gap-2 text-sm" style={{ color: '#6b6b6b' }}>
        <li>
          <Link 
            href="/" 
            className="transition-colors duration-200 hover:text-black"
          >
            {translations.navHome || 'Home'}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span style={{ color: '#ccc' }}>/</span>
            {item.href ? (
              <Link 
                href={item.href} 
                className="transition-colors duration-200 hover:text-black"
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: '#0f0f0f' }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
