import React from 'react'
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
               
        <svg className='ingresar-contenedor__logo-seccion__imagen' id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.48 406.38">
          <g>
            <path d="m228.11,146.81c-51.21,44.95-131.77,14.08-138.18-54.19C82.76,16.12,171.92-26.69,228.6,22.62c.74.64,1.46.62,2.17-.06,27.45-26.19,71.55-27.54,101.07-7.46,27.1,18.41,41.2,49.75,36.31,82.05-10.04,66.28-87.96,92.88-137.79,49.66-.76-.66-1.51-.66-2.25,0ZM158.64,20.81c-63.18,14.13-70.2,98.7-10.77,124.42,21.77,9.42,44.42,5.98,67.95-10.33,1.56-1.09,1.8-2.41.73-3.95-18.87-27.18-19.31-65.96.5-93.17.55-.74.48-1.42-.2-2.05-16.56-14.92-35.96-19.9-58.2-14.92Zm193.19,63.76c0-36.35-29.46-65.81-65.81-65.81h0c-36.35,0-65.81,29.46-65.81,65.81h0c0,36.35,29.46,65.81,65.81,65.81s65.81-29.46,65.81-65.81Z" fill="#fafafa"/>
            <path d="m430.31,283.43c3.42-20.92-7.34-57.35-35.58-50.68-29.85,7.08-59.86,13.05-90.04,17.91-26.57,4.29-51.72,3.54-75.44-2.25-42.43-10.39-87.58-27.68-130.95-26.01-34.94,1.32-66.31,29.17-78.31,60.72-.62,1.6-1.79,2.42-3.51,2.46l-13.4.2c-1.76.04-2.35-.77-1.78-2.43,7.04-20.72,18.79-38.45,35.23-53.2,27.3-24.52,60.43-29.03,93.23-24.23,55.66,8.13,107.95,36.02,165.33,27.48,31.12-4.64,61.98-10.52,92.58-17.64,7.96-1.85,14.57-2.21,19.84-1.08,30.37,6.44,43.89,39.97,41,68.06-.15,1.46-1.38,2.58-2.87,2.6l-13.49.26c-1.48.02-2.1-.7-1.84-2.17Z" fill="#fafafa"/>
          </g>
          <text transform="translate(17.02 354.59)" fill="#fafafa" font-family="Comfortaa-Regular, Comfortaa"><tspan font-size="82.22"><tspan x="0" y="0" letter-spacing="-.05em">r</tspan><tspan x="33.38" y="0" letter-spacing="0em">oomatch</tspan></tspan><tspan font-size="34.53"><tspan x="42.98" y="41.44" letter-spacing="-.03em">C</tspan><tspan x="68.63" y="41.44">on</tspan><tspan x="115.39" y="41.44" letter-spacing="-.02em">e</tspan><tspan x="135.9" y="41.44">cta y </tspan><tspan x="232.9" y="41.44" letter-spacing="-.03em">C</tspan><tspan x="258.56" y="41.44">o</tspan><tspan x="281.94" y="41.44" letter-spacing="-.02em">n</tspan><tspan x="304.49" y="41.44">vi</tspan><tspan x="333.56" y="41.44" letter-spacing="-.03em">v</tspan><tspan x="351.76" y="41.44">e</tspan></tspan></text>
        </svg>

      </motion.section>

    </div>
  )
}


export default Ingresar