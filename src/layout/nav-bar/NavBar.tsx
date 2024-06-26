import Button from "@uiComponents/button/Button"
import "./NavBar.css"
import RoomatchIcon from "@components/roomatch-logo/RoomatchLogo"
import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import MenuIcon from "./components/icons/MenuIcon";
import XIcon from "./components/icons/XIcon";

export default function NavBar() {

  const [isChecked, setIsChecked] = useState(false)

  const handleOnClick = () => {
    setIsChecked(!isChecked)
  }

  const handleOnClickInLink = () => {
    setIsChecked(false)
    const input = document.getElementById('check') as HTMLInputElement
    input.checked = false
  }

  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "90px start"],
  })
  return (

    <>
      <motion.nav
        ref={ref}
        style={{ opacity: scrollYProgress }}
        className='navbar-container'>
        <RoomatchIcon isAnimated={true} />

        <div className='navbar__links-container'>
          <a onClick={handleOnClickInLink} href='#features' className='navbar__link'>Funcionalidades</a>
          <a onClick={handleOnClickInLink} href='#problematic' className='navbar__link'>Problematica</a>
          <a onClick={handleOnClickInLink} href='#why' className='navbar__link'>¿Por qué Roomatch?</a>
          <a onClick={handleOnClickInLink} href='#footer' className='navbar__link'>Contacto</a>
          <Button variant='dark' size='small' hRef="#invitation" text="Registrate" />
          <input type="checkbox" id="check" />
          <motion.div
            onClick={handleOnClick} 
            whileTap={{ scale: 0.9 }}
          >
            <button className="navbar__menu-icon" >
              <label htmlFor="check" className="navbar__button__label"><MenuIcon /></label>
            </button>
          </motion.div>
          <motion.div
            onClick={handleOnClick}
            whileTap={{ scale: 0.9 }}
          >
            <button className="navbar__close-menu-icon">
              <label htmlFor="check" className="navbar__button__label"><XIcon /></label>
            </button>
          </motion.div>
        </div>

      </motion.nav>

      <div className={isChecked ? 'navbar__links-container--mobile--show' : 'navbar__links-container--mobile'}>
        <a onClick={handleOnClickInLink} href='#features' className='navbar__link--mobile'>Funcionalidades</a>
        <a onClick={handleOnClickInLink} href='#problematic' className='navbar__link--mobile'>Problematica</a>
        <a onClick={handleOnClickInLink} href='#why' className='navbar__link--mobile'>¿Por qué Roomatch?</a>
        <a onClick={handleOnClickInLink} href='#footer' className='navbar__link--mobile'>Contacto</a>
      </div>

    </>
  )
}
