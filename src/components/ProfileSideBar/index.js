import React from 'react';
import { Container, ProfilePicture } from './styled';

const ProfileSideBar = props =>{

    const { name, picture, email, nickname } = props.user;
    
    return(
            <Container>
                
                    <ProfilePicture src={picture}/>
                    <h2>{nickname}</h2>
                
            </Container>    
    )

}


export default ProfileSideBar