import React from 'react'
import Button from '../../components/Button/Button'
import { motion } from "framer-motion"
import  './SearchStyle.css';

const Search = () => {
    return (
        <div className='h-screen'>

            <div className='flex-container'>

                <p className='title'>
                    Crea tu <motion.span className='span'>roomatch</motion.span> perfecto
                </p>

                <div className='select-container'>
                    <div className='select'>
                        <select className='opciones' name="genero" id="genero">
                            <option value="" disabled selected>Genero</option>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                            <option value="Cualquiera">Cualquiera</option>
                        </select>
                    </div>
                    <div className='select'>
                        <select className='opciones' name="genero" id="genero">
                            <option value="" disabled selected>Edad</option>
                            <option value="hombre">-18</option>
                            <option value="mujer">18 - 24</option>
                            <option value="mujer">25 - 35</option>
                            <option value="mujer">35+</option>
                        </select>
                    </div>
                    <div className='select'>
                        <select className='opciones' name="genero" id="genero">
                            <option value="" disabled selected>Ocupación</option>
                            <option value="hombre">Estudiante</option>
                            <option value="mujer">Profesional</option>
                            <option value="mujer">Cualquiera</option>
                        </select>
                    </div>
                    <div className='select'>
                        <select className='opciones' name="genero" id="genero">
                            <option value="" disabled selected>Mascotas</option>
                            <option value="hombre">Perro</option>
                            <option value="mujer">Gato</option>
                            <option value="mujer">Ninguno</option>
                            <option value="mujer">Cualquiera</option>
                        </select>
                    </div>
                    <div className='select'>
                        <select className='opciones' name="genero" id="genero">
                            <option value="" disabled selected>Hábitos de consumo</option>
                            <option value="hombre">Alcohol</option>
                            <option value="mujer">Cigarrillo</option>
                            <option value="mujer">Ninguno</option>
                            <option value="mujer">Cualquiera</option>
                        </select>
                    </div>
                    <div className='select'>
                        <select className='opciones' name="genero" id="genero">
                            <option value="" disabled selected>Orden y limpieza</option>
                            <option value="hombre">Muy ordenado</option>
                            <option value="mujer">Ordenado</option>
                            <option value="mujer">No tan ordenado</option>
                            <option value="mujer">Cualquiera</option>
                        </select>
                    </div>
                    <div className='select'>
                        <select className='opciones' name="genero" id="genero">
                            <option value="" disabled selected>Ruido</option>
                            <option value="hombre">Silencioso</option>
                            <option value="mujer">Normal</option>
                            <option value="mujer">Cualquiera</option>
                        </select>
                    </div>
                    <div className='select'>
                        <select className='opciones' name="genero" id="genero">
                            <option value="" disabled selected>Interacción social</option>
                            <option value="hombre">Sociable</option>
                            <option value="mujer">No tan sociable</option>
                            <option value="mujer">Aislado</option>
                        </select>
                    </div>
                    <div className='select'>
                        <select className='opciones' name="genero" id="genero">
                            <option value="" disabled selected>Invitados</option>
                            <option value="hombre">Informar para el día</option>
                            <option value="mujer">Informar para la noche</option>
                            <option value="mujer">Sin restricciones</option>
                            <option value="mujer">No invitados</option>
                        </select>
                    </div>                    
                </div>

                <Button route="../resultados" text="Buscar"/>

            </div>
        </div>
    )
}

export default Search

