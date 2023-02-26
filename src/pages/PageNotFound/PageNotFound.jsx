import React from 'react'
import Button from '../../Components/Button/Button'
import Title from '../../Components/Title/Title'
import * as S from "./styled"

function PageNotFound() {
    
  return (
    <S.PageNotyFound>
      <div className='header'>
          <Title className="title" title="Ops! Página não encontrada:"/>
          <Title className="error" title="Erro 404"/>
        <div className='button'>
          <Button label="Voltar à Home" location={"/"}/>
        </div>
      </div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
    </S.PageNotyFound>
  )
}

export default PageNotFound