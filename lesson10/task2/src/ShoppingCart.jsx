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
      {
        id: '4',
        name: 'TV',
        price: 400,
      },
    ],
  };
  render() {
    console.log(this.props);
    const count = this.state.cartItems.length;
    return (
      <div className="column">
        <CartTitle userName={this.props.userName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
