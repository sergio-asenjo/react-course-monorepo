import { ChangeEvent } from 'react';
import './search-box.styles.scss';

interface IProps {
  placeholder: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ placeholder, onChangeHandler }: IProps) => {
  return (
    <input
      className="search-input"
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
