import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const rootElem = document.querySelector('#root');

const elem = <h1 className="title">Todo List</h1>;

createRoot(rootElem).render(elem);
