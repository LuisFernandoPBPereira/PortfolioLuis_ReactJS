import React from 'react'
import * as S from "./styled.js"
import Button from '../Button/Button.jsx'
import Title from '../Title/Title.jsx'


function SocialMedia() {
  return (
    <S.SocialMedia>
        <Title title="Redes Sociais"/>
        <div className='socialMedias'>
            <div className='icons'>
                <img src="https://raw.githubusercontent.com/shahbajjamil/Social-Meadia-Icons/master/Icons-logos/linkedin-circle.png" 
                    alt="Ícone do LinkedIn" />
                <Button label="LinkedIn" isHref href="https://www.linkedin.com/in/luis-fernando-pedro-bom-pereira-1b4821210/"/>
            </div>
            <div className='icons'>
                <img src="https://raw.githubusercontent.com/shahbajjamil/Social-Meadia-Icons/master/Icons-logos/instagram-circle.png" 
                    alt="Ícone do Instagram" />
                <Button label="Instagram" isHref href="https://www.instagram.com/luis.fernandop.b.pereira"/>
            </div>
            <div className='icons'>
                <img src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/google-gmail.svg" 
                    alt="Ícone do Gmail"/>
                <Button label="Gmail" isHref href="mailto:luisfernandopbp@gmail.com"/>
            </div>
            <div className='icons'>
                <img src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/github-icon.svg" 
                    alt="Ícone do Github"/>
                <Button label="Github" isHref href="https://github.com/LuisFernandoPBPereira"/>
            </div>

        </div>
    </S.SocialMedia>
  )
}

export default SocialMedia