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
                            paragraph="“Far away I can hear the sound of someone out there singin', I'm speeding through the forest, strange echoes of Belarus, where presidents pin badges on disconnected youth. What would you be dreaming of?”"
                        >
                        </AboutCard>
                        <AboutCard
                            name="Nayla"
                            quote="YOU CAN'T TOUCH MUSIC, BUT MUSIC CAN TOUCH YOU"
                            paragraph="“Far away I can hear the sound of someone out there singin', I'm speeding through the forest, strange echoes of Belarus, where presidents pin badges on disconnected youth. What would you be dreaming of?”"
                        >
                        </AboutCard>
                        <AboutCard
                            name="Mars"
                            quote="YOU CAN'T TOUCH MUSIC, BUT MUSIC CAN TOUCH YOU"
                            paragraph="“Far away I can hear the sound of someone out there singin', I'm speeding through the forest, strange echoes of Belarus, where presidents pin badges on disconnected youth. What would you be dreaming of?”"
                        >
                        </AboutCard>
                </Inner>
        </div>
    )
}

export default About