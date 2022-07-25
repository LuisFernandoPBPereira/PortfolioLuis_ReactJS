import styled from "styled-components";

export const StackIcons = styled.div`

    .master{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    .divIcon{
        margin: 10px;
        color: var(--white);
        width: 300px;
        height: 300px;
        line-height: 25px;
        border-radius: 10px;

        p, h1{
            margin-top: 10px;
        }
    }

    .icon{
        width: 70px;
        height: 70px;
    }

    .divIcon {
        position: relative;
        background: #FFF;
    }
        
    .divIcon:before,
    .divIcon:after{
        content: '';
        position: absolute;
        inset: 0;
        background: #F00;
        transition: 0.5s;
       background: linear-gradient(45deg, #0000FF, #00FF00, #FFFF00, #FF0000); 
    }

    .divIcon:hover:before{
        inset: -3px;
    }

    .divIcon:hover:after{
        inset: -3px;
        filter: blur(10px);
    }


    .divAux{
        position: absolute;
        background: #363636;
        z-index: 10;
        width: 99%;
        height: 99%;
        padding: 10px;
    }

    .stacks{
        margin: 0 0 80px 0;
    }
`