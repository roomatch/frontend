import "./Invitation.css"
import Button from '@/components/ui/button/Button'

import Text from "../../../../components/ui/text/Text"

export default function Invitation() {
  return (
    <div className='invitation-container' id='invitation'>
        <Text isTitle={true} textColor="white" highlighted={false} align='center' text='¿Estás listo para encontrar tus roomies ideales?'></Text>
        <div className="invitation__buttons-container">
        <Button variant='dark' size='regular' hRef="#" text="Registrate como roomie"/>
        <Button variant='dark' size='regular' hRef="#" text="Registrate como arrendatario"/>
        </div>
    </div>
  )
}
