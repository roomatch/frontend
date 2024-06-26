import logo from '@assets/logo_personas.svg'
import './RoomatchLogo.css'

export default function RoomatchIcon({isAnimated, size}: {isAnimated?: boolean, size?: string}) {


    return (
        <a href='#' className={isAnimated ? 'logo-container--animated' : 'logo-container--no-animated'}>
            <div className='logo__logo-container'>
                <img className={`${isAnimated ? 'logo__svg--animated' : 'logo__svg--no-animated'} logo__svg--${size}`} src={logo} alt="logo de Roomatch" />
                <p className={`${'logo__rommatch-text' } logo__roomatch-text--${size}`}>roomatch</p>
            </div>
            <hr className={isAnimated ? 'logo__separator--animated' : 'logo__separator--no-animated'}/>
            <p className={isAnimated ? 'logo__slogan--animated' : 'logo__slogan--no-animated'}>Conecta y Convive</p>
        </a>
    )
}

