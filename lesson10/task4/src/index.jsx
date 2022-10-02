import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './FilterableProductTable.jsx';
import { products } from './variables';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<FilterableProductTable products={products} />, rootElement);
