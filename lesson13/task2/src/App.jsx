import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Contacts from './Contacts';
import Home from './Home';
import Products from './Products';
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
          <li className="navigation__item">
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            {' '}
            <Home />
          </Route>
          <Route path="/products">
            {' '}
            <Products />
          </Route>
          <Route path="/contacts">
            {' '}
            <Contacts />
          </Route>
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
