import React from 'react'
import {GradientTitle, Grid, Col, Inner, GradientBackImg, ParticlesBackground, Header} from '../components/Index';

const About = () => {
    return (
        <div className="App">
            <ParticlesBackground />
                <Inner>

                    <Header />
                    <Grid colGap={30} rowGap={40}>
                        <Col desktop={3} tablet={6} mobile={12}>
                            <GradientTitle> Neptune </GradientTitle>
                        </Col>
                        <Col desktop={3} tablet={6} mobile={12}>
                            <GradientTitle> Mars </GradientTitle>
                        </Col>
                        <Col desktop={3} tablet={6} mobile={12}>
                            <GradientTitle> Rocket </GradientTitle>
                        </Col>
                        <Col desktop={6} tablet={6} mobile={12}>
                            <GradientTitle> Boca </GradientTitle>
                        </Col>
                        <Col desktop={6} tablet={6} mobile={12}>
                            <GradientTitle> Otro Boca </GradientTitle>
                        </Col>
                    </Grid>
                </Inner>
        </div>
    )
}

export default About