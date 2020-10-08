import React from "react";
import Container from '../Container'
const loading =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <Container direction="column">
    <div className="spinner">
      <img src={loading} alt="Loading" />
    </div>
  </Container>
);

export default Loading;
