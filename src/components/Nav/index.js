import React from 'react'
import {List, Ul} from './styled'
import { Link, withRouter } from "react-router-dom";

const Nav = () =>{
    return(
    <nav>
        <Ul>
            <List><Link to="/">Home</Link></List>
            <List><Link to="/experiment">Experiment</Link></List>
            <List><Link to="/about">About</Link></List>
            <List><Link to="/profile">Profile</Link></List>
        </Ul>
    </nav>
    )
}

export default withRouter(Nav)