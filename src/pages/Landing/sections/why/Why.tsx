import React from 'react';

import './Why.css';

import Text from "../../../../components/ui/text/Text"
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
  return (
    <div className='why-container'>
      <Text isTitle={true} align='center' textColor="white" highlighted={false} text='¿Por qué encontrar tus roomies en Roomatch?'></Text>
      {reasons.map((reason, index) => {
        return (
          <div key={reason.title} className='why__reason' id={'why__reason-' + (index + 1)}>
            <div id={'why__reason-' + (index + 1) + '__degrade'} />
            <div className='why__reason__text'>
              <Text isSubtitle={true} textColor="white" highlighted={false} align='left' text={index + 1 + '. ' + reason.title}></Text>
              <Text isParagraph={true} textColor="white" highlighted={false} align='left' text={reason.description}></Text>
            </div>
            <div className='why__reason__icon'>{React.createElement(reason.icon, { className: 'why__reason__icon' })}</div>
          </div>
        )
      })}
    </div>
  )
}
