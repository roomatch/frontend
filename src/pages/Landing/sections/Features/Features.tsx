import { useRef } from "react"

import "./Features.css"

import FilterIcon from "./components/icons/FilterIcon"
import HearIcon from "./components/icons/HeartIcon"
import ListIcon from "./components/icons/ListIcon"
import MessagesIcon from "./components/icons/MessagesIcon"

import Text from "@uiComponents/text/Text"
import { motion, useScroll, useTransform } from "framer-motion"
import FeatureCard from "./components/composited/feature-card/FeatureCard"

import pictureFeature1 from './assets/feature-1.png'
import pictureFeature2 from './assets/feature-2.png'
import pictureFeature3 from './assets/feature-3.png'
import pictureFeature4 from './assets/feature-4.png'

export default function Features() {

    const cards = [
        {
            'icon': ListIcon,
            'title': 'Conoce los detalles de los demás',
            'paragraph': 'Revisa la personalidad, hábitos y preferencias de una persona sin necesidad de hablar con ella, también puedes configurar estos aspectos para tu persona, esta es tu oportunidad para mostrarte tal y como eres.',
            'picture': pictureFeature1
        },
        {
            'icon': FilterIcon,
            'title': 'Personaliza tu busqueda',
            'paragraph': 'Encuentra filtros relevantes para tu busqueda de roomies, tú eliges con quien convivir.',
            'picture': pictureFeature2

        },
        {
            'icon': MessagesIcon,
            'title': 'Crea chats grupales',
            'paragraph': 'Relacionate con las personas antes de dar el siguiente paso, este es el espacio ideal para conocer a los demás.',
            'picture': pictureFeature3
        },
        {
            'icon': HearIcon,
            'title': 'Lista de favoritos',
            'paragraph': '¿Te preocupa no poder concretar con un grupo? Tranquilo, puedes guardar perfiles interesantes y tener alternativas de roomies.',
            'picture': pictureFeature4

        }
    ]

    const titleRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: titleRef,
        offset: ["start end", "end 50%"],
    })
    const translateYProgress = useTransform(scrollYProgress, [0, 1], ["-80px", "0px"])

    return (
        <div className='features-container' id="features">
            <div className='features__background' id="features__background-1"/>
            <div className='features__background'id="features__background-2"/>
            <div className='features__background'id="features__background-3"/>
            <motion.div
                ref={titleRef}
                style={{
                    translateY: translateYProgress,
                    opacity: scrollYProgress,
                }}
                
                className="features__title"
            >
                <Text isTitle={true} textColor="white" highlighted={false} align='center' text='Lo que puedes hacer en Roomatch' className="features__title"></Text>
            </motion.div>
            <div className='features__cards-container'>
                {cards.map((card, index) => {
                    return (
                        <FeatureCard card={card} index={index} key={index} />
                    )
                })}
            </div>

        </div>
    )
}
