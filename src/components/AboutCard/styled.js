import styled from 'styled-components'
import { leerColor, colores } from "../../constants";

const AboutCardContainer = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    width: 100%;
`

const Cont = styled.div`
    display: flex; 
    width: 800px;
    align-items: flex-start;
    margin: 0 auto; 
    margin: 100px 0;
`

const CardContainer = styled.div`
    width: 800px;
    display: flex; 
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 40px;
    position: relative;
`

const Title = styled.h2`
    font-size: 64px; 
    color: ${leerColor(colores.blanco)}; 
    font-family: 'Staatliches';
    letter-spacing: 10px;
    margin: 4px 0;
    padding-top: 10px;
`

const Subtitle = styled.h5`
    font-size: 18px; 
    color: ${leerColor(colores.blanco)};
    font-family: Abel; 
    text-transform: uppercase;
    margin:0;
    margin-bottom: 20px;
`

const DescriptionContainer = styled.div`
    width: 600px; 
    height: 150px;
    display: flex; 
    align-items:center;
    background-color: #202020;
    padding: 20px 20px 20px 200px;
    position: absolute; 
    top: 280px;
    left: -160px;
`


const Description = styled.p`
    font-size:18px;
    font-family: Abel;
    color: ${leerColor(colores.blanco)}; 
    letter-spacing: 3px;
    line-height:22px;
`

export { DescriptionContainer, Description, Title, Subtitle, CardContainer, Cont, AboutCardContainer }