import Button from "@/components/button/Button"
import "./Hero.css"

export default function Hero() {
  return (
    <div className='hero-container'>
      <header className='landing__header'>
        En <span className='landing__header__text-highlighted'>Roomatch</span> encuentra tu roomie ideal, <span className='landing__header__text-highlighted'>conecta</span> y <span className='landing__header__text-highlighted'>convive</span>
      </header>
      <div className="landing__buttons-container">
        <Button text="Registrate como roomie"/>
        <Button text="Registrate como arrendatario"/>
      </div>
    </div>
  )
}