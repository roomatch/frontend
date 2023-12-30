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
        <div className="navbar-contenedor">
            <motion.nav
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                variants={{
                    visible: { left: -70 },
                    hidden: { left: -50 }
                }}
                whileHover={{
                    left: 0,
                    transition: { duration: 0.2 ,ease: "easeOut" },
                }}
                className='navbar'
            >
                <div className='navbar__iconos'>
                    <Link to="/buscar" className="navbar__iconos__boton">
                        <FaSearch className=''/>
                        Buscar
                    </Link>
                    <Link to="/publicar" className="navbar__iconos__boton">
                        <FaMapLocationDot className=''/>
                        Publicar vivienda
                    </Link>
                    <Link to="/perfil" className="navbar__iconos__boton">
                        <MdPersonOutline className=''/>
                        Perfil
                    </Link>
                </div>
                
                <Link to="/" className='navbar__logo'>
                    <img src={logo_personas} alt="logo de roomatch"/>
                </Link>
            </motion.nav>
            {props.children}
        </div>
    )
}

export default Home