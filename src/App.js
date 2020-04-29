import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ReposContainer from './components/ReposContainer';
import CommitsContainer from './components/CommitsContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/repos">
          <ReposContainer />
        </Route>

        <Route path="/:org/:repo/">
          <CommitsContainer />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
