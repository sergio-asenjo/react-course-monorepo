import { useCallback } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/reducers/cart/cart.selector';

import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckout = useCallback(() => {
    navigate('/checkout');
  }, [])

  return (
    <div className="cart-dropdown flex-col">
      <div className="cart-items">
        {cartItems.length ? 
          (cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />))
          : (<span className="empty-message">Your cart is empty</span>)
        }
      </div>
      <Button buttonType="inverted" label="Go to Checkout" onClick={goToCheckout} />
    </div>
  );
};

export default CartDropdown;
