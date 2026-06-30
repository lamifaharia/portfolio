import { personalInfo } from '../data/portfolioData'
import { Code2, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-indigo-500/10 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
            <Code2 size={14} className="text-indigo-400" />
          </div>
          <span className="font-display font-semibold gradient-text">{personalInfo.name}</span>
        </a>

        <p className="text-slate-500 text-sm flex items-center gap-1.5">
          Built with <Heart size={13} className="text-indigo-400 fill-indigo-400" /> using React & Tailwind CSS
        </p>

        <p className="text-slate-600 text-xs">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}