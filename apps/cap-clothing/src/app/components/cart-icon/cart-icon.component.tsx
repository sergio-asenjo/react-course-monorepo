import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/reducers/cart/cart.selector';
import { setIsCartOpen } from '../../store/reducers/cart/cart.action';

import './cart-icon.styles.scss';

export const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  function toggleCart() {
    dispatch(setIsCartOpen(!isCartOpen));
  }

  return (
    <div className="cart-icon flex-col" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
