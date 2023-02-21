import React from 'react'
import * as S from "./styled.js"
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Title from '../../Components/Title/Title.jsx'
import StackIcons from '../../Components/Stack-Icons/StackIcons.jsx'

function About() {
  return (
    <S.About>
        <Navbar/>

        <div className='introduction'>
            <Title title="Minhas Stacks"/>
            <StackIcons/>
        </div>
    </S.About>
  )
}

export default About