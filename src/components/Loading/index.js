import React from "react";
import LoadingContainer from './styled'
import Container from '../Container'
const loading =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <Container>
    <LoadingContainer>
      <img src={loading} alt="Loading" />
    </LoadingContainer>
  </Container>
);

export default Loading;
