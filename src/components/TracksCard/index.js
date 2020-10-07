import React from 'react';
import { CardImg, TrackName, ArtistName } from './styled';
import { Grid, Col } from "../Index";

const ArtistCard = props =>{
    const {artists, name, album, external_urls} = props.data
    return(
            <div>
                <a href={external_urls.spotify} target="blank"><CardImg src={album.images[0].url}/></a>
                <TrackName>{name}</TrackName>
                {artists.map((artist) => (<ArtistName>{artist.name}</ArtistName>))}
            </div>
    )
}

export default ArtistCard
