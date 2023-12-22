import React from 'react'
import logo_personas from '../../assets/logo_personas.svg'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion"
import "./Nav.css"

const Home = (props) => {
    return (
        <div class="container">

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
                    className='navbar'
                >
                    <div className='navbar__iconos'>

                        <Link to="/buscar"
                            className="navbar__iconos__boton"
                        >
                            <FaSearch className='w-[50%] h-[50%]'/>
                            <small > Buscar </small>
                        </Link>

                        <Link to="/publicar"
                            className="navbar__iconos__boton"
                        >
                            <FaMapLocationDot className='w-[50%] h-[50%]'/>
                            <small > Publicar vivienda </small>
                        </Link>

                        <Link to="/perfil"
                            className="navbar__iconos__boton"
                        >
                            <MdPersonOutline className='w-[80%] h-[80%]'/>
                            <small > Perfil </small>
                        </Link>

                    </div>

                    <div className='navbar__logo'>
                        <Link
                            to="/inicio"
                            className='navbar__logo__link'
                        >

                            <img src={logo_personas} alt="personas"/>
                        </Link>
                    </div>

                </motion.nav>
                {props.children}
            </div>
        </div>
    )
}

export default Home