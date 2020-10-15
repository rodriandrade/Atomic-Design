import styled from 'styled-components'
import { leerColor, colores } from "../../constants";

const InputBox = styled.input`
    font-family: 'Abel', sans-serif;
    letter-spacing: 4px;
    text-transform: uppercase;
    padding: 10px;
    font-size: 20px;  
    background-color: rgba(20,20,20,0.2);
    border: none;
    border-bottom: 1px solid white;
    color: ${leerColor(colores.blanco)};
    width: 30%;
    margin-bottom:30px;
`

export default InputBox