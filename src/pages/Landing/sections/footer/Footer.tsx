import RoomatchIcon from '@components/roomatch-logo/RoomatchLogo'
import './Footer.css'
import InstagramIcon from './components/icons/InstagramIcon'
import WhatsappIcon from './components/icons/WhatsappIcon'
import Button from '@uiComponents/button/Button'
import { useForm, ValidationError } from '@formspree/react';

export default function Footer() {

  // Inicializar la conexión a Formspree con el ID.
  const [state, handleSubmit] = useForm("mbjnpprk");

  // Validacion de si se envio correctamente. 
  if(state.succeeded) {
    return (
      <footer className='footer__container' id='footer'>
        <div className="footer__logo-container">
                  <RoomatchIcon isAnimated={false}/>
                  <div className="footer__icons-container">
                      <a className='footer__link' href='https://www.instagram.com/roomatch_' target='_blank'><InstagramIcon/></a>
                      <a className='footer__link' href='https://wa.me/573188601654' target='_blank'><WhatsappIcon/></a>
                  </div>
              </div>
              <hr className='footer__separator'/>
              <label className='footer__form-message'>Gracias por contactarnos!</label>
      </footer>
    )
  }

  return (
    <footer className='footer__container' id='footer' >
        <div className="footer__logo-container">
            <RoomatchIcon isAnimated={false}/>
            <div className="footer__icons-container">
                <a className='footer__link' href='https://www.instagram.com/roomatch_' target='_blank'><InstagramIcon/></a>
                <a className='footer__link' href='https://wa.me/573188601654' target='_blank'><WhatsappIcon/></a>
            </div>
        </div>
        <hr className='footer__separator'/>
        <form className='footer__form' onSubmit={handleSubmit}>
            <label className='footer__form-label'>Asunto</label>
            <input  className='footer__input'  type="text" name="subject" placeholder='Escribe el asunto de tu correo' required title="Campo requerido"/>
            <label className='footer__form-label'>Correo</label>
            <input  className='footer__input' type="email" name="email" placeholder='Escribe tu dirección de correo electronico' required title="Campo requerido"/>
            <ValidationError field="email" prefix="Email" errors={state.errors} />
            <label className='footer__form-label'>Mensaje</label>
            <textarea className='footer__input' id='footer__message-input' name="message" placeholder='Escribe tu mensaje' required title="Campo requerido"/>
            <ValidationError field="message" prefix="Message" errors={state.errors} />
            <Button variant={'light'} size={'small'} type='submit' text={state.submitting ? 'Enviando...' : 'Enviar'} className='footer__button' disabled={state.submitting}/>
        </form>
    </footer>
  );
}
