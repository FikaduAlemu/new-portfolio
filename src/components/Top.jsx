import { useState, useEffect } from 'react'
import { Github, BarChart2 } from 'lucide-react'
import logo from '../assets/images/fikadu.jpeg'

export default function Topnav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <>
      <style>{`
        .topnav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          height: 60px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2rem;
          transition: background .35s, box-shadow .35s, backdrop-filter .35s;
        }
        .topnav.scrolled {
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          box-shadow: 0 1px 0 var(--border), 0 4px 24px rgba(0,0,0,0.06);
        }
        .topnav-logo {
          width: 38px; height: 38px; border-radius: 50%;
          overflow: hidden; flex-shrink: 0;
          border: 2px solid var(--gold-border);
          box-shadow: 0 2px 12px rgba(181,140,61,.2);
          transition: box-shadow .2s, transform .2s;
        }
        .topnav-logo:hover {
          box-shadow: 0 4px 20px rgba(181,140,61,.35);
          transform: scale(1.05);
        }
        .topnav-logo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .topnav-actions { display: flex; gap: 8px; align-items: center; }
        .topnav-btn {
          width: 34px; height: 34px; border-radius: 9px;
          background: var(--bg2); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-muted); text-decoration: none;
          transition: all .2s; cursor: pointer;
        }
        .topnav-btn:hover {
          background: var(--gold-dim);
          border-color: var(--gold-border);
          color: var(--gold);
          transform: translateY(-1px);
        }

        /* Responsive */
        @media (max-width: 640px) {
          .topnav { padding: 0 1.25rem; height: 52px; }
        }
      `}</style>

      <header className={`topnav${scrolled ? ' scrolled' : ''}`}>
        <div className="topnav-logo">
          <img src={logo} alt="Fikadu Alemu" />
        </div>

        <div className="topnav-actions">
          <a href="https://github.com" target="_blank" rel="noreferrer"
            className="topnav-btn" aria-label="GitHub">
            <Github size={14} />
          </a>
          <a href="#" className="topnav-btn" aria-label="Analytics">
            <BarChart2 size={14} />
          </a>
        </div>
      </header>
    </>
  )
}