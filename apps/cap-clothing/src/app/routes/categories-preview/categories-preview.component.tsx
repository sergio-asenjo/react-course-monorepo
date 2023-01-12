import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const category = categoriesMap[title];
        return <CategoryPreview key={title} title={title} items={category} />;
      })}
    </>
  );
};

export default CategoriesPreview;
