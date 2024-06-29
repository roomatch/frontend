import './Card.css'
import Text  from '@uiComponents/text/Text'
import picture from '../../assets/problematic-4.png'
import React from 'react'

export default function Card({modifier, content, tittle, icon}: {modifier: string, content:string, tittle:string, icon:any}) {
  return (
    <article className={`card-container ${'card-container--' + modifier}`}> 
        <div className={`card__icon ${'card-icon--' + modifier}` }>{React.createElement(icon)}</div>
        <Text isSubtitle={true} text={tittle} textColor='white' align='center'/>
        <Text isParagraph={true} text={content} textColor='white' align='center'/>
        <img className='card__image' src="https://th.bing.com/th/id/R.7aab7216f0428cc32ba8e48b301ef000?rik=8eOWH5x5Qb95lA&pid=ImgRaw&r=0" alt="" />

    </article>
  )
}
