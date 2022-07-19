import React from 'react'
import * as S from "./styled.js"

function Button() {
  return (
    <S.Button>
        <div className='container'>
            <a href="#">
                <span>Button</span>
            </a>
        </div>
    </S.Button>
  )
}

export default Button