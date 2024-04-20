import Button from "@uiComponents/button/Button"
import "./NavBar.css"
import RoomatchIcon from "@components/roomatch-logo/RoomatchLogo"
import { motion, useScroll, useTransform, useViewportScroll } from "framer-motion";

export default function NavBar() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, .1], [0.8, 1]);
  return (
    <motion.nav
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
