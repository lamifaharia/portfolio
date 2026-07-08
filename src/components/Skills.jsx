const groups = [
  {
    label: 'frontend',
    color: 'text-cyan border-cyan/30',
    items: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Next.js', 'Tailwind CSS'],
  },
  {
    label: 'backend',
    color: 'text-magenta border-magenta/30',
    items: ['Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
  },
  {
    label: 'auth_and_tools',
    color: 'text-green border-green/30',
    items: ['Firebase', 'Redux', 'REST API', 'Git', 'GitHub', 'Vercel'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mt-2 font-mono  text-cyan tracking-widest text-2xl">Skills</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.label}
            className="rounded-xl border border-white/10 bg-surface p-6"
          >
            <p className={`font-mono text-sm ${g.color.split(' ')[0]}`}>
              {g.label}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className={`rounded-full border px-3 py-1 font-mono text-xs ${g.color}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}