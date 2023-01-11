import { formatCurrency } from 'apps/cap-clothing/src/utils/number.utils';
import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../context/cart.context';

import './checkout.styles.scss';

export const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    reduceItemFromCart,
    removeItemFromCart,
    cartTotal,
  } = useContext(CartContext);

  return (
    <>
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">Product</div>
          <div className="header-block">Description</div>
          <div className="header-block">Quantity</div>
          <div className="header-block">Price</div>
          <div className="header-block">Remove</div>
        </div>
        <div className="flex-col">
          {cartItems.length === 0 ? (
            <span className="empty-message">Your cart is empty!</span>
          ) : (
            cartItems.map((cartItem) => (
              <CheckoutItem
                key={cartItem.id}
                cartItem={cartItem}
                removeItem={removeItemFromCart}
                increaseQuantity={addItemToCart}
                decreaseQuantity={reduceItemFromCart}
              />
            ))
          )}
        </div>
      </div>
      <div className="flex-col">
        <span className="total">TOTAL: {formatCurrency(cartTotal)}</span>
      </div>
    </>
  );
};

export default Checkout;
