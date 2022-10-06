import React from 'react';
import User from './User';
import { Route, Switch, Link } from 'react-router-dom';

const Users = () => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/users/github">Github</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users/facebook">Facebook</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users/youtube">Youtube</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/users/:userId">
          <User />
        </Route>

        <Route path="/users">
          <span>Select a user please</span>
        </Route>
      </Switch>
    </div>
  );
};

export default Users;
