import React, { useRef } from 'react';

import './Why.css';

import Text from '@uiComponents/text/Text';

import Connection from './components/icons/Connection';
import Search from './components/icons/Search';
import Scan from './components/icons/Scan';
import Shield from './components/icons/Shield';
import Click from './components/icons/Click';

import click from './assets/pictures/click.jpg'
import connection from './assets/pictures/connection.jpg'
import scan from './assets/pictures/scan.jpg'
import search from './assets/pictures/search.jpg'
import shield from './assets/pictures/shield.jpg'
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Why() {
  const reasons = [
    {
      "title": "Emparejamiento basado en tu personalidad",
      "description": "En roomatch utilizamos un algoritmo avanzado que analiza no solo las preferencias de estilo de vida, sino también la personalidad de los usuarios. Esto asegura que las personas compartan valores similares y tengan una convivencia armoniosa.",
      "icon": Connection,
      "picture": connection
    },
    {
      "title": "Criterios de busqueda exahustivos",
      "description": "Nuestro proceso de emparejamiento va más allá de simples preferencias de horario o hábitos de limpieza. Consideramos aspectos como los niveles de sociabilidad, tolerancia al ruido y estilo de trabajo, garantizando que los roomies sean compatibles en diferentes aspectos de su vida cotidiana.",
      "icon": Search,
      "picture": search
    },
    {
      "title": "Perfiles completos y verificados",
      "description": "Todos los usuarios de roomatch completan perfiles detallados que incluyen información personal, hábitos de vida y preferencias. Además, implementamos un sistema de verificación para garantizar la autenticidad de los perfiles, proporcionando a los usuarios mayor confianza al elegir a su futuro roomie.",
      "icon": Scan,
      "picture": scan
    },
    {
      "title": "Experiencia centrada en la seguridad",
      "description": "La seguridad es nuestra prioridad. No compartimos tu información personal como correo y número de célular.",
      "icon": Shield,
      "picture": shield
    },
    {
      "title": "Plataforma intuitiva y fácil de usar",
      "description": "Hemos diseñado roomatch pensando en la comodidad de nuestros usuarios. Nuestra plataforma es intuitiva, con funciones fáciles de usar que facilitan la búsqueda y el proceso de selección de roomies, ahorrando tiempo y esfuerzo.",
      "icon": Click,
      "picture": click
    }
  ]

  const titleRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "start 60%"],
  })

  const translateYProgress = useTransform(scrollYProgress, [0, 1], ["-80px", "0px"])


  const [textAlign, setTextAlign] = React.useState<"center" | "left" | null | undefined>("left")

  const desktopMediaQuery = window.matchMedia('(max-width: 1200px)')
  desktopMediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      setTextAlign('center')
  }else{
    setTextAlign('left')
  }
})

  return (
    <div className='why-container' id='why'>
      <motion.div
        ref={titleRef}
        style={{
          translateY: translateYProgress,
          opacity: scrollYProgress,
        }}
      >
        <Text isTitle={true} align='center' textColor="white" highlighted={false} text='¿Por qué encontrar tus roomies en Roomatch?' className='why__title'/>
      </motion.div>
        <div 
        className="why__reasons-container">
          {reasons.map((reason, index) => {
            return (
              <div key={reason.title} className='why__reason' id={'why__reason-' + (index + 1)}>
                <div id={'why__reason-' + (index + 1) + '__degrade'} />
                <div className='why__reason__text'>
                  <Text className='why__reason-title' isSubtitle={true} textColor="white" highlighted={false} align={textAlign} text={index + 1 + '. ' + reason.title}></Text>
                  <Text className='why__reason-paragraph' isParagraph={true} textColor="white" highlighted={false} align={textAlign} text={reason.description}></Text>
                </div>
                <div className='why__reason__icon'>{React.createElement(reason.icon, { className: 'why__reason__icon' })}</div>
              </div>
            )
          })}
        </div>
    </div>
  )
}
