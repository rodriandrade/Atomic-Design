import React from 'react'
import FlexContainer from './styled'

const Container = ({ children, ...props }) =>{
    return(
        <FlexContainer direction={props.direction}>
            {children}
        </FlexContainer>
    )
}

export default Container