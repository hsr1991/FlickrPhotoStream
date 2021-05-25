import './App.css';
import { Home } from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React, { Suspense } from 'react';

React.lazy(() => import('./Components/Home'))

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<h2>Loading posts... </h2>}>
            <Home />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
