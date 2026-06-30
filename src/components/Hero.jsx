import { useEffect, useRef } from 'react'
import * as Icons from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolioData'

// We use the Icons object to map names to the components safely
const iconMap = { 
  github: Icons.Github, 
  linkedin: Icons.Linkedin, 
  twitter: Icons.Twitter, 
  facebook: Icons.Facebook 
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    let animId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99,102,241,${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', handleResize) }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-indigo-500/20 text-xs text-indigo-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-4">
              Hi, I'm <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-indigo-500" />
              <p className="font-display text-lg text-indigo-400 font-medium">{personalInfo.designation}</p>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              {personalInfo.tagline} I build fast, accessible, and beautiful web applications from Dhaka, Bangladesh.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={personalInfo.resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 glow hover:scale-105"
              >
                <Icons.Download size={18} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 glass border border-indigo-500/30 hover:border-indigo-500/60 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-sm">Find me on</span>
              <div className="flex gap-3">
                {socialLinks.map(s => {
                  const Icon = iconMap[s.icon]
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="w-9 h-9 glass border border-indigo-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 hover:scale-110"
                    >
                      {Icon && <Icon size={16} />}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glow animate-float border border-indigo-500/20">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-6 glass border border-indigo-500/20 rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs text-slate-400 mb-0.5">Currently</p>
                <p className="text-sm font-semibold text-white">Learning & Building 🚀</p>
              </div>
              <div className="absolute -top-4 -right-4 glass border border-cyan-400/20 rounded-xl px-4 py-3 shadow-lg">
                <p className="text-xs text-cyan-400 font-semibold">3+ Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="flex justify-center mt-16 pb-8">
          <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors group">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <Icons.ArrowDown size={18} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}