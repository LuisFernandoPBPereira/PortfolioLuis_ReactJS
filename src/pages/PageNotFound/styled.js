import styled from "styled-components";

export const PageNotyFound = styled.div`
  display: flex;
  justify-content: center;

    .title{
      margin: 15vh 0 0 0;
    }

    .error{
      font-size: 80px;
    }

    .button{
        display: flex;
        justify-content: center;
        margin: 20vh 0 0 0;
    }

    /* Animação de fundo */
  .bg {
    animation:slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-20deg, #202024 50%, var(--primary-color) 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
  }
  
  .bg2 {
    animation-direction:alternate-reverse;
    animation-duration:7s;
  }
  
  .bg3 {
    animation-duration:7s;
  }
  
  @keyframes slide {
    0% {
      transform:translateX(-10%);
    }
    100% {
      transform:translateX(25%);
    }
  }
`