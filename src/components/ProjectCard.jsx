const accentMap = {
  cyan: { border: 'hover:border-cyan/50', text: 'text-cyan', glow: 'hover:shadow-glowCyan' },
  magenta: { border: 'hover:border-magenta/50', text: 'text-magenta', glow: 'hover:shadow-glowMagenta' },
  green: { border: 'hover:border-green/50', text: 'text-green', glow: '' },
}

export default function ProjectCard({ project }) {
  const a = accentMap[project.accent]

  return (
    <div
      className={`rounded-xl border border-white/10 bg-surface p-6 transition ${a.border} ${a.glow}`}
    >
      <p className={`font-mono text-xs ${a.text}`}>{project.tag}</p>
      <h3 className="mt-2 font-display text-xl font-semibold">
        {project.name}
      </h3>
      <p className="mt-3 text-sm text-muted leading-relaxed">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[11px] text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 font-mono text-sm">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`${a.text} underline-offset-4 hover:underline`}
          >
            live_site ↗
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            source ↗
          </a>
        )}
      </div>
    </div>
  )
}