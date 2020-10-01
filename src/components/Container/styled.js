import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};  
`

export default FlexContainer