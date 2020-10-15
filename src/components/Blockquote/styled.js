  import styled from 'styled-components'
  import { leerColor, colores } from "../../constants";

  const Quote = styled.p`
      border: solid;
      border-image-slice: 1;
      border-width: 0px 0px 0px 5px;
      border-image-source: linear-gradient(180deg, ${leerColor(colores.verde)} 0%, ${leerColor(colores.azul)} 99.98%);
      //border-left: 5px solid #fff;
      font-size: 20px;
      color: ${leerColor(colores.blanco)};
      padding-left: 20px;
      font-family: 'Abel', sans-serif;
      letter-spacing: 4px;
  `

  export default Quote