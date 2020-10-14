import React from 'react';
import { TrackTitle, ArtistName, CardImg } from './styled';

const TrackData = props =>{

    const {artists, name, album, external_urls} = props.trackData
    /*
    const { danceability, energy, speechiness, acousticness, instrumentalness } = props.trackData;
    const values = [danceability, energy, speechiness, acousticness, instrumentalness];
    const newValues = values.map((value) => (Math.round(value * 100)));
    */
    
    return(
        <div>
            <CardImg>
                <a href={external_urls.spotify} target="blank"><img src={album.images[0].url}/></a>
            </CardImg>
            <TrackTitle>{name}</TrackTitle>
            {artists.map((artist) => (<ArtistName>{artist.name}</ArtistName>))}
        </div>
    )
}

export default TrackData