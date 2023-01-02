import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

export const CartDropdown = () => {

  return (
    <div className="cart-dropdown flex-col">
      <div className="cart-items" />
      <Button buttonType="inverted" label="Go to Checkout" />
    </div>
  );
}

export default CartDropdown;