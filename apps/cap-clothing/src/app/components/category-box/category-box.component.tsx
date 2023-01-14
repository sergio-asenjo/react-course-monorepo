import { useNavigate } from 'react-router-dom';

import './category-box.styles.scss';

interface CategoryBoxProps {
  title: string;
  imageUrl: string;
  route: string;
}

export const CategoryBox = ({ title, imageUrl, route }: CategoryBoxProps) => {
  const navigate = useNavigate();

  const onNavitageHandler = () => {
    navigate(route);
  };

  return (
    <div className="category flex-col" onClick={onNavitageHandler}>
      <div
        className="category__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category__body flex-col">
        <h2 className="category__title">{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryBox;
