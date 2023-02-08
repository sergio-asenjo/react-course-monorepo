import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from 'apps/cap-clothing/src/utils/number.utils';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/reducers/cart/cart.selector';
import {
  removeItemFromCart,
  reduceItemFromCart,
  addItemToCart,
} from '../../store/reducers/cart/cart.action';

import './checkout.styles.scss';
import PaymentForm from '../../components/payment-form/payment-form.component';

export const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

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
                removeItem={() => dispatch(removeItemFromCart(cartItems, cartItem))}
                increaseQuantity={() => dispatch(addItemToCart(cartItems, cartItem))}
                decreaseQuantity={() => dispatch(reduceItemFromCart(cartItems, cartItem))}
              />
            ))
          )}
        </div>
      </div>
      <div className="flex-col">
        <span className="total">TOTAL: {formatCurrency(cartTotal)}</span>
      </div>
      <PaymentForm />
    </>
  );
};

export default Checkout;
