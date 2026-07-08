const timeline = [
  {
    period: "2022 – 2026",
    title: "Bachelor of Science in Computer Science & Engineering",
    place: "Northern University Bangladesh",
    status: "In Progress",
  },
  {
    period: "2018 – 2020",
    title: "Higher Secondary Certificate (Science)",
    place: "Central Women's College",
  },
  {
    period: "2017 – 2018",
    title: "Secondary School Certificate (Science)",
    place: "Gouripur S.A. High School",
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14">
        <p className="font-mono text-cyan text-sm tracking-widest uppercase">
          Education
        </p>

        

        <p className="mt-3 max-w-2xl text-muted leading-7">
          My educational background that shaped my foundation in Computer
          Science and strengthened my passion for software engineering.
        </p>
      </div>

      <div className="space-y-6">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-cyan/50 hover:bg-white/[0.05] hover:-translate-y-1"
          >
            <div className="grid md:grid-cols-[180px_1fr]">
              {/* Left */}

              <div className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
                <p className="font-mono text-sm text-cyan">
                  {item.period}
                </p>

                {item.status && (
                  <span className="mt-3 inline-flex rounded-full border border-green/30 bg-green/10 px-3 py-1 text-xs font-medium text-green">
                    {item.status}
                  </span>
                )}
              </div>

              {/* Right */}

              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold transition-colors group-hover:text-cyan">
                  {item.title}
                </h3>

                <p className="mt-2 text-muted text-lg">
                  {item.place}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}