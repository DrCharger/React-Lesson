import React from 'react';
import Item from './Item';

const ProductsList = ({ cartItems }) => {
  const total = this.props.cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="products">
      <ul className="products__list">
        {cartItems.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
      <div className="products__total">{`Total: $${total}`}</div>
    </div>
  );
};

export default ProductsList;
