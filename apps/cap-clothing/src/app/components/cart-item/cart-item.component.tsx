import { memo } from 'react';

import './cart-item.styles.scss';

interface CartItemProps {
  cartItem: {
    imageUrl: string;
    price: number;
    name: string;
    quantity?: number;
  };
}

export const CartItem = memo(({ cartItem }: CartItemProps) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className="cart-item">
      <img
        src={imageUrl}
        alt="item"
      />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
});

export default CartItem;