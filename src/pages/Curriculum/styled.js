import styled from "styled-components";

export const Curriculum = styled.div`
    background:linear-gradient(to bottom,
                                    rgba(25, 25, 200, 1.0),
                                    rgba(25, 25, 200, 0.9),
                                    rgba(25, 25, 200, 0.7),
                                    rgba(0, 0, 0, 0.5),
                                    rgba(0, 0, 0, 0.0));
    background-color: black;

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
            padding: 20px;
        }
    }
`