import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown flex-col">
      <div className="cart-items">
        {cartItems.length ? 
          (cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />))
          : (<span className="empty-message">Your cart is empty</span>)
        }
      </div>
      <Button buttonType="inverted" label="Go to Checkout" />
    </div>
  );
};

export default CartDropdown;
