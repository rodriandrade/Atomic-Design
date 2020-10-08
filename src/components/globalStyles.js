import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  h1{
    font-family: 'Staatliches';
    letter-spacing: 10px;
    color: #fff !important ;
  }
  h4{
    font-family: 'Abel', sans-serif;
    color: #fff;
    letter-spacing: 4px;
    font-size:18px;
    text-align: center;
  }
  img{
    width:100%;
  }

  button{ transition: .5s ease-in-out; }

  `