import Button from "@/components/ui/button/Button"
import "./Hero.css"

export default function Hero() {
  return (
    <div className='hero-container'>
      <header className='landing__header'>
        En <span className='landing__header__text-highlighted'>Roomatch</span> encuentra tu roomie ideal, <span className='landing__header__text-highlighted'>conecta</span> y <span className='landing__header__text-highlighted'>convive</span>
      </header>
      <div className="landing__buttons-container">
        <Button variant='dark' size='regular' hRef="#" text="Registrarme como roomie"/>
        <Button variant='dark' size='regular' hRef="#" text="Registrarme como arrendatario"/>
      </div>
    </div>
  )
}