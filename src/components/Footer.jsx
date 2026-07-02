export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Faharia Lami. All rights reserved.</p>
        <p>built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}