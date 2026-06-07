import { useState, useEffect } from 'react'
import { GitBranch, ChevronDown, Columns } from 'lucide-react'
import logo from '../assets/images/fikadu.jpeg'

const stats = [
  { value: '5+',  label: 'Years'    },
  { value: '40+', label: 'Projects' },
  { value: '20+', label: 'Clients'  },
  { value: '99%', label: 'Uptime'   },
]

const techBadges = ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Tailwindcss', 'AWS', 'GraphQL' ]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [barWidth, setBarWidth] = useState(0)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
    setTimeout(() => setBarWidth(69), 700)
  }, [])


    const GitHubIcon = () => (

  <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#272626"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinecap="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.29183 21V18.4407L9.3255 16.6219C9.36595 16.0561 9.58639 15.5228 9.94907 15.11C9.95438 15.1039 9.95972 15.0979 9.9651 15.0919C9.9791 15.0763 9.96988 15.0511 9.94907 15.0485V15.0485C7.52554 14.746 5.0005 13.7227 5.0005 9.26749C4.9847 8.17021 5.3427 7.10648 6.00437 6.27215C6.02752 6.24297 6.05103 6.21406 6.07492 6.18545V6.18545C6.10601 6.1482 6.11618 6.09772 6.10194 6.05134C6.10107 6.04853 6.10021 6.04571 6.09935 6.04289C6.0832 5.9899 6.06804 5.93666 6.05388 5.88321C5.81065 4.96474 5.86295 3.98363 6.20527 3.09818C6.20779 3.09164 6.21034 3.08511 6.2129 3.07858C6.22568 3.04599 6.25251 3.02108 6.28698 3.01493V3.01493C6.50189 2.97661 7.37036 2.92534 9.03298 4.07346C9.08473 4.10919 9.13724 4.14609 9.19053 4.18418V4.18418C9.22901 4.21168 9.27794 4.22011 9.32344 4.20716C9.32487 4.20675 9.32631 4.20634 9.32774 4.20593C9.41699 4.18056 9.50648 4.15649 9.59617 4.1337C11.1766 3.73226 12.8234 3.73226 14.4038 4.1337C14.4889 4.1553 14.5737 4.17807 14.6584 4.20199C14.6602 4.20252 14.6621 4.20304 14.6639 4.20356C14.7174 4.21872 14.7749 4.20882 14.8202 4.17653V4.17653C14.8698 4.14114 14.9187 4.10679 14.967 4.07346C16.6257 2.92776 17.4894 2.9764 17.7053 3.01469V3.01469C17.7404 3.02092 17.7678 3.04628 17.781 3.07946C17.7827 3.08373 17.7843 3.08799 17.786 3.09226C18.1341 3.97811 18.1894 4.96214 17.946 5.88321C17.9315 5.93811 17.9159 5.9928 17.8993 6.04723V6.04723C17.8843 6.09618 17.8951 6.14942 17.9278 6.18875C17.9289 6.18998 17.9299 6.19121 17.9309 6.19245C17.9528 6.21877 17.9744 6.24534 17.9956 6.27215C18.6573 7.10648 19.0153 8.17021 18.9995 9.26749C18.9995 13.747 16.4565 14.7435 14.0214 15.015V15.015C14.0073 15.0165 14.001 15.0334 14.0105 15.0439C14.0141 15.0479 14.0178 15.0519 14.0214 15.0559C14.2671 15.3296 14.4577 15.6544 14.5811 16.0103C14.7101 16.3824 14.7626 16.7797 14.7351 17.1754V21" stroke="#626060" strokeWidth="2" strokeLinecap="round" strokeLinecap="round"></path> <path d="M4 17C4.36915 17.0523 4.72159 17.1883 5.03065 17.3975C5.3397 17.6068 5.59726 17.8838 5.7838 18.2078C5.94231 18.4962 6.15601 18.7504 6.41264 18.9557C6.66927 19.161 6.96379 19.3135 7.27929 19.4043C7.59478 19.4952 7.92504 19.5226 8.25112 19.485C8.5772 19.4475 8.89268 19.3457 9.17946 19.1855" stroke="#626060" strokeWidth="2" strokeLinecap="round" strokeLinecap="round"></path> </g></svg>
  )
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
             
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-outline ">
              <div  style={{width: 25, height: 25, borderRadius: '8px',
                   display: 'flex', alignItems: 'center', justifyContent: 'center',
                   color: 'var(--text-muted)', transition: 'all 0.2s', textDecoration: 'none' }}>
                <GitHubIcon  />
              </div>
                 GitHub Profile
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
              <div style={{display:'flex', flexDirection:"column", justifyContent:'center', borderRadius:999, overflow: 'hidden', alignItems:'center'}}><img src={logo} alt="Logo"  style={{width:70, height: 70,borderRadius:999,}}/>
              <span style={{ fontSize: '14px', fontWeight: 'bold', marginTop: 4 }}>Fikadu Alemu</span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Full-Stack Developer</span></div>
              
              
              
             
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