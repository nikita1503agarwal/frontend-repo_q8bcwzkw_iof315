import { Puzzle, ShieldCheck, Gauge, GitBranch } from 'lucide-react'

const items = [
  {
    icon: Puzzle,
    title: 'RAG Pipelines',
    desc: 'Mix URL, PDF, and sitemap ingestion with automatic chunking and embeddings.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    desc: 'Row‑level permissions, encryption at rest, and SSO for enterprises.'
  },
  {
    icon: Gauge,
    title: 'Fast Answers',
    desc: 'Streaming responses with citations and real‑time feedback collection.'
  },
  {
    icon: GitBranch,
    title: 'Developer Friendly',
    desc: 'SDKs, web component, and REST API. Ship in hours, not weeks.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Everything you need to launch</h2>
          <p className="mt-3 text-[color:var(--color-text-secondary)]">A complete toolkit for building and managing your AI FAQ assistant—without changing your stack.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon: Icon, title, desc}) => (
            <div key={title} className="card p-6 hover:shadow-[var(--shadow-md)] transition-shadow">
              <div className="h-10 w-10 rounded-md grid place-items-center bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-[color:var(--color-text-secondary)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
