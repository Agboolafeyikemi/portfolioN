import './Speaking.css'

function Speaking() {
  const talks = [
    {
      event: "Pressable Speaker Series 2025",
      title: "AI Agents & Autonomous Workflows",
      description: "Exploring how AI agents can create autonomous workflows to enhance productivity and streamline development processes.",
      link: " https://youtu.be/BaXd6EGrfAk"
    },
    {
      event: "Devfest Scotland 2025",
      title: "From Chatbot to Agents.",
      description: "A journey through the evolution from simple chatbots to intelligent agents that can reason, plan, and execute complex tasks.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7403192682442878976/"
    },
    {
      event: "Codebar Festival 2024",
      title: "Debugging CSS",
      description: "Sharing techniques and tools for effectively debugging CSS issues in modern web development.",
      link: "https://www.youtube.com/watch?v=GmIU9fTLz1Q&list=PLfJjhFVOvESKwy2Kz2DS7gQD8Ty8iBNRA"
    }
  ]

  return (
    <section id="speaking" className="speaking-container">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
        <line x1="12" x2="12" y1="19" y2="22"></line>
      </svg>
      <h2 className="speaking-heading">Speaking & Talks</h2>
      <p className="speaking-intro">I love sharing what I learn with the community.</p>
      <div className="talks-container">
        {talks.map((talk, index) => (
          <div key={index} className="talk-card">
            <span className="event-title">{talk.event.toUpperCase()}</span>
            <h3 className="talk-title">
              <a href={talk.link} target="_blank" rel="noopener noreferrer">
                {talk.title}
              </a>
            </h3>
            <p className="talk-description">{talk.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Speaking
