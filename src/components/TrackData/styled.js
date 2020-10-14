import styled from 'styled-components'

const CardImg = styled.div`
    width: 400px;
    margin: 0 auto;
    margin-top:50px;
`

const TrackTitle = styled.h2`
    font-size: 64px;
    font-family: 'Staatliches';
    text-align: center;
    margin:0;
    letter-spacing:10px;
`

const ArtistName = styled.h5`
    font-size: 26px;
    font-family: 'Staatliches';
    color: #68F4DB; 
    text-align: center;
    margin:0;
    letter-spacing:10px;
`

const Data = styled.p`
    font-size:1.4em;
    border-bottom:1px solid grey;
    font-family: 'Abel', sans-serif;
`

export { TrackTitle, ArtistName, CardImg }