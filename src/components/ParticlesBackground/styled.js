import styled from 'styled-components'

const ParticlesCont = styled.div`
    position: ${(props) => (props.height ? "relative" : "absolute")};
    top: 0;
    z-index: -1;
    width: 100%;
    height: ${(props) => (props.height ? "200px" : "100vh")};
    position: ${(props) => (props.height ? "" : "fixed")};
`

export default ParticlesCont;