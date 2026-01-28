import { useState } from 'react'
import './Uses.css'

function Uses() {
  const [mode, setMode] = useState('dev')

  const handleCopy = () => {
    const config = `{
  "hardware": {
    "laptop": "14\" MacBook M4 Pro",
    "monitor": "LG",
    "keyboard": "Apple Magic Keyboard",
    "mouse": "Logitech M185",
    "desk": "Standing desk",
    "chair": "Ergonomic Office Chair"
  },
  "software": {
    "communication": "Slack, Jira",
    "design": "Figma",
    "terminal": "iTerm with Oh My Zsh",
    "editor": "VS Code",
    "database": "Sequel Pro, Compass",
    "client": "Postman",
    "browser": "Google Chrome, Brave",
    "snippet": "Carbon, Polacode",
    "music": "Spotify"
  },
  "onRepeat": {
    "song": "Counting My Blessings",
    "artist": "Seph Schlueter"
  }
}`
    navigator.clipboard.writeText(config)
  }

  return (
    <div className="uses-page">
      <header className="uses-header">
        <div>
          <h1 className="creative-title">My Studio</h1>
          <p>Curated for code & creativity.</p>
        </div>
        <div className="mode-toggle" data-mode={mode}>
          <div className="toggle-bg bg-light" style={{ opacity: 1 }}></div>
          <button 
            onClick={() => setMode('dev')}
            style={{ color: mode === 'dev' ? 'var(--text-primary)' : 'var(--text-muted)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 19h8"></path>
              <path d="m4 17 6-6-6-6"></path>
            </svg>
            Dev
          </button>
          <button 
            onClick={() => setMode('visual')}
            style={{ color: mode === 'visual' ? 'var(--text-primary)' : 'var(--text-muted)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </svg>
            Visual
          </button>
        </div>
      </header>

      {mode === 'dev' ? (
        <div className="terminal-container" style={{ opacity: 1, transform: 'none' }}>
          <div className="terminal-header">
            <div className="dots">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
            <button className="copy-btn" onClick={handleCopy} aria-label="Copy configuration">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </button>
          </div>
          <div className="terminal-body">
            <p className="command">
              <span className="cmd-arrow">➜ </span>
              <span className="cmd-tilde">~</span>cat configuration.json
            </p>
            <pre>
              <code>
                <span className="json-brace">{'{'}</span>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="json-key">"hardware"</span>: <span className="json-brace">{'{'}</span>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"laptop"</span>: <span className="json-string">"14\" MacBook M4 Pro"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"monitor"</span>: <span className="json-string">"LG"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"keyboard"</span>: <span className="json-string">"Apple Magic Keyboard"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"mouse"</span>: <span className="json-string">"Logitech M185"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"desk"</span>: <span className="json-string">"Standing desk"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"chair"</span>: <span className="json-string">"Ergonomic Office Chair"</span>
                  </div>
                  <span className="json-brace">{'}'}</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="json-key">"software"</span>: <span className="json-brace">{'{'}</span>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"communication"</span>: <span className="json-string">"Slack, Jira"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"design"</span>: <span className="json-string">"Figma"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"terminal"</span>: <span className="json-string">"iTerm with Oh My Zsh"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"editor"</span>: <span className="json-string">"VS Code"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"database"</span>: <span className="json-string">"Sequel Pro, Compass"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"client"</span>: <span className="json-string">"Postman"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"browser"</span>: <span className="json-string">"Google Chrome, Brave"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"snippet"</span>: <span className="json-string">"Carbon, Polacode"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"music"</span>: <span className="json-string">"Spotify"</span>
                  </div>
                  <span className="json-brace">{'}'}</span>,
                </div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <span className="json-key">"onRepeat"</span>: <span className="json-brace">{'{'}</span>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"song"</span>: <span className="json-string">"Counting My Blessings"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="json-key">"artist"</span>: <span className="json-string">"Seph Schlueter"</span>
                  </div>
                  <span className="json-brace">{'}'}</span>
                </div>
                <span className="json-brace">{'}'}</span>
              </code>
            </pre>
          </div>
        </div>
      ) : (
        <div className="bento-grid" style={{ opacity: 1, transform: 'none' }}>
        <div className="bento-card card-hardware">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cpu" aria-hidden="true" style={{ opacity: 0.1, position: 'absolute', top: '20px', right: '20px' }}>
            <path d="M12 20v2"></path>
            <path d="M12 2v2"></path>
            <path d="M17 20v2"></path>
            <path d="M17 2v2"></path>
            <path d="M2 12h2"></path>
            <path d="M2 17h2"></path>
            <path d="M2 7h2"></path>
            <path d="M20 12h2"></path>
            <path d="M20 17h2"></path>
            <path d="M20 7h2"></path>
            <path d="M7 20v2"></path>
            <path d="M7 2v2"></path>
            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
            <rect x="8" y="8" width="8" height="8" rx="1"></rect>
          </svg>
          <h3>Hardware</h3>
          <ul>
            <li><strong>Laptop:</strong> 14" MacBook M4 Pro</li>
            <li><strong>Monitor:</strong> LG</li>
            <li><strong>Peripherals:</strong> Apple Magic Keyboard & Logitech M185</li>
            <li><strong>Desk Setup:</strong> Standing desk & Ergonomic Office Chair</li>
          </ul>
        </div>

        <div className="bento-card card-editor">
          <div>
            <h3>Editor</h3>
            <p style={{ color: 'var(--text-muted)' }}>VS Code</p>
          </div>
          <div style={{ fontSize: '2rem', opacity: 0.2 }}>&lt;/&gt;</div>
        </div>

        <div className="bento-card card-spotify">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1DB954" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music" aria-hidden="true">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
          <h3>On Repeat</h3>
          <p>Counting My Blessings — Seph Schlueter</p>
          <div style={{ display: 'flex', gap: '4px', marginTop: '1rem', height: '50px', alignItems: 'flex-end' }}>
            <div className="visualizer-bar" style={{ width: '100%', borderRadius: '2px', height: '40.0497%' }}></div>
            <div className="visualizer-bar" style={{ width: '100%', borderRadius: '2px', height: '49.4647%' }}></div>
            <div className="visualizer-bar" style={{ width: '100%', borderRadius: '2px', height: '70.6849%' }}></div>
            <div className="visualizer-bar" style={{ width: '100%', borderRadius: '2px', height: '40.0248%' }}></div>
            <div className="visualizer-bar" style={{ width: '100%', borderRadius: '2px', height: '43.5718%' }}></div>
          </div>
        </div>

        <div className="bento-card card-software">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid" aria-hidden="true">
            <rect width="7" height="7" x="3" y="3" rx="1"></rect>
            <rect width="7" height="7" x="14" y="3" rx="1"></rect>
            <rect width="7" height="7" x="14" y="14" rx="1"></rect>
            <rect width="7" height="7" x="3" y="14" rx="1"></rect>
          </svg>
          <h3>Software</h3>
          <div className="tags-container">
            <span className="tag">Slack, Jira</span>
            <span className="tag">Figma</span>
            <span className="tag">iTerm with Oh My Zsh</span>
            <span className="tag">Sequel Pro, Compass</span>
            <span className="tag">Postman</span>
            <span className="tag">Google Chrome, Brave</span>
            <span className="tag">Carbon, Polacode</span>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Uses
