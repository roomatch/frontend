import React from 'react'
import Boton from '../Boton/Boton'
import { color, motion } from "framer-motion"
import  './Persona.css';

function Persona(props) {
    return (
        <motion.article
        initial={{ opacity: 0, marginTop: 10 }}
        whileInView={{ opacity: 1, marginTop: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className='persona-tarjeta'
        >
            <header className='persona-tarjeta__foto'>
                <img className="" src={props.imagen} alt="foto de perfil" />
            </header>
            <h1 className="persona-tarjeta-titulo">{props.nombre}</h1>
            <p className='persona-tarjeta__descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deleniti suscipit iste  </p>
            <div className="persona-tarjeta__boton"><Boton text="Ver más"/></div>
        </motion.article>
    )
}

export default Persona

