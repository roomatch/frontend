import Features from './sections/features/Features'
import Invitation from './sections/invitation/Invitation'
import Hero from './sections/hero/Hero'
import Why from './sections/why/Why'
import Footer from './sections/footer/Footer'

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Why />
      <Invitation />
      <Footer />
    </div>
  )
}

export default Home