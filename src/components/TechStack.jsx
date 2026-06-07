import { useEffect, useRef, useState } from 'react'

const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Design', 'Video Edit']

const tools = [
  { name: 'HTML',        level: 'Expert',   category: 'Frontend',    color: '#e34f26', icon: '🔶' },
  { name: 'CSS',         level: 'Expert',   category: 'Frontend',    color: '#264de4', icon: '🔷' },
  { name: 'JavaScript',  level: 'Expert',   category: 'Frontend',    color: '#f7df1e', icon: '🟨' },
  { name: 'React',       level: 'Expert',   category: 'Frontend',    color: '#61dafb', icon: '⚛️' },
  { name: 'Next.js',     level: 'Expert',   category: 'Frontend',    color: '#1A1714', icon: '▲' },
  { name: 'TypeScript',  level: 'Expert',   category: 'Frontend',    color: '#3178c6', icon: '🔵' },
  { name: 'Tailwind',    level: 'Learner',  category: 'Frontend',    color: '#38bdf8', icon: '🌊' },
  { name: 'Node.js',     level: 'Learner',  category: 'Backend',     color: '#68a063', icon: '🟢' },
  { name: 'Express.js',  level: 'Learner',  category: 'Backend',     color: '#1A1714', icon: '⚡' },
  { name: 'GraphQL',     level: 'Learner',  category: 'Backend',     color: '#e535ab', icon: '◆' },
  { name: 'PostgreSQL',  level: 'Learner',  category: 'Backend',     color: '#336791', icon: '🐘' },
  { name: 'MongoDB',     level: 'Learner',  category: 'Backend',     color: '#4db33d', icon: '🍃' },
  { name: 'Redis',       level: 'Learner',  category: 'Backend',     color: '#dc382d', icon: '🔴' },
  { name: 'Docker',      level: 'Learner',  category: 'DevOps',      color: '#0db7ed', icon: '🐳' },
  { name: 'Vite',        level: 'Learner',  category: 'DevOps',      color: '#B58C3D', icon: '⚡' },
  { name: 'Figma',       level: 'Design',   category: 'Design',      color: '#f24e1e', icon: '🎨' },
  { name: 'Photoshop',   level: 'Design',   category: 'Design',      color: '#31a8ff', icon: '🖼️' },
  { name: 'Illustrator', level: 'Design',   category: 'Design',      color: '#ff9a00', icon: '✏️' },
  { name: 'Premiere Pro',level: 'Learner',  category: 'Video Edit',  color: '#ea77ff', icon: '🎬' },
  { name: 'Capcut',      level: 'Video Edit',category:'Video Edit',   color: '#1A1714', icon: '✂️' },
]

const levelColor = { Expert: 'var(--green)', Design: '#7C5DC7', Learner: 'var(--text-dim)', 'Video Edit': '#B58C3D' }

export default function TechStack() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('All')

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const filtered = activeTab === 'All' ? tools : tools.filter(t => t.category === activeTab)

  return (
    <>
      <style>{`
        .stack-section {
          padding: var(--section-py) var(--section-px);
          max-width: var(--max-w); margin: 0 auto;
          background: var(--bg2);
        }
        .stack-h2 {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(1.9rem, 3.5vw, 2.8rem); letter-spacing: -.025em;
          color: var(--text); margin-bottom: .4rem;
        }
        .stack-sub { font-size: 14px; color: var(--text-muted); margin-bottom: 2rem; }

        .stack-tabs { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 2.5rem; }
        .stack-tab {
          padding: 6px 16px; border-radius: 8px; border: 1px solid var(--border);
          cursor: pointer; font-family: var(--font-body); font-size: 13px; font-weight: 500;
          transition: all .2s;
        }
        .stack-tab.active {
          background: var(--gold); color: #fff; border-color: var(--gold);
        }
        .stack-tab:not(.active) {
          background: var(--bg); color: var(--text-muted);
        }
        .stack-tab:not(.active):hover {
          background: var(--gold-dim); color: var(--gold); border-color: var(--gold-border);
        }

        .stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 10px;
        }
        .stack-item {
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 12px; padding: 1rem .75rem;
          display: flex; flex-direction: column; align-items: center;
          gap: 7px; cursor: default; transition: all .22s;
        }
        .stack-item:hover { transform: translateY(-4px); background: var(--bg); }
        .stack-icon { font-size: 1.5rem; line-height: 1; }
        .stack-name {
          font-family: var(--font-body); font-weight: 600;
          font-size: 11.5px; color: var(--text); text-align: center;
        }
        .stack-lvl { font-size: 10px; font-family: var(--font-mono); }

        /* Responsive */
        @media (max-width: 640px) {
          .stack-grid { grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 8px; }
          .stack-item { padding: .8rem .5rem; }
        }
        @media (max-width: 380px) {
          .stack-tabs { gap: 4px; }
          .stack-tab { padding: 5px 12px; font-size: 12px; }
        }

        @keyframes fadeInUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <section id="stack" className="stack-section" ref={ref}>
        <div className="section-label" style={{ opacity: visible ? 1 : 0, transition: 'opacity .5s' }}>
          <span />&nbsp;TECH STACK
        </div>

        <h2 className="stack-h2" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all .6s ease'
        }}>Tools I master</h2>

        <p className="stack-sub" style={{ opacity: visible ? 1 : 0, transition: 'opacity .6s ease .1s' }}>
          A curated toolkit built from years of shipping real products across frontend, backend, cloud, and design.
        </p>

        <div className="stack-tabs" style={{ opacity: visible ? 1 : 0, transition: 'opacity .6s ease .2s' }}>
          {categories.map(cat => (
            <button key={cat}
              className={`stack-tab${activeTab === cat ? ' active' : ''}`}
              onClick={() => setActiveTab(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="stack-grid" style={{ opacity: visible ? 1 : 0, transition: 'opacity .6s ease .3s' }}>
          {filtered.map((tool, i) => (
            <div key={tool.name} className="stack-item"
              style={{ animation: visible ? `fadeInUp .4s ease ${i * 0.04}s both` : 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = (tool.color || 'var(--gold)') + '55' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <span className="stack-icon">{tool.icon}</span>
              <span className="stack-name">{tool.name}</span>
              <span className="stack-lvl" style={{ color: levelColor[tool.level] || 'var(--text-dim)' }}>{tool.level}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}