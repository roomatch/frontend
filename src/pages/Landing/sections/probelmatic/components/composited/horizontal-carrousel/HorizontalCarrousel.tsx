import { useRef } from 'react'

import { motion, useTransform, useScroll } from 'framer-motion'

import Card from '../Card'

export default function HorizontalCarrousel() {
    const targetRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start 30%", "end 80%"],
    })
    const x = useTransform(scrollYProgress, [0, 1], ["0px", "-90%"])
    return (
        <section
        ref={targetRef} >
            <div className="problematica__scrollable-cards-container">
                <div className='problematic__sticky-cards-container'>
                    <motion.div animate={true} style={{x}} className="problematic__direct-cards-container">
                        <Card modifier='1' />
                        <Card modifier='2' />
                        <Card modifier='3' />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
