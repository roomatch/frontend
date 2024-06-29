import "./Invitation.css"

import Button from '@uiComponents/button/Button'
import Text from "@uiComponents/text/Text"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Invitation() {

  const text = '¿Estás listo para encontrar tus roomies ideales?'

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { amount: 0.5, once: true});

  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: "-5px"
    },
    visible: {
      opacity: 1,
      y: "0px",
    },
  }

  const leftButtonAnimations = {
    hidden: {
      opacity: 0,
      x: "5px"
    },
    visible: {
      opacity: 1,
      x: "0px",
    },
  }

  const rightButtonAnimations = {
    hidden: {
      opacity: 0,
      x: "-5px"
    },
    visible: {
      opacity: 1,
      x: "0px",
    },
  }

  return (
    <div  className='invitation-container' id='invitation'>
        <div className='invitation__background'/>
        <motion.div ref={ref} initial="hidden" animate={ isInView ? "visible": "hidden" } transition={{staggerChildren: 0.1}} lang="de" className="invitation__characters-wrapper invitation">
          {
            
            text.split(' ').map((char) => (
              <motion.span
              style={{margin: '0 0.5rem',
              display: 'inline-block',
              }}
              variants={defaultAnimations}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))
          }
        </motion.div>

        <div className="invitation__buttons-container">
          <motion.div variants={leftButtonAnimations} initial="hidden" animate={ isInView ? "visible" : "hidden" } transition={{delay: 1, duration: 0.8}} ><Button variant='dark' size='regular' hRef="#" text="Registrate como roomie"/></motion.div>
          <motion.div variants={rightButtonAnimations} initial="hidden" animate={ isInView ? "visible" : "hidden" } transition={{delay: 1, duration: 0.8}}><Button variant='dark' size='regular' hRef="#" text="Registrate como arrendatario"/></motion.div>
        </div>
        
    </div>
  )
}

