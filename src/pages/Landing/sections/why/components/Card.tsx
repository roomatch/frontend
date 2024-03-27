import React, { useEffect, useState } from 'react'

import Text from '@uiComponents/text/Text'

export default function Card(props:any) {
    const [isVisible, setIsVisible] = useState(false);

    // Función para verificar si el elemento está en el viewport
    const isElementInViewport = (el:any) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Función para manejar el evento de scroll y actualizar el estado del componente
    const handleScroll = () => {
      const element = document.querySelector('.why__reason');
      if (isElementInViewport(element)) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };
  
    // Agregar un event listener para el evento scroll
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div key={props.reason.title} className={`why__reason ${isVisible ? 'animate' : ''}`}  id={'why__reason-' + (props + 1)}>
    <div id={'why__reason-' + (props.index + 1) + '__degrade'} />
    <div className='why__reason__text'>
      <Text className='why__reason-title' isSubtitle={true} textColor="white" highlighted={false} align='left' text={props.index + 1 + '. ' + props.reason.title}></Text>
      <Text className='why__reason-paragraph' isParagraph={true} textColor="white" highlighted={false} align='left' text={props.reason.description}></Text>
    </div>
    <div className='why__reason__icon'>{React.createElement(props.reason.icon, { className: 'why__reason__icon' })}</div>
  </div>
  )
}
