import React from 'react'
import logo_personas from '../../assets/logo_personas.svg'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion"
import "./Nav.css"

const Nav = (props) => {
    return (
        <div className="navbar-contenedor">
            <motion.nav
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                variants={{
                    visible: { left: -100 },
                    hidden: { left: -50 }
                }}
                whileHover={{
                    left: 0,
                    transition: { duration: 0.35 ,ease: "easeOut" },
                }}
                className='navbar'
            >
                <div className='navbar__iconos'>
                    <div className='navbar__icono-contenedor'>
                        <Link to="/buscar" className="navbar__boton">
                            <FaSearch className='navbar__boton__buscar-icono'/>
                        </Link>
                        <h1 className='navbar__texto'>Buscar roomies</h1>
                    </div>
                    <div className='navbar__icono-contenedor'>
                        <Link to="/publicar" className="navbar__boton">
                            <FaMapLocationDot className='navbar__boton__publicar-icono'/>
                        </Link>
                        <h1 className='navbar__texto'>Publicar vivenda</h1>
                    </div>
                    <div className='navbar__icono-contenedor'>
                        <Link to="/perfil" className="navbar__boton">
                            <MdPersonOutline className='navbar__boton__perfil-icono'/>
                        </Link>
                        <h1 className='navbar__texto'>Mi perfil</h1>
                    </div>
                </div>
                
                <Link to="/" className='navbar__logo-contenedor'>
                    <img className='navbar__logo' src={logo_personas} alt="logo de roomatch"/>
                </Link>
            </motion.nav>
            {props.children}
        </div>
    )
}

export default Nav