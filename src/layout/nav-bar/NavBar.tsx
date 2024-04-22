import Button from "@uiComponents/button/Button"
import "./NavBar.css"
import RoomatchIcon from "@components/roomatch-logo/RoomatchLogo"
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function NavBar() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "90px start"],
  })
  return (
    <motion.nav
    ref={ref}
    style={{opacity: scrollYProgress}}
      className='navbar-container'>
      <RoomatchIcon isAnimated={true}/>
      <div className='navbar__links-container'>
        <a href='#features' className='navbar__link'>Funcionalidades</a>
        <a href='#problematic' className='navbar__link'>Problematica</a>
        <a href='#why' className='navbar__link'>¿Por qué Roomatch?</a>
        <a href='#footer' className='navbar__link'>Contacto</a>
        <Button variant='dark' size='small' hRef="#invitation" text="Registrate"/>
      </div>
    </motion.nav>
  )
}
