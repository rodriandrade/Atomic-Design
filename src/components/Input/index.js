import React from 'react';
import InputBox from './styled'
import { Button, Grid, Col, Container } from '../Index'

const Input = props =>{
    return(
        <InputBox placeholder={props.placeholder}></InputBox>
    )
}
    

export default Input