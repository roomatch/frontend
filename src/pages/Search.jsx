import React from 'react'
import Button from '../components/Button'
import { motion } from "framer-motion"

const Search = () => {
    return (
        <div className='h-screen'>

            <div className="flex content-center items-center pl-20 pr-52 w-full h-[100%] bg-white">

                <p className='font-Comfortaa text-5xl w-full text-center border-2 border-[#ffffff] bg-[#ffffff] p-10 rounded-xl text-black'>
                    Crea tu <motion.span className='bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary font-extrabold '>roomatch</motion.span> perfecto
                </p>

                <div class="flex flex-wrap p-12 pl-20 gap-20 content-center items-center">
                    <div class="w-1/4">
                        <select className='w-fit h-10 shadow-none focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white cursor-pointer' name="genero" id="genero">
                            <option value="" disabled selected>Genero</option>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                            <option value="Cualquiera">Cualquiera</option>
                        </select>
                    </div>
                    <div class="w-1/4 ">
                        <select className='w-fit h-10 shadow-none focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white cursor-pointer' name="genero" id="genero">
                            <option value="" disabled selected>Edad</option>
                            <option value="hombre">-18</option>
                            <option value="mujer">18 - 24</option>
                            <option value="mujer">25 - 35</option>
                            <option value="mujer">35+</option>
                        </select>
                    </div>
                    <div class="w-1/4 ">
                        <select className='w-fit h-10 shadow-none focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white cursor-pointer' name="genero" id="genero">
                            <option value="" disabled selected>Ocupación</option>
                            <option value="hombre">Estudiante</option>
                            <option value="mujer">Profesional</option>
                            <option value="mujer">Cualquiera</option>
                        </select>
                    </div>
                    <div class="w-1/4 ">
                        <select className='w-fit h-10 shadow-none focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white cursor-pointer' name="genero" id="genero">
                            <option value="" disabled selected>Mascotas</option>
                            <option value="hombre">Perro</option>
                            <option value="mujer">Gato</option>
                            <option value="mujer">Ninguno</option>
                            <option value="mujer">Cualquiera</option>
                        </select>
                    </div>
                    <div class="w-1/4 ">
                        <select className='w-fit h-10 shadow-none focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white cursor-pointer' name="genero" id="genero">
                            <option value="" disabled selected>Hábitos de consumo</option>
                            <option value="hombre">Alcohol</option>
                            <option value="mujer">Cigarrillo</option>
                            <option value="mujer">Ninguno</option>
                            <option value="mujer">Cualquiera</option>
                        </select>
                    </div>
                    <div class="w-1/4 ">
                        <select className='w-fit h-10 shadow-none focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white cursor-pointer' name="genero" id="genero">
                            <option value="" disabled selected>Orden y limpieza</option>
                            <option value="hombre">Muy ordenado</option>
                            <option value="mujer">Ordenado</option>
                            <option value="mujer">No tan ordenado</option>
                            <option value="mujer">Cualquiera</option>
                        </select>
                    </div>
                    <div class="w-1/4 ">
                        <select className='w-fit h-10 shadow-none focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white cursor-pointer' name="genero" id="genero">
                            <option value="" disabled selected>Ruido</option>
                            <option value="hombre">Silencioso</option>
                            <option value="mujer">Normal</option>
                            <option value="mujer">Cualquiera</option>
                        </select>
                    </div>
                    <div class="w-1/4 ">
                        <select className='w-fit h-10 shadow-none focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white cursor-pointer' name="genero" id="genero">
                            <option value="" disabled selected>Interacción social</option>
                            <option value="hombre">Sociable</option>
                            <option value="mujer">No tan sociable</option>
                            <option value="mujer">Aislado</option>
                        </select>
                    </div>
                    <div class="w-1/4 ">
                        <select className='w-fit h-10 shadow-none focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white cursor-pointer' name="genero" id="genero">
                            <option value="" disabled selected>Invitados</option>
                            <option value="hombre">Informar para el día</option>
                            <option value="mujer">Informar para la noche</option>
                            <option value="mujer">Sin restricciones</option>
                            <option value="mujer">No invitados</option>
                        </select>
                    </div>                    
                </div>

                <Button route="/resultados" text="Buscar"/>

            </div>
        </div>
    )
}

export default Search