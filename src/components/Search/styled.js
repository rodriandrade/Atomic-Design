import styled from 'styled-components'
import { leerColor, colores } from "../../constants";

const SearchBar = styled.input`
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

const ChartContainer = styled.div`
    height: 400px;
    margin-bottom: 80px;
`

const SearchContainer = styled.div`
    display: flex; 
    justify-content: ${ props => props.align ? 'center' : 'space-around' };
    margin-top: 100px;
`

const Button = styled.button`
    background-color: rgba(20,20,20,0.5);
    letter-spacing: 4px;
    text-transform: uppercase;
    border: 1px solid white;
    padding: 1em 2em 1em 2em;
    color: ${leerColor(colores.blanco)};
    font-family: 'Abel', sans-serif;
    font-size:1em;
    width: 15%;
    margin: 0 auto;
    :hover{outline: none; border-color: white; box-shadow: 0 0 10px white;}
    :disabled{color: grey; border-color: grey}
    :focus{border-color: white; box-shadow: 0 0 20px white;}
`

export { SearchBar, ChartContainer, SearchContainer, Button }