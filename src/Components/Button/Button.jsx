import React from 'react'
import * as S from "./styled.js"

function Button({label, isSubmit}) {
  return (
    <S.Button>
      {isSubmit ?(
        <button type='submit' className='container'>
          <span id='label'>Enviar</span>
        </button>
      ) : (
        <button className='container'>
          <span id='label'>{label}</span>
        </button>
      )}
        
    </S.Button>
  )
}

export default Button