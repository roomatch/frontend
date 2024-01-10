import React, { useState } from 'react'
import "./PerfilamientoTarjeta.css"

function PerfilamientoTarjeta(props) {

  const [opcionSeleccionada, setOpcionSeleccionada] = useState(0)


  function handleClicRespuesta(event) {
    let inputClickeadoId = Number(event.target.id.substring(event.target.id.length - 1, event.target.id.length));
    if (inputClickeadoId !== opcionSeleccionada) {
      if (opcionSeleccionada !== 0) {
        let inputSeleccionado = document.getElementById(`categoria-${props.idCategoria}-${props.idPregunta}-respuesta-${opcionSeleccionada}`);
        inputSeleccionado!.style.backgroundColor = "transparent";
      }
      setOpcionSeleccionada(inputClickeadoId);
      const inputSeleccionar = document.getElementById(event.target.id);
      inputSeleccionar!.style.backgroundColor = "#FAFAFA";
    }

  }
  return (
    <article className='seccion-categoria__pregunta' id={`categoria-${props.idCategoria}-${props.idPregunta}`} esta-respondido={opcionSeleccionada !== 0 ? "true" : "false"}>
      <h1 className='seccion-categoria__pregunta__titulo'>{props.titulo}</h1>
      <div className='seccion-categoria__pregunta__respuestas-contenedor'>
        <p className='seccion-categoria__acuerdo-texto'>No estoy de acuerdo</p>
        <input type="radio" id={`categoria-${props.idCategoria}-${props.idPregunta}-respuesta-1`} className='seccion-categoria__pregunta__respuesta seccion-categoria__pregunta__respuesta--tamanio-3' onClick={e => handleClicRespuesta(e)} />
        <input type="radio" id={`categoria-${props.idCategoria}-${props.idPregunta}-respuesta-2`} className='seccion-categoria__pregunta__respuesta seccion-categoria__pregunta__respuesta--tamanio-2' onClick={e => handleClicRespuesta(e)} />
        <input type="radio" id={`categoria-${props.idCategoria}-${props.idPregunta}-respuesta-3`} className='seccion-categoria__pregunta__respuesta seccion-categoria__pregunta__respuesta--tamanio-1' onClick={e => handleClicRespuesta(e)} />
        <input type="radio" id={`categoria-${props.idCategoria}-${props.idPregunta}-respuesta-4`} className='seccion-categoria__pregunta__respuesta seccion-categoria__pregunta__respuesta--tamanio-2' onClick={e => handleClicRespuesta(e)} />
        <input type="radio" id={`categoria-${props.idCategoria}-${props.idPregunta}-respuesta-5`} className='seccion-categoria__pregunta__respuesta seccion-categoria__pregunta__respuesta--tamanio-3' onClick={e => handleClicRespuesta(e)} />
        <p className='seccion-categoria__acuerdo-texto'>Estoy de acuerdo</p>
      </div>
    </article>
  )
}

export default PerfilamientoTarjeta