import { useState, useEffect } from 'react'
import { GitBranch, ChevronDown } from 'lucide-react'

const stats = [
  { value: '5+',  label: 'Years'    },
  { value: '40+', label: 'Projects' },
  { value: '20+', label: 'Clients'  },
  { value: '99%', label: 'Uptime'   },
]

const techBadges = ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS']

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [barWidth, setBarWidth] = useState(0)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
    setTimeout(() => setBarWidth(69), 700)
  }, [])

  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex; flex-direction: column; justify-content: center;
          padding: 100px var(--section-px) 3rem;
          max-width: var(--max-w); margin: 0 auto;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 13px; border-radius: 20px;
          background: rgba(45,158,107,0.08);
          border: 1px solid rgba(45,158,107,0.22);
          font-size: 12px; font-family: var(--font-mono);
          color: var(--green); margin-bottom: 2.5rem; width: fit-content;
        }
        .hero-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--green); animation: pulse 2s infinite;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 3rem; align-items: start;
        }
        .hero-h1 {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(2.6rem, 5vw, 4.8rem);
          line-height: 1.06; letter-spacing: -.03em;
          color: var(--text); margin-bottom: 1.25rem;
        }
        .hero-gold { color: var(--gold); }
        .hero-p {
          font-size: 15px; color: var(--text-muted);
          max-width: 460px; line-height: 1.75; margin-bottom: 2rem;
        }
        .hero-ctas { display: flex; gap: .75rem; margin-bottom: 3rem; flex-wrap: wrap; }
        .btn-primary {
          padding: 10px 22px; border-radius: 10px;
          background: linear-gradient(135deg, #B58C3D, #8a6820);
          border: none; color: #fff; cursor: pointer;
          font-family: var(--font-body); font-weight: 600; font-size: 14px;
          box-shadow: 0 4px 18px rgba(181,140,61,.28);
          transition: transform .2s, box-shadow .2s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(181,140,61,.38); }
        .btn-outline {
          padding: 10px 22px; border-radius: 10px;
          background: var(--bg2); border: 1px solid var(--border);
          color: var(--text); cursor: pointer;
          font-family: var(--font-body); font-weight: 500; font-size: 14px;
          display: flex; align-items: center; gap: 6px; text-decoration: none;
          transition: border-color .2s, background .2s;
        }
        .btn-outline:hover { border-color: var(--border-md); background: var(--bg3); }
        .hero-stats { display: flex; gap: 2.5rem; flex-wrap: wrap; }
        .hero-stat-val {
          font-family: var(--font-display); font-weight: 800;
          font-size: 1.9rem; color: var(--gold); line-height: 1;
        }
        .hero-stat-lbl {
          font-size: 12px; color: var(--text-dim);
          margin-top: 3px; font-family: var(--font-mono);
        }
        /* Right cards */
        .hero-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 16px; padding: 1.25rem; margin-bottom: 12px;
        }
        .hero-bar-wrap {
          height: 4px; background: var(--bg4); border-radius: 2px; overflow: hidden; margin-top: 8px;
        }
        .hero-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #B58C3D, #D4A94E);
          border-radius: 2px; transition: width 1.5s ease;
        }
        .hero-badge-chip {
          padding: 3px 10px; border-radius: 6px; font-size: 11px;
          background: var(--bg4); border: 1px solid var(--border);
          color: var(--text-muted); font-family: var(--font-mono);
        }
        .hero-activity-dot {
          width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
        }
        .hero-scroll { display: flex; justify-content: center; margin-top: 3.5rem; opacity: .35; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
          .hero-right { display: none; }
        }
        @media (max-width: 640px) {
          .hero-section { padding-top: 80px; }
          .hero-h1 { font-size: clamp(2.2rem, 8vw, 3.2rem); }
          .hero-stats { gap: 1.5rem; }
        }
        @media (max-width: 380px) {
          .hero-stats { gap: 1rem; }
          .hero-stat-val { font-size: 1.5rem; }
        }

        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(7px)} }
      `}</style>

      <section id="hero" className="hero-section">
        {/* Available badge */}
        <div className="hero-badge" style={{
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'all .5s ease'
        }}>
          <span className="hero-badge-dot" />
          Available for new projects
        </div>

        <div className="hero-grid">
          {/* LEFT */}
          <div>
            <h1 className="hero-h1" style={{
              opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all .6s ease .1s'
            }}>
              Crafting digital<br />
              <span className="hero-gold">experiences</span><br />
              that matter.
            </h1>

            <p className="hero-p" style={{
              opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all .6s ease .2s'
            }}>
              Full-stack engineer with 5+ years building products that scale.
              Obsessed with performance, accessibility, and developer experience.
            </p>

            <div className="hero-ctas" style={{
              opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all .6s ease .3s'
            }}>
              <button className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Work ✦
              </button>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-outline">
                <GitBranch size={14} /> GitHub Profile
              </a>
            </div>

            <div className="hero-stats" style={{
              opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all .6s ease .4s'
            }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div className="hero-stat-val">{s.value}</div>
                  <div className="hero-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right" style={{
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all .7s ease .5s'
          }}>
            <div className="hero-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                <span>Backend proficiency</span>
                <span style={{ color: 'var(--gold)' }}>69%</span>
              </div>
              <div className="hero-bar-wrap">
                <div className="hero-bar-fill" style={{ width: `${barWidth}%` }} />
              </div>
              <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                {techBadges.map(b => (
                  <span key={b} className="hero-badge-chip">{b}</span>
                ))}
              </div>
            </div>

            <div className="hero-card">
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: 10 }}>Recent activity</div>
              {['Pushed to nufellow/main', 'Opened PR #42', 'Merged feature/auth'].map((a, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0',
                  borderBottom: i < 2 ? '1px solid var(--border)' : 'none'
                }}>
                  <span className="hero-activity-dot" style={{ background: i === 0 ? 'var(--green)' : 'var(--gold)' }} />
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-scroll" style={{ animation: 'bounce 2s infinite' }}>
          <ChevronDown size={20} color="var(--text-muted)" />
        </div>
      </section>
    </>
  )
}