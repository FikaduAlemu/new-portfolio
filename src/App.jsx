import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Career from './components/Career'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse 80% 40% at 20% 10%, rgba(200,150,60,0.04) 0%, transparent 60%), radial-gradient(ellipse 60% 30% at 80% 80%, rgba(79,125,243,0.03) 0%, transparent 60%)'
      }} />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
