import React from 'react';
import { Blockquote, Form, Inner, Nav } from '../Index'
import { Home, Experiment, About, Profile } from '../../pages/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/profile">
                  <Profile />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
              <Route path="/experiment">
                  <Experiment />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
