import { useEffect, useRef, useState } from 'react'
import { BookOpen, Download, Package, Users, Briefcase, Star } from 'lucide-react'

const statsCards = [
  { icon: <Package size={18} />, value: '8 packages', label: 'Open source', color: '#3B6FD4' },
  { icon: <Star size={18} />,    value: '1.2k+',      label: 'GitHub stars', color: '#B58C3D' },
  { icon: <Briefcase size={18}/>, value: 'FinTech, SaaS', label: 'Industries', color: '#7C5DC7' },
  { icon: <Users size={18} />,   value: '12 clients', label: 'Worldwide',    color: '#2D9E6B' },
]

export default function About() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.12 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .about-section {
          padding: var(--section-py) var(--section-px);
          max-width: var(--max-w); margin: 0 auto;
          background: var(--bg);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem; align-items: start;
        }
        .about-h2 {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(1.9rem, 3.5vw, 3rem); line-height: 1.1;
          letter-spacing: -.025em; margin-bottom: 1.25rem; color: var(--text);
        }
        .about-p {
          font-size: 14px; color: var(--text-muted);
          line-height: 1.8; margin-bottom: 1rem;
        }
        .about-actions { display: flex; gap: .75rem; flex-wrap: wrap; }
        .about-btn {
          padding: 9px 18px; border-radius: 9px;
          background: var(--bg2); border: 1px solid var(--border);
          color: var(--text-muted); cursor: pointer;
          font-family: var(--font-body); font-weight: 500; font-size: 13px;
          display: flex; align-items: center; gap: 6px; transition: all .2s;
        }
        .about-btn:hover {
          color: var(--gold); border-color: var(--gold-border);
          background: var(--gold-dim);
        }
        .about-cards {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
        }
        .about-card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 14px; padding: 1.2rem;
          transition: all .25s; cursor: default;
        }
        .about-card:hover { transform: translateY(-3px); }
        .about-card-icon {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 12px;
        }
        .about-card-val {
          font-family: var(--font-display); font-weight: 700;
          font-size: 1.1rem; color: var(--text); margin-bottom: 2px;
        }
        .about-card-lbl {
          font-size: 11px; color: var(--text-dim); font-family: var(--font-mono);
        }

        /* Responsive */
        @media (max-width: 820px) {
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
        @media (max-width: 480px) {
          .about-cards { grid-template-columns: 1fr 1fr; }
          .about-h2 { font-size: clamp(1.7rem, 7vw, 2.2rem); }
        }
      `}</style>

      <section id="about" className="about-section" ref={ref}>
        <div className="section-label" style={{ opacity: visible ? 1 : 0, transition: 'opacity .5s' }}>
          <span />&nbsp;ABOUT ME
        </div>

        <div className="about-grid">
          {/* Left */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-28px)',
            transition: 'all .7s ease .1s'
          }}>
            <h2 className="about-h2">
              Building the future,<br />
              <span style={{ color: 'var(--gold)' }}>one commit</span> at a time.
            </h2>

            <p className="about-p">
              I'm a full-stack engineer with 5+ years of experience crafting products that sit at the
              intersection of engineering excellence and thoughtful design. I care deeply about performance,
              accessibility, and developer experience.
            </p>
            <p className="about-p" style={{ marginBottom: '2rem' }}>
              When I'm not shipping code, you'll find me contributing to open-source, writing about web
              performance, or exploring the latest in distributed systems.
            </p>

            <div className="about-actions">
              <button className="about-btn"><BookOpen size={13} /> Read Blog</button>
              <button className="about-btn"><Download size={13} /> Download CV</button>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="about-cards" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(28px)',
            transition: 'all .7s ease .2s'
          }}>
            {statsCards.map((card, i) => (
              <div key={i} className="about-card"
                style={{ '--hover-border': card.color + '44' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = card.color + '44' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <div className="about-card-icon" style={{
                  background: card.color + '15', color: card.color
                }}>{card.icon}</div>
                <div className="about-card-val">{card.value}</div>
                <div className="about-card-lbl">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}