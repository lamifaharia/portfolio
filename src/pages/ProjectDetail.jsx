import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/portfolioData'
import * as Icons from 'lucide-react'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Project not found.</p>
          <Link to="/" className="text-indigo-400 hover:underline">← Go Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-navy-900 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link to="/#projects" className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors mb-10 group">
          <Icons.ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden h-72 sm:h-96 mb-8 border border-indigo-500/10">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        </div>

        {/* Title + Links */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-2">{project.name}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 glass border border-indigo-500/20 text-indigo-300 text-xs rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 glass border border-indigo-500/20 hover:border-indigo-500/50 text-slate-300 hover:text-white rounded-xl text-sm transition-all"
            >
              <Icons.Github size={15} />
              GitHub
            </a>
            
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-sm font-medium transition-all"
            >
              <Icons.ExternalLink size={15} />
              Live Demo
            </a>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {[
            {
              icon: Icons.Layers,
              title: 'Project Overview',
              content: project.description,
            },
            {
              icon: Icons.AlertTriangle,
              title: 'Challenges Faced',
              content: project.challenges,
            },
            {
              icon: Icons.Lightbulb,
              title: 'Future Improvements',
              content: project.improvements,
            },
          ].map(section => (
            <div key={section.title} className="glass rounded-2xl p-6 border border-indigo-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                  <section.icon size={16} className="text-indigo-400" />
                </div>
                <h2 className="font-display font-semibold text-white text-lg">{section.title}</h2>
              </div>
              <p className="text-slate-400 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-12 pt-8 border-t border-indigo-500/10">
          <p className="text-slate-500 text-sm mb-4">Explore other projects</p>
          <div className="flex flex-wrap gap-3">
            {projects.filter(p => p.id !== id).map(p => (
              <Link
                key={p.id}
                to={`/project/${p.id}`}
                className="px-4 py-2 glass border border-indigo-500/20 hover:border-indigo-500/50 text-slate-300 hover:text-white rounded-xl text-sm transition-all"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}