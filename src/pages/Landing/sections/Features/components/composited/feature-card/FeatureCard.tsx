import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

import Text from '@uiComponents/text/Text'

export default function featureCard({ card, index }:any) {

    const cardRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start 50%"],
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [`${index%2 == 0 ? '-' : ''}2deg`, "0deg"])
    const translateX = useTransform(scrollYProgress, [0, 1], [`${index%2 == 0 ? '-' : ''}40px`, "0px"])
    const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.article
            ref={cardRef}
            style={{ 
                rotate, 
                translateX,
                opacity
            }}
            className='features__card' id={"features__card-" + index} key={card.title}>
            <header className='features__card__header'>
                {React.createElement(card.icon, { className: 'features__card__icon' })}
                <Text isSubtitle={true} textColor="white" highlighted={false} align='left' text={card.title}></Text>
            </header>
            <Text isParagraph={true} textColor="white" highlighted={false} align='left' text={card.paragraph}></Text>
            <div className='features__card__image'></div>
        </motion.article>
    );
}
