import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Work from './pages/Work'
import Uses from './pages/Uses'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      document.documentElement.style.setProperty('--mouse-x', `${x}px`)
      document.documentElement.style.setProperty('--mouse-y', `${y}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/uses" element={<Uses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
