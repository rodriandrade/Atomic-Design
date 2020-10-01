import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./components/auth0-provider-with-history";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);
