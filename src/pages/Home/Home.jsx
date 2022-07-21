import Button from "../../Components/Button/Button";
import Title from "../../Components/Title/Title";
import StackIcons from "../../Components/Stack-Icons/StackIcons";
import * as S from "./styled.js"

export default function Home(){
    return(
        <S.Home>
            <div className="master">
                <Title title="Bem-vindo ao meu Portfólio!"/>
                <Title title="Me chamo Luis, e estou ansioso para mostrar o que sei!"/>
                <div className="stacks">
                    <Title className="title" title="Aqui estão as minhas stacks:"/>
                    <StackIcons/>
                </div>
                <Button label="button" />
            </div>
        </S.Home>
    );
}