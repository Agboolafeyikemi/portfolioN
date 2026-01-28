import Hero from '../components/Hero'
import Speaking from '../components/Speaking'
import OpenSource from '../components/OpenSource'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      <Speaking />
      <OpenSource />
    </div>
  )
}

export default Home
