import React from "react"

import "./Features.css"

import FilterIcon from "./components/icons/FilterIcon"
import HearIcon from "./components/icons/HeartIcon"
import ListIcon from "./components/icons/ListIcon"
import MessagesIcon from "./components/icons/MessagesIcon"

import Text from "@uiComponents/text/Text"

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
            <Text isTitle={true} textColor="white" highlighted={false} align='center' text='Lo que puedes hacer en Roomatch'></Text>
            <div className='features__cards-container'>
                {cards.map((card, index) => {
                    return (
                        <article className='features__card' id={"features__card-" + index} key={card.title}>
                            <header className='features__card__header'>
                                {React.createElement(card.icon, { className: 'features__card__icon' })}
                                <Text isSubtitle={true} textColor="white" highlighted={false} align='left' text={card.title}></Text>
                            </header>
                            <Text isParagraph={true} textColor="white" highlighted={false} align='left' text={card.paragraph}></Text>
                            <div className='features__card__image'></div>
                        </article>
                    )
                })}
            </div>

        </div>
    )
}
