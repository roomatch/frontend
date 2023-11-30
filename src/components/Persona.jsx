import React from 'react'
import Button from './Button'
import { motion } from "framer-motion"

function Persona(props) {
    return (
        <motion.div
        initial={{ opacity: 0, marginTop: 10 }}
        whileInView={{ opacity: 1, marginTop: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        
        >

            <div class="bg-black pt-8 w-full max-w-sm rounded-lg shadow">

                <div class=" flex flex-col items-center pb-10">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.imagen} alt="Bonnie image" />
                    <h5 class="mb-1 text-xl font-medium text-white">{props.nombre}</h5>
                    <span class="text-sm text-white">Genero: {props.genero}</span>
                    <span class="text-sm text-white">Edad: {props.edad}</span>
                    <span class="text-sm text-white">Ocupacion: {props.ocupacion}</span>
                    <span class="text-sm text-white">Mascotas: {props.mascotas}</span>
                    <span class="text-sm text-white">Órden y limpieza: {props.orden}</span>
                    <span class="text-sm text-white">Ruido: {props.ruido}</span>
                    <span class="text-sm text-white">Invitados: {props.invitados}</span>
                    <span class="text-sm text-white">Interacción: {props.interaccion}</span>

                    <div class="flex mt-4 md:mt-6">
                        <Button text="Contactar"/>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Persona