import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction}; 
    width: 100%; 
    justify-content: center;
    align-items: center;
`

export default FlexContainer