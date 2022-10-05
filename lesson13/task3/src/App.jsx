import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import PageNotFound from './PageNotFound';
import Users from './Users';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            {' '}
            <Home />
          </Route>
          <Route path="/users" component={Users} />

          <Route>
            {' '}
            <PageNotFound path="*" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
