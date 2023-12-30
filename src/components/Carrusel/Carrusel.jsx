import React from 'react'
import "./Carrusel.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Persona from '../Persona/Persona';
import resultados from '../../data'

function Carrusel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="personas-carrusel">
        <Slider {...settings}>
        {resultados.map((persona, index) => (
          <Persona
              key={index}
              imagen={persona.imagen}
              nombre={persona.nombre}
              genero={persona.genero}
              edad={persona.edad}
              ocupacion={persona.ocupacion}
              mascotas={persona.mascotas}
              orden={persona.orden}
              ruido={persona.ruido}
              invitados={persona.invitados}
              interaccion={persona.interaccion}
          />
        ))}
        </Slider>
    </div>
  )
}

export default Carrusel