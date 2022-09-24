import React from 'react'
import * as S from "./styled.js"

function Title({title, isSubtitle, isAnimatedTitle, className}) {
  return (
    <S.Title>
        {isSubtitle ?(
              <h2 className={className}>{title}</h2>
          ) : (  
              <h1 className={className}>{title}</h1>
          )
          &&
          isAnimatedTitle ?(
            <h1 className={`${className} animated`}>{title}</h1>
          ) : (
            <h1 className={className}>{title}</h1>
          )
        }
    </S.Title>
  )
}

export default Title