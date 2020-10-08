import styled from 'styled-components'

const CardImg = styled.img`
    
`

const CardTitle = styled.h3`
    border-radius: 20px;
    text-align: center;
    margin-bottom: 0;
    font-family: staatliches;
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 5px;
    font-weight: bold;
    
`

const Genre = styled.p`
    font-size: 1em;
    text-align: center;
    margin: 0;
    color: #68F4DB; 
    font-family: Abel;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: lighter;
`

const ImgCont = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin:0 auto;
    overflow:hidden;
`

export { CardImg, CardTitle, Genre, ImgCont }