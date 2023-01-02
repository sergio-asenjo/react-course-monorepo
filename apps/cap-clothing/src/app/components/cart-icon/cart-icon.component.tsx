import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

import './cart-icon.styles.scss';

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="cart-icon flex-col" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
