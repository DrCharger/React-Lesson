import React from 'react';

const Item = ({ item }) => {
  return (
    <li className="products__list-item">
      <span className="products__item-name">{item.name}</span>
      <span className="products__item-price">{`$${item.price}`}</span>
    </li>
  );
};

export default Item;
