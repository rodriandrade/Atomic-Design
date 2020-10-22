import React from 'react'
import { TracksCard, ArtistCard, AboutCard, Container, Title, Input, Blockquote, Form, Inner, Nav, ParticlesBackground, Search, Header, Button, Paragraph, Col, Grid, BarChart, TrackData, TextArea } from '../components/Index'

const Components = () => {

    const trackData = {
        "duration_ms" : 255349,
        "key" : 5,
        "mode" : 0,
        "time_signature" : 4,
        "acousticness" : 0.514,
        "danceability" : 0.735,
        "energy" : 0.578,
        "instrumentalness" : 0.0902,
        "liveness" : 0.159,
        "loudness" : -11.840,
        "speechiness" : 0.0461,
        "valence" : 0.624,
        "tempo" : 98.002,
        "id" : "06AKEBrKUckW0KREUWRnvT",
        "uri" : "spotify:track:06AKEBrKUckW0KREUWRnvT",
        "track_href" : "https://api.spotify.com/v1/tracks/06AKEBrKUckW0KREUWRnvT",
        "analysis_url" : "https://api.spotify.com/v1/audio-analysis/06AKEBrKUckW0KREUWRnvT",
        "type" : "audio_features"
    };

    const track = {
        "album": {
          "album_type": "album",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
              },
              "href": "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU",
              "id": "4gzpq5DPGxSnKTe4SA8HAU",
              "name": "Coldplay",
              "type": "artist",
              "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AL",
            "AR",
            "AT",
            "AU",
            "BA",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "BY",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HR",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "KZ",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MD",
            "ME",
            "MK",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "RS",
            "RU",
            "SA",
            "SE",
            "SG",
            "SI",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "UA",
            "US",
            "UY",
            "VN",
            "XK",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2G4AUqfwxcV1UdQjm2ouYr"
          },
          "href": "https://api.spotify.com/v1/albums/2G4AUqfwxcV1UdQjm2ouYr",
          "id": "2G4AUqfwxcV1UdQjm2ouYr",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2731cbd0d5849b51c79c99e7b87",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e021cbd0d5849b51c79c99e7b87",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048511cbd0d5849b51c79c99e7b87",
              "width": 64
            }
          ],
          "name": "Ghost Stories",
          "release_date": "2014-05-19",
          "release_date_precision": "day",
          "total_tracks": 9,
          "type": "album",
          "uri": "spotify:album:2G4AUqfwxcV1UdQjm2ouYr"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
            },
            "href": "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU",
            "id": "4gzpq5DPGxSnKTe4SA8HAU",
            "name": "Coldplay",
            "type": "artist",
            "uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
          }
        ],
        "available_markets": [],
        "disc_number": 1,
        "duration_ms": 294666,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAYE1400202"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4GKk1uNzpxIptBuaY97Dkj"
        },
        "href": "https://api.spotify.com/v1/tracks/4GKk1uNzpxIptBuaY97Dkj",
        "id": "4GKk1uNzpxIptBuaY97Dkj",
        "is_local": false,
        "is_playable": true,
        "name": "Midnight",
        "popularity": 63,
        "preview_url": "https://p.scdn.co/mp3-preview/95f1c8fac1ecff38637e896ef082ccf71d10fffa?cid=774b29d4f13844c495f206cafdad9c86",
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:4GKk1uNzpxIptBuaY97Dkj"
    }

    const artist = {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/10gzBoINW3cLJfZUka8Zoe"
        },
        "followers": {
          "href": null,
          "total": 613387
        },
        "genres": [
          "edm",
          "progressive house",
          "progressive trance",
          "trance",
          "uplifting trance"
        ],
        "href": "https://api.spotify.com/v1/artists/10gzBoINW3cLJfZUka8Zoe",
        "id": "10gzBoINW3cLJfZUka8Zoe",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/4dc7080ef509c36203a131a0eab8dd5e4800d7c2",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/1def2cb9b2bdf2fdd596f4aff4d8d3efcacf1fa4",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/c8fde6d9f274eb40e5404dd1e806b597ca09c29d",
            "width": 160
          }
        ],
        "name": "Above & Beyond",
        "popularity": 70,
        "type": "artist",
        "uri": "spotify:artist:10gzBoINW3cLJfZUka8Zoe"
    }

    return (
        <>
        <Inner>
            <Header />
            
            <Grid>

                <Col desktop={12} tablet={6} mobile={12}>
                <Title primary={true} size="componentsHeading"  > TITLES </Title>
                    <Container direction="row">
                        <Title primary={true} size="h1" margin={true}>Title H1</Title>
                        <Title primary={true} size="h2" margin={true}>Title H2</Title>
                        <Title primary={true} size="h3" margin={true}>Title H3</Title>
                        <Title primary={true} size="h4" margin={true}>Title H4</Title>
                    </Container>
                </Col>
              
              </Grid>

              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> SUBTITLES </Title>
                    <Container direction="row">
                        <Title primary={false} size="h3" margin={true}>SUBTITLE</Title>
                        <Title primary={false} size="h4" margin={true}>SUBTITLE 2</Title>
                    </Container>
                </Col>
              </Grid>

              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> PARAGRAPH </Title>
                </Col>
                  <Col desktop={6} tablet={6} mobile={12}>
                    <Paragraph>
                    “Melody is the most important ingredient in trance,” he concludes, as his PR comes over to signal that our interview time is up. “In house it’s the groove, in techno it’s the techno sounds and dark atmosphere, but in trance it’s the melody — it’s the closest to classical music, and it’s always moved me. My heart will always be there.” 
                    </Paragraph>
                </Col>
              </Grid>

              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> BLOCKQUOTE </Title>
                </Col>
                <Col desktop={6} tablet={6} mobile={12}>
                    <Blockquote>"LIFE IS MADE OF SMALL MOMENTS LIKE THIS" - Tony, Paavo & Jono</Blockquote>
                </Col>
              </Grid>

              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> BUTTONS </Title>
                    <Button state="standard" margin={true}>Button</Button>
                    <Button state="focus" margin={true}>Focus</Button>
                    <Button state="error" margin={true}>Error</Button>
                    <Button state="submit" margin={true}>Submit</Button>
                    <Button state="disabled" margin={true}>Disabled</Button>
                </Col>
              </Grid>
              
              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> FORM </Title>
                  <Col desktop={8} tablet={6} mobile={12}>
                    <Form></Form>
                  </Col>
                </Col>
              </Grid>

              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> INPUT </Title>
                    <Input placeholder="Input"></Input>
                </Col>
              </Grid> 

              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> TEXTAREA </Title>
                    <TextArea placeholder="Text"></TextArea>
                </Col>
              </Grid>

              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> ABOUT CARD </Title>
                    <AboutCard
                        name="Title"
                        area="Subtitle"
                        quote="Quote text"
                        paragraph="Description"
                    />
                </Col>
              </Grid>

              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> TRACK CARD </Title>
                  <TracksCard data={track}></TracksCard>
                </Col>
              </Grid>

              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> TRACK DATA FOR EXPERIMENT </Title>
                  <TrackData trackInfo={track}></TrackData>
                </Col>
              </Grid>

              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> ARTIST CARD </Title>
                  <ArtistCard data={artist}></ArtistCard>
                </Col>
              </Grid>

              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> BAR CHART </Title>
                  <BarChart trackData={trackData}></BarChart>
                </Col>
              </Grid>

              <Grid>
                <Col desktop={12} tablet={6} mobile={12}>
                  <Title primary={true} size="componentsHeading"> PARTICLES BACKGROUND </Title>
                  <ParticlesBackground height="200" />
                </Col>
              </Grid>

        </Inner>
        </>
    )
}

export default Components