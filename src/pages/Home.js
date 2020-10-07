import React from 'react'
import { Blockquote, Form, Inner, Nav, Container, ParticlesBackground, GradientBackImg } from '../components/Index'

const Home = () => {
    return (
        <div className="App">
            <ParticlesBackground />
                <Inner>
                    <Container direction="column">
                        <Nav />
                    </Container>
                    <GradientBackImg src={"https://wallpaperaccess.com/full/392784.jpg"}/>
                </Inner>
        </div>
    )
}

export default Home