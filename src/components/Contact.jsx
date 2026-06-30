import * as Icons from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolioData'

// We map the string keys to the icons from the imported namespace
const iconMap = { 
  github: Icons.Github, 
  linkedin: Icons.Linkedin, 
  twitter: Icons.Twitter, 
  facebook: Icons.Facebook 
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">Let's talk</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-lg mx-auto">I'm currently open to internship opportunities, collaborations, and freelance projects. Feel free to reach out!</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            { icon: Icons.Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'indigo' },
            { icon: Icons.Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: 'cyan' },
            { icon: Icons.MessageCircle, label: 'WhatsApp', value: personalInfo.whatsapp, href: `https://wa.me/${personalInfo.whatsapp.replace(/\D/g, '')}`, color: 'green' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === 'WhatsApp' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-all`}>
                <item.icon size={20} className="text-indigo-400" />
              </div>
              <p className="text-slate-500 text-xs mb-1">{item.label}</p>
              <p className="text-white text-sm font-medium break-all">{item.value}</p>
            </a>
          ))}
        </div>

        {/* Location + Socials */}
        <div className="glass rounded-2xl p-8 border border-indigo-500/10 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-400 mb-6">
            <Icons.MapPin size={16} className="text-indigo-400" />
            <span>{personalInfo.location}</span>
          </div>
          <p className="text-slate-500 text-sm mb-4">Also find me on</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map(s => {
              const Icon = iconMap[s.icon]
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-11 h-11 glass border border-indigo-500/20 rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all duration-300 hover:scale-110"
                >
                  {Icon && <Icon size={18} />}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}