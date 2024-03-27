import Button from "@uiComponents/button/Button"
import "./NavBar.css"
import RoomatchIcon from "@components/roomatch-logo/RoomatchLogo"

export default function NavBar() {
  return (
    <nav className='navbar-container'>
      <RoomatchIcon isAnimated={true}/>
      <div className='navbar__links-container'>
        <a href='#features' className='navbar__link'>Funcionalidades</a>
        <a href='#problematic' className='navbar__link'>Problematica</a>
        <a href='#why' className='navbar__link'>¿Por qué Roomatch?</a>
        <a href='#footer' className='navbar__link'>Contacto</a>
        <Button variant='dark' size='small' hRef="#invitation" text="Registrate"/>
      </div>
    </nav>
  )
}
