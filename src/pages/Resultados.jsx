import React from 'react'
import resultados from '../data'
import Persona from '../components/Persona'

function Resultados() {
  return (
    <div className=' bg-white p-20 pl-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {resultados.map((persona, index) => (
        <div className="" key={index}>
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