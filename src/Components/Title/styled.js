import styled from "styled-components";

export const Title = styled.div`

    h1{
        font-weight: bolder;
        color: var(--white);
        text-align: center;
        padding-top: 20px;
        font-size: 40px;
    }
    
    .animated{
        box-shadow: .4em 0 0 #05FFA3;
        margin: 2rem 1rem;
        width: 30ch;
        overflow: hidden;
        color: #FFF;
        white-space: nowrap;
        animation: caret .2s step-end infinite alternate,
        type 5s steps(32, end);
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