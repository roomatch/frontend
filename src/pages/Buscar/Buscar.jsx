import React from 'react'
import  './Buscar.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import resultados from '../../data'
import Persona from '../../components/Persona/Persona';

const Search = () => {

    function handleSelectionGenero(e){
        let marcadoGenero = document.getElementById("marcado-genero");
        if(e.target.value !== "default"){
            marcadoGenero.style.backgroundColor = "#33ED09";
        }
        else{
            marcadoGenero.style.backgroundColor = "gray";
        }
    }

    function handleSelectionEdad(e){
        let marcadoEdad = document.getElementById("marcado-edad");
        if(e.target.value !== "default"){
            marcadoEdad.style.backgroundColor = "#33ED09";
        }
        else{
            marcadoEdad.style.backgroundColor = "gray";
        }
    }

    function handleSelectionOcupacion(e){
        let marcadoOcupacion = document.getElementById("marcado-ocupacion");
        if(e.target.value !== "default"){
            marcadoOcupacion.style.backgroundColor = "#33ED09";
        }
        else{
            marcadoOcupacion.style.backgroundColor = "gray";
        }
    }

    function handleSelectionMascotas(e){
        let marcadoMascotas = document.getElementById("marcado-mascotas");
        if(e.target.value !== "default") {
            marcadoMascotas.style.backgroundColor = "#33ED09";
        }
        else {
            marcadoMascotas.style.backgroundColor = "gray";
        }
    }

    function handleSelectionHabitos(e){
        let marcadoHabitos = document.getElementById("marcado-habitos");
        if(e.target.value !== "default") {
            marcadoHabitos.style.backgroundColor = "#33ED09";
        }
        else {
            marcadoHabitos.style.backgroundColor = "gray";
        }
    }

    function handleSelectionOrden(e){
        let marcadoOrden = document.getElementById("marcado-orden");
        if(e.target.value !== "default") {
            marcadoOrden.style.backgroundColor = "#33ED09";
        }
        else {
            marcadoOrden.style.backgroundColor = "gray";
        }
    }

    function handleSelectionRuido(e){
        let marcadoRuido = document.getElementById("marcado-ruido");
        if(e.target.value !== "default") {
            marcadoRuido.style.backgroundColor = "#33ED09";
        }
        else {
            marcadoRuido.style.backgroundColor = "gray";
        }
    }

    function handleSelectionInteraccion(e){
        let marcadoInteraccion = document.getElementById("marcado-interaccion");
        if(e.target.value !== "default") {
            marcadoInteraccion.style.backgroundColor = "#33ED09";
        }
        else {
            marcadoInteraccion.style.backgroundColor = "gray";
        }
    }

    function handleSelectionInvitados(e){
        let marcadoInvitados = document.getElementById("marcado-invitados");
        if(e.target.value !== "default") {
            marcadoInvitados.style.backgroundColor = "#33ED09";
        }
        else {
            marcadoInvitados.style.backgroundColor = "gray";
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
      <div className='search'>

        <h1 className='mt-[40px]'>Roomies sugeridos</h1>

        <div className="slider">
            <Slider {...settings}>
            {
              resultados.map((persona, index) => (
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
              ))
            }
            </Slider>
        </div>

        <section className='crear-match'>

            <div className="filtros">

                <h1 className='filtros__titulo'>
                    <pre className='font-Comfortaa'>
                        Crea tu <span className='subrayado'><br/>match</span> ideal
                    </pre>
                </h1>
                
                <div className="filtros__opciones">
                    <div className='select'>
                        <h1 className='titulo'>Genero <div className="marcado" id='marcado-genero'/></h1>
                        <select onChange={e=>handleSelectionGenero(e)} className='opciones' name="genero" id="blabla">
                            <option value="default">No importa</option>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                        </select>
                    </div>
                    <div className='select'>
                        <h1 className='titulo'>Edad <div className="marcado" id='marcado-edad'/></h1>
                        <select onChange={e=>handleSelectionEdad(e)} className='opciones' name="genero" id="genero">
                            <option value="default">No importa</option>
                            <option value="hombre">-18</option>
                            <option value="mujer">18 - 24</option>
                            <option value="mujer">25 - 35</option>
                            <option value="mujer">35+</option>
                        </select>
                    </div>
                    <div className='select'>
                        <h1 className='titulo'>Ocupación <div className="marcado" id='marcado-ocupacion'/></h1>
                        <select onChange={e=>handleSelectionOcupacion(e)} className='opciones' name="genero" id="genero">
                            <option value="default">No importa</option>
                            <option value="hombre">Estudiante</option>
                            <option value="mujer">Profesional</option>
                        </select>
                    </div>
                    <div className='select'>
                        <h1 className='titulo'>Mascotas <div className="marcado" id='marcado-mascotas'/></h1>
                        <select onChange={e=>handleSelectionMascotas(e)} className='opciones' name="genero" id="genero">
                            <option value="default">No importa</option>
                            <option value="hombre">Perro</option>
                            <option value="mujer">Gato</option>
                            <option value="mujer">Ninguno</option>
                        </select>
                    </div>
                    <div className='select'>
                        <h1 className='titulo'>Hábitos de consumo <div className="marcado" id='marcado-habitos'/></h1>
                        <select onChange={e=>handleSelectionHabitos(e)} className='opciones' name="genero" id="genero">
                            <option value="default">No importa</option>
                            <option value="hombre">Alcohol</option>
                            <option value="mujer">Cigarrillo</option>
                            <option value="mujer">Ninguno</option>
                        </select>
                    </div>
                    <div className='select'>
                        <h1 className='titulo'>Orden y limpieza <div className="marcado" id='marcado-orden'/></h1>
                        <select onChange={e=>handleSelectionOrden(e)} className='opciones' name="genero" id="genero">
                            <option value="default">No importa</option>
                            <option value="hombre">Muy ordenado</option>
                            <option value="mujer">Ordenado</option>
                            <option value="mujer">No tan ordenado</option>
                        </select>
                    </div>
                    <div className='select'>
                        <h1 className='titulo'>Ruido <div className="marcado" id='marcado-ruido'/></h1>
                        <select onChange={e=>handleSelectionRuido(e)} className='opciones' name="genero" id="genero">
                            <option value="default">No importa</option>
                            <option value="hombre">Silencioso</option>
                            <option value="mujer">Normal</option>
                        </select>
                    </div>
                    <div className='select'>
                        <h1 className='titulo'>Interacción social <div className="marcado" id='marcado-interaccion'/></h1>
                        <select onChange={e=>handleSelectionInteraccion(e)} className='opciones' name="genero" id="genero">
                            <option value="default">No importa</option>
                            <option value="hombre">Sociable</option>
                            <option value="mujer">No tan sociable</option>
                            <option value="mujer">Aislado</option>
                        </select>
                    </div>
                    <div className='select'>
                        <h1 className='titulo'>Invitados <div className="marcado" id='marcado-invitados'/></h1>
                        <select onChange={e=>handleSelectionInvitados(e)} className='opciones' name="genero" id="genero">
                            <option value="default">No importa</option>
                            <option value="hombre">Informar para el día</option>
                            <option value="mujer">Informar para la noche</option>
                            <option value="mujer">Sin restricciones</option>
                            <option value="mujer">No invitados</option>
                        </select>
                    </div> 
                </div>
            
            </div>

            <div className='separator' ><hr/></div>

            <div className="crear-match__slider">
                <Slider {...settings}>
                {
                resultados.map((persona, index) => (
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
                ))
                }
                </Slider>
            </div>

        </section>

      </div>
    )
}

export default Search

