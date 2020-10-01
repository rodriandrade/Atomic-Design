import styled from 'styled-components'

const ButtonApp = styled.button`
    background-color: black;
    border: 1px solid white;
    padding: 1em 2em 1em 2em;
    color: white;
    font-family: 'Abel', sans-serif;
    font-size:1em;
    width: 15%;
    :hover{outline: none; border-color: white; box-shadow: 0 0 10px white;}
    :disabled{color: grey; border-color: grey}
    :focus{border-color: white; box-shadow: 0 0 20px white;}
`

export default ButtonApp