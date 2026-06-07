export default function Footer() {
  return (
    <footer style={{
      padding: '2rem', borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      maxWidth: '1100px', margin: '0 auto',
      fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)'
    }}>
      <span>© {new Date().getFullYear()} Tatty. All rights reserved.</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        Built with <span style={{ color: '#e44d26' }}>❤</span> in React + Vite
      </span>
    </footer>
  )
}
