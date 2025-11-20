const testimonials = [
  {
    quote: 'We replaced a 200‑article help center with a single chatbot. Support tickets dropped 34% in a month.',
    author: 'Amelia, Head of CX at Luma',
  },
  {
    quote: 'Integration took an afternoon. The widget looks native and answers are fast and accurate.',
    author: 'Rafael, CTO at Northwind',
  },
  {
    quote: 'The analytics told us exactly which docs were missing. Huge time saver for our team.',
    author: 'Priya, PM at Atlas',
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Loved by product and support teams</h2>
          <p className="mt-3 text-[color:var(--color-text-secondary)]">Real stories from teams shipping better help experiences with FAQSure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-6">
              <p className="text-lg leading-relaxed">“{t.quote}”</p>
              <div className="mt-4 text-sm text-[color:var(--color-text-secondary)]">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
