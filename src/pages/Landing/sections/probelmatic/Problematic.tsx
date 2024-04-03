import { useState } from 'react'

import './Problematic.css'

import Text from '@uiComponents/text/Text'
import ArrowIcon from './components/icons/ArrowIcon'
import Card from './components/composited/Card'

export default function Problematic() {

    const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='problematic-container'>

        <Text isTitle={true} text='Lo que nos mueve en Roomatch' textColor='white' align='center'/>

        <div className={`problematic__explanation ${isExpanded ? 'problematic__explanation--expanded' : ''}`}>
            <Text className='problematic__explanation-text' isParagraph={true} text='El Laboratorio de Economía de la Educación de la Universidad Javeriana presentó un informe que muestra que de los graduados de bachiller en 2018 y que comenzaron sus estudios universitarios en el 2019, el 72.38% lo hicieron en ciudades distintas a sus ciudades de residencia; Bogotá recibió el 56.79% de aquellos estudiantes y es la única ciudad donde los jóvenes recién graduados del colegio de otras regiones que entran a la universidad son más que los mismos jóvenes locales.' textColor='white' align='center'/>
            <span className={`problematic__explanation__long-text ${isExpanded ? 'problematic__explanation__long-text--expanded' : ''}`}>
              <Text className='problematic__explanation-text' isParagraph={true} text='Así, cada semestre un sinnúmero de estudiantes colombianos, provenientes de varios departamentos se desplazan de su ciudad de origen con el objetivo de empezar su vida universitaria. Se trata de un cambio trascendental en la vida de cada uno de ellos, ya que, a su corta edad, deben dejar atrás, sus familias, costumbres, culturas, amigos y su entorno vida.' textColor='white' align='center'/>
              <Text className='problematic__explanation-text' isParagraph={true} text='El espectro de situaciones es amplio en este grupo de estudiantes, están los que cuentan con el apoyo familiar en la ciudad de destino o los que, aunque no cuentan con ese apoyo, cuentan con la capacidad económica para costear un apartamento o apartaestudio. Por otro lado, están los dependientes de sostenimientos gubernamentales y en un extremo, los que en cada mes el pago de la vivienda es una incertidumbre, como es el caso de Gabriel Pazos, para quien la vida universitaria se ha vuelto traumatizante.' textColor='white' align='center'/>
              <Text className='problematic__explanation-text' isParagraph={true} text='Un estudio de Properati halló que en Bogotá el precio promedio de un apartaestudio, sin tener en cuenta otros costos adicionales como administración y amoblado, es de $1.470.000 COP, sin embargo, un informe del Laboratorio de Economía de la Educación de la Universidad Javeriana encontró que el 70% de personas que entran a la universidad pertenecen a los estratos 1 y 2, para quienes sus hogares no superan ni siquiera el salario mínimo. Es por esto por lo que quienes no pueden costear este valor deciden irse por alternativas como, pensionados, habitaciones en casas de familias y habitaciones y apartamentos compartidos. Las alternativas anteriormente mencionadas, e incluso las residencias universitarias, no aseguran la calidad de vida de los estudiantes, ya que introducen aspectos como espacios compartidos con otras personas, convivencia entre personas que pueden tener personalidades completamente opuestas, reglas absurdas y hasta en algunos casos malos tratos por parte de los arrendadores hacia los arrendatarios.' textColor='white' align='center'/>
              <Text className='problematic__explanation-text' isParagraph={true} text='Es por esto que Roomatch está dirigido a ti, que tienes la necesidad de dividir gastos relacionados con la vivienda, donde a la vez quieres conectar con personas con las que puedes compartir un espacio, valores, intereses, convivir a gusto y ser tú mismo.' textColor='white' align='center'/>
              <Text className='problematic__explanation-text' isParagraph={true} text='Estamos comprometidos con crear un impacto positivo en ti, acabando con el estrés de vivir con las personas incorrectas. Deseamos que vivas en un lugar donde los gastos se comparten de manera justa y donde cada compañero de casa es alguien con quien conectas genuinamente. Eso es lo que traemos a tu vida.' textColor='white' align='center'/>
              <Text className='problematic__explanation-text' isParagraph={true} text='Gracias por unirte a la comunidad Roomatch, estamos emocionados de comenzar este viaje contigo y poder resolver esta problemática. Juntos, crearemos conexiones ideales y tu lugar seguro.' textColor='white' align='center'/>
            </span>
        </div>

        <div className='problematic__button-container' onClick={() => setIsExpanded(!isExpanded)}>
            <button className={`problematic__button ${isExpanded ? 'problematic__button--rotated' : ''}`}>{isExpanded ? <ArrowIcon/> : <ArrowIcon/>}</button>
            <Text className='problematic__button-container__text' isParagraph={true} text={isExpanded ? 'Ver menos': 'Ver más'} textColor='white' align='center'/>
        </div>

        <div className='problematic__cards-container'>
          <div className='problematic__card'><Card modifier='1'/></div>
          <div className='problematic__card'><Card modifier='2'/></div>
          <div className='problematic__card'><Card modifier='3'/></div>
        </div>

    </div>
  )
}
