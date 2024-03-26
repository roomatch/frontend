import Features from './sections/features/Features'
import Invitation from './sections/invitation/Invitation'
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