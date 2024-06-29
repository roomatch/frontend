import './Card.css'

import Text  from '@uiComponents/text/Text'

import picture from '../../assets/problematic-4.png'

export default function Card({modifier}: {modifier: string}) {
  return (
    <article className={`card-container ${'card-container--' + modifier}`}> 
        <div className='card__icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--electric-indigo)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg></div>
        <Text isSubtitle={true} text='Titulo' textColor='white' align='center'/>
        <div className='card__paragraph-container'>
          <Text isParagraph={true} text='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.' textColor='white' align='center'/>
        </div>
        <img className='card__image' src={picture} alt="" />
    </article>
  )
}
