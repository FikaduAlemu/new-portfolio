import { useEffect, useRef, useState } from 'react'
import { Send, Mail, MapPin, GitBranch, Code2, Link2 } from 'lucide-react'

export default function Contact() {
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.12 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  const input = {
    width: '100%', padding: '10px 14px', borderRadius: 10,
    background: 'var(--bg2)', border: '1px solid var(--border)',
    color: 'var(--text)', fontFamily: 'var(--font-body)', fontSize: 14,
    outline: 'none', transition: 'border-color .2s',
  }

  return (
    <>
      <style>{`
        .contact-section {
          padding: var(--section-py) var(--section-px);
          max-width: var(--max-w); margin: 0 auto;
          background: var(--bg);
        }
        .contact-h2 {
          font-family: var(--font-display); font-weight: 800;
          font-size: clamp(2.2rem, 5vw, 3.8rem); letter-spacing: -.03em;
          line-height: 1.06; margin-bottom: .5rem; color: var(--text);
        }
        .contact-sub { font-size: 15px; color: var(--text-muted); margin-bottom: 3rem; }
        .contact-grid {
          display: grid; grid-template-columns: 1fr 360px; gap: 3rem; align-items: start;
        }
        .contact-form { display: flex; flex-direction: column; gap: 12px; }
        .contact-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .contact-submit {
          padding: 11px 24px; border-radius: 10px;
          border: none; cursor: pointer;
          font-family: var(--font-body); font-weight: 600; font-size: 14px;
          display: flex; align-items: center; gap: 8px;
          transition: all .3s; align-self: flex-start;
        }
        .contact-submit.idle {
          background: linear-gradient(135deg, #B58C3D, #8a6820);
          color: #fff; box-shadow: 0 4px 18px rgba(181,140,61,.3);
        }
        .contact-submit.idle:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(181,140,61,.38); }
        .contact-submit.sent {
          background: rgba(45,158,107,.1);
          border: 1px solid rgba(45,158,107,.3);
          color: var(--green); box-shadow: none;
        }
        .contact-panel {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 16px; padding: 1.5rem; margin-bottom: 16px;
        }
        .contact-info-row {
          display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px;
        }
        .contact-info-row:last-child { margin-bottom: 0; }
        .contact-ico {
          width: 34px; height: 34px; border-radius: 9px;
          background: var(--bg4); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold); flex-shrink: 0;
        }
        .contact-lbl { font-size: 11px; color: var(--text-dim); font-family: var(--font-mono); }
        .contact-val { font-size: 13px; color: var(--text); margin-top: 2px; }
        .contact-soc-hd {
          font-size: 11px; color: var(--text-dim);
          font-family: var(--font-mono); margin-bottom: 12px; letter-spacing: .08em;
        }
        .contact-soc-row { display: flex; gap: 10px; }
        .contact-soc-btn {
          width: 40px; height: 40px; border-radius: 10px;
          background: var(--bg4); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-muted); text-decoration: none; transition: all .2s;
        }
        .contact-soc-btn:hover {
          color: var(--gold); border-color: var(--gold-border); background: var(--gold-dim);
        }

        /* Responsive */
        @media (max-width: 820px) {
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 540px) {
          .contact-row { grid-template-columns: 1fr; }
          .contact-h2 { font-size: clamp(2rem, 8vw, 2.8rem); }
          .contact-sub { margin-bottom: 2rem; }
        }
      `}</style>

      <section id="contact" className="contact-section" ref={ref}>
        <div className="section-label" style={{ opacity: visible ? 1 : 0, transition: 'opacity .5s' }}>
          <span />&nbsp;CONTACT
        </div>

        <h2 className="contact-h2" style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all .6s ease'
        }}>
          Let's build something<br />
          <span style={{ color: 'var(--gold)' }}>extraordinary.</span>
        </h2>

        <p className="contact-sub" style={{ opacity: visible ? 1 : 0, transition: 'opacity .6s ease .1s' }}>
          Have a project in mind? Let's talk about it.
        </p>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form" style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'all .7s ease .2s'
          }}>
            <div className="contact-row">
              <input placeholder="Your name" value={form.name}
                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                style={input}
                onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
              <input placeholder="Email address" value={form.email}
                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                style={input}
                onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
            <textarea placeholder="Tell me about your project..." value={form.message}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              rows={5}
              style={{ ...input, resize: 'none', lineHeight: 1.6 }}
              onFocus={e => e.target.style.borderColor = 'var(--gold)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <button onClick={handleSubmit}
              className={`contact-submit ${sent ? 'sent' : 'idle'}`}>
              {sent ? '✓ Message sent!' : <><Send size={14} /> Send Message</>}
            </button>
          </div>

          {/* Info */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(20px)',
            transition: 'all .7s ease .3s'
          }}>
            <div className="contact-panel">
              <div className="contact-info-row">
                <div className="contact-ico"><Mail size={15} /></div>
                <div>
                  <div className="contact-lbl">Email</div>
                  <div className="contact-val">hello@fa.dev</div>
                </div>
              </div>
              <div className="contact-info-row">
                <div className="contact-ico"><MapPin size={15} /></div>
                <div>
                  <div className="contact-lbl">Location</div>
                  <div className="contact-val">Addis Ababa, Ethiopia</div>
                </div>
              </div>
            </div>

            <div className="contact-panel">
              <div className="contact-soc-hd">SOCIAL</div>
              <div className="contact-soc-row">
                {[
                  { icon: <GitBranch size={16} />, href: 'https://github.com' },
                  { icon: <Code2 size={16} />,     href: '#' },
                  { icon: <Link2 size={16} />,     href: '#' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer"
                    className="contact-soc-btn">{s.icon}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}