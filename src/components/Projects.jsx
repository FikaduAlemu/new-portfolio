import { useEffect, useRef, useState } from 'react'
import { ExternalLink, GitBranch, Star, GitFork } from 'lucide-react'

const projects = [
  {
    name: 'PCM',
    tagline: 'developed for advanced youth ministry',
    desc: 'A dynamic web platform for managing events, resources, and community engagement for Pentecostal Youth Ministry.',
    tags: ['React', 'Supabase', 'Next.js', 'PostgreSQL', 'Vercel', 'Resend'],
    stars: 48, forks: 12, color: '#4f7df3', icon: '🎯',
    links: { demo: '#', repo: '#' }
  },
  {
    name: 'Mindify',
    tagline: 'patient appointment management system',
    desc: 'A comprehensive appointment management system for healthcare providers, streamlining scheduling, patient communication, and resource allocation.',
    tags: ['React', 'Telephony', 'Tailwind'],
    stars: 27, forks: 8, color: '#f59e0b', icon: '🧠',
    links: { demo: '#', repo: '#' }
  },
  {
    name: 'Nomad',
    tagline: 'platform for digital nomads',
    desc: 'Geo discovery community for digital nomads with live chat and rich profiles.',
    tags: ['React Native', 'Socket.io', 'Node.js'],
    stars: 156, forks: 34, color: '#4ade80', icon: '🌍',
    links: { demo: '#', repo: '#' }
  },
  {
    name: 'CodeRelay',
    tagline: 'AI code helper',
    desc: 'Collaborative editor with AI pair programmer, supporting 20+ languages.',
    tags: ['TypeScript', 'WebRTC', 'Socket', 'Redux'],
    stars: 196, forks: 63, color: '#a78bfa', icon: '💻',
    links: { demo: '#', repo: '#' }
  },
]

export default function Projects() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--gold)',
        letterSpacing: '0.12em', marginBottom: '1rem',
        opacity: visible ? 1 : 0, transition: 'opacity 0.5s'
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
        WORK
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', letterSpacing: '-0.025em',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease'
        }}>Latest projects</h2>
        <a href="#" style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          fontSize: '13px', color: 'var(--gold)', textDecoration: 'none',
          fontFamily: 'var(--font-mono)',
          opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.2s'
        }}>All projects <ExternalLink size={12} /></a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {projects.map((p, i) => (
          <div key={p.name} style={{
            background: 'var(--bg2)', border: '1px solid var(--border)',
            borderRadius: '16px', padding: '1.5rem',
            transition: 'all 0.25s', cursor: 'default',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: `${0.1 + i * 0.1}s`,
            display: 'flex', flexDirection: 'column', gap: '10px'
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = p.color + '44'; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '10px',
                  background: p.color + '18', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '18px'
                }}>{p.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>{p.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{p.tagline}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a href={p.links.demo} style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}><ExternalLink size={14} /></a>
                <a href={p.links.repo} style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}><GitBranch size={14} /></a>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.desc}</p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: 'auto' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{
                  padding: '3px 8px', borderRadius: '6px', fontSize: '11px',
                  background: 'var(--bg4)', border: '1px solid var(--border)',
                  color: 'var(--text-dim)', fontFamily: 'var(--font-mono)'
                }}>{tag}</span>
              ))}
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '12px', paddingTop: '8px', borderTop: '1px solid var(--border)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                <Star size={11} style={{ color: 'var(--gold)' }} />{p.stars}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                <GitFork size={11} />{p.forks}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
