import { aboutMe, personalInfo } from '../data/portfolioData'
import { MapPin, Heart, Zap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="section-title text-white">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 border border-indigo-500/10 hover:border-indigo-500/25 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <Zap size={18} className="text-indigo-400" />
                </div>
                <h3 className="font-display font-semibold text-white">My Journey</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">{aboutMe.journey}</p>
            </div>

            <div className="glass rounded-2xl p-6 border border-cyan-400/10 hover:border-cyan-400/25 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                  <Heart size={18} className="text-cyan-400" />
                </div>
                <h3 className="font-display font-semibold text-white">What I Love</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">{aboutMe.work}</p>
            </div>

            <div className="glass rounded-2xl p-6 border border-purple-500/10 hover:border-purple-500/25 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <MapPin size={18} className="text-purple-400" />
                </div>
                <h3 className="font-display font-semibold text-white">Beyond Code</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">{aboutMe.hobbies}</p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="glass rounded-2xl p-8 border border-indigo-500/10 mb-6">
              <h3 className="font-display font-semibold text-white mb-6 text-xl">Quick Facts</h3>
              <div className="space-y-4">
                {[
                  { label: 'Name', value: personalInfo.name },
                  { label: 'Role', value: personalInfo.designation },
                  { label: 'Location', value: personalInfo.location },
                  { label: 'Email', value: personalInfo.email },
                  { label: 'Status', value: 'Student & Open to Work' },
                  { label: 'Passion', value: 'Building impactful web apps' },
                ].map(item => (
                  <div key={item.label} className="flex gap-4 py-3 border-b border-indigo-500/10 last:border-0">
                    <span className="text-indigo-400 font-medium w-28 shrink-0 text-sm">{item.label}</span>
                    <span className="text-slate-300 text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '3+', label: 'Projects Built' },
                { value: '2+', label: 'Years Coding' },
                { value: '∞', label: 'Cups of Tea' },
              ].map(stat => (
                <div key={stat.label} className="glass rounded-xl p-4 border border-indigo-500/10 text-center hover:border-indigo-500/30 transition-all">
                  <p className="font-display font-bold text-2xl gradient-text">{stat.value}</p>
                  <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}