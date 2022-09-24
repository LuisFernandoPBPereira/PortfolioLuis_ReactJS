import React from 'react'
import * as S from "./styled.js"
import {Link} from "react-router-dom"

function Button({label, isSubmit, isHref, href, location}) {
  return (
    <S.Button>
      {isSubmit ?(
        <button type='submit' className='container'>
          <span id='label'>Enviar</span>
        </button>
      ) : (
        <Link to={location}>
          <button className='container'>
            <span id='label'>{label}</span>
          </button>
        </Link>
      ) 
      &&
      isHref ?(
        <a className='container' href={href}>
          <span id='label'>{label}</span>
        </a>
      ) : (
        <Link to={location}>
          <button className='container'>  
            <span id='label'>{label}</span>
          </button>
        </Link>
      )}
        
    </S.Button>
  )
}

export default Button