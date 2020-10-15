import React from 'react';
import ParagraphText from './styled'
import { Button, Grid, Col, Container } from '../Index'

const Paragraph = ({children}) =>{
    return(
        <ParagraphText>{children}</ParagraphText>
    )
}
    

export default Paragraph