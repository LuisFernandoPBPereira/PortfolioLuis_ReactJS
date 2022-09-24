import * as S from "./styled.js";
import Title from "../../Title/Title";
import StackIcons from "../../Stack-Icons/StackIcons";
import ProfileImage from "../../ImageProfile/ImageProfile";
import SocialMedia from "../../Social-Media/SocialMedia.jsx";

export default function Introduction(){

    
    return(
        <S.Introduction>
            {/* Aqui, eu apresento:
            --- A minha imagem de perfil;
            --- Uma frase de boas-vindas; */}
            <div className="profile">
                <ProfileImage/>
                <div className="apresentation">
                    <Title title="<Hello World!/>, meu nome é Luis!" />
                    <br /><br />
                    <Title title="Seja Bem-vindo ao meu Portfólio!"/>
                </div>
                
            </div>
            <div className="stacks">
                <Title className="title" title="Aqui estão as minhas stacks:"/>
            </div>  
            <StackIcons/>
            <SocialMedia/>
        </S.Introduction>
    )
}