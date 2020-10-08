import React from 'react';
import { Container, ProfilePicture } from './styled';

const ProfileSideBar = props =>{

    const { name, picture, email, nickname } = props.user;
    
    return(
            <Container>
                <div>
                    <ProfilePicture>
                        <img src={picture}></img>
                    </ProfilePicture>
                    <h2>{nickname}</h2>
                </div>
            </Container>    
    )

}


export default ProfileSideBar