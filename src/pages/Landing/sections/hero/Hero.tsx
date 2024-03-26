import "./Hero.css"

import Button from "@uiComponents/button/Button"
import Text from "@uiComponents/text/Text"

export default function Hero() {
  return (
    <div className='hero-container'>
      <Text isTitle={true} align='center' textColor="white" highlighted={false} text='En Roomatch encuentra tu roomie ideal, conecta y convive'></Text>
      <div className="hero__buttons-container">
        <Button variant='dark' size='regular' hRef="#" text="Registrate como roomie"/>
        <Button variant='dark' size='regular' hRef="#" text="Registrate como arrendatario"/>
      </div>
    </div>
  )
}