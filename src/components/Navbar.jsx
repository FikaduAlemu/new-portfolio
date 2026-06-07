import { useState, useEffect, useRef } from 'react'
import { Monitor, Users, Code2, Globe, Briefcase, Mail,
         Github, Linkedin, Twitter } from 'lucide-react'

const NAV = [
  { id: 'hero',       icon: Monitor,   label: 'Home' },
  { id: 'about',      icon: Users,     label: 'About' },
  { id: 'stack',      icon: Code2,     label: 'Stack' },
  { id: 'projects',   icon: Globe,     label: 'Work' },
  { id: 'career',     icon: Briefcase, label: 'Career' },
  { id: 'contact',    icon: Mail,      label: 'Contact' },
]

const SOCIALS = [
  { href: 'https://github.com',   Icon: Github,   label: 'GitHub' },
  { href: 'https://linkedin.com', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com',  Icon: Twitter,  label: 'Twitter' },
  { href: 'mailto:hello@fa.dev', Icon: Mail,      label: 'Email' },
]

export default function Navbar({ active = '' }) {
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    const h = () => {
      const y = window.scrollY
      setVisible(y < 100 || y < lastY.current)
      lastY.current = y
    }
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <style>{`
        .nb * { box-sizing: border-box; }

        /* ── Root ── */
        .nb {
          position: fixed;
          bottom: 1.5rem;
          left: 0; right: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          pointer-events: none;
          transition: transform .38s cubic-bezier(.4,0,.2,1),
                      opacity .38s ease;
        }
        .nb.nb-hidden {
          transform: translateY(calc(100% + 2.5rem));
          opacity: 0;
        }
        .nb > * { pointer-events: auto; }

        /* ── Glass surface ── */
        .nb-glass {
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(20px) saturate(200%);
          -webkit-backdrop-filter: blur(20px) saturate(200%);
          border: 1px solid rgba(181,140,61,0.18);
          box-shadow:
            0 4px 24px rgba(0,0,0,0.10),
            0 1px 0  rgba(255,255,255,0.9) inset;
        }

        /* ── Top: logo + socials ── */
        .nb-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Logo pill */
        .nb-logo {
          display: flex; align-items: center; gap: 8px;
          padding: 5px 14px 5px 7px;
          border-radius: 9999px;
          border: none; cursor: pointer;
          transition: box-shadow .2s;
        }
        .nb-logo:hover {
          box-shadow: 0 4px 20px rgba(181,140,61,.25);
        }
        .nb-badge {
          width: 30px; height: 30px; border-radius: 50%;
          background: linear-gradient(135deg, #B58C3D, #7a5e25);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display);
          font-weight: 800; font-size: 11px; color: #fff;
          flex-shrink: 0;
        }
        .nb-name {
          font-family: var(--font-display);
          font-weight: 700; font-size: 13px;
          color: var(--text); line-height: 1.15;
        }
        .nb-sub {
          font-size: 10px; color: var(--text-muted);
          letter-spacing: .06em; text-transform: uppercase;
          font-family: var(--font-mono);
        }

        /* Socials pill */
        .nb-socials {
          display: flex; align-items: center;
          gap: 2px; padding: 5px 10px;
          border-radius: 9999px;
          opacity: 0; transform: translateY(6px);
          transition: opacity .25s, transform .25s;
        }
        .nb:hover .nb-socials,
        .nb:focus-within .nb-socials {
          opacity: 1; transform: translateY(0);
        }
        .nb-soc {
          width: 28px; height: 28px; border-radius: 50%;
          background: none; border: none; cursor: pointer;
          color: var(--text-muted);
          display: flex; align-items: center; justify-content: center;
          transition: background .18s, color .18s, transform .18s;
          text-decoration: none;
        }
        .nb-soc:hover {
          background: var(--gold-dim);
          color: var(--gold);
          transform: scale(1.18) translateY(-2px);
        }

        /* ── Bottom: nav strip ── */
        .nb-strip {
          display: flex; align-items: center;
          gap: 2px; padding: 5px 8px;
          border-radius: 9999px;
        }

        /* Nav button */
        .nb-btn {
          position: relative;
          display: flex; flex-direction: column;
          align-items: center; gap: 3px;
          padding: 7px 14px; border-radius: 9999px;
          background: none; border: none; cursor: pointer;
          color: var(--text-muted);
          font-size: 10px; font-weight: 500;
          letter-spacing: .04em; text-transform: uppercase;
          font-family: var(--font-body);
          transition: color .2s, background .2s;
          min-width: 52px;
        }
        .nb-btn svg { transition: transform .2s; }
        .nb-btn:hover { color: var(--gold); background: var(--gold-dim); }
        .nb-btn:hover svg { transform: translateY(-2px); }
        .nb-btn.nb-active {
          color: var(--gold);
          background: var(--gold-dim);
        }
        .nb-btn.nb-active::after {
          content: '';
          position: absolute; bottom: 4px;
          left: 50%; transform: translateX(-50%);
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--gold);
        }

        .nb-divider {
          width: 1px; height: 26px;
          background: var(--border-md);
          flex-shrink: 0; margin: 0 3px;
        }

        /* ── RESPONSIVE ── */

        /* Tablet (≤900px): hide text labels */
        @media (max-width: 900px) {
          .nb-label { display: none; }
          .nb-btn { padding: 9px 11px; min-width: 42px; }
        }

        /* Mobile (≤640px): hide logo text too, tighten */
        @media (max-width: 640px) {
          .nb { bottom: 1rem; gap: 6px; }
          .nb-name, .nb-sub { display: none; }
          .nb-logo { padding: 5px 7px; }
          .nb-strip { padding: 5px 6px; gap: 0; }
          .nb-btn { padding: 8px 10px; min-width: 38px; }
        }

        /* Very small (≤380px): hide socials pill entirely, compress more */
        @media (max-width: 380px) {
          .nb-socials { display: none !important; }
          .nb-btn { padding: 8px 8px; min-width: 34px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .nb, .nb-btn svg, .nb-socials, .nb-soc { transition: none !important; }
        }
      `}</style>

      <nav className={`nb${visible ? '' : ' nb-hidden'}`} aria-label="Site navigation">

        {/* TOP ROW */}
        <div className="nb-top">
          <button
            className="nb-logo nb-glass"
            onClick={() => go('hero')}
            aria-label="Scroll to top"
          >
            <div className="nb-badge">FA</div>
            <div>
              <div className="nb-name">Fikadu Alemu</div>
              <div className="nb-sub">Portfolio</div>
            </div>
          </button>

          <div className="nb-glass nb-socials">
            {SOCIALS.map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="nb-soc" aria-label={label}>
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="nb-strip nb-glass">
          {NAV.map(({ id, icon: Icon, label }, i) => (
            <>
              {i === 3 && <div key="div" className="nb-divider" aria-hidden="true" />}
              <button
                key={id}
                className={`nb-btn${active === id ? ' nb-active' : ''}`}
                onClick={() => go(id)}
                aria-current={active === id ? 'page' : undefined}
              >
                <Icon size={16} strokeWidth={active === id ? 2.2 : 1.7} />
                <span className="nb-label">{label}</span>
              </button>
            </>
          ))}
        </div>

      </nav>
    </>
  )
}