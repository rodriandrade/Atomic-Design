import React from 'react';
import { CardImg, TrackName, ArtistName, TrackContainer } from './styled';
import { Grid, Col } from "../Index";

const ArtistCard = props =>{
    const {artists, name, album, external_urls} = props.data
    return(
        <Col desktop={12} tablet={12} mobile={12}>
            <TrackContainer>
                <CardImg>
                    <a href={external_urls.spotify} target="blank"><img src={album.images[0].url}/></a>
                </CardImg>
                <div>
                    <TrackName>{name}</TrackName>
                    {artists.map((artist) => (<ArtistName>{artist.name}</ArtistName>))}
                </div>
            </TrackContainer>
        </Col>
    )
}

export default ArtistCard
