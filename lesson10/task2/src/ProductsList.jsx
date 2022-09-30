import React from 'react';
import Item from './Item';

const ProductsList = ({ cartItems, sum }) => {
  console.log(sum);
  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
      <div className="products__total">{`Total: $${sum}`}</div>
    </div>
  );
};

export default ProductsList;
