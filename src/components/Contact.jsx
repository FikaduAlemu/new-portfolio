import { useEffect, useRef, useState } from 'react'
import { Send, Mail, MapPin, Code2, GitBranch, Link2 } from 'lucide-react'

export default function Contact() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: '10px',
    background: 'var(--bg3)', border: '1px solid var(--border)',
    color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: '14px',
    outline: 'none', transition: 'border-color 0.2s'
  }

  return (
    <section id="contact" ref={ref} style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--gold)',
        letterSpacing: '0.12em', marginBottom: '1rem',
        opacity: visible ? 1 : 0, transition: 'opacity 0.5s'
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
        CONTACT
      </div>

      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em',
        lineHeight: 1.05, marginBottom: '0.5rem',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease'
      }}>
        Let's build something<br />
        <span style={{ color: 'var(--gold)' }}>extraordinary.</span>
      </h2>

      <p style={{
        fontSize: '15px', color: 'var(--text-muted)', marginBottom: '3rem',
        opacity: visible ? 1 : 0, transition: 'opacity 0.6s ease 0.1s'
      }}>Have a project in mind? Let's talk about it.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>
        {/* Form */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '12px',
          opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'all 0.7s ease 0.2s'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <input placeholder="Your name" value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <input placeholder="Email address" value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
          <textarea placeholder="Tell me about your project..." value={form.message}
            onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
            rows={5}
            style={{ ...inputStyle, resize: 'none', lineHeight: 1.6 }}
            onFocus={e => e.target.style.borderColor = 'var(--gold)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
          <button onClick={handleSubmit}
            style={{
              padding: '11px 24px', borderRadius: '10px',
              background: sent ? '#4ade8022' : 'linear-gradient(135deg, #c8963c, #a07030)',
              border: sent ? '1px solid #4ade80' : 'none',
              color: sent ? '#4ade80' : '#fff', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '14px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              boxShadow: sent ? 'none' : '0 4px 20px rgba(200,150,60,0.3)',
              transition: 'all 0.3s', alignSelf: 'flex-start'
            }}
          >
            {sent ? '✓ Message sent!' : <><Send size={14} /> Send Message</>}
          </button>
        </div>

        {/* Info */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: '16px',
          opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(20px)',
          transition: 'all 0.7s ease 0.3s'
        }}>
          <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: <Mail size={15} />, label: 'Email', value: 'hello@tatty.dev' },
                { icon: <MapPin size={15} />, label: 'Location', value: 'Addis Ababa, Ethiopia' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: '9px',
                    background: 'var(--bg4)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--gold)', flexShrink: 0
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{item.label}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text)', fontFamily: 'var(--font-body)', marginTop: '2px' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'var(--bg2)', border: '1px solid var(--border)',
            borderRadius: '16px', padding: '1.25rem'
          }}>
            <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '12px', letterSpacing: '0.08em' }}>SOCIAL</div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: <GitBranch size={16} />, href: 'https://github.com' },
                { icon: <Code2 size={16} />, href: '#' },
                { icon: <Link2 size={16} />, href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  style={{
                    width: 40, height: 40, borderRadius: '10px',
                    background: 'var(--bg4)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', textDecoration: 'none', transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)55' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                >{s.icon}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
