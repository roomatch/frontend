import React from 'react'

const Search = () => {
  return (
    <div className='h-screen'>
        <div className="pl-4 w-full h-[100%] bg-white">
            <p className='pt-12 font-Comfortaa text-black text-4xl w-full text-center'>Crea tu <b>roomatch</b> perfecto</p>
            <div className="gap-20 flex items-center w-full p-12 box-border">

                <select className='w-1/4 h-10 shadow-none focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white' name="genero" id="genero">
                    <option value="" disabled selected>Genero</option>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>

                <select className='w-1/4 h-10 shadow-none focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white' name="genero" id="genero">
                    <option value="" disabled selected>Genero</option>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>

                <select className='w-1/4 h-10 shadow-none focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white' name="genero" id="genero">
                    <option value="" disabled selected>Genero</option>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>

                <select className='w-1/4 h-10 shadow-transparent focus:outline-none text-center font-Comfortaa border-b-[3px] rounded-[3px] border-black bg-white' name="genero" id="genero">
                    <option value="" disabled selected>Genero</option>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>

            </div>
        </div>
    </div>
  )
}

export default Search