const tiers = [
  {
    name: 'Basic',
    price: 'Free',
    cta: 'Get Started',
    features: ['1 project', '100 queries/mo', 'Community support']
  },
  {
    name: 'Pro',
    highlight: true,
    price: '$29/mo',
    cta: 'Start Pro',
    features: ['Unlimited projects', '50k queries/mo', 'Priority email']
  },
  {
    name: 'Enterprise',
    price: 'Talk to us',
    cta: 'Contact Sales',
    features: ['SLA + SSO', 'On‑prem options', 'Dedicated support']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-[color:var(--color-text-secondary)]">Start free. Upgrade as you grow. Cancel anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.name} className={`card p-6 ${t.highlight ? 'ring-2 ring-[var(--color-primary)]' : ''}`}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{t.name}</h3>
                {t.highlight && <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">Popular</span>}
              </div>
              <div className="text-3xl font-semibold mb-4">{t.price}</div>
              <ul className="space-y-2 text-sm text-[color:var(--color-text-secondary)] mb-6">
                {t.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <a href="#signup" className={`btn w-full ${t.highlight ? 'btn-primary' : 'btn-secondary'}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
