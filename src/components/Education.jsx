const timeline = [
  { period: '2022 – 2026', title: 'BSc in CSE', place: 'Northern University Bangladesh', status: 'in progress' },
  { period: '2018 – 2020', title: 'HSC in Science', place: "Central Women's College" },
  { period: '2017 – 2018', title: 'SSC in Science', place: 'Gouripur SA High School' },
]

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <p className="section-label text-magenta">// 04_education</p>
      <h2 className="mt-2 font-display text-3xl font-semibold">Education</h2>

      <ol className="mt-8 space-y-6 border-l border-white/10 pl-6">
        {timeline.map((t) => (
          <li key={t.title} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan" />
            <p className="font-mono text-xs text-muted">
              {t.period}
              {t.status && <span className="ml-2 text-green">· {t.status}</span>}
            </p>
            <p className="mt-1 font-display text-lg font-medium">{t.title}</p>
            <p className="text-sm text-muted">{t.place}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}