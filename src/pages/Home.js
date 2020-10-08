import React, { useState, useEffect } from "react";
import { Blockquote, Burger, Button, Menu, Header, Hero, Form, Inner, Nav, Container, ParticlesBackground, GradientBackImg } from '../components/Index'

const Home = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="App">
            <ParticlesBackground />
                <Inner>
                    <Header />
                    <Hero />
                </Inner>
        </div>
    )
}

export default Home