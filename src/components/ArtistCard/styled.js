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
    margin-bottom:0;
`

const Genre = styled.p`
    font-size:1em;
    text-align: center;
    margin:0;
    color: #68F4DB;
`

const ImgCont = styled.div`
    margin: 0 auto;
    width: 20%;
`

export { CardImg, CardTitle, Genre, ImgCont }