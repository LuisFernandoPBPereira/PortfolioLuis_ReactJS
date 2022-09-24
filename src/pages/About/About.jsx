import React from 'react'
import * as S from "./styled.js"
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Title from '../../Components/Title/Title.jsx'

function About() {
  return (
    <S.About>
        <Navbar/>

        <div className='introduction'>
            <Title title="Sobre Mim"/>
        </div>
    </S.About>
  )
}

export default About