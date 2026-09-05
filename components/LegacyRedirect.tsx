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
    <>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${destination}`} />
        <link rel="canonical" href={`https://vn-13.com${destination}`} />
      </head>
    <main className="min-h-screen px-6 py-32">
      <p className="text-base">Страница перенесена: {label}</p>
      <p className="mt-4 text-base">
        <a className="underline" href={destination}>Перейти на актуальную страницу</a>
      </p>
    </main>
    </>
  )
}
