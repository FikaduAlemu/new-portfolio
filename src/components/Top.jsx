import { useState, useEffect } from 'react'
import { GitBranch, Bookmark, BarChart2 } from 'lucide-react'
import logo from '../assets/images/fikadu.jpeg'

const navLinks = ['About', 'Stack', 'Projects', 'Career', 'Contact']

export default function Topnav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem',
      height: '60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(15,14,12,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      {/* Logo */}
      <div style={{
        width: 38, height: 38, borderRadius: 999, overflow: 'hidden',
        background: 'linear-gradient(135deg, #c8963c, #8a6020)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: '14px', color: '#fff', letterSpacing: '-0.5px',
        boxShadow: '0 4px 16px rgba(200,150,60,0.3)'
      }}>
        <img src={logo} alt="Logo" style={{ width: 38, height: 38 }} />
      </div>

      {/* Nav links */}
      {/* <div style={{ display: 'flex', gap: '0.25rem' }}>
        {navLinks.map(link => (
          <button key={link} onClick={() => scrollTo(link)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '6px 14px', borderRadius: '8px',
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
              color: active === link ? 'var(--gold)' : 'var(--text-muted)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = active === link ? 'var(--gold)' : 'var(--text-muted)'}
          >{link}</button>
        ))}
      </div> */}

      {/* Actions */}
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <a href="https://github.com" target="_blank" rel="noreferrer"
          style={{
            width: 34, height: 34, borderRadius: '8px',
            background: 'var(--bg3)', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-muted)', transition: 'all 0.2s', textDecoration: 'none'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg4)'; e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.style.color = 'var(--text-muted)' }}
        ><Bookmark size={14} /></a>
        <a href="#"
          style={{
            width: 34, height: 34, borderRadius: '8px',
            background: 'var(--bg3)', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-muted)', transition: 'all 0.2s', textDecoration: 'none'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg4)'; e.currentTarget.style.color = 'var(--text)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.style.color = 'var(--text-muted)' }}
        ><BarChart2 size={14} /></a>
      </div>
    </nav>
  )
}
