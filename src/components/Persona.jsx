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

            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-end px-4 pt-4">

                    <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col items-center pb-10">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.imagen} alt="Bonnie image" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.nombre}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Genero: {props.genero}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Edad: {props.edad}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Ocupacion: {props.ocupacion}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Mascotas: {props.mascotas}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Órden y limpieza: {props.orden}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Ruido: {props.ruido}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Invitados: {props.invitados}</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Interacción: {props.interaccion}</span>

                    <div class="flex mt-4 md:mt-6">
                        <Button text="Contactar"/>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Persona