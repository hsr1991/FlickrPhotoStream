import './App.css';
import { Home } from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
