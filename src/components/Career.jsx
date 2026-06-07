import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Award } from 'lucide-react'

const jobs = [
  {
    title: 'Senior Frontend Engineer', company: 'Acme Corp',
    period: '2022 → Present', type: 'Full-time', typeColor: '#2D9E6B',
    desc: 'Leading design systems team, building the component library across all products. Reduced bundle size 3×.',
    icon: '🏢'
  },
  {
    title: 'Full Stack Developer', company: 'Drisun',
    period: '2021 → 2023', type: 'Previous', typeColor: '#3B6FD4',
    desc: 'Shipped core features for the loan-tracking product. Improved page load 40% via code-splitting.',
    icon: '💼'
  },
  {
    title: 'Frontend Developer', company: 'Startup Studio',
    period: '2019 → 2021', type: 'Contract', typeColor: '#D4914E',
    desc: 'Delivered 6 MVPs from zero to launch across fintech, health, and SaaS verticals.',
    icon: '🚀'
  },
]

const certs = [
  { name: 'AWS Solutions Architect', icon: '☁️' },
  { name: 'Google Cloud Professional', icon: '🌐' },
  { name: 'Meta React Developer',      icon: '⚛️' },
]

export default function Career() {
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
        .career-section {
          padding: var(--section-py) var(--section-px);
          max-width: var(--max-w); margin: 0 auto;
          background: var(--bg2);
        }
        .career-h2 {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(1.9rem, 3.5vw, 2.8rem); letter-spacing: -.025em;
          color: var(--text); margin-bottom: 3rem;
        }
        .career-grid {
          display: grid; grid-template-columns: 1fr 300px; gap: 3rem;
        }
        /* Timeline */
        .career-timeline { display: flex; flex-direction: column; gap: 0; }
        .career-entry { display: flex; gap: 1rem; position: relative; }
        .career-spine { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .career-dot {
          width: 38px; height: 38px; border-radius: 10px;
          background: var(--bg); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; z-index: 1;
        }
        .career-line { width: 1px; flex: 1; background: var(--border); min-height: 20px; margin: 6px 0; }
        .career-card {
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 14px; padding: 1.25rem;
          margin-bottom: 12px; flex: 1; transition: border-color .2s;
        }
        .career-card:hover { border-color: var(--gold-border); }
        .career-title {
          font-family: var(--font-display); font-weight: 700;
          font-size: .95rem; color: var(--text);
        }
        .career-meta {
          font-size: 12px; color: var(--text-muted);
          font-family: var(--font-mono); margin-top: 2px;
        }
        .career-badge {
          padding: 2px 10px; border-radius: 20px; font-size: 11px;
          font-family: var(--font-mono); white-space: nowrap;
        }
        .career-desc { font-size: 13px; color: var(--text-muted); line-height: 1.6; margin-top: 8px; }
        /* Right panel */
        .career-side { display: flex; flex-direction: column; gap: 16px; }
        .career-panel {
          background: var(--bg); border: 1px solid var(--border);
          border-radius: 16px; padding: 1.25rem;
        }
        .career-panel-hd {
          display: flex; align-items: center; gap: 6px; margin-bottom: 12px;
          font-size: 11px; font-family: var(--font-mono);
          color: var(--text-dim); letter-spacing: .08em;
        }
        .career-edu-name {
          font-family: var(--font-display); font-weight: 700;
          font-size: .9rem; color: var(--text); margin-bottom: 4px;
        }
        .career-edu-sub { font-size: 12px; color: var(--text-muted); font-family: var(--font-mono); }
        .career-cert-row {
          display: flex; align-items: center; gap: 8px; padding: 6px 0;
          font-size: 12px; color: var(--text-muted);
        }

        /* Responsive */
        @media (max-width: 820px) {
          .career-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .career-side { flex-direction: row; flex-wrap: wrap; }
          .career-panel { flex: 1; min-width: 240px; }
        }
        @media (max-width: 480px) {
          .career-side { flex-direction: column; }
          .career-panel { min-width: unset; }
          .career-card { padding: 1rem; }
          .career-h2 { margin-bottom: 2rem; }
        }
      `}</style>

      <section id="career" className="career-section" ref={ref}>
        <div className="section-label" style={{ opacity: visible ? 1 : 0, transition: 'opacity .5s' }}>
          <span />&nbsp;CAREER
        </div>

        <h2 className="career-h2" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all .6s ease'
        }}>Where I've worked</h2>

        <div className="career-grid">
          {/* Timeline */}
          <div className="career-timeline">
            {jobs.map((job, i) => (
              <div key={i} className="career-entry" style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all .6s ease ${0.1 + i * 0.15}s`
              }}>
                <div className="career-spine">
                  <div className="career-dot">{job.icon}</div>
                  {i < jobs.length - 1 && <div className="career-line" />}
                </div>
                <div className="career-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div>
                      <div className="career-title">{job.title}</div>
                      <div className="career-meta">
                        <span style={{ color: 'var(--gold)' }}>◆</span> {job.company}
                        <span style={{ margin: '0 4px', color: 'var(--text-dim)' }}>·</span>
                        {job.period}
                      </div>
                    </div>
                    <span className="career-badge" style={{
                      background: job.typeColor + '15', color: job.typeColor,
                      border: `1px solid ${job.typeColor}33`
                    }}>{job.type}</span>
                  </div>
                  <p className="career-desc">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="career-side" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(20px)',
            transition: 'all .7s ease .3s'
          }}>
            <div className="career-panel">
              <div className="career-panel-hd">
                <GraduationCap size={14} style={{ color: 'var(--gold)' }} /> EDUCATION
              </div>
              <div className="career-edu-name">B.Sc. Information Technology</div>
              <div className="career-edu-sub">Wolkite University</div>
              <div style={{ fontSize: 11, color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginTop: 4 }}>
                2020 → 2024 | GPA 3.8+
              </div>
            </div>

            <div className="career-panel">
              <div className="career-panel-hd">
                <Award size={14} style={{ color: 'var(--gold)' }} /> CERTIFICATIONS
              </div>
              {certs.map((c, i) => (
                <div key={i} className="career-cert-row"
                  style={{ borderBottom: i < certs.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ fontSize: 14 }}>{c.icon}</span>
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}