import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonStyle.css';

function Button(props) {
  return (
    <div>
      <Link className='link' to={props.route}>
        <button className='custom-button button-extra' type="submit">
          {props.text}
        </button>
      </Link>
    </div>
  );
}

export default Button