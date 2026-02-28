export function ContentSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-20 md:py-32 px-6" style={{ backgroundColor: '#fff', borderTop: '1px solid #e0ddd8' }}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
