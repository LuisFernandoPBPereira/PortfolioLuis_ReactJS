import styled from "styled-components";

export const StackIcons = styled.div`

    /* div principal */
    .master{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    /* div das luzes RGB */
    .divIcon{
        margin: 10px;
        color: var(--white);
        width: 300px;
        height: 300px;
        line-height: 25px;

        position: relative;

        background: linear-gradient(to right, var(--rgbColors));
        position: relative;
        z-index: 999;       

        p, h1{
            margin-top: 10px;
        }
    }

    /* transição do hover e a animação setada */
    .divIcon:before,
    .divIcon:after{
        content: '';
        position: absolute;
        inset: 0;
        background: #F00;
        transition: 0.5s;
        animation: rgbColors 7s linear infinite;
        /* background: linear-gradient(45deg, #0000FF, #00FF00, #FFFF00, #FF0000);  */
        border-radius: 17px;
        @keyframes rgbColors{
            100%{
                filter: hue-rotate(360deg);
            }
    }
}

    .divIcon:hover:before{
        inset: -3px;
    }

    .divIcon:hover:after{
        inset: -6px;
    }

    /* div que recebe a cor cinza, dando o efeito RGB */
    .divAux{
        position: absolute;
        background: #363636;
        z-index: 10;
        width: 98%;
        height: 98%;
        padding: 10px;
        border-radius: 15px;
    }

    /* setando o tamanho dos ícones */
    .icon{
        width: 70px;
        height: 70px;
    }
`