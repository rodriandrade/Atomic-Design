import React from 'react'
import {GradientTitle, Grid, Col, Inner, GradientBackImg, ParticlesBackground} from '../components/Index';
import sockImg from '../images/socks.jpg'

const lights = require('./lights.jpg'); 

const About = () => {
    return (
        <div className="App">
            <ParticlesBackground />
                <Inner>
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
                                <img alt="lightsimg" source={lights}></img>
                        </Col>
                    </Grid>
                </Inner>
        </div>
    )
}

export default About