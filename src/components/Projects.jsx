import { Link } from 'react-router-dom'
import { projects } from '../data/portfolioData'
import { ExternalLink, ArrowRight } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="section-title text-white">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-1">
                  {project.tech.slice(0, 2).map(t => (
                    <span key={t} className="px-2 py-0.5 glass text-xs text-indigo-300 rounded-full border border-indigo-500/30">{t}</span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-white mb-2 text-lg">{project.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{project.shortDesc}</p>

                <div className="flex gap-3">
                  <Link
                    to={`/project/${project.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 hover:border-indigo-500/60 text-indigo-400 hover:text-indigo-300 rounded-xl text-sm font-medium transition-all duration-300"
                  >
                    View Details
                    <ArrowRight size={14} />
                  </Link>
                  
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 inline-flex items-center justify-center glass border border-indigo-500/20 hover:border-cyan-400/40 text-slate-400 hover:text-cyan-400 rounded-xl transition-all duration-300"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}