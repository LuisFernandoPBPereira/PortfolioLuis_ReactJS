import styled from "styled-components";

export const Navbar = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');
    
    background: linear-gradient(to bottom, rgba(255, 49, 55, 1.0), rgba(255, 49, 55, 0.8),rgba(255, 49, 55, 0.6),rgba(255, 49, 55, 0.4),rgba(255, 49, 55, 0.1));
    padding: 15px 0px;  
    width: 100%;
    /* position: absolute; */
    
    *
    {
        font-weight: bold;
    }
    

    .main-header{
        /* z-index: 999; */
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    }

    .headerMenu {
        display: flex;
        gap: 20px;
    }

    .header{
        /* z-index: 999; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;
        
        h1{
            color: var(--white);
        }

    }

    .mainTitle{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: italic;
        width: 15.5ch; 
        animation: caret .2s step-end infinite alternate,
        type 2s steps(17, end);
    }

`