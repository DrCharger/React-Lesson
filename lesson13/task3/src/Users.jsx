import React from 'react';
import User from './User';
import { Route, Switch, Link } from 'react-router-dom';

const Users = ({ match }) => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.url}/:productId`} component={User} />
        <Route path={match.url}>
          <span>Select a user please</span>
        </Route>
      </Switch>
    </div>
  );
};

export default Users;
