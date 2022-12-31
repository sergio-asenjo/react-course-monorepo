import { useContext } from 'react';
import { formatCurrency } from 'apps/cap-clothing/src/utils/number.utils';
import { ProductsContext } from '../../context/products.context';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-page">
      <h1>Shop Page</h1>
      <div className="items">
        {products.map(({ id, name, price }) => (
          <p key={id}>{name} {formatCurrency(price)}</p>
        ))}                
      </div>
    </div>
  );
};

export default Shop;