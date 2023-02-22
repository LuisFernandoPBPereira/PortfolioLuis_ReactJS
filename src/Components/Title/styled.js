import styled from "styled-components";

export const Title = styled.div`

/*      para o título animado funcionar,
        coloque o tamanho em width e a animação:

        width: tamanho em "ch" define a quantidade de letras;
        animation: caret .2s step-end infinite alternate,
        type velocidade em s steps(número de passos, end); */

    h1{
        font-weight: bolder;
        color: var(--white);
        text-align: center;
        padding-top: 20px;
        font-size: 35px;
    }
    
    .animated{
        box-shadow: .1em 0 0 #05FFA3;
        margin: 1.5rem 0;
        overflow: hidden;
        color: #FFF;
        white-space: nowrap;
    }

    @keyframes type{
        0%{
            width: 0;
        }
    }

    @keyframes caret{
        50%{
            box-shadow: .4em 0 0 transparent;
        }
    }


`