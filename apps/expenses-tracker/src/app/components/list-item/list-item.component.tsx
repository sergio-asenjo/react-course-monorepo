import { FC } from "react";

import './list-item.styles.scss';

export interface ListItemProps {
  item: {
    name: string;
    price: number;
  }
};

export const ListItem: FC<ListItemProps> = ({ item }) => {
  const { name, price } = item;

  return (
    <div className="item flex row">
      <p className="name">{name}</p>
      <p className="price">${price}</p>
    </div>
  )
}

export default ListItem;