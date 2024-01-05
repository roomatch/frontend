import React, {useState, useEffect} from 'react'
import "./Perfilamiento.css"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import PerfilamientoCategoria from '../../components/PerfilamientoCategoria/PerfilamientoCategoria';

function Perfilamiento() {

  useEffect(() => {
    let barraProgreso = document.getElementById('barra-progreso');
    barraProgreso.style.right = "100vw";
  }, []); 

  return (
    <div className='perfilamiento'>
      <div className="barra-progreso" id='barra-progreso'/>
      <PerfilamientoCategoria id='perfilamiento__categoria-1' colorFondo="#79E6F2" />
      <div className='separador'><hr /></div>
      <PerfilamientoCategoria id='perfilamiento__categoria-2' colorFondo="#04C4D9"/>
      <div className='separador'><hr /></div>
      <PerfilamientoCategoria id='perfilamiento__categoria-3' colorFondo="#1F7799"/>
      <div className='separador'><hr /></div>
      <PerfilamientoCategoria id='perfilamiento__categoria-4' colorFondo="#18445D"/>
      <div className='separador'><hr /></div>
      <PerfilamientoCategoria id='perfilamiento__categoria-5' colorFondo="#0B2631"/>
    </div>
  )
}

export default Perfilamiento