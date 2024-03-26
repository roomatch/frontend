import Button from "@uiComponents/button/Button"
import "./NavBar.css"
import  logo from './assets/logo_personas.svg'

export default function NavBar() {
  return (
    <nav className='navbar-container'>
      <div className='navbar__logo-container'>
        <img className='navbar__logo' src={logo} alt="logo de Roomatch" />
        <p>roomatch</p>
      </div>
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
