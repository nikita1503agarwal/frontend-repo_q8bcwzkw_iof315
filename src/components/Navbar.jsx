import { useEffect, useState } from 'react'
import { Menu, Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const saved = localStorage.getItem('theme')
    const shouldDark = saved ? saved === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', shouldDark)
    setIsDark(shouldDark)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setIsDark(next)
  }

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-[var(--color-primary)]"></div>
            <span className="font-semibold tracking-tight">FAQSure</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[color:var(--color-text-secondary)]">
            <a href="#features" className="hover:text-[color:var(--color-text)]">Features</a>
            <a href="#pricing" className="hover:text-[color:var(--color-text)]">Pricing</a>
            <a href="#testimonials" className="hover:text-[color:var(--color-text)]">Testimonials</a>
            <a href="#docs" className="hover:text-[color:var(--color-text)]">Docs</a>
          </nav>

          <div className="flex items-center gap-3">
            <button aria-label="Toggle theme" onClick={toggleTheme} className="btn btn-secondary px-3 py-2">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#signup" className="btn btn-primary hidden md:inline-flex">Login</a>
            <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Menu"><Menu size={22} /></button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 text-[color:var(--color-text-secondary)]">
            <div className="flex flex-col gap-3">
              <a href="#features" className="hover:text-[color:var(--color-text)]">Features</a>
              <a href="#pricing" className="hover:text-[color:var(--color-text)]">Pricing</a>
              <a href="#testimonials" className="hover:text-[color:var(--color-text)]">Testimonials</a>
              <a href="#docs" className="hover:text-[color:var(--color-text)]">Docs</a>
              <a href="#signup" className="btn btn-primary">Login</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
