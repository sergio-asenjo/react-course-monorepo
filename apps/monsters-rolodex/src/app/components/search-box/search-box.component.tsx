import { Component } from 'react';
import './search-box.styles.scss';

interface IProps {
  placeholder: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class SearchBox extends Component<IProps> {

  override render() {
    const { placeholder, onChangeHandler } = this.props;

    return (
      <input
        className="search-input"
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;