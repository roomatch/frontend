import Invitation from './sections/invitation/Invitation'
import Hero from './sections/hero/Hero'
import Why from './sections/why/Why'
import Footer from './sections/footer/Footer'
import Problematic from './sections/probelmatic/Problematic'
import Functionalities from './sections/functionalities/Functionalities'

function Home() {

  return (
    <div>
      <Hero />
      <Functionalities />
      <Problematic />
      <Why />
      <Invitation />
      <Footer />
    </div>
  )
}

export default Home