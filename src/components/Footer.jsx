export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-[1200px] px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-6 rounded bg-[var(--color-primary)]"></div>
            <span className="font-semibold">FAQSure</span>
          </div>
          <p className="text-[color:var(--color-text-secondary)]">RAG‑powered chatbots for modern product teams.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Product</div>
          <ul className="space-y-2 text-[color:var(--color-text-secondary)]">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#docs">Docs</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Company</div>
          <ul className="space-y-2 text-[color:var(--color-text-secondary)]">
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Legal</div>
          <ul className="space-y-2 text-[color:var(--color-text-secondary)]">
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-[color:var(--color-text-secondary)]">© {year} FAQSure. All rights reserved.</div>
    </footer>
  )
}
