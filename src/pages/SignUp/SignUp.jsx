import React from 'react'
import logo_personas from '../../assets/logo_personas.svg'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { motion } from "framer-motion"
import "./SignUp.css"

const SignUp = () => {
  return (
    <div class='signup'>

      <div class='signup__izquierda'>
          <p class='signup__izquierda__bienvenido'>Bienvenido a <b>roomatch</b></p>
          <form class='signup__izquierda__formulario'>
            <input class='signup__izquierda__formulario__input' type="text" placeholder="Correo"/>
            <input class='signup__izquierda__formulario__input' type="password" placeholder="Contraseña"/>
            <Button route="/buscar" text="Entrar"/>
            <p class='signup__izquierda__formulario__registro'>¿No tienes cuenta? <Link class='transition-[color] duration-[250ms] hover:text-secondary text-black' to='/registro'><b>Registrate</b></Link></p>
          </form>
      </div>


      <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      variants={{
                          visible: { opacity: 1, paddingLeft: 0 },
                          hidden: { opacity: 0, paddingLeft: 20 }
                      }}
      class='signup__derecha'>
        <img src={logo_personas} alt="logo_personas"/>
        <br/>
        <p class='font-Comfortaa text-6xl text-white text-center font-bold'>roomatch</p>
        <p class='font-Comfortaa text-lg text-white text-center'>Conecta y Convive</p>
      </motion.div>

    </div>
  )
}


export default SignUp