import styled from 'styled-components'

const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:0px;
    width: 960px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
    height: 100vh;  
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    background-color: rgba(20,20,20,0.5);
    letter-spacing: 4px;
    text-transform: uppercase;
    border: 1px solid white;
    padding: 1em 2em 1em 2em;
    color: white;
    font-family: 'Abel', sans-serif;
    font-size:1em;
    width: 10%;
    margin-top:30px;
    :hover{outline: none; border-color: white; box-shadow: 0 0 10px white;}
    :disabled{color: grey; border-color: grey}
    :focus{border-color: white; box-shadow: 0 0 20px white;}
`


export {ContainerLogo, Container, Button}