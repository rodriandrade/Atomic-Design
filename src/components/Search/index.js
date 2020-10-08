import React, { useState, useEffect } from "react";
import {SearchBar, Button } from './styled';
//import Button from '../Button'
import TrackData from '../TrackData'
import TracksCard from '../TracksCard'
import Loading from '../Loading'

const Search = props =>{

    const [artistName, setArtistName] = useState('');
    const [trackName, setTrackName] = useState('');
    const [trackData, setTrackData] = useState('');
    const [trackInfo, setTrackInfo] = useState('');
    const [loading, setLoading] = useState(true)
           
    const data = () => {
            var request = require("request"); // "Request" library
            var client_id = "42096df29d77496488a4e35107d58df4"; // Your client id
            var client_secret = "732e624de6fd4fdfb5875e67e7659515"; // Your secret
            // your application requests authorization
            var authOptions = {
            url: "https://accounts.spotify.com/api/token",
            headers: {
                Authorization:
                "Basic " +
                new Buffer(client_id + ":" + client_secret).toString("base64"),
            },
            form: {
                grant_type: "client_credentials",
            },
            json: true,
            };
    
            request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                // use the access token to access the Spotify Web API
                console.log(artistName)
                console.log(trackName)
                var token = body.access_token;
                var options = {
                url: `https://api.spotify.com/v1/search?q=artist:${artistName}%20track:${trackName}&type=track&offset=0&limit=1`,
                headers: {
                    Authorization:
                    "Bearer " +
                    token,
                },
                json: true,
                };
                console.log(options.url)
                request.get(options, function (error, response, body) {
                //console.log(body.items[0].track.artists[0]);
                //console.log(response.body.items)
                console.log(response.body.tracks.items[0])
                console.log(response.body.tracks.items[0].id);
                const trackID = response.body.tracks.items[0].id;
                const trackInfo = response.body.tracks.items[0];
                
                setTrackInfo(trackInfo)
                
                var secondFetch = {
                    url: `https://api.spotify.com/v1/audio-features/${trackID}`,
                    headers: {
                    Authorization:
                        "Bearer " +
                        token,
                    },
                    json: true,
                };
                request.get(secondFetch, function (error, response, body) {
      
                    const trackData = response.body
                    console.log(trackData);
                    setTrackData(trackData);
                    setLoading(false);
            
                });
                
                //console.log(json);
                });
            }
            });
    };

    /*
    {!loading ? <TracksCard data={trackInfo}/> : <Loading/>}
                {!loading ? <TrackData trackData={trackData} /> : <Loading/>}
     */

    return(
            <div>
                <SearchBar placeholder="Artist name" onChange={event => setArtistName(event.target.value)}></SearchBar>
                <SearchBar placeholder="Track name" onChange={event => setTrackName(event.target.value)}></SearchBar>
                <Button onClick={data}>Search</Button>
                 
                {trackInfo && <TracksCard data={trackInfo} />}
                {trackData && <TrackData trackData={trackData} />} 

            </div>
    )
}

export default Search
