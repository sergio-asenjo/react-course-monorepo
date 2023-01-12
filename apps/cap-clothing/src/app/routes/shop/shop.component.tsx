import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import './shop.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-page">
      {Object.keys(categoriesMap).map((key) => {
        return (
          <div key={key}>
            <h1>{key}</h1>
            <div className="items">
              {categoriesMap[key].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
