import React, { Component } from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
      {
        id: '3',
        name: 'iPhone 12',
        price: 1199,
      },
    ],
  };
  render() {
    const count = this.state.cartItems.length;
    const sum = this.state.cartItems.reduce((acc, { price }) => acc + price, 0);
    return (
      <div className="column">
        <CartTitle userName={this.props.userData.firstName} count={count} />
        <ProductsList cartItems={this.state.cartItems} sum={sum} />
      </div>
    );
  }
}

export default ShoppingCart;
