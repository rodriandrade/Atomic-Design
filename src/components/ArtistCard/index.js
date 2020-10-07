import React from 'react';
import { CardImg, CardTitle, Genre } from './styled';
import { Grid, Col } from "../Index";

const ArtistCard = props =>{
    const {genres, name, images, external_urls} = props.data
    return(
        <Grid colGap={200} rowGap={100}>
            <Col desktop={9} tablet={6} mobile={12}>
                <a href={external_urls.spotify} target="blank"><CardImg src={images[0].url}/></a>
                <CardTitle>{name}</CardTitle>
                <Genre>{genres}</Genre>
            </Col>
        </Grid>
    )
}

export default ArtistCard
