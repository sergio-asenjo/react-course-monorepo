import { formatCurrency } from 'apps/cap-clothing/src/utils/number.utils';
import { IProduct } from '../../interfaces/IProduct';
import Button from '../button/button.component';

import './product-card.styles.scss';

export interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="flex-col">
      <div
        className="product-card flex-col"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <Button label="Add to cart" buttonType="shop" />
      </div>
      <div className="product-info flex-row">
        <span className="product-info__name">{name}</span>
        <span className="product-info__price">{formatCurrency(price)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
