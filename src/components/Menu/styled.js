import styled from 'styled-components';

const StyledMenu = styled.div`
/*
  display: flex;
  flex-direction: column;
  justify-content: center;
  */
  /*background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75' viewBox='0 0 100 100'%3E%3Crect x='0' y='0' width='99' height='99' fill='%23000000'/%3E%3C/svg%3E");*/
  background-color: #000000f7;
  width: 100%;
  height: 100vh;
  text-align: left;
  /*padding: 2rem;*/
  position: absolute;
  transition: all 0.8s ease-in-out;
  position: fixed;
  z-index: 3;
  left: ${({ open }) => open ? '0' : '-100%'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

`;

const MenuContainer =styled.div `

  display: flex;
  position: absolute;
  left: 10%;
  height: 100vh;
  align-items: center;

`

export {StyledMenu, MenuContainer}