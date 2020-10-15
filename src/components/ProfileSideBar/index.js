import React from 'react';
import { Container, ProfilePicture, UserInfo } from './styled';

const ProfileSideBar = props =>{

    const { name, picture, email, nickname } = props.user;
    
    return(
            <Container>
                <UserInfo>
                    <ProfilePicture>
                        <img src={picture}></img>
                    </ProfilePicture>
                    <h2>{nickname}</h2>
                </UserInfo>
            </Container>    
    )

}


export default ProfileSideBar