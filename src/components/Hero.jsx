import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background halo + mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-32 gradient-mesh" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-[color:var(--color-surface)] border border-black/5 dark:border-white/5 rise" style={{animationDelay: '40ms'}}>
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] animate-pulse"></div>
            New: RAG pipelines with URL + PDF ingestion
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight fade-in" style={{animationDelay: '100ms'}}>
            Build Your AI FAQ Chatbot in Minutes
          </h1>
          <p className="text-lg text-[color:var(--color-text-secondary)] max-w-prose rise" style={{animationDelay: '160ms'}}>
            FAQSure lets you create Retrieval‑Augmented chatbots trained on your docs. Embed anywhere, answer instantly, and keep full control of your data.
          </p>
          <div className="flex flex-wrap gap-4 fade-in" style={{animationDelay: '220ms'}}>
            <a href="#signup" className="btn btn-primary">Get Started <ArrowRight className="ml-2" size={18} /></a>
            <a href="#demo" className="btn btn-secondary">View Demo <Play className="ml-2" size={18} /></a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-[color:var(--color-text-secondary)] rise" style={{animationDelay: '280ms'}}>
            <div><span className="font-semibold text-[color:var(--color-text)]">1k+</span> teams onboarded</div>
            <div><span className="font-semibold text-[color:var(--color-text)]">99.9%</span> uptime</div>
            <div><span className="font-semibold text-[color:var(--color-text)]">SOC2</span> compliant</div>
          </div>
        </div>
        <div className="relative fade-in" style={{animationDelay: '180ms'}}>
          <div className="absolute -inset-8 -z-10 opacity-30 blur-2xl" style={{background: 'radial-gradient(closest-side, var(--color-primary), transparent)'}}></div>
          <div className="card p-4 hover:shadow-[var(--shadow-lg)] transition-base">
            <div className="bg-[var(--color-bg)] rounded-md border border-black/5 dark:border-white/5 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-black/5 dark:border-white/5 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-auto text-xs text-[color:var(--color-text-secondary)]">chatbot.tsx</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-primary)]/15 grid place-items-center text-[var(--color-primary)] font-semibold">A</div>
                  <div className="flex-1">
                    <div className="text-sm">Ask me anything about your knowledge base</div>
                    <div className="mt-2 rounded-md bg-[var(--color-surface)] p-3 text-sm">How do I embed the widget on my site?</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-[var(--color-primary)] grid place-items-center text-white font-semibold">F</div>
                  <div className="flex-1">
                    <div className="rounded-md bg-[var(--color-primary)]/10 border border-black/5 dark:border-white/5 p-3 text-sm">
                      To embed the widget, include the script tag and add <code className="px-1 py-0.5 rounded bg-black/10 dark:bg-white/10">data-project-id</code> with your key. See docs →
                    </div>
                  </div>
                </div>
                <div className="text-xs text-[color:var(--color-text-secondary)]">Generated using RAG • Cited from 3 docs</div>
              </div>
            </div>
          </div>
          {/* Glow ring */}
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[20px]" style={{boxShadow: '0 0 120px 40px color-mix(in srgb, var(--color-primary) 18%, transparent)'}} />
        </div>
      </div>
    </section>
  )
}
