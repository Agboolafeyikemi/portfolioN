import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './Header.css'

function Header() {
  const location = useLocation()
  const logoRef = useRef(null)

  useEffect(() => {
    // #region agent log
    if (logoRef.current) {
      const logo = logoRef.current
      const computed = window.getComputedStyle(logo)
      const rect = logo.getBoundingClientRect()
      fetch('http://127.0.0.1:7244/ingest/f5b04e0d-37c3-47a8-a997-b05653d65ccc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Header.jsx:useEffect',message:'Logo computed styles - no filter',data:{height:computed.height,width:computed.width,actualHeight:rect.height,actualWidth:rect.width,filter:computed.filter},timestamp:Date.now(),sessionId:'debug-session',runId:'no-filter',hypothesisId:'C'})}).catch(()=>{});
    }
    // #endregion
  }, [])

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <img ref={logoRef} src="/logo.webp" alt="Feyi Ogunsanya" className="logo-image" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/work" 
                className={location.pathname === '/work' ? 'active' : ''}
              >
                Work
              </Link>
            </li>
            <li>
              <Link 
                to="/uses" 
                className={location.pathname === '/uses' ? 'active' : ''}
              >
                Uses
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
