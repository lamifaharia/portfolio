import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/portfolioData'

const categoryColors = {
  Frontend: { accent: 'indigo', bar: 'from-indigo-500 to-indigo-400' },
  Backend: { accent: 'cyan', bar: 'from-cyan-500 to-cyan-400' },
  Tools: { accent: 'purple', bar: 'from-purple-500 to-purple-400' },
}

export default function Skills() {
  const sectionRef = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !animated) setAnimated(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [animated])

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="section-title text-white">My Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => {
            const colors = categoryColors[category] || categoryColors.Frontend
            return (
              <div key={category} className="glass rounded-2xl p-6 border border-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${colors.bar}`} />
                  <h3 className="font-display font-semibold text-white text-lg">{category}</h3>
                </div>
                <div className="space-y-5">
                  {skillList.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-xs font-mono">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className={`skill-bar-fill bg-gradient-to-r ${colors.bar}`}
                          style={{
                            width: animated ? `${skill.level}%` : '0%',
                            transition: 'width 1.2s ease',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech Logos Marquee */}
        <div className="mt-16 overflow-hidden">
          <p className="text-center text-slate-500 text-sm mb-6 tracking-widest uppercase">Technologies I Use</p>
          <div className="flex gap-4 flex-wrap justify-center">
            {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'Git', 'JavaScript', 'HTML5', 'CSS3', 'VS Code', 'Figma', 'REST API'].map(tech => (
              <span key={tech} className="px-4 py-2 glass border border-indigo-500/10 rounded-full text-slate-400 text-sm hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-300 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}