import "./Landing.css"
import Features from './sections/Features/Features'
import Invitation from './sections/iInvitation/Invitation'
import Hero from './sections/hero/Hero'

function Home() {
  return (
    <div className='landing-container'>
      <Hero />
      <Features />
      <Invitation />
    </div>
  )
}

export default Home