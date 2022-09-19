import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const rootElement = document.querySelector('#root');

const elem = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I'm learning React</div>
  </div>
);

createRoot(rootElement).render(elem);
