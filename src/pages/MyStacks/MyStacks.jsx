import React from 'react'
import * as S from "./styled.js"
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Title from '../../Components/Title/Title.jsx'
import StackIcons from '../../Components/Stack-Icons/StackIcons.jsx'
import Button from '../../Components/Button/Button.jsx'

function MyStacks() {
  return (
    <S.About>
        <Navbar/>
        <div className='introduction'>
          <Title title="Minhas Stacks"/>
          <StackIcons/>
        </div>
        <div className='goToHome'>
            <Button label="Voltar à Home" location="/"/>
        </div>
    </S.About>
  )
}

export default MyStacks