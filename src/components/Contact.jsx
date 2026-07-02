import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'lamifaharia@gmail.com'

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <p className="section-label text-magenta">// 05_contact</p>
      <h2 className="mt-2 font-display text-3xl font-semibold">
        Let's build something
      </h2>
      <p className="mt-3 max-w-md text-muted">
        Open to full stack roles and freelance work. Reach out any time.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-surface p-6">
          <p className="font-mono text-xs text-cyan">email</p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="text-sm">{email}</p>
            <button
              onClick={copyEmail}
              className="rounded-md border border-white/15 px-3 py-1 font-mono text-xs transition hover:border-cyan hover:text-cyan"
            >
              {copied ? 'copied' : 'copy'}
            </button>
          </div>

          <p className="mt-5 font-mono text-xs text-magenta">phone</p>
          <p className="mt-2 text-sm">+880 1576657143</p>

          <p className="mt-5 font-mono text-xs text-green">whatsapp</p>
          <p className="mt-2 text-sm">+880 1682575636</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-surface p-6">
          <p className="font-mono text-xs text-muted">socials</p>
          <div className="mt-4 flex flex-col gap-3 font-mono text-sm">
            
              href="https://github.com/lamifaharia"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan"
            >
              github.com/lamifaharia ↗
            </a>
            
              href="https://linkedin.com/in/faharialami"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-magenta"
            >
              linkedin.com/in/faharialami ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}