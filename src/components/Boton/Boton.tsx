import React from 'react'
import { Link } from 'react-router-dom'
import './Boton.css';

function Button(props) {
  return (
    <Link className='boton' to={props.route}>
      {props.text}
    </Link>
  );
}

export default Button