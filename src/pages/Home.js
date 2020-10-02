import React from 'react'
import { Blockquote, Form, Inner, Nav, Container, ParticlesBackground } from '../components/Index'

const Home = () => {
    return (
        <div className="App">
            <ParticlesBackground />
                <Inner>
                    <Container direction="column">
                        <Nav />
                    </Container>
                </Inner>
        </div>
    )
}

export default Home