import React from 'react'
import * as S from "./styled.js"
import Button from '../Button/Button.jsx'
import {Link} from "react-router-dom"
import Title from ".././Title/Title.jsx"

function Navbar() {
  return (
    <S.Navbar>
        <div className='header'>
            <div className='titleHeader'>
                <Link to="/"><Title isAnimatedTitle className="mainTitle" title="Luis_Fernando.Dev"/></Link>
            </div>
            <div className="main-header">
                <nav className="headerMenu">    
                    <ul>
                        <li>
                            <Button label="Sobre Mim" location="/about"/>
                        </li>
                        <li>
                            <Button label="Currículo" location="/curriculum"/>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </S.Navbar>
  )
}

export default Navbar