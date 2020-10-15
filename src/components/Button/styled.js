import styled from 'styled-components'
import { leerColor, colores } from "../../constants";

const Container = styled.button`
    background-color: rgba(20,20,20,0.5);
    letter-spacing: 4px;
    text-transform: uppercase;
    border: 1px solid white;
    padding: 1em 2em 1em 2em;
    color: ${leerColor(colores.blanco)};
    font-family: 'Abel', sans-serif;
    width: auto!important;
    font-size:1em;
    :hover{outline: none; border-color: white; box-shadow: 0 0 10px white;}
    :disabled{color: grey; border-color: grey}
    :focus{border-color: white; box-shadow: 0 0 20px white;}
`

export default Container