import { createGlobalStyle } from 'styled-components';
import { leerColor, colores } from "../constants";

export const GlobalStyles = createGlobalStyle`
  h1{
    font-family: 'Staatliches';
    letter-spacing: 10px;
    color: ${leerColor(colores.blanco)} !important ;
    margin-top: 60px!important;
  }
  h4{
    font-family: 'Abel', sans-serif;
    color: ${leerColor(colores.blanco)};
    letter-spacing: 4px;
    font-size:18px;
    text-align: center;
  }
  img{
    width:100%;
  }

  text{
    font-size: 16px !important;
    fill: ${leerColor(colores.blanco)} !important;
    font-family: 'Abel', sans-serif !important;
  }

  button{ transition: .5s ease-in-out; }

  `