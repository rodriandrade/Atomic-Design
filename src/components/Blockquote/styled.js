  import styled from 'styled-components'
  import { leerColor, colores } from "../../constants";

  const Quote = styled.p`
      border-left: 5px solid #fff;
      font-size: 20px;
      color: ${leerColor(colores.blanco)};
      padding-left: 20px;
      font-family: 'Abel', sans-serif;
      letter-spacing: 4px;
  `

  export default Quote