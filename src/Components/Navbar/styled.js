import styled from "styled-components";

export const Navbar = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');
    
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.0));
    padding: 15px 0px;  
    width: 100%;
    
    *
    {
        font-weight: bold;
    }
    

    .main-header{
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