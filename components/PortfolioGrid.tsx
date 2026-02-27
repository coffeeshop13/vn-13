'use client'

import { useState } from 'react'

const portfolioItems = [
  { id: 1, title: 'French Couture', region: 'france', image: '1' },
  { id: 2, title: 'Italian Heritage', region: 'italy', image: '2' },
  { id: 3, title: 'Tokyo Modern', region: 'japan', image: '3' },
  { id: 4, title: 'Paris Elegance', region: 'france', image: '4' },
  { id: 5, title: 'Milan Classic', region: 'italy', image: '5' },
  { id: 6, title: 'Osaka Contemporary', region: 'japan', image: '6' },
]

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.region === activeFilter)

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 sm:px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light mb-12">Portfolio</h2>
        
        <div className="flex gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 text-sm transition ${activeFilter === 'all' ? 'bg-foreground text-background' : 'border border-border hover:border-foreground'}`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('france')}
            className={`px-6 py-2 text-sm transition ${activeFilter === 'france' ? 'bg-foreground text-background' : 'border border-border hover:border-foreground'}`}
          >
            France
          </button>
          <button
            onClick={() => setActiveFilter('italy')}
            className={`px-6 py-2 text-sm transition ${activeFilter === 'italy' ? 'bg-foreground text-background' : 'border border-border hover:border-foreground'}`}
          >
            Italy
          </button>
          <button
            onClick={() => setActiveFilter('japan')}
            className={`px-6 py-2 text-sm transition ${activeFilter === 'japan' ? 'bg-foreground text-background' : 'border border-border hover:border-foreground'}`}
          >
            Japan
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-accent-light aspect-square mb-4 overflow-hidden hover:opacity-80 transition flex items-center justify-center text-text-secondary">
                <span className="text-lg">{item.title}</span>
              </div>
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-text-secondary">{item.region.charAt(0).toUpperCase() + item.region.slice(1)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
