import React from 'react'
import Container from './styled'

const Button = ({children, ...props}) =>{
    const { state, margin } = props;
    return(
        <Container state={state} margin={margin}>
            {children}
        </Container>
    )
}

export default Button