import { useDispatch, useSelector } from 'react-redux';

import Button from '../button/button.component';
import { addItemToCart } from '../../store/reducers/cart/cart.action';
import { selectCartItems } from '../../store/reducers/cart/cart.selector';
import { formatCurrency } from 'apps/cap-clothing/src/utils/number.utils';
import { IProduct } from '../../interfaces/IProduct';

import './product-card.styles.scss';

export interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
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
