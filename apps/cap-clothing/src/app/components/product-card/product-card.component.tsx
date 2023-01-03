import { formatCurrency } from 'apps/cap-clothing/src/utils/number.utils';
import { IProduct } from '../../interfaces/IProduct';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';

import Button from '../button/button.component';

import './product-card.styles.scss';

export interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="flex-col">
      <div
        className="product-card flex-col"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <Button label="Add to cart" buttonType="shop" onClick={addProductToCart} />
      </div>
      <div className="product-info flex-row">
        <span className="product-info__name">{name}</span>
        <span className="product-info__price">{formatCurrency(price)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
