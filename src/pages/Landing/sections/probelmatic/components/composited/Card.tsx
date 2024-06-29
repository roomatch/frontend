import './Card.css'
import Text  from '@uiComponents/text/Text'
import React from 'react'

export default function Card({modifier, content, tittle, icon, picture}: {modifier: string, content:string, tittle:string, icon:any, picture:any}) {
  return (
    <article className={`card-container ${'card-container--' + modifier}`}> 
        <div className={`card__icon ${'card-icon--' + modifier}` }>{React.createElement(icon)}</div>
        <Text isSubtitle={true} text={tittle} textColor='white' align='center'/>
        <Text isParagraph={true} text={content} textColor='white' align='center'/>
        <img className='card__image' src={picture} alt="" />

    </article>
  )
}
