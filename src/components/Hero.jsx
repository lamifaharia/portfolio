import { useEffect, useState } from 'react'

const fullText = `const developer = {
  name: 'Faharia Lami',
  role: 'Full Stack Developer',
  stack: ['React', 'Node.js', 'MongoDB'],
  location: 'Dhaka, Bangladesh',
  status: 'open to opportunities'
};`

export default function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0

    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i))
      i++

      if (i > fullText.length) {
        clearInterval(interval)
      }
    }, 12)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-20 pb-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="section-label mb-4 text-magenta"></p>

          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Building clean, full-stack
            <span className="text-cyan"> web experiences.</span>
          </h1>

          <p className="mt-5 max-w-md text-muted">
            I'm Faharia Lami, a full stack developer crafting responsive
            interfaces and the APIs that power them, from React front ends to
            Node/MongoDB back ends.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-cyan px-5 py-3 font-mono text-sm font-medium text-bg transition hover:shadow-glowCyan"
            >
              view_projects()
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Resume - Lami.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/15 px-5 py-3 font-mono text-sm text-ink transition hover:border-magenta hover:text-magenta"
            >
              view_resume()
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-surface p-5 shadow-2xl">
          <div className="mb-4 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-magenta/70" />
            <span className="h-3 w-3 rounded-full bg-cyan/70" />
            <span className="h-3 w-3 rounded-full bg-green/70" />
          </div>

          <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-ink">
            <code>
              {typed}
              <span className="cursor" />
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}