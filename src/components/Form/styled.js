import styled from 'styled-components'

const Input = styled.input`
    font-family: 'Abel', sans-serif;
    letter-spacing: 4px;
    text-transform: uppercase;
    padding: 10px;
    font-size: 20px;  
    background-color: #000;
    border: none;
    border-bottom: 1px solid white;
    color: #fff;
    width: 40%;
    margin-bottom:30px;
`

const TextArea = styled.textarea`
    font-family: 'Abel', sans-serif;
    letter-spacing: 4px;
    text-transform: uppercase;
    padding: 10px;
    font-size: 20px;
    background-color: #000;
    border: none;
    border-bottom: 1px solid white;
    color: #fff;
    width: 40%;
    height: 200px;
    margin-bottom:30px; 
`

export {Input, TextArea}