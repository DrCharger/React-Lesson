import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

const elem = (
  <div class="greeting">
    <div class="greeting__title">Hello, world!</div>
    <div class="greeting__text">I'm learning React</div>
  </div>
);

ReactDOM.render(elem, rootElement);

// renderGreeting(rootElement);
