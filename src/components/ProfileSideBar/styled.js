import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    background-color: #070707;
    place-content: center;
    display: flex;
    border-right:1px solid grey;

    div{ 
        position: fixed; 
        display: flex;
        flex-flow: column;
        align-items: center;
    }
`

const ProfilePicture = styled.div`
    border-radius: 50%;
    width: 230px;
    height: 230px;
    overflow: hidden;
    z-index: 0;
`


export { Container, ProfilePicture }