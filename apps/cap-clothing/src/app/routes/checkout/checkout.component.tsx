import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import './checkout.styles.scss';

export const Checkout = () => {
  const { cartItems, addItemToCart, reduceItemFromCart } = useContext(CartContext);

  return (
    <div className="checkout-page" >
      I am the checkout page
      <div className="flex-col">
        {cartItems.map(cartItem =>
          <div key={cartItem.id}>
            <h2>{cartItem.name}</h2>
            <h3>{cartItem.quantity}</h3>
            <span onClick={() => reduceItemFromCart(cartItem)}>Decrement</span>
            <span onClick={() => addItemToCart(cartItem)}>Increment</span>
          </div>
        )}
      </div>
    </div>
  )
};

export default Checkout;