import { useState } from 'react'

const links = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'education', href: '#education' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold">
          faharia<span className="text-cyan">.</span>lami
        </a>

        <ul className="hidden gap-8 font-mono text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-cyan">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        
          href="#contact"
          className="hidden rounded-md border border-cyan/40 px-4 py-2 font-mono text-sm text-cyan transition hover:shadow-glowCyan md:block"
        >
          hire_me()
        </a>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-white/5 bg-surface px-6 py-6 font-mono text-sm md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}