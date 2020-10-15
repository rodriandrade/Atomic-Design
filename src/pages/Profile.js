import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ParticlesBackground from "../components/ParticlesBackground";
import { Title, GradientBackImg, ArtistCard, Inner, Grid, Col, TracksCard, Header, ProfileSideBar} from "../components/Index";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  /*const { name, picture, email, nickname } = user;*/

  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {

    const data = () => {

      var request = require("request"); // "Request" library
      var client_id = "42096df29d77496488a4e35107d58df4"; // Your client id
      var client_secret = "732e624de6fd4fdfb5875e67e7659515"; // Your secret
      var redirect_uri = "http://localhost:3000/profile"
      var scope = 'user-top-read';
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
          var token = body.access_token;
          var options = {
            url: `https://api.spotify.com/v1/me/top/artists`,
            headers: {
              Authorization:
                "Bearer " +
                "BQAV46FaYKcR5hlHvhoUHP1STm9Ye3vcdWhnp-TRWrpEA1nSzKrR0_tvRuZGlEZO_V0lS26xaqEbHjKgzod54RPaKCpZnylS1nS5Z_XY5hpWfwSwcAT8VIMNVJFJR4rw0nC3CXw4xkUJvJifkxY3eLbDbHw",
            },
            json: true,
          };
          console.log(token);
          console.log(options.url);
          request.get(options, function (error, response, body) {
            //console.log(body.items[0].track.artists[0]);
            //console.log(response.body.items)
            console.log(response.body.items);
            const dataArtists = response.body.items;
            setArtists(dataArtists);
            var secondFetch = {
              url: `https://api.spotify.com/v1/me/top/tracks`,
              headers: {
                Authorization:
                  "Bearer " +
                  "BQAV46FaYKcR5hlHvhoUHP1STm9Ye3vcdWhnp-TRWrpEA1nSzKrR0_tvRuZGlEZO_V0lS26xaqEbHjKgzod54RPaKCpZnylS1nS5Z_XY5hpWfwSwcAT8VIMNVJFJR4rw0nC3CXw4xkUJvJifkxY3eLbDbHw",
              },
              json: true,
            };
            request.get(secondFetch, function (error, response, body) {
              console.log(response.body.items);
              const dataTracks = response.body.items;
              setTracks(dataTracks);
            });
            //console.log(json);
          });
        }
      });
    };
    data();
  }, []);

  return (
    <div>
      <ParticlesBackground />
        <Header />
          
          <Grid colGap={30} rowGap={40}>
            <Col desktop={3} tablet={6} mobile={12}>
              <ProfileSideBar user={user}/>
            </Col>
            <Col desktop={8} tablet={6} mobile={12}>
              <Col desktop={12} tablet={12} mobile={12}>
                <Title type="h1" primary={true} margin={true}> Your Top Artists </Title>
              </Col>
              <Grid colGap={30} rowGap={40}>
                {artists.map((artist) => (<ArtistCard key={artist._id} data={artist} />))}
              </Grid>
              <Col desktop={12} tablet={12} mobile={12}>
                <Title type="h1" primary={true} margin={true}> Your Top Tracks </Title>
              </Col>
              <Grid colGap={30} rowGap={40}>
                {tracks.map((track) => (<TracksCard key={track._id} data={track} />))}
              </Grid>
            </Col>
          </Grid>

    </div>
  );

}

export default Profile;
