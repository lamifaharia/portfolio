export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mt-2 font-display text-3xl font-semibold">About me</h2>

      <div className="mt-8 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <img
  src="/public/images/faharia_lami.jpeg"
  alt="Faharia Lami"
  className="aspect-square w-full rounded-xl border border-white/10 object-cover object-top"
  // ---------------------------------------------------
/>
        </div>
        <div className="md:col-span-2">
          <p className="text-muted leading-relaxed">
            I'm a full stack developer currently pursuing my BSc in CSE at
            Northern University Bangladesh. My work centers on React on the
            front end and Node.js, Express, and MongoDB on the back end —
            I enjoy taking a project from a rough requirement doc to a live,
            responsive product.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Along the way I've built everything from vanilla JS utility apps
            to Firebase-authenticated React platforms, and I'm currently
            deepening my TypeScript and MongoDB aggregation skills to write
            more type-safe, scalable code.
          </p>

          <div className="mt-6 flex items-center gap-2 font-mono text-sm text-green">
            <span className="h-2 w-2 rounded-full bg-green" />
            open to opportunities
          </div>
        </div>
      </div>
    </section>
  )
}