import React, {useState} from 'react'
import  './Buscar.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import resultados from '../../data'
import Persona from '../../components/Persona/Persona';

const Buscar = () => {

    const [valueGenero, setValueGenero] = useState('default');
    const [valueEdad, setValueEdad] = useState('default');
    const [valueOcupacion, setValueOcupacion] = useState('default');
    const [valueMascotas, setValueMascotas] = useState('default');
    const [valueHabitos, setValueHabitos] = useState('default');
    const [valueOrden, setValueOrden] = useState('default');
    const [valueRuido, setValueRuido] = useState('default');
    const [valueInteraccion, setValueInteraccion] = useState('default');
    const [valueInvitados, setValueInvitados] = useState('default');

    function handleSelectionFiltro(e, filtroTipo){

        let valorSeleccionado = e.target.value;

        if (filtroTipo === "genero"){
            let marcadoGenero = document.getElementById("marcado-genero");
            setValueGenero(valorSeleccionado);
            if(valorSeleccionado !== "default"){
                marcadoGenero!.style.backgroundColor = "#33ED09";
            }
            else{
                marcadoGenero!.style.backgroundColor = "gray";
            }
        }

        else if (filtroTipo === "edad"){
            let marcadoEdad = document.getElementById("marcado-edad");
            setValueEdad(valorSeleccionado);
            if(valorSeleccionado !== "default"){
                marcadoEdad!.style.backgroundColor = "#33ED09";
            }
            else{
                marcadoEdad!.style.backgroundColor = "gray";
            }
        }

        else if (filtroTipo === "ocupacion"){
            let marcadoOcupacion = document.getElementById("marcado-ocupacion");
            setValueOcupacion(valorSeleccionado);
            if(valorSeleccionado !== "default"){
                marcadoOcupacion!.style.backgroundColor = "#33ED09";
            }
            else{
                marcadoOcupacion!.style.backgroundColor = "gray";
            }
        }

        else if (filtroTipo === "mascotas"){
            let marcadoMascotas = document.getElementById("marcado-mascotas");
            setValueMascotas(valorSeleccionado);
            if(valorSeleccionado !== "default") {
                marcadoMascotas!.style.backgroundColor = "#33ED09";
            }
            else {
                marcadoMascotas!.style.backgroundColor = "gray";
            }
        }

        else if (filtroTipo === "habitos"){
            let marcadoHabitos = document.getElementById("marcado-habitos");
            setValueHabitos(valorSeleccionado);
            if(valorSeleccionado !== "default") {
                marcadoHabitos!.style.backgroundColor = "#33ED09";
            }
            else {
                marcadoHabitos!.style.backgroundColor = "gray";
            }
        }

        else if (filtroTipo === "orden"){
            let marcadoOrden = document.getElementById("marcado-orden");
            setValueOrden(valorSeleccionado);
            if(valorSeleccionado !== "default") {
                marcadoOrden!.style.backgroundColor = "#33ED09";
            }
            else {
                marcadoOrden!.style.backgroundColor = "gray";
            }
        }

        else if (filtroTipo === "ruido"){
            let marcadoRuido = document.getElementById("marcado-ruido");
            setValueRuido(valorSeleccionado);
            if(valorSeleccionado !== "default") {
                marcadoRuido!.style.backgroundColor = "#33ED09";
            }
            else {
                marcadoRuido!.style.backgroundColor = "gray";
            }
        }

        else if (filtroTipo === "interaccion"){
            let marcadoInteraccion = document.getElementById("marcado-interaccion");
            setValueInteraccion(valorSeleccionado);
            if(valorSeleccionado !== "default") {
                marcadoInteraccion!.style.backgroundColor = "#33ED09";
            }
            else {
                marcadoInteraccion!.style.backgroundColor = "gray";
            }
        }

        else if (filtroTipo === "invitados"){
            let marcadoInvitados = document.getElementById("marcado-invitados");
            setValueInvitados(valorSeleccionado);
            if(valorSeleccionado !== "default") {
                marcadoInvitados!.style.backgroundColor = "#33ED09";
            }
            else {
                marcadoInvitados!.style.backgroundColor = "gray";
            }
        }


    }

    function limpiarFiltros(e){
        let marcadoGenero = document.getElementById("marcado-genero");
        let marcadoEdad = document.getElementById("marcado-edad");
        let marcadoOcupacion = document.getElementById("marcado-ocupacion");
        let marcadoMascotas = document.getElementById("marcado-mascotas");
        let marcadoHabitos = document.getElementById("marcado-habitos");
        let marcadoOrden = document.getElementById("marcado-orden");
        let marcadoRuido = document.getElementById("marcado-ruido");
        let marcadoInteraccion = document.getElementById("marcado-interaccion");
        let marcadoInvitados = document.getElementById("marcado-invitados");

        marcadoGenero!.style.backgroundColor = "gray";
        marcadoEdad!.style.backgroundColor = "gray";
        marcadoOcupacion!.style.backgroundColor = "gray";
        marcadoMascotas!.style.backgroundColor = "gray";
        marcadoHabitos!.style.backgroundColor = "gray";
        marcadoOrden!.style.backgroundColor = "gray";
        marcadoRuido!.style.backgroundColor = "gray";
        marcadoInteraccion!.style.backgroundColor = "gray";
        marcadoInvitados!.style.backgroundColor = "gray";

        setValueGenero("default");
        setValueEdad("default");
        setValueOcupacion("default");
        setValueMascotas("default");
        setValueHabitos("default");
        setValueOrden("default");
        setValueRuido("default");
        setValueInteraccion("default");
        setValueInvitados("default");

    }

    const configuracionCarrusel = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
      <div className='buscar'>

        <section className='buscar__rommies-sugeridos'>
            <h1 className='buscar__rommies-sugeridos__titulo'>Roomies sugeridos</h1>
            <Slider {...configuracionCarrusel} className="buscar__rommies-sugeridos__carrusel-personas">
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
        </section>

        <section className='crear-match'>
            <h1 className='crear-match__titulo'>Crea tu <span className='crear-match__titulo--subrayado'>match</span> ideal</h1>
            <div className="crear-match__filtros">
                <div>
                    <div className='crear-match__filtros__encabezado-filtro'><h2 className='crear-match__filtros__titulo-filtro'>Genero</h2><div className="crear-match__filtros__marcado-filtro" id='marcado-genero'/></div>
                    <select value={valueGenero} onChange={e=>handleSelectionFiltro(e, "genero")} className='crear-match__filtros__dropdown-filtro' id='genero-select'>
                        <option value="default">No importa</option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                    </select>
                </div>
                <div>
                    <div className='crear-match__filtros__encabezado-filtro'><h2 className='crear-match__filtros__titulo-filtro'>Edad</h2><div className="crear-match__filtros__marcado-filtro" id='marcado-edad'/></div>
                    <select value={valueEdad} onChange={e=>handleSelectionFiltro(e, "edad")} className='crear-match__filtros__dropdown-filtro'>
                        <option value="default">No importa</option>
                        <option value="hombre">-18</option>
                        <option value="mujer">18 - 24</option>
                        <option value="mujer">25 - 35</option>
                        <option value="mujer">35+</option>
                    </select>
                </div>
                <div>
                    <div className='crear-match__filtros__encabezado-filtro'><h2 className='crear-match__filtros__titulo-filtro'>Ocupación</h2><div className="crear-match__filtros__marcado-filtro" id='marcado-ocupacion'/></div>
                    <select value={valueOcupacion} onChange={e=>handleSelectionFiltro(e, "ocupacion")} className='crear-match__filtros__dropdown-filtro'>
                        <option value="default">No importa</option>
                        <option value="hombre">Estudiante</option>
                        <option value="mujer">Profesional</option>
                    </select>
                </div>
                <div>
                    <div className='crear-match__filtros__encabezado-filtro'><h2 className='crear-match__filtros__titulo-filtro'>Mascotas</h2><div className="crear-match__filtros__marcado-filtro" id='marcado-mascotas'/></div>
                    <select value={valueMascotas} onChange={e=>handleSelectionFiltro(e, "mascotas")} className='crear-match__filtros__dropdown-filtro'>
                        <option value="default">No importa</option>
                        <option value="hombre">Perro</option>
                        <option value="mujer">Gato</option>
                        <option value="mujer">Ninguno</option>
                    </select>
                </div>
                <div>
                    <div className='crear-match__filtros__encabezado-filtro'><h2 className='crear-match__filtros__titulo-filtro'>Hábitos de consumo</h2><div className="crear-match__filtros__marcado-filtro" id='marcado-habitos'/></div>
                    <select value={valueHabitos} onChange={e=>handleSelectionFiltro(e, "habitos")} className='crear-match__filtros__dropdown-filtro'>
                        <option value="default">No importa</option>
                        <option value="hombre">Alcohol</option>
                        <option value="mujer">Cigarrillo</option>
                        <option value="mujer">Ninguno</option>
                    </select>
                </div>
                <div>
                    <div className='crear-match__filtros__encabezado-filtro'><h2 className='crear-match__filtros__titulo-filtro'>Limpieza y orden</h2><div className="crear-match__filtros__marcado-filtro" id='marcado-orden'/></div>
                    <select value={valueOrden} onChange={e=>handleSelectionFiltro(e, "orden")} className='crear-match__filtros__dropdown-filtro'>
                        <option value="default">No importa</option>
                        <option value="hombre">Muy ordenado</option>
                        <option value="mujer">Ordenado</option>
                        <option value="mujer">No tan ordenado</option>
                    </select>
                </div>
                <div>
                    <div className='crear-match__filtros__encabezado-filtro'><h2 className='crear-match__filtros__titulo-filtro'>Ruido</h2><div className="crear-match__filtros__marcado-filtro" id='marcado-ruido'/></div>
                    <select value={valueRuido} onChange={e=>handleSelectionFiltro(e, "ruido")} className='crear-match__filtros__dropdown-filtro'>
                        <option value="default">No importa</option>
                        <option value="hombre">Silencioso</option>
                        <option value="mujer">Normal</option>
                    </select>
                </div>
                <div>
                    <div className='crear-match__filtros__encabezado-filtro'><h2 className='crear-match__filtros__titulo-filtro'>Interacción social</h2><div className="crear-match__filtros__marcado-filtro" id='marcado-interaccion'/></div>
                    <select value={valueInteraccion} onChange={e=>handleSelectionFiltro(e, "interaccion")} className='crear-match__filtros__dropdown-filtro'>
                        <option value="default">No importa</option>
                        <option value="hombre">Sociable</option>
                        <option value="mujer">No tan sociable</option>
                        <option value="mujer">Aislado</option>
                    </select>
                </div>
                <div>
                    <div className='crear-match__filtros__encabezado-filtro'><h2 className='crear-match__filtros__titulo-filtro'>Invitados</h2><div className="crear-match__filtros__marcado-filtro" id='marcado-invitados'/></div>
                    <select value={valueInvitados} onChange={e=>handleSelectionFiltro(e, "invitados")} className='crear-match__filtros__dropdown-filtro'>
                        <option value="default">No importa</option>
                        <option value="hombre">Informar para el día</option>
                        <option value="mujer">Informar para la noche</option>
                        <option value="mujer">Sin restricciones</option>
                        <option value="mujer">No invitados</option>
                    </select>
                </div>
            </div>
            <div className='crear-match__botones-contenedor'>
                <button className='crear-match__boton'>Buscar</button>
                <button className='crear-match__boton' onClick={e=>limpiarFiltros(e)}>Limpiar filtros</button>
            </div>
            <div className='crear-match__separador'><hr/></div>
            <Slider className='crear-match__carrusel-personas' {...configuracionCarrusel}>
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
        </section>

      </div>
    )
}

export default Buscar

