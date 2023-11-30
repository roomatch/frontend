import React from 'react'
import { Link } from 'react-router-dom'

function Button(props) {
  return (
    <div>
        <Link className='w-full text-center' to={props.route}><button class='mb-6 font-bold transition-[padding] duration-300 hover:px-7 w-fit px-6 text-center font-Comfortaa text-white h-12 bg-gradient-to-br from-primary to-secondary rounded-[.5rem]' type="submit">{props.text}</button></Link>
    </div>
  )
}

export default Button