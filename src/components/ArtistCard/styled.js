import styled from 'styled-components'

const CardImg = styled.img`
    max-width: 120px;
    border-radius: 100px;
    margin:0 auto;
`

const CardTitle = styled.h3`
    font-size:1.4em;
    border-radius: 20px;
    text-align: center;
`

const Genre = styled.p`
    font-size:1em;
    text-align: center;
`

const CardContainer = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    width: 20%;
    background-color: blue;
    flex-direction: column;
`

export { CardImg, CardTitle, Genre, CardContainer }