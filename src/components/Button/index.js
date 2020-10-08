import React from 'react'
import ButtonApp from './styled'

const Button = ({children}) =>{
    console.log("click")
    return(
        <ButtonApp type="button">{children}</ButtonApp>
    )
}

export default Button


