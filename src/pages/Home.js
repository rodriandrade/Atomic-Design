import React, { useState, useEffect } from "react";
import { Blockquote, Burger, Button, Menu, Header, Form, Inner, Nav, Container, ParticlesBackground, GradientBackImg } from '../components/Index'

const Home = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="App">
            <ParticlesBackground />
                <Inner>
                    <Header />
                    <img src={"https://i.ibb.co/wdWdgQQ/white-logo.png"}/>
                    <h4>RODRIGO ANDRADE, MARTINA FRANCO, NAYLA ARROYO LIZZIO</h4>
                    <Button>START</Button>
                </Inner>
        </div>
    )
}

export default Home