import React from 'react'
import * as S from "./styled.js"
import Button from '../Button/Button.jsx'

function Navbar() {
  return (
    <S.Navbar>
        <div className='header'>
            <div className='titleHeader'>
                <h1>Luis_Fernando.Dev</h1>
            </div>
            <div className="main-header">
                <nav className="headerMenu">    
                    <ul>
                        <li>
                            <Button label="Sobre Mim"/>
                        </li>
                        <li>
                            <Button label="Currículo"/>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </S.Navbar>
  )
}

export default Navbar