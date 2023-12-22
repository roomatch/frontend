import React from 'react'
import resultados from '../../data'
import Persona from '../../components/Persona'
import "./Resultados.css"

function Resultados() {
  return (
    <div className='resultados'>
      {resultados.map((persona, index) => (
        <div key={index}>
            <Persona
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
        </div>
      ))}

    </div>
  )
}

export default Resultados