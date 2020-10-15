import React from 'react';
import TitleText from './styled'
import { Button, Grid, Col, Container } from '../Index'

const Title = ({children, ...props}) =>{
    const { type, size, primary, align } = props;
    return(
        <TitleText type={type} size={size} primary={primary} align={align}>
            {children}
        </TitleText>
    )
}
    

export default Title