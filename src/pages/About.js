import React from 'react'
import {Title, GradientTitle, Grid, Col, Inner, Form, GradientBackImg, ParticlesBackground, Header} from '../components/Index';
import AboutCard from '../components/AboutCard'

const About = () => {
    return (
        <div className="App">
            <ParticlesBackground />
                <Inner>
                    <Header />
                        <Title primary={true} align="center" type="none">Here We Are</Title>
                        <AboutCard
                            name="Rodri"
                            quote="YOU CAN'T TOUCH MUSIC, BUT MUSIC CAN TOUCH YOU"
                            paragraph="DALEEEEEEEEEE BOOOOOOOOOOOOOO DALEEEEEEEEEEEEE BOOOOOOOOOOOOOOOO DALEEEEEEEEEEEEE BOOOOOOOOOOOOOOOO DALEEEEEEEEEEEEE BOOOOOOOOOOOOOOOO DALEEEEEEEEEEEEE BOOOOOOOOOOOOOOOO"
                        >
                        </AboutCard>
                        <AboutCard
                            name="Nayla"
                            quote="FAR AWAY I CAN HEAR THE SOUND OF SOMEONE OUT THERE SINGIN’"
                        >
                        </AboutCard>
                        <AboutCard
                            name="Mars"
                            quote="FAR AWAY I CAN HEAR THE SOUND OF SOMEONE OUT THERE SINGIN’"
                        >
                        </AboutCard>
                </Inner>
        </div>
    )
}

export default About