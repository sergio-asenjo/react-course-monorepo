import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces/IProduct';

import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

interface CategoryPreviewProps {
  title: string;
  items: IProduct[];
}

export const CategoryPreview = ({ title, items }: CategoryPreviewProps) => {
  return (
    <div className="category-preview flex-col">
      <h2>
        <Link className="category-link" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {items
          .filter((_, index) => index < 4)
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        }
      </div>
    </div>
  );
};

export default CategoryPreview;
