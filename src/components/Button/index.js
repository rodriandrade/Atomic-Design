import React from 'react'
import Container from './styled'

const Button = ({children}) =>{
    console.log("click")
    return(
        <Container>
            {children}
        </Container>
    )
}

export default Button