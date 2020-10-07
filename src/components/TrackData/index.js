import React from 'react';
import { Data } from './styled';

const TrackData = props =>{


    const { danceability, energy, speechiness, acousticness, instrumentalness } = props.trackData;
    const values = [danceability, energy, speechiness, acousticness, instrumentalness];
    const newValues = values.map((value) => (Math.round(value * 100)));
    
    return(
            <div>
                <Data>Danceability {newValues[0]}%</Data>
                <Data>Energy {newValues[1]}%</Data>
                <Data>Speechiness {newValues[2]}%</Data>
                <Data>Acousticness {newValues[3]}%</Data>
                <Data>Instrumentalness {newValues[4]}%</Data>
            </div>
    )
}

export default TrackData