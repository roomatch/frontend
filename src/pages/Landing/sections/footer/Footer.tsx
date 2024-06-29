import './Footer.css'
import InstagramIcon from './components/icons/InstagramIcon'
import WhatsappIcon from './components/icons/WhatsappIcon'
import Button from '@uiComponents/button/Button'
import RoomatchIcon from '@assets/logo_personas.svg'

export default function Footer() {
  return (
    <footer className='footer__container' id='footer' >
      <div className="footer__logo-container">
        <div className="footer__logo-image-container">
        <div className='footer__logo-container'>
                <img className='footer__logo-svg' src={RoomatchIcon} alt="" />
                <p>roomatch</p>
                <p className='footer__logo-slogan'>Conecta y Convive</p>
            </div>
        </div>
        <div className="footer__icons-container">
          <a className='footer__link' href='https://www.instagram.com/roomatch_' target='_blank'><InstagramIcon /></a>
          <a className='footer__link' href='https://wa.me/573188601654' target='_blank'><WhatsappIcon /></a>
        </div>
      </div>
      <hr className='footer__separator' />
      <form className='footer__form'>
        <label className='footer__form-label'>Asunto</label>
        <input className='footer__input' type="text" placeholder='Escribe el asunto de tu correo' />
        <label className='footer__form-label'>Correo</label>
        <input className='footer__input' type="email" placeholder='Escribe tu direccón de correo electronico' />
        <label className='footer__form-label'>Mensaje</label>
        <textarea className='footer__input' id='footer__message-input' placeholder='Escribe tu mensaje' />
        <Button variant={'light'} size={'small'} type='submit' text='Enviar' className='footer__button' />
      </form>
    </footer>
  )
}
