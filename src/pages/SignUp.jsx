import React from 'react'
import logo_personas from '../assets/logo_personas.svg'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { motion } from "framer-motion"

const SignUp = () => {
  return (
    <div class='flex h-screen w-screen justify-center bg-white'>

      <div class='flex justify-center items-center flex-col w-[40%] h-full'>
          <p class='font-Comfortaa text-4xl text-black mb-12 text-center'>Bienvenido a <b>roomatch</b></p>
          <form class='flex flex-col gap-4 items-center w-3/5'>
            <input class='transition-[border] duration-[250ms] bg-white border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-secondary w-full px-8 text-center font-Comfortaa h-12' type="text" placeholder="Correo"/>
            <input class='mb-6 transition-[border] duration-[250ms] bg-white border-b-[3px] rounded-[3px] border-black focus:outline-none focus:border-secondary w-full px-8 text-center font-Comfortaa h-12' type="password" placeholder="Contraseña"/>
            <Button route="/buscar" text="Entrar"/>
            <p class=' font-Comfortaa text-lg text-black text-center'>¿No tienes cuenta? <Link class='transition-[color] duration-[250ms] hover:text-secondary text-black' to='/registro'><b>Registrate</b></Link></p>
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
      class='w-[60%] bg-gradient-to-br from-primary to-secondary flex flex-col justify-center items-center h-full rounded-l-[5rem] z-50 '>
        <img src={logo_personas} alt="logo_personas" class='w-80'/>
        <br/>
        <p class='font-Comfortaa text-6xl text-white text-center font-bold'>roomatch</p>
        <p class='font-Comfortaa text-lg text-white text-center'>Conecta y Convive</p>
      </motion.div>

    </div>
  )
}


export default SignUp