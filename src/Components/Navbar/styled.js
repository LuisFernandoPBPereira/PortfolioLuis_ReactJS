import styled from "styled-components";

export const Navbar = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');
    
    background: linear-gradient(to bottom, rgba(255, 49, 55, 1.0), rgba(255, 49, 55, 0.8),rgba(255, 49, 55, 0.6),rgba(255, 49, 55, 0.4),rgba(255, 49, 55, 0.1));
    padding: 15px 0px;  
    width: 100%;
    /* position: absolute; */
    
    *
    {
        font-family: 'Poppins', sans-serif;
    }
    

    .main-header{
        /* z-index: 999; */
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    }

    .headerMenu ul li {
        display: inline-block; /*Deixa os textos alinhados na direta , horizontal*/
    }
    .headerMenu i {
        border: 2.2px solid transparent;
        background-color: var(--primary-color);
        border-radius: 7px;
        color: var(--white);
        padding: 4px 15px;
        margin: 0 10px 0 0;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.7s;
    }

    .header{
        /* z-index: 999; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 40px;
        
        h1{
            color: var(--white);
        }

    }

    .mainTitle{
        width: 17ch;
        animation: caret .2s step-end infinite alternate,
        type 2s steps(17, end);
    }

`