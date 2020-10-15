import React from 'react'
import { Title, Blockquote, Form, Inner, Nav, ParticlesBackground, Search, Header } from '../components/Index'

const Experiment = () => {

    return (
        <div className="App">
            <ParticlesBackground />
            <Inner>
                <Header />
                <Title primary={true} type="none" align="center">Your music metrics</Title>
                <Search></Search>
            </Inner>
        </div>
    )
}

export default Experiment