import styled from 'styled-components'
import { leerColor, colores } from "../../constants";

const List = styled.li`
    font-size: 80px;
    font-family: 'Staatliches';
    letter-spacing: 10px;
    color: ${leerColor(colores.blanco)} !important ;
    a{
        color: ${leerColor(colores.blanco)};
        text-decoration: none;
        position: relative;
        :hover::after {
            content: '';
            position: absolute;
            background: linear-gradient(90.01deg, ${leerColor(colores.verde)} 0%, ${leerColor(colores.azul)} 99.98%);
            width: 45%;
            bottom: 0;
            left: 0;
            padding-bottom: 12px;
        }
    }
`

const Ul = styled.ul`
    list-style: none;
`

export {List, Ul}