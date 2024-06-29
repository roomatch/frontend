import './Card.css'

import Text  from '@uiComponents/text/Text'

export default function Card({modifier, content, tittle}: {modifier: string, content:string, tittle:string}) {
  return (
    <article className={`card-container ${'card-container--' + modifier}`}> 
        <div className='card__icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--electric-indigo)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg></div>
        <Text isSubtitle={true} text={tittle} textColor='white' align='center'/>
        <Text isParagraph={true} text={content} textColor='white' align='center'/>
        <img className='card__image' src="https://th.bing.com/th/id/R.7aab7216f0428cc32ba8e48b301ef000?rik=8eOWH5x5Qb95lA&pid=ImgRaw&r=0" alt="" />
    </article>
  )
}
