import React from 'react'

import ImgGradBack from './styled'


const GradientBackImg = ({children, ...props}) =>{

    return(
        <ImgGradBack src={props.src}>  </ImgGradBack>
    )
}

export default GradientBackImg;