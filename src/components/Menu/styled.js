import styled from 'styled-components';

export const StyledMenu = styled.nav`
/*
  display: flex;
  flex-direction: column;
  justify-content: center;
  */
  /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='99' height='99' fill='%23000000'/%3E%3C/svg%3E");*/
  background-color: #000;
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