import React from 'react'
import {List, Ul} from './styled'
import { Link, withRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogOutButton from "../LogOutButton"
import LoginButton from "../LoginButton";

const Nav = () =>{

    const { isAuthenticated } = useAuth0();

    return(
    <nav>
        <Ul>
            <List><Link to="/">Home</Link></List>
            <List><Link to="/experiment">Experiment</Link></List>
            <List><Link to="/about">About</Link></List>
            <List><Link to="/profile">Profile</Link></List>
        </Ul>

        {isAuthenticated ? <LogOutButton /> : <LoginButton />}
        
    </nav>
    )
}

export default withRouter(Nav)