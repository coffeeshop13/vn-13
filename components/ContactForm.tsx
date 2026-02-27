'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 border-t border-border">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light mb-12">Get in Touch</h2>
        
        {submitted ? (
          <div className="text-center py-12 bg-accent-light/20 px-6 rounded">
            <p className="text-lg">Thank you for your message. We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-foreground text-background hover:bg-accent transition font-medium text-sm"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
