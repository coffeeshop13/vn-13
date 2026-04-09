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
  
  // Build structured data for breadcrumbs
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: translations.navHome || 'Home',
        item: 'https://vn-13.com'
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href && { item: `https://vn-13.com${item.href}` })
      }))
    ]
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav 
        aria-label="Breadcrumb" 
        className="py-6 border-t" 
        style={{ borderColor: '#e0ddd8' }}
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol className="flex items-center gap-2 text-sm" style={{ color: '#6b6b6b' }}>
          <li 
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <Link 
              href="/" 
              className="transition-colors duration-200 hover:text-black"
              itemProp="item"
            >
              <span itemProp="name">{translations.navHome || 'Home'}</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {items.map((item, index) => (
            <li 
              key={index} 
              className="flex items-center gap-2"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <span style={{ color: '#ccc' }} aria-hidden="true">/</span>
              {item.href ? (
                <Link 
                  href={item.href} 
                  className="transition-colors duration-200 hover:text-black"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span itemProp="name" style={{ color: '#0f0f0f' }}>{item.label}</span>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
