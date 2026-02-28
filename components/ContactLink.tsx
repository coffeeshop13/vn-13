'use client'

import { useState } from 'react'

interface ContactLinkProps {
  href: string
  label: string
}

export function ContactLink({ href, label }: ContactLinkProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      className="transition-colors duration-200"
      style={{ color: hovered ? '#b8935a' : '#0f0f0f' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  )
}
