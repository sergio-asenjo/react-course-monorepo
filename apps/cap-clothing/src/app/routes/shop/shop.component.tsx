import { useContext } from 'react';
import { ProductsContext } from '../../context/products.context';
import './shop.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-page">
      <h1>Shop Page</h1>
      <div className="items">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;