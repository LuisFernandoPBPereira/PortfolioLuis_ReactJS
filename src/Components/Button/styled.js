import styled from "styled-components";

export const Button = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');
    
    *
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    .container {
        width: 160px;
        height: 60px;
        display: inline-block;
        background: #FFF;
        margin: 20px;
        border-radius: 10px;
        border: none;

        background: linear-gradient(to right, var(--rgbColors));
        position: relative;
        z-index: 999;
        animation: rgbColors 7s linear infinite;

    }
    @keyframes rgbColors{
        100%{
            filter: hue-rotate(360deg);
        }
}
        
    .container:before,
    .container:after{
        content: '';
        position: absolute;
        inset: 0;
        background: #F00;
        transition: 0.5s;
        border-radius: 10px;
       /* background: linear-gradient(45deg, #0000FF, #00FF00, #FFFF00, #FF0000);  */
    }

    .container:hover:before{
        inset: -3px;
    }

    .container:hover:after{
        inset: -3px;
        filter: blur(10px);
    }


    .container span{
        position: absolute;
        top: 0;
        left: 0;
        width: 98%;
        height: 95%;
        display: inline-block;
        background: #363636;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #FFF;
        border-radius: 6px 8px 8px 8px;
        font-weight: 600;
    }
`

