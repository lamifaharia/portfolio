import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <p className="section-label text-magenta">// 03_projects</p>
      <h2 className="mt-2 font-display text-3xl font-semibold">
        Selected projects
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}