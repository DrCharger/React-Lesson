import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import User from './User';

const App = () => {
  return (
    <div className="page__content">
      <BrowserRouter>
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/users/github">Github</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/facebook">Facebook</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/users/:userId">
            <User />
          </Route>

          <Route path="/">
            <span>Select a user please</span>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
