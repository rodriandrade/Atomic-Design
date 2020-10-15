import React from 'react';
import TitleText from './styled'
import { Button, Grid, Col, Container } from '../Index'

const Title = ({children, ...props}) =>{
    const { type, size, primary, align, margin } = props;
    return(
        <TitleText type={type} size={size} primary={primary} align={align} margin={margin}>
            {children}
        </TitleText>
    )
}
    

export default Title