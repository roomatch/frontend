import Button from "@uiComponents/button/Button"
import "./NavBar.css"
import RoomatchIcon from "@components/roomatch-logo/RoomatchLogo"

export default function NavBar() {
  return (
    <nav className='navbar-container'>
      <RoomatchIcon isAnimated={true}/>
      <div className='navbar__links-container'>
        <a href='#' className='navbar__link'>Funcionalidades</a>
        <a href='#' className='navbar__link'>Problematica</a>
        <a href='#' className='navbar__link'>Ventajas</a>
        <a href='#' className='navbar__link'>Contacto</a>
        <Button variant='dark' size='small' hRef="#" text="Registrate"/>
      </div>
    </nav>
  )
}
