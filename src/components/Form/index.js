import React from 'react';
import {Input, TextArea } from './styled'
import { Button, Grid, Col, Container } from '../Index'

const Form = () =>{
    return(

        <Container direction="column">
 
                <Input placeholder="Name" />
                <Input placeholder="Subject"/>
                <TextArea placeholder="Text"/>
                <Button>Submit</Button>

        </Container>

    )
}
    

export default Form;