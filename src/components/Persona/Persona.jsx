import React from 'react'
import Button from '../Button/Button'
import { motion } from "framer-motion"
import  './PersonaStyle.css';

function Persona(props) {
    return (
        <motion.div
        initial={{ opacity: 0, marginTop: 10 }}
        whileInView={{ opacity: 1, marginTop: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        
        >

            <div class="persona-container">

                <div className="persona-content">
                    <img className="persona-image" src={props.imagen} alt="Bonnie image" />
                    <h5 className="persona-title">{props.nombre}</h5>
                    <span className="persona-text">Genero: {props.genero}</span>
                    <span className="persona-text">Edad: {props.edad}</span>
                    <span className="persona-text">Ocupacion: {props.ocupacion}</span>
                    <span className="persona-text">Mascotas: {props.mascotas}</span>
                    <span className="persona-text">Órden y limpieza: {props.orden}</span>
                    <span className="persona-text">Ruido: {props.ruido}</span>
                    <span className="persona-text">Invitados: {props.invitados}</span>
                    <span className="persona-text">Interacción: {props.interaccion}</span>

                    <div class="flex mt-4 md:mt-6">
                        <Button text="Contactar"/>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Persona

