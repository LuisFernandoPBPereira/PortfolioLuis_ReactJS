import React from 'react'
import * as S from "./styled.js"
import Button from '../Button/Button.jsx'
import Title from '../Title/Title.jsx'
import { Medias } from './Medias.jsx'


function SocialMedia() {
  return (
    <S.SocialMedia>
        <Title title="Redes Sociais"/>
        <div className='socialMedias'>
            {Medias.map((set, index) => {
                return(
                    <div key={index} className='icons'>
                    <img src={set.icon} 
                        alt={set.alt} />
                    <Button label={set.label} isHref href={set.link}/>
                </div>
                )
            })}
        </div>
    </S.SocialMedia>
  )
}

export default SocialMedia