import React from 'react';
import { StyledMenu } from './styled';
import {Container, Nav, ParticlesBackground} from '../Index'

const Menu = ({ open }) => {
    console.log(open)
  return (
    <StyledMenu open={open}>
        <ParticlesBackground />
        <Container direction="column">
            <Nav />
        </Container>
    </StyledMenu>
  )
}

export default Menu



/*
import React from 'react'
import { Inner, Nav, Container, ParticlesBackground } from '../components/Index'

const Menu = () => {
    return (
        <Inner>
            <Container direction="column">
                <Nav />
            </Container>
        </Inner>
    )
}

export default Menu
*/