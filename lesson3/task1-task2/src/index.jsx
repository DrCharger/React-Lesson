import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import './search.scss';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Search name="Bob" />, rootElement);
