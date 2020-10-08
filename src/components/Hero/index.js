import { logRoles } from '@testing-library/react';
import React from 'react';
import { Logo, ContainerLogo} from './styled';
import { Button, Container } from '../Index';

const Hero = () =>{
    
    return(
       
        <Container direction="column">
            <ContainerLogo><img src={"https://i.ibb.co/wdWdgQQ/white-logo.png"}/></ContainerLogo>
            <h4>RODRIGO ANDRADE, MARTINA FRANCO, NAYLA ARROYO LIZZIO</h4>
            <Button>START</Button>     
        </Container> 
    )

}


export default Hero