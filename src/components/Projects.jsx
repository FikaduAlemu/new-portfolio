import { useEffect, useRef, useState } from 'react'
import { ExternalLink, GitBranch, Star, GitFork } from 'lucide-react'

const projects = [
  {
    name: 'PCM', tagline: 'Advanced youth ministry platform',
    desc: 'A dynamic web platform for managing events, resources, and community engagement for Pentecostal Youth Ministry.',
    tags: ['React', 'Supabase', 'Next.js', 'PostgreSQL'],
    stars: 48, forks: 12, color: '#3B6FD4', icon: '🎯',
    links: { demo: '#', repo: '#' }
  },
  {
    name: 'Mindify', tagline: 'Patient appointment management',
    desc: 'A comprehensive appointment management system for healthcare providers, streamlining scheduling and patient communication.',
    tags: ['React', 'Telephony', 'Tailwind'],
    stars: 27, forks: 8, color: '#D4914E', icon: '🧠',
    links: { demo: '#', repo: '#' }
  },
  {
    name: 'Nomad', tagline: 'Platform for digital nomads',
    desc: 'Geo discovery community for digital nomads with live chat and rich profiles.',
    tags: ['React Native', 'Socket.io', 'Node.js'],
    stars: 156, forks: 34, color: '#2D9E6B', icon: '🌍',
    links: { demo: '#', repo: '#' }
  },
  {
    name: 'CodeRelay', tagline: 'AI code helper',
    desc: 'Collaborative editor with AI pair programmer, supporting 20+ languages.',
    tags: ['TypeScript', 'WebRTC', 'Socket', 'Redux'],
    stars: 196, forks: 63, color: '#7C5DC7', icon: '💻',
    links: { demo: '#', repo: '#' }
  },
]

export default function Projects() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .proj-section {
          padding: var(--section-py) var(--section-px);
          max-width: var(--max-w); margin: 0 auto;
          background: var(--bg);
        }
        .proj-header {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;
        }
        .proj-h2 {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(1.9rem, 3.5vw, 2.8rem); letter-spacing: -.025em; color: var(--text);
        }
        .proj-all {
          display: flex; align-items: center; gap: 5px;
          font-size: 13px; color: var(--gold); text-decoration: none;
          font-family: var(--font-mono); white-space: nowrap;
          transition: opacity .2s;
        }
        .proj-all:hover { opacity: .7; }
        .proj-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
        }
        .proj-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 16px; padding: 1.5rem;
          display: flex; flex-direction: column; gap: 10px;
          cursor: default; transition: all .22s;
        }
        .proj-card:hover { transform: translateY(-4px); }
        .proj-card-hd {
          display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;
        }
        .proj-icon-wrap {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0;
        }
        .proj-name {
          font-family: var(--font-display); font-weight: 700; font-size: 1rem; color: var(--text);
        }
        .proj-tagline { font-size: 11px; color: var(--text-dim); font-family: var(--font-mono); }
        .proj-links { display: flex; gap: 8px; flex-shrink: 0; }
        .proj-link { color: var(--text-muted); display: flex; align-items: center; text-decoration: none; transition: color .2s; }
        .proj-link:hover { color: var(--gold); }
        .proj-desc { font-size: 13px; color: var(--text-muted); line-height: 1.6; }
        .proj-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: auto; }
        .proj-tag {
          padding: 3px 8px; border-radius: 6px; font-size: 11px;
          background: var(--bg4); border: 1px solid var(--border);
          color: var(--text-dim); font-family: var(--font-mono);
        }
        .proj-footer {
          display: flex; gap: 12px;
          padding-top: 8px; border-top: 1px solid var(--border);
        }
        .proj-stat {
          display: flex; align-items: center; gap: 4px;
          font-size: 12px; color: var(--text-dim); font-family: var(--font-mono);
        }

        /* Responsive */
        @media (max-width: 700px) {
          .proj-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .proj-card { padding: 1.2rem; }
        }
      `}</style>

      <section id="projects" className="proj-section" ref={ref}>
        <div className="section-label" style={{ opacity: visible ? 1 : 0, transition: 'opacity .5s' }}>
          <span />&nbsp;WORK
        </div>

        <div className="proj-header">
          <h2 className="proj-h2" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all .6s ease'
          }}>Latest projects</h2>
          <a href="#" className="proj-all" style={{ opacity: visible ? 1 : 0, transition: 'opacity .6s ease .2s' }}>
            All projects <ExternalLink size={12} />
          </a>
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <div key={p.name} className="proj-card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(28px)',
                transition: `all .6s ease ${0.1 + i * 0.1}s`
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = p.color + '44'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div className="proj-card-hd">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="proj-icon-wrap" style={{ background: p.color + '15' }}>{p.icon}</div>
                  <div>
                    <div className="proj-name">{p.name}</div>
                    <div className="proj-tagline">{p.tagline}</div>
                  </div>
                </div>
                <div className="proj-links">
                  <a href={p.links.demo} className="proj-link" aria-label="Live demo"><ExternalLink size={14} /></a>
                  <a href={p.links.repo} className="proj-link" aria-label="Repository"><GitBranch size={14} /></a>
                </div>
              </div>

              <p className="proj-desc">{p.desc}</p>

              <div className="proj-tags">
                {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
              </div>

              <div className="proj-footer">
                <span className="proj-stat"><Star size={11} style={{ color: 'var(--gold)' }} />{p.stars}</span>
                <span className="proj-stat"><GitFork size={11} />{p.forks}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}