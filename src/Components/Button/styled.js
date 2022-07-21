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
        position: relative;
        width: 160px;
        height: 60px;
        display: inline-block;
        background: #FFF;
        margin: 20px;
    }
        
    .container:before,
    .container:after{
        content: '';
        position: absolute;
        inset: 0;
        background: #F00;
        transition: 0.5s;
       background: linear-gradient(45deg, #0000FF, #00FF00, #FFFF00, #FF0000); 
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
        width: 100%;
        height: 100%;
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
        border: 1px solid #040A29;
    }

    .container span::before{
        content: '';
        position: absolute;
        top: 0;
        left: -50%;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.075);
        transform: skew(25deg);
    }

`

