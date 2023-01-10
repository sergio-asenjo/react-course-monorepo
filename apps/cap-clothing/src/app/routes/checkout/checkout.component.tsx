import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../context/cart.context';

import './checkout.styles.scss';

export const Checkout = () => {
  const { cartItems, addItemToCart, reduceItemFromCart, removeItemFromCart } = useContext(CartContext);

  return (
    <div className="checkout-page">
      <div className="checkout-header flex-row">
        <div className="header-block">
          Product
        </div>
        <div className="header-block">
          Description
        </div>
        <div className="header-block">
          Quantity
        </div>
        <div className="header-block">
          Price
        </div>
        <div className="header-block">
          Remove
        </div>
      </div>
      <div className="flex-col">
        {cartItems.map((cartItem) => (
          <CheckoutItem 
            key={cartItem.id}
            cartItem={cartItem}
            removeItem={removeItemFromCart}
            increaseQuantity={addItemToCart}
            decreaseQuantity={reduceItemFromCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
