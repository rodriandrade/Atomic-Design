import React from 'react';
import { Loading, PrivateRoute } from '../Index'
import { Home, Experiment, About, Profile } from '../../pages/index';
import { useAuth0 } from "@auth0/auth0-react";
import { GlobalStyles } from '../globalStyles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
      
      <Router>
        <GlobalStyles />
          <Switch>
              
                <PrivateRoute path="/profile" component={Profile} />  
              <Route path="/about" component={About} />
              <Route path="/experiment" component={Experiment} />
              <Route path="/" exact component={Home} />
          </Switch>
      </Router>
  );
}

export default App;
