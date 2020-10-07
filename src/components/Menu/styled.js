import styled from 'styled-components';

export const StyledMenu = styled.nav`
/*
  display: flex;
  flex-direction: column;
  justify-content: center;
  */
  background: yellow;
  width: 100%;
  height: 100vh;
  text-align: left;
  /*padding: 2rem;*/
  position: absolute;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(-5%)' : 'translateX(-150%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

`;