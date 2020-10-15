import styled from 'styled-components'
import { leerColor, colores } from "../../constants";

const ParagraphText = styled.p`
    font-size:18px;
    font-family: Abel;
    color: ${leerColor(colores.blanco)}; 
    letter-spacing: 3px;
    line-height:22px;
`

export default ParagraphText