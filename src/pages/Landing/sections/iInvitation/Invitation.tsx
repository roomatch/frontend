import "./Invitation.css"
import Button from '@/components/ui/button/Button'

export default function Invitation() {
  return (
    <div className='invitation-container' id='invitation'>
        <h1 className='invitation-title'>¿Estás listo para encontrar tus <span className='landing__header__text-highlighted'>roomies ideales</span>?</h1>
        <div className="landing__buttons-container">
        <Button variant='dark' size='regular' hRef="#" text="Registrarme como roomie"/>
        <Button variant='dark' size='regular' hRef="#" text="Registrarme como arrendatario"/>
        </div>
    </div>
  )
}
