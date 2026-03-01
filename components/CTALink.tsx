'use client'

import { useState } from 'react'

interface CTALinkProps {
  href: string
  children: React.ReactNode
}

export function CTALink({ href, children }: CTALinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={href}
      className="inline-block px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-200"
      style={{
        backgroundColor: isHovered ? '#b8935a' : '#0f0f0f',
        color: '#fff',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  )
}
