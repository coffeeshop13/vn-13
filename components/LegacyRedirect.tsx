'use client'

import { useEffect } from 'react'

type LegacyRedirectProps = {
  destination: string
  label: string
}

export default function LegacyRedirect({ destination, label }: LegacyRedirectProps) {
  useEffect(() => {
    window.location.replace(destination)
  }, [destination])

  return (
    <main className="min-h-screen px-6 py-32">
      <p className="text-base">Страница перенесена: {label}</p>
      <p className="mt-4 text-base">
        <a className="underline" href={destination}>Перейти на актуальную страницу</a>
      </p>
    </main>
  )
}
