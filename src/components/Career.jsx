import { useEffect, useRef, useState } from 'react'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const jobs = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Acme Corp',
    period: '2022 → Present',
    type: 'Full-time',
    typeColor: '#4ade80',
    desc: 'Leading design systems team, building the component library across all Vite/Vite products. Reduced bundle size 3×.',
    icon: '🏢'
  },
  {
    title: 'Full Stack Developer',
    company: 'Drisun',
    period: '2021 → 2023',
    type: 'Previous',
    typeColor: '#4f7df3',
    desc: 'Shipped core features for the loan-tracking product. Improved page load 40% via collected code-splitting.',
    icon: '💼'
  },
  {
    title: 'Frontend Developer',
    company: 'Startup Studio',
    period: '2019 → 2021',
    type: 'Contract',
    typeColor: '#f59e0b',
    desc: 'Delivered 6 MVPs from zero to launch across fintech, health, and SaaS verticals.',
    icon: '🚀'
  },
]

const certs = [
  { name: 'AWS Solutions Architect', icon: '☁️' },
  { name: 'Google Cloud Professional', icon: '🌐' },
  { name: 'Meta React Developer', icon: '⚛️' },
]

export default function Career() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="career" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--gold)',
        letterSpacing: '0.12em', marginBottom: '1rem',
        opacity: visible ? 1 : 0, transition: 'opacity 0.5s'
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
        CAREER
      </div>

      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', letterSpacing: '-0.025em',
        marginBottom: '3rem',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease'
      }}>Where I've worked</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {jobs.map((job, i) => (
            <div key={i} style={{
              display: 'flex', gap: '1rem', position: 'relative',
              opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-20px)',
              transition: `all 0.6s ease ${0.1 + i * 0.15}s`
            }}>
              {/* Timeline line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '10px',
                  background: 'var(--bg3)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', zIndex: 1
                }}>{job.icon}</div>
                {i < jobs.length - 1 && <div style={{ width: 1, flex: 1, background: 'var(--border)', minHeight: '20px', margin: '6px 0' }} />}
              </div>

              {/* Content */}
              <div style={{
                background: 'var(--bg2)', border: '1px solid var(--border)',
                borderRadius: '14px', padding: '1.25rem', marginBottom: '12px', flex: 1,
                transition: 'border-color 0.2s'
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)44'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)' }}>{job.title}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                      <span style={{ color: 'var(--gold)' }}>◆</span> {job.company} <span style={{ color: 'var(--text-dim)', margin: '0 4px' }}>·</span> {job.period}
                    </div>
                  </div>
                  <span style={{
                    padding: '2px 10px', borderRadius: '20px', fontSize: '11px',
                    background: job.typeColor + '18',
                    color: job.typeColor, fontFamily: 'var(--font-mono)',
                    border: `1px solid ${job.typeColor}33`
                  }}>{job.type}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{job.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Education + Certs */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '16px',
          opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(20px)',
          transition: 'all 0.7s ease 0.3s'
        }}>
          {/* Education */}
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
              <GraduationCap size={14} style={{ color: 'var(--gold)' }} />
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>EDUCATION</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)', marginBottom: '4px' }}>B.Sc. Information Technology</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Wolkite University</div>
            <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: '4px' }}>2020 → 2024 | GPA 3.8+</div>
          </div>

          {/* Certifications */}
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
              <Award size={14} style={{ color: 'var(--gold)' }} />
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '0.08em' }}>CERTIFICATIONS</span>
            </div>
            {certs.map((cert, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '6px 0',
                borderBottom: i < certs.length - 1 ? '1px solid var(--border)' : 'none'
              }}>
                <span style={{ fontSize: '14px' }}>{cert.icon}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
