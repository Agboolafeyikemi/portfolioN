import { useState, useEffect } from 'react'
import './Work.css'

function Work() {
  const [activeSection, setActiveSection] = useState('skills')

  const frontendSkills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Nuxt', 'HTML5', 'CSS3', 'SCSS', 'Tailwind', 'Redux', 'Zustand', 'React Router', 'React Hooks']
  const backendSkills = ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'PostgreSQL', 'MongoDB', 'SQLite', 'Python', 'C#', 'SQL']
  const toolsSkills = ['Git', 'Docker', 'AWS', 'Storybook', 'LangChain', 'OpenAI', 'MCP', 'RAG', 'System Design']
  const testingSkills = ['Jest', 'Vitest', 'RTL', 'Playwright', 'Cypress', 'Vite']

  const experience = [
    {
      period: '2025 - Present',
      title: 'Senior Software Engineer',
      company: 'Axon',
      companyUrl: 'https://opensourcelabs.io',
      description: 'Engineered a TypeScript observability platform with optimized SQLite schema achieving sub-200ms query performance across 10M+ traces. Implemented callback-based tracers for LangChain and OpenAI with React Flow visual layer.',
      technologies: ['TypeScript', 'React', 'SQLite', 'LangChain', 'OpenAI', 'React Flow', 'Node.js', 'MCP', 'RAG']
    },
    {
      period: '2023 - 2024',
      title: 'Digital Developer',
      company: 'Manchester City Football Club',
      companyUrl: 'https://www.mancity.com/',
      description: 'Modernized full-stack migration from .NET Core to Next.js/TypeScript, refactoring 40+ components with server-side rendering. Orchestrated Nx monorepo with shared ESLint presets and implemented WCAG 2.1 AA standards.',
      technologies: ['Next.js', 'TypeScript', 'Nx', 'WCAG 2.1', 'Jest', 'Accessibility', 'React', 'SCSS']
    },
    {
      period: '2022 - 2023',
      title: 'Software Engineer',
      company: 'Youverify',
      companyUrl: 'https://youverify.co',
      description: 'Launched internal Vue.js training platform with Vuex state management for progress tracking and interactive quiz modules, upskilling 500+ verification agents and accelerating onboarding efficiency by 70%.',
      technologies: ['Vue.js', 'Vuex', 'JavaScript', 'Jest', 'Cypress', 'REST']
    },
    {
      period: '2019 - 2022',
      title: 'Software Engineer',
      company: 'Konga',
      companyUrl: 'https://www.konga.com/',
      description: 'Established reusable React component system with Storybook. Scaled platform performance with Cloudflare CDN and React lazy loading, reducing time-to-interactive by 40%. Implemented AI product recommendations increasing average order value by 25%.',
      technologies: ['React', 'Redux', 'Storybook', 'Cloudflare', 'REST APIs', 'GraphQL', 'Node.js', 'SQL', 'Next.js', 'SCSS', 'Jest']
    }
  ]

  const volunteering = [
    {
      role: 'Coach',
      organization: 'codebar',
      period: 'Jan 2024 - Present',
      field: 'Science and Technology'
    },
    {
      role: 'AI Engineer',
      organization: 'All Tech Is Human',
      period: 'Jul 2024 - Present'
    },
    {
      role: 'Mentor',
      organization: 'She Code Africa',
      period: 'Aug 2020 - Present'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['skills', 'experience', 'volunteering']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="split-layout">
      <header className="sticky-header">
        <div>
          <h2 className="hero-title">&lt; /&gt;</h2>
          <p className="hero-bio">
            I build pixel-perfect digital experiences with accessibility at the core.
          </p>
          <nav className="nav-menu">
            <ul>
              <li>
                <a
                  href="#skills"
                  className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('skills')
                  }}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">SKILLS</span>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('experience')
                  }}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">EXPERIENCE</span>
                </a>
              </li>
              <li>
                <a
                  href="#volunteering"
                  className={`nav-link ${activeSection === 'volunteering' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('volunteering')
                  }}
                >
                  <span className="nav-indicator"></span>
                  <span className="nav-text">VOLUNTEERING</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="socials">
          <a
            className="icon_linkedin"
            href="https://www.linkedin.com/in/feyikemiogunsanya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Feyi Ogunsanya on LinkedIn"
            title="LinkedIn"
          >
            <svg height="25" width="25" viewBox="0 0 448 512" fill="white">
              <path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"/>
            </svg>
          </a>
          <a
            className="icon_github"
            href="https://github.com/Agboolafeyikemi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Feyi Ogunsanya on Github"
            title="GitHub"
          >
            <svg height="25" width="25" viewBox="0 0 496 512" fill="white">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
          </a>
          <a
            className="icon_email"
            href="mailto:feyikemiogunsanya@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <svg height="25" width="25" viewBox="0 0 24 24" fill="white">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
          </a>
        </div>
      </header>

      <main className="scrollable-content">
        <section id="skills" className="section" style={{ marginTop: '3rem' }}>
          <div className="skills-grid">
            <div className="skill-box">
              <div className="skill-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                </svg>
                <h4>Frontend</h4>
              </div>
              <div className="skill-tag-wrapper">
                {frontendSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                </svg>
                <h4>Backend</h4>
              </div>
              <div className="skill-tag-wrapper">
                {backendSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
                <h4>Tools & Technologies</h4>
              </div>
              <div className="skill-tag-wrapper">
                {toolsSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-box">
              <div className="skill-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 11.24V7.5a2.5 2.5 0 0 1 5 0v3.74"></path>
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
                <h4>Testing</h4>
              </div>
              <div className="skill-tag-wrapper">
                {testingSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-header-mobile">Experience</div>
          <ol className="experience-list">
            {experience.map((exp, index) => (
              <li key={index}>
                <div className="experience-card">
                  <header className="exp-date" aria-label={exp.period}>
                    {exp.period}
                  </header>
                  <div className="exp-container">
                    <h3 className="exp-title">
                      <a href={exp.companyUrl} target="_blank" rel="noreferrer noopener">
                        {exp.title} · {exp.company}
                        <span className="exp-arrow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                      </a>
                    </h3>
                    <p className="exp-desc">{exp.description}</p>
                    <ul className="tags-list" aria-label="Technologies used">
                      {exp.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="tag">{tech}</div>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="volunteering" className="section">
          <div className="section-header-mobile">Volunteering</div>
          <div className="volunteering-container">
            {volunteering.map((vol, index) => (
              <div key={index} className="volunteer-card">
                <div className="volunteer-date">
                  <span>{vol.period}</span>
                </div>
                <div className="volunteer-content">
                  <h3 className="volunteer-title">
                    {vol.role} · {vol.organization}
                  </h3>
                  {vol.field && (
                    <div className="volunteer-field">
                      <span className="field-tag">{vol.field}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Work
