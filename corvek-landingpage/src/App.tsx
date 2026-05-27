import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <span className="logo-text">CORVEK</span>
          <span className="logo-subtext">Digital Services</span>
        </div>
      </header>

      <main className="main-content">
        <div className="card">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>Under Maintenance</span>
          </div>
          
          <div className="art-container">
            <div className="glow-effect"></div>
            <svg className="tech-graphic" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="44" stroke="url(#electric-glow)" strokeWidth="1.2" strokeDasharray="4 6" className="rotate-clockwise" />
              <circle cx="50" cy="50" r="36" stroke="var(--accent)" strokeWidth="0.6" opacity="0.35" />
              <path d="M50 22L70 42H58L50 30L42 42H30L50 22Z" fill="var(--accent)" fillOpacity="0.85" className="pulse-slow" />
              <path d="M50 78L78 50H62L50 62L38 50H22L50 78Z" fill="url(#electric-glow)" fillOpacity="0.5" className="pulse-slow-delayed" />
              <rect x="47" y="47" width="6" height="6" rx="1" fill="var(--accent)" className="rotate-counter" />
              <defs>
                <linearGradient id="electric-glow" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--accent)" />
                  <stop offset="1" stopColor="rgba(0, 229, 255, 0.05)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h1 className="title">Under Construction</h1>
          
          <p className="description">
            Our specialized engineers are currently crafting the next generation of <strong>Corvek's</strong> web experience. We will be back shortly with next-level digital solutions.
          </p>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-button">
              <svg className="button-icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#github-icon"></use>
              </svg>
              <span>GitHub</span>
            </a>
            
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-button">
              <svg className="button-icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#discord-icon"></use>
              </svg>
              <span>Discord</span>
            </a>
            
            <a href="mailto:info@corvek.com" className="social-button">
              <svg className="button-icon" role="presentation" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Corvek Digital Services. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App


