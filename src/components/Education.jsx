import { education } from '../data/portfolioData'
import { GraduationCap, Calendar } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">My background</p>
          <h2 className="section-title text-white">Education</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="relative sm:pl-16">
                {/* Dot */}
                <div className="absolute left-3 top-6 w-5 h-5 rounded-full border-2 border-indigo-500 bg-navy-900 hidden sm:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                </div>

                <div className="glass rounded-2xl p-6 border border-indigo-500/10 hover:border-indigo-500/25 transition-all duration-300 hover:translate-x-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap size={16} className="text-indigo-400" />
                        <h3 className="font-display font-semibold text-white">{edu.degree}</h3>
                      </div>
                      <p className="text-indigo-400 text-sm font-medium">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 glass rounded-full border border-indigo-500/20">
                      <Calendar size={12} className="text-slate-400" />
                      <span className="text-slate-400 text-xs">{edu.duration}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}