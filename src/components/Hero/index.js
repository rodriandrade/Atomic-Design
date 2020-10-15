import { logRoles } from '@testing-library/react';
import React from 'react';
import { Logo, ContainerLogo, Container, Button} from './styled';
import Title from '../Title'

const Hero = () =>{
    
    return(
       
        <Container direction="column">
            <ContainerLogo><img src={"https://i.ibb.co/wdWdgQQ/white-logo.png"}/></ContainerLogo>
            <Title size="h4">RODRIGO ANDRADE, MARTINA FRANCO, NAYLA ARROYO LIZZIO</Title>
            <Button>START</Button>     
        </Container> 
    )

}


export default Hero