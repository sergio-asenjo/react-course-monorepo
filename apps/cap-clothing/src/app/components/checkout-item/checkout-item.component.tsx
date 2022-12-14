import { ICartItem } from '../../interfaces/ICartItem';

import './checkout-item.styles.scss';

interface CheckoutItemProps {
  cartItem: ICartItem;
  removeItem: (item: ICartItem) => void;
  increaseQuantity: (item: ICartItem) => void;
  decreaseQuantity: (item: ICartItem) => void;
}

export const CheckoutItem = ({
  cartItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
}: CheckoutItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="co-item flex-row">
      <img src={imageUrl} alt="item" />
      <div className="co-item__name">{name}</div>
      <div className="co-item__quantity">
        <span className="symbol" onClick={() => decreaseQuantity(cartItem)}>
          &lt;
        </span>
        &nbsp; {quantity} &nbsp;
        <span className="symbol" onClick={() => increaseQuantity(cartItem)}>
          &gt;
        </span>
      </div>
      <div className="co-item__price">{price}</div>
      <div className="co-item__remove" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
