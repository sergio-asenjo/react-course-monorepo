import './category-box.styles.scss';

interface CategoryBoxProps {
  title: string;
  imageUrl: string;
}

export const CategoryBox = ({ title, imageUrl }: CategoryBoxProps) => {
  return (
    <div className="category flex-col">
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
