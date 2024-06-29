import './Footer.css'
import InstagramIcon from './components/icons/InstagramIcon'
import WhatsappIcon from './components/icons/WhatsappIcon'
import Button from '@uiComponents/button/Button'
import RoomatchIcon from '@assets/logo_personas.svg'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Footer() {

  const success = () => toast.success('¡Enviado! Te responderemos pronto.', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
    });;

    const loading = () => toast.info('Enviando formulario...', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      });;

    const error = () => toast.error('Error al enviar formulario. Por faavor comunicate con nosotros por otro medio.', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      });;

  const onSubmit = async (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB_3_FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      success();
    } else {
      error();
    }
  };


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
      <form className='footer__form' onSubmit={onSubmit}>
      <label className='footer__form-label'>Nombre</label>
        <input className='footer__input' type="text" name="name" required placeholder='Escribe tu nombre...'/>
        <label className='footer__form-label'>Correo</label>
        <input className='footer__input' type="email" name="email" required placeholder='Escribe tu correo...'/>
        <label className='footer__form-label'>Mensaje</label>
        <textarea className='footer__input' name="message" required placeholder='Escribe tu mensaje...'></textarea>
        <button onClick={loading} type="submit" className='footer__button-container'><Button variant={'light'} size={'small'} type='submit' text='Enviar' className='footer__button' /></button>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </footer>
  )
}
