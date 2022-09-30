import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends Component {
  state = {
    prods: [
      {
        id: '01',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '02',
        name: 'iPad Pro',
        price: 799,
      },
      {
        id: '03',
        name: 'iPhone 12',
        price: 1199,
      },
    ],
  };
  render() {
    const count = this.state.prods.length;
    const sum = this.state.prods.reduce((acc, { price }) => acc + price, 0);
    return (
      <div className="column">
        <CartTitle userName={this.props.userData.firstName} count={count} />
        <ProductsList cartItems={this.state.prods} sum={sum} />
      </div>
    );
  }
}

export default ShoppingCart;
