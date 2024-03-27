import "./Invitation.css"

import Button from '@uiComponents/button/Button'
import Text from "@uiComponents/text/Text"

export default function Invitation() {
  return (
    <div className='invitation-container' id='invitation'>
        <div className='invitation__background'/>
        <Text isTitle={true} textColor="white" highlighted={false} align='center' text='¿Estás listo para encontrar tus roomies ideales?' className="invitation__title"/>
        <div className="invitation__buttons-container">
        <Button variant='dark' size='regular' hRef="#" text="Registrate como roomie"/>
        <Button variant='dark' size='regular' hRef="#" text="Registrate como arrendatario"/>
        </div>
    </div>
  )
}
