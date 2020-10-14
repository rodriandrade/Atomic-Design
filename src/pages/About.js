import React from 'react'
import {GradientTitle, Grid, Col, Inner, Form, GradientBackImg, ParticlesBackground, Header} from '../components/Index';
import AboutCard from '../components/AboutCard'

const About = () => {
    return (
        <div className="App">
            <ParticlesBackground />
                <Inner>
                    <Header />
                        <AboutCard
                            name="Rodri"
                            quote="FAR AWAY I CAN HEAR THE SOUND OF SOMEONE OUT THERE SINGIN’"
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