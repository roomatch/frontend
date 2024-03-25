import React from "react"
import "./Features.css"

import FilterIcon from "./components/FilterIcon"
import HearIcon from "./components/HeartIcon"
import ListIcon from "./components/ListIcon"
import MessagesIcon from "./components/MessagesIcon"

export default function Features() {

    const cards = [
        {
            'icon': ListIcon,
            'title': 'Conoce los detalles de los demás',
            'paragraph': 'Revisa la personalidad, hábitos y preferencias de una persona sin necesidad de hablar con ella, también puedes configurar estos aspectos para tu persona, esta es tu oportunidad para mostrarte tal y como eres.',
            'picture': 'https://wallpaperaccess.com/full/1556608.jpg'
        },
        {
            'icon': FilterIcon,
            'title': 'Personaliza tu busqueda',
            'paragraph': 'Encuentra filtros relevantes para tu busqueda de roomies, tú eliges con quien convivir.',
            'picture': 'https://wallpaperaccess.com/full/1556608.jpg'

        },
        {
            'icon': MessagesIcon,
            'title': 'Crea chats grupales',
            'paragraph': 'Relacionate con las personas antes de dar el siguiente paso, este es el espacio ideal para conocer a los demás.',
            'picture': 'https://wallpaperaccess.com/full/1556608.jpg'
        },
        {
            'icon': HearIcon,
            'title': 'Lista de favoritos',
            'paragraph': '¿Te preocupa no poder concretar con un grupo? Tranquilo, puedes guardar perfiles interesantes y tener alternativas de roomies.',
            'picture': 'https://wallpaperaccess.com/full/1556608.jpg'

        }
    ]


    return (
        <div className='features-container'>
            <h1 className='features__title'>Lo que puedes hacer en <span className='landing__header__text-highlighted'>Roomatch</span></h1>
            <div className='features__cards-container'>
                {cards.map((card, index) => {
                    return (
                        <article className='features__card' id={"features__card-" + index}>
                            <header className='features__card__header'>
                                {React.createElement(card.icon, { className: 'features__card__icon' })}
                                {card.title}
                            </header>
                            <p className='features__card__paragraph'>{card.paragraph}</p>
                            <div className='features__card__image'></div>
                        </article>
                    )
                })}
            </div>

        </div>
    )
}
