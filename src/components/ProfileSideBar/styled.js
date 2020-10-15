import styled from 'styled-components'
import { leerColor, colores } from "../../constants"

const Container = styled.div`
    height: 100%;
    width:340px;
    background-color: ${leerColor(colores.negro2)};
    place-content: center;
    display: flex;
    border-right:1px solid grey;
    position: fixed;

/*
    div{ 
        position: fixed; 
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    */
`

const UserInfo = styled.div`
    display: flex; 
    align-items: center;
    justify-content:center; 
    flex-direction:column;
`

const ProfilePicture = styled.div`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;
    z-index: 0;
`


export { Container, ProfilePicture, UserInfo }