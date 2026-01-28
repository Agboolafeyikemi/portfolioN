import './OpenSource.css'

function OpenSource() {
  const projects = [
    {
      title: "Reactime",
      description: "An all-in-one developer tool for React-based applications. Time-travel debugging, state visualization, and comprehensive insights into your React components.",
      link: "https://www.reacti.me/",
      image: "/img/reactime.jpg",
      aspectRatio: "70.30201342281879%"
    },
    {
      title: "Refact.ai",
      description: "Your open-source, autonomous AI agent that codes like you, thinks like you, and adapts to your workflow instantly. Deploy on-premise and stay in full control.",
      link: "https://refact.ai/",
      image: "/img/refact.jpg",
      aspectRatio: "70.30201342281879%"
    },
    {
      title: "OSLabs",
      description: "A nonprofit tech accelerator devoted to furthering high-impact open source software within a collaborative community of dedicated engineers and mentors. Our mission is to advance open source innovation by supporting engineering leaders dedicated to building products that benefit the software engineering community.",
      link: "https://www.opensourcelabs.io/",
      image: "/img/oslabs.png",
      aspectRatio: "70.30201342281879%"
    }
  ]

  return (
    <section>
      <h2 className="section-header">
        <span className="section-title">Open Source Projects</span>
      </h2>
      <div className="latest-articles">
        {projects.map((project, index) => (
          <div key={index} className="card-wrapper">
            <a aria-label={project.title} href={project.link} target="_blank" rel="noopener noreferrer">
              <article className="card">
                <div data-gatsby-image-wrapper="" className="gatsby-image-wrapper card-image">
                  <div aria-hidden="true" style={{ paddingTop: project.aspectRatio }}></div>
                  <div 
                    aria-hidden="true" 
                    data-placeholder-image="" 
                    style={{ 
                      opacity: 0, 
                      transition: 'opacity 500ms linear', 
                      backgroundColor: 'rgb(8, 8, 8)', 
                      position: 'absolute', 
                      inset: '0px' 
                    }}
                  ></div>
                  <picture>
                    <img 
                      data-main-image="" 
                      style={{ opacity: 1 }} 
                      sizes="100vw" 
                      decoding="async" 
                      loading="lazy" 
                      alt={`${project.title}.`} 
                      src={project.image}
                    />
                  </picture>
                </div>
                <div className="card-body">
                  <p className="card-title">{project.title}</p>
                  <p className="card-description">{project.description}</p>
                </div>
              </article>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OpenSource
