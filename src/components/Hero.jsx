import { useState, useEffect } from 'react'
import { GitBranch, ExternalLink, ChevronDown, Zap } from 'lucide-react'

const stats = [
  { value: '5+', label: 'Years', icon: '⚡' },
  { value: '40+', label: 'Projects', icon: '📦' },
  { value: '20+', label: 'Clients', icon: '🤝' },
  { value: '99%', label: 'Uptime', icon: '✅' },
]

const techBadges = ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS']

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [barWidth, setBarWidth] = useState(0)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
    setTimeout(() => setBarWidth(69), 600)
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '80px 2rem 2rem',
      maxWidth: '1100px', margin: '0 auto'
    }}>
      {/* Available badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        padding: '5px 12px', borderRadius: '20px',
        background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)',
        fontSize: '12px', fontFamily: 'var(--font-mono)',
        color: 'var(--green)', marginBottom: '2.5rem', width: 'fit-content',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-10px)',
        transition: 'all 0.5s ease'
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
        Available for new projects
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '3rem', alignItems: 'start' }}>
        {/* Left */}
        <div>
          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(2.8rem, 5vw, 5rem)', lineHeight: 1.05,
            letterSpacing: '-0.03em', marginBottom: '1.5rem',
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.1s'
          }}>
            Crafting digital<br />
            <span style={{ color: 'var(--gold)' }}>experiences</span><br />
            that matter.
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '15px', color: 'var(--text-muted)', maxWidth: '480px',
            lineHeight: 1.7, marginBottom: '2rem',
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.2s'
          }}>
            Full-stack engineer with 5+ years building products that scale. Obsessed with performance, accessibility, and developer experience.
          </p>

          {/* CTA buttons */}
          <div style={{
            display: 'flex', gap: '0.75rem', marginBottom: '3rem',
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.3s'
          }}>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '10px 22px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #c8963c, #a07030)',
                border: 'none', color: '#fff', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px',
                boxShadow: '0 4px 20px rgba(200,150,60,0.3)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >View Work ✦</button>
            <a href="https://github.com" target="_blank" rel="noreferrer"
              style={{
                padding: '10px 22px', borderRadius: '10px',
                background: 'var(--bg3)', border: '1px solid var(--border)',
                color: 'var(--text)', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '14px',
                display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            ><GitBranch size={14} /> GitHub Profile</a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '2.5rem',
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.4s'
          }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.8rem', color: 'var(--gold)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – skill card */}
        <div style={{
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.5s'
        }}>
          <div style={{
            background: 'var(--bg2)', border: '1px solid var(--border)',
            borderRadius: '16px', padding: '1.25rem', marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Backend</span>
              <span style={{ fontSize: '12px', color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>69%</span>
            </div>
            <div style={{ height: '4px', background: 'var(--bg4)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{
                height: '100%', width: `${barWidth}%`,
                background: 'linear-gradient(90deg, #c8963c, #e8b96a)',
                borderRadius: '2px', transition: 'width 1.5s ease'
              }} />
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
              {techBadges.map(b => (
                <span key={b} style={{
                  padding: '3px 10px', borderRadius: '6px', fontSize: '11px',
                  background: 'var(--bg4)', border: '1px solid var(--border)',
                  color: 'var(--text-muted)', fontFamily: 'var(--font-mono)'
                }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Mini activity card */}
          <div style={{
            background: 'var(--bg2)', border: '1px solid var(--border)',
            borderRadius: '16px', padding: '1.25rem'
          }}>
            <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>Recent activity</div>
            {['Pushed to nufellow/main', 'Opened PR #42', 'Merged feature/auth'].map((a, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0',
                borderBottom: i < 2 ? '1px solid var(--border)' : 'none'
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: i === 0 ? 'var(--green)' : 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        display: 'flex', justifyContent: 'center', marginTop: '4rem',
        opacity: 0.4, animation: 'bounce 2s infinite'
      }}>
        <ChevronDown size={20} style={{ color: 'var(--text-muted)' }} />
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
      `}</style>
    </section>
  )
}
