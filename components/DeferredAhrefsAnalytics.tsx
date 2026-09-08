'use client'

import { useEffect } from 'react'

const SCRIPT_ID = 'ahrefs-analytics'

export default function DeferredAhrefsAnalytics() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (document.getElementById(SCRIPT_ID)) return

      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.src = 'https://analytics.ahrefs.com/analytics.js'
      script.async = true
      script.dataset.key = 'mDPfeqj8ml95p5yYpS/6bQ'
      document.head.appendChild(script)
    }, 4000)

    return () => window.clearTimeout(timer)
  }, [])

  return null
}
