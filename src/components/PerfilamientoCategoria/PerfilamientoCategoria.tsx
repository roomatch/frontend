import React, { useEffect, useState } from 'react'
import "./PerfilamientoCategoria.css"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import { IoAlertCircleOutline } from "react-icons/io5";
import PerfilamientoTarjeta from '../PerfilamientoTarjeta/PerfilamientoTarjeta';

function PerfilamientoCategoria(props) {

  const [esPrimeraCategoria, setEsPrimeraCategoria] = useState(false);
  const [esUltimaCategoria, setEsUltimaCategoria] = useState(false);
  const [categoriaId, setCategoriaId] = useState(0);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleAnteriorSeccion = (anteriorSeccionId) => {
    const seccion = document.getElementById(anteriorSeccionId);
    seccion!.scrollIntoView();
    let barraProgreso = document.getElementById('barra-progreso');
    let nuevoRight = Number(barraProgreso!.style.right.replace("vw", "")) + 25;
    barraProgreso!.style.right = nuevoRight + "vw";
  };

  const handleSiguienteSeccion = async (siguienteSeccionId, esBotonFinalizar) => {
    // Validacion de completacion
    let estaRespondida = 0;
    for(let i = 1; i <= 4; i++) {
      let pregunta = document.getElementById(`categoria-${categoriaId}-pregunta-${i}`);
      pregunta!.getAttribute("esta-respondido") === "true" && estaRespondida++;
    }
    if(estaRespondida !== 4) {
      let popUpContenedor = document.getElementById('seccion-categoria__popup-contenedor');
      popUpContenedor!.style.display = 'flex';
      await sleep(2000);
      popUpContenedor!.style.display = 'none';
      return;
    }
    // Animacion de scroll
    if (!esBotonFinalizar) {
      const seccion = document.getElementById(siguienteSeccionId);
      seccion!.scrollIntoView();
      let barraProgreso = document.getElementById('barra-progreso');
      let nuevoRight = Number(barraProgreso!.style.right.replace("vw", "")) - 25;
      barraProgreso!.style.right = nuevoRight + "vw";
    }
    // Popup de perfilamiento finalizado
    else{
      let popUpContenedor = document.getElementById('seccion-categoria__popup-contenedor--ultima-categoria');
      popUpContenedor!.style.display = 'flex';
      await sleep(2000);
      popUpContenedor!.style.display = 'none';
      return;
    }
  };

  useEffect(() => {
    let id = Number(props.id.replace("perfilamiento__categoria-", ""));
    setCategoriaId(id);
    setEsPrimeraCategoria(id === 1);
    setEsUltimaCategoria(id === 5);
  }, [props.id]);

  return (
    <section className='seccion-categoria' id={props.id}>
      <h1 className='seccion-categoria__numero-paso'>{categoriaId}<span className='seccion-categoria__numero-paso--total'>/5</span></h1>
      <div className={`seccion-categoria__preguntas-contenedor seccion-categoria__preguntas-contenedor--color-${categoriaId}`}>

        <PerfilamientoTarjeta idCategoria={categoriaId} idPregunta="pregunta-1" titulo="Planeando una actividad para hacer en mi tiempo libre, prefiero probar algo nuevo que realizar una actividad que ya conozco." />
        <PerfilamientoTarjeta idCategoria={categoriaId} idPregunta="pregunta-2" titulo="Planeando una actividad para hacer en mi tiempo libre, prefiero probar algo nuevo que realizar una actividad que ya conozco." />
        <PerfilamientoTarjeta idCategoria={categoriaId} idPregunta="pregunta-3" titulo="Planeando una actividad para hacer en mi tiempo libre, prefiero probar algo nuevo que realizar una actividad que ya conozco." />
        <PerfilamientoTarjeta idCategoria={categoriaId} idPregunta="pregunta-4" titulo="Planeando una actividad para hacer en mi tiempo libre, prefiero probar algo nuevo que realizar una actividad que ya conozco." />

        <div className='seccion-categoria__flechas-contenedor'>
          {
            !esPrimeraCategoria && (
              <button onClick={() => handleAnteriorSeccion("perfilamiento__categoria-" + (categoriaId - 1))}><FaArrowUp className='seccion-categoria__flecha-icono' /></button>
            )
          }
          {
            !esUltimaCategoria && (
              <button onClick={() => handleSiguienteSeccion("perfilamiento__categoria-" + (categoriaId + 1), false)}><FaArrowDown className='seccion-categoria__flecha-icono' /></button>
            )
          }
          {
            esUltimaCategoria && (
              <button onClick={() => handleSiguienteSeccion("perfilamiento__categoria-" + (categoriaId + 1), true)} className='finalizar-boton'>Finalizar</button>
            )
          }
        </div>
      </div>
      {esUltimaCategoria && (
        <div className='seccion-categoria__popup-contenedor--ultima-categoria' id='seccion-categoria__popup-contenedor--ultima-categoria'><article className='seccion-categoria__popup' id='seccion-categoria__popup'>Finalizaste tu perfilamiento, ahora puedes ver los roomies sugeridos que tenemos para ti.</article></div>
      )}
      <div className='seccion-categoria__popup-contenedor' id='seccion-categoria__popup-contenedor'><article className='seccion-categoria__popup' id='seccion-categoria__popup'><IoAlertCircleOutline className='seccion-categoria__alerta-icono' /> Responde todas las preguntas antes de continuar</article></div>
    </section>
  )
}

export default PerfilamientoCategoria