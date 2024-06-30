import { Link } from 'react-router-dom'
import RoomatchIcon from '../../assets/logo_personas.svg'
import './Waitlist.css'

import Text from '@uiComponents/text/Text'
import WhatsappIcon from '../Landing/sections/footer/components/icons/WhatsappIcon'
import InstagramIcon from '../Landing/sections/footer/components/icons/InstagramIcon'

export default function Waitlist() {
    return (
        <div className='waitlist-container'>
            <Link to='/' className='waitlist__logo-container'>
                <img src={RoomatchIcon} alt="" />
                <p>roomatch</p>
                <p className='waitlist__logo-slogan'>Conecta y Convive</p>
            </Link>
            <h1 className='waitlist__title'>¡Muy pronto!</h1>

            <article className='waitlist__card'>
                <Text isSubtitle={true} text='Inscríbete a nuestra lista de espera' />
                <Text isParagraph={true} text='Te contactaremos pronto para iniciar tu proceso, empezar a conectarte con tus roommies ideales y disfrutar de todos los demás beneficios que tenemos para nuestros primeros usuarios.' />
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWBuqVDA59OZtZX3-efSxPPeFVWaVF2X1ImJkv-KcviBXLwg/viewform?embedded=true" width="100%" height="100%" frameBorder="0">Loading…</iframe>
                <a href='https://forms.gle/GkiWdnoPGccwr8bd9' target='_blank' className='card__form-link'>Abrir el formulario en una nueva pestaña</a>

            </article>

            <section className='waitlist__footer'>
                <p>Conoce más sobre Roomatch <Link to='/'><span className='waitlist__footer-link'>aquí</span></Link>.</p>
                <p>¿Tienes alguna pregunta o comentario? Contáctanos.</p>
                <div className='waitlist__footer__logos-container'>
                    <a href='https://wa.me/573188601654' target='_blank' className='waitlist__footer__logo-container'><WhatsappIcon /></a>
                    <a href='https://www.instagram.com/roomatch_' target='_blank' className='waitlist__footer__logo-container'><InstagramIcon /></a>
                </div>
            </section>

        </div>
    )
}
