import Features from './sections/Features/Features'
import Invitation from './sections/iInvitation/Invitation'
import Hero from './sections/hero/Hero'
import Why from './sections/why/Why'

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Why />
      <Invitation />
    </div>
  )
}

export default Home