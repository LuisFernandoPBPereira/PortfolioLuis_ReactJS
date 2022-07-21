import React from 'react'
import * as S from "./styled.js"

function Title({title, isSubtitle}) {
  return (
    <S.Title>
        {isSubtitle ?(
            <h3>{title}</h3>
        ) : (  
            <h1>{title}</h1>
        )}
    </S.Title>
  )
}

export default Title