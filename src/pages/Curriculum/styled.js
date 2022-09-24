import styled from "styled-components";

export const Curriculum = styled.div`
    background-color: var(--primary-color);

    .introduction{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* título animado */
    .mainTitle{
        width: 17ch;
        animation: caret .2s step-end infinite alternate,
        type 2s steps(17, end);

        text-align: center;
    }

    .subtitle{
        color: var(--white);
    }

    /* informação do currículo */
    .information{
        margin: 0 15% 0 15%;

        p{
            color: var(--white);
            font-size: 16px;
            font-weight: 500;
            line-height: 25px;
        }

        .education{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            
            div{
                margin-bottom: 15px;
            }
        }

        /* centralização do botão goToHome */
        .goToHome{
            display: flex;
            justify-content: center;
        }
    }
`