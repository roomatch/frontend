import React from 'react'
import logo_personas from '../assets/logo_personas.svg'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion"

const Home = (props) => {
    return (
        <div>

            <div
                class="relative"
            >
                <motion.nav
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    variants={{
                        visible: { left: -70 },
                        hidden: { left: -50 }
                    }}
                    whileHover={{
                        left: 0,
                        transition: { duration: 0 ,ease: "linear" },
                      }}
                    class="backdrop-blur-sm z-20 flex shrink-0 grow-0 p-3 pb-10 pt-10 bg-gradient-to-b from-primary/40 to-secondary fixed top-2/4 -translate-y-2/4  h-[95%] flex-col rounded-r-[18px] left-[-70px] transition-[left] duration-[400ms] hover:left-0"
                >
                
                    <div className='h-4/5 gap-10 flex flex-col'>

                        <Link to="/buscar"
                            class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-[10px] p-1.5 text-white bg-primary transition-[background-color] duration-[200ms] hover:bg-secondary"
                        >
                            <FaSearch className='w-[50%] h-[50%]'/>
                            <small class="text-center text-xs font-Comfortaa"> Buscar </small>
                        </Link>

                        <Link to="/publicar"
                            class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-[10px] p-1.5 text-white bg-primary transition-[background-color] duration-[200ms] hover:bg-secondary"
                        >
                            <FaMapLocationDot className='w-[50%] h-[50%]'/>
                            <small class="text-center text-xs font-Comfortaa"> Publicar vivienda </small>
                        </Link>

                        <Link to="/perfil"
                            class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-[10px] p-1.5 text-white bg-primary transition-[background-color] duration-[200ms] hover:bg-secondary"
                        >
                            <MdPersonOutline className='w-[80%] h-[80%]'/>
                            <small class="text-center text-xs font-Comfortaa"> Perfil </small>
                        </Link>

                    </div>

                    <div className=' h-1/5 flex flex-col justify-end'>
                        <Link
                            to="/inicio"
                            class="group flex h-16 w-16 flex-col items-center justify-center gap-1 cursor-pointer"
                        >

                            <img src={logo_personas} alt="personas" className='transition-[width] duration-[200ms] w-[90%] group-hover:w-[100%]'/>
                        </Link>
                    </div>

                </motion.nav>
                {props.children}
            </div>
        </div>
    )
}

export default Home