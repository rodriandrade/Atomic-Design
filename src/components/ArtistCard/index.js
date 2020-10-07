import React from 'react';
import { CardImg, CardTitle, Genre, ImgCont } from './styled';
import { Grid, Col } from "../Index";

const ArtistCard = props =>{
    const {genres, name, images, external_urls} = props.data
    return(
        <Col desktop={2} tablet={6} mobile={12}>
            <ImgCont>
                <a href={external_urls.spotify} target="blank"><CardImg src={images[0].url}/></a>
            </ImgCont>
            <CardTitle>{name}</CardTitle>
            <Genre>{genres[0]}</Genre>
        </Col>
    )
}

export default ArtistCard
