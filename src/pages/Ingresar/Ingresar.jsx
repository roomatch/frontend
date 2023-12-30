import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import Boton from '../../components/Boton/Boton'
import { motion } from "framer-motion"
import "./Ingresar.css"

const Ingresar = () => {
  return (
    <div className='ingresar-contenedor'>

      <section className='ingresar-contenedor__formulario-seccion'>
          <h1 className='ingresar-contenedor__formulario-seccion__bienvenida-texto'>Bienvenido a <span className='ingresar-contenedor__formulario-seccion__bienvenida-texto--resaltado'>roomatch</span></h1>
          <form className='ingresar-contenedor__formulario-seccion__formulario'>
            <input className='ingresar-contenedor__formulario-seccion__input' type="text" placeholder="Correo"/>
            <input className='ingresar-contenedor__formulario-seccion__input' type="password" placeholder="Contraseña"/>
            <Boton route="/buscar" text="Entrar"/>
          </form>
          <p className='ingresar-contenedor__formulario-seccion-registrate'>¿No tienes cuenta? <Link to="/registro"><span className='ingresar-contenedor__formulario-seccion__registrate--resaltado'>Registrate</span></Link> </p> 
      </section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={{
            visible: { opacity: 1, paddingLeft: 0 },
            hidden: { opacity: 0, paddingLeft: 20 }
        }}
        className='ingresar-contenedor__logo-seccion'
      >
        <img className='ingresar-contenedor__logo-seccion__imagen' src={logo} alt="logo de roomatch"/>
      </motion.section>

    </div>
  )
}


export default Ingresar