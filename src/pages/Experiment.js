import React from 'react'
import { Blockquote, Form, Inner, Nav, ParticlesBackground, Search, Header } from '../components/Index'

const Experiment = () => {

    return (
        <div className="App">
            <ParticlesBackground />
            <Inner>
                <Header />
                <Search></Search>
            </Inner>
        </div>
    )
}

export default Experiment