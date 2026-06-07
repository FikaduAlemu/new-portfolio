import { useEffect, useRef, useState } from 'react'
import { BookOpen, Download, Package, Users, Briefcase, Star } from 'lucide-react'

const statsCards = [
  { icon: <Package size={18} />, value: '8 packages', label: 'Open source', color: '#4f7df3' },
  { icon: <Star size={18} />, value: '1.2k+', label: 'GitHub stars', color: '#c8963c' },
  { icon: <Briefcase size={18} />, value: 'FinTech, SaaS', label: 'Industries', color: '#a78bfa' },
  { icon: <Users size={18} />, value: '12 clients', label: 'Worldwide', color: '#4ade80' },
]

export default function About() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} style={{
      padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto'
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--gold)',
        letterSpacing: '0.12em', marginBottom: '3rem',
        opacity: visible ? 1 : 0, transition: 'opacity 0.5s'
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
        ABOUT ME
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Left */}
        <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.7s ease 0.1s' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.1,
            letterSpacing: '-0.025em', marginBottom: '1.5rem'
          }}>
            Building the future,<br />
            <span style={{ color: 'var(--gold)' }}>one commit</span> at a time.
          </h2>

          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
            I'm a full-stack engineer with 5+ years of experience crafting products that sit at the intersection of engineering excellence and thoughtful design. I care deeply about performance, accessibility, and developer experience.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            When I'm not shipping code, you'll find me contributing to open-source, writing about web performance, or exploring the latest in distributed systems.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button style={{
              padding: '9px 18px', borderRadius: '9px',
              background: 'var(--bg3)', border: '1px solid var(--border)',
              color: 'var(--text-muted)', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '13px',
              display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'all 0.2s'
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            ><BookOpen size={13} /> Read Blog</button>
            <button style={{
              padding: '9px 18px', borderRadius: '9px',
              background: 'var(--bg3)', border: '1px solid var(--border)',
              color: 'var(--text-muted)', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '13px',
              display: 'flex', alignItems: 'center', gap: '6px',
              transition: 'all 0.2s'
            }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            ><Download size={13} /> Download CV</button>
          </div>
        </div>

        {/* Right – stat cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px',
          opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(30px)',
          transition: 'all 0.7s ease 0.2s'
        }}>
          {statsCards.map((card, i) => (
            <div key={i} style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              borderRadius: '14px', padding: '1.25rem',
              transition: 'all 0.25s', cursor: 'default'
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = card.color + '44'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: '10px',
                background: card.color + '18', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: card.color, marginBottom: '12px'
              }}>{card.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text)', marginBottom: '2px' }}>{card.value}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
