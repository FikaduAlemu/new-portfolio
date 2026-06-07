import { useEffect, useRef, useState } from 'react'

const categories = ['All', 'Frontend', 'Backend', 'DevOps', 'Design', 'Video Edit']

const tools = [
  { name: 'HTML', level: 'Expert', category: 'Frontend', color: '#e34f26', icon: '🔶' },
  { name: 'CSS', level: 'Expert', category: 'Frontend', color: '#264de4', icon: '🔷' },
  { name: 'JavaScript', level: 'Expert', category: 'Frontend', color: '#f7df1e', icon: '🟨' },
  { name: 'React', level: 'Expert', category: 'Frontend', color: '#61dafb', icon: '⚛️' },
  { name: 'Next.js', level: 'Expert', category: 'Frontend', color: '#ffffff', icon: '▲' },
  { name: 'TypeScript', level: 'Expert', category: 'Frontend', color: '#3178c6', icon: '🔵' },
  { name: 'Tailwind', level: 'Learner', category: 'Frontend', color: '#38bdf8', icon: '🌊' },
  { name: 'Node.js', level: 'Learner', category: 'Backend', color: '#68a063', icon: '🟢' },
  { name: 'Express.js', level: 'Learner', category: 'Backend', color: '#ffffff', icon: '⚡' },
  { name: 'GraphQL', level: 'Learner', category: 'Backend', color: '#e535ab', icon: '◆' },
  { name: 'PostgreSQL', level: 'Learner', category: 'Backend', color: '#336791', icon: '🐘' },
  { name: 'MongoDB', level: 'Learner', category: 'Backend', color: '#4db33d', icon: '🍃' },
  { name: 'Redis', level: 'Learner', category: 'Backend', color: '#dc382d', icon: '🔴' },
  { name: 'Vite', level: 'Learner', category: 'DevOps', icon: '⚡' },
  { name: 'Figma', level: 'Design', category: 'Design', color: '#f24e1e', icon: '🎨' },
  { name: 'Photoshop', level: 'Design', category: 'Design', color: '#31a8ff', icon: '🖼️' },
  { name: 'Illustrator', level: 'Design', category: 'Design', color: '#ff9a00', icon: '✏️' },
  { name: 'Premiere Pro', level: 'Learner', category: 'Video Edit', color: '#ea77ff', icon: '🎬' },
  { name: 'Capcut', level: 'Video Edit', category: 'Video Edit', icon: '✂️' },
  { name: 'Docker', level: 'Learner', category: 'DevOps', color: '#0db7ed', icon: '🐳' },
]

export default function TechStack() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('All')

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const filtered = activeTab === 'All' ? tools : tools.filter(t => t.category === activeTab)

  return (
    <section id="stack" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--gold)',
        letterSpacing: '0.12em', marginBottom: '1rem',
        opacity: visible ? 1 : 0, transition: 'opacity 0.5s'
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
        TECH STACK
      </div>

      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', letterSpacing: '-0.025em',
        marginBottom: '0.5rem',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease'
      }}>Tools I master</h2>

      <p style={{
        fontSize: '14px', color: 'var(--text-muted)', marginBottom: '2rem',
        opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.1s'
      }}>
        A curated toolkit built from years of shipping real products across frontend, backend, cloud, and design.
      </p>

      {/* Category tabs */}
      <div style={{
        display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '2.5rem',
        opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.2s'
      }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveTab(cat)}
            style={{
              padding: '6px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
              background: activeTab === cat ? 'var(--gold)' : 'var(--bg3)',
              color: activeTab === cat ? '#0f0e0c' : 'var(--text-muted)',
              transition: 'all 0.2s'
            }}
          >{cat}</button>
        ))}
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '10px',
        opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.3s'
      }}>
        {filtered.map((tool, i) => (
          <div key={tool.name} style={{
            background: 'var(--bg2)', border: '1px solid var(--border)',
            borderRadius: '12px', padding: '1rem 0.75rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '8px', cursor: 'default', transition: 'all 0.25s',
            animation: visible ? `fadeIn 0.4s ease ${i * 0.04}s both` : 'none'
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = (tool.color || 'var(--gold)') + '55'
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.background = 'var(--bg3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.background = 'var(--bg2)'
            }}
          >
            <div style={{ fontSize: '1.5rem', lineHeight: 1 }}>{tool.icon}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '12px', color: 'var(--text)', textAlign: 'center' }}>{tool.name}</div>
            <div style={{
              fontSize: '10px', fontFamily: 'var(--font-mono)',
              color: tool.level === 'Expert' ? 'var(--green)' : tool.level === 'Design' ? '#a78bfa' : 'var(--text-dim)'
            }}>{tool.level}</div>
          </div>
        ))}
      </div>

      <style>{`@keyframes fadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }`}</style>
    </section>
  )
}
